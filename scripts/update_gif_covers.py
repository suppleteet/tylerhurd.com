import re
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MEDIA_DIR = Path("C:/Users/tyler/Videos/Captures")
PROJECTS = {
    "firstencounters": "work/first-encounters",
    "theworldbeyond": "work/the-world-beyond",
    "supernatural": "work/supernatural",
    "kinectparty": "work/kinect-party",
    "happyactiontheater": "work/kinect-party",
    "pollypocket": "work/polly-pocket",
    "chocolate": "work/chocolate-vr",
    "oldfriend": "work/old-friend-vr",
    "beachbodybros": "work/beach-body-bros",
    "chorus": "work/chorus-vr",
    "butts": "work/butts-vr",
    "actuator": "work/actuator",
}


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def find_project_for_gif(name: str) -> str | None:
    key = slugify(name.replace("card", "").replace("cover", ""))
    for token, path in PROJECTS.items():
        if token in key:
            return path
    return None


def update_site_js(covers: dict[str, Path]) -> list[str]:
    js_path = ROOT / "assets/js/site.js"
    text = js_path.read_text(encoding="utf-8")
    logs: list[str] = []
    for project_path, video_path in covers.items():
        rel = video_path.as_posix()
        project_prefix = f"{project_path}/"
        hover_exists = re.search(rf"hoverVideo:\s*'[^']*{re.escape(project_prefix)}[^']*'", text)
        image_pattern = rf"(?m)^(?P<indent>\s*)image:\s*'{re.escape(project_prefix)}[^']*'\s*,\s*$"

        def image_repl(m: re.Match) -> str:
            indent = m.group("indent")
            if hover_exists or not rel:
                logs.append(f"{project_path}: image cleared for video cover")
                return f"{indent}image: '',"
            logs.append(f"{project_path}: image cleared for video cover")
            logs.append(f"{project_path}: added hoverVideo {rel}")
            return f"{indent}image: '',\n{indent}hoverVideo: '{rel}',"

        text, count = re.subn(image_pattern, image_repl, text, count=1)
        if count == 0:
            logs.append(f"{project_path}: image line not found to update")
    js_path.write_text(text, encoding="utf-8")
    return logs


def main() -> None:
    if not MEDIA_DIR.exists():
        raise SystemExit(f"MP4 folder not found: {MEDIA_DIR}")

    covers: dict[str, Path] = {}
    removed_covers: list[str] = []
    for video in MEDIA_DIR.glob("*.mp4"):
        project_dir = find_project_for_gif(video.stem)
        if not project_dir:
            continue
        project_path = ROOT / project_dir
        project_path.mkdir(parents=True, exist_ok=True)
        cover_path = project_path / "cover.mp4"
        shutil.copy2(video, cover_path)
        cover_jpg = project_path / "cover.jpg"
        if cover_jpg.exists():
            cover_jpg.unlink()
            removed_covers.append(str(project_dir))
        covers[project_dir] = cover_path

    if covers:
        logs = update_site_js(covers)
        print(f"Updated {len(covers)} cover video(s).")
        for line in logs:
            print(f"- {line}")
        if removed_covers:
            print("Removed cover.jpg for:")
            for item in removed_covers:
                print(f"  - {item}")
    else:
        print("No matching MP4s found.")


if __name__ == "__main__":
    main()
