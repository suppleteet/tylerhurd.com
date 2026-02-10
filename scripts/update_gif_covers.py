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


def update_site_js(covers: dict[str, Path]) -> None:
    js_path = ROOT / "assets/js/site.js"
    text = js_path.read_text(encoding="utf-8")
    for project_path, video_path in covers.items():
        rel = video_path.as_posix()
        project_prefix = f"{project_path}/"
        pattern = rf"(image:\s*')({re.escape(project_prefix)}[^']+)(')"
        match = re.search(pattern, text)
        if match:
            current_image = match.group(2)
            static_candidates = [
                f"{project_prefix}cover.jpg",
                f"{project_prefix}cover.png",
                f"{project_prefix}cover.webp",
                f"{project_prefix}cover.svg",
            ]
            static_image = next((p for p in static_candidates if (ROOT / p).exists()), current_image)

            def image_repl(m: re.Match) -> str:
                return f"{m.group(1)}{static_image}{m.group(3)}"

            text = re.sub(pattern, image_repl, text, count=1)

        hover_exists = re.search(rf"hoverVideo:\s*'[^']*{re.escape(project_prefix)}[^']*'", text)
        if not hover_exists and rel:
            hover_pattern = rf"(image:\s*'{re.escape(project_prefix)}[^']*'\s*\n)"

            def hover_repl(m: re.Match) -> str:
                return f"{m.group(1)}    hoverVideo: '{rel}',\n"

            text = re.sub(hover_pattern, hover_repl, text, count=1)
    js_path.write_text(text, encoding="utf-8")


def main() -> None:
    if not MEDIA_DIR.exists():
        raise SystemExit(f"MP4 folder not found: {MEDIA_DIR}")

    covers: dict[str, Path] = {}
    for video in MEDIA_DIR.glob("*.mp4"):
        project_dir = find_project_for_gif(video.stem)
        if not project_dir:
            continue
        project_path = ROOT / project_dir
        project_path.mkdir(parents=True, exist_ok=True)
        cover_path = project_path / "cover.mp4"
        shutil.copy2(video, cover_path)
        covers[project_dir] = cover_path

    if covers:
        update_site_js(covers)
        print(f"Updated {len(covers)} cover video(s).")
    else:
        print("No matching MP4s found.")


if __name__ == "__main__":
    main()
