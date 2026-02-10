const projects = [
  {
    title: 'First Encounters',
    year: 2023,
    role: 'Tech-Artist / Character TD',
    category: 'Meta Spatial Computing',
    description: 'Quest 3 launch experience focused on first-contact spatial interactions.',
    hoverVideo: 'work/first-encounters/cover.mp4',
    media: [
      'work/first-encounters/media/FirstEncounters1.webp',
      'work/first-encounters/media/FirstEncounters2.webp',
      'work/first-encounters/media/FirstEncounters3.webp',
      'work/first-encounters/media/FirstEncounters4.webp',
      'work/first-encounters/media/FirstEncounters5.webp',
    ],
  },
  {
    title: 'The World Beyond',
    year: 2020,
    role: 'Tech-Artist / Character TD',
    category: 'Meta Spatial Computing',
    description: 'AR title exploring mixed reality storytelling and interaction.',
    image: 'work/the-world-beyond/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://youtu.be/DB37xEBHQzo',
        title: 'The World Beyond trailer',
      },
      'work/the-world-beyond/cover.jpg',
    ],
  },
  {
    title: 'Supernatural',
    year: 2019,
    role: 'Design Contributor',
    category: 'Meta Spatial Computing',
    description: 'Fitness experience with movement-driven choreography and flow.',
    image: 'work/supernatural/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://youtu.be/dz_2h6vaYKQ',
        title: 'Supernatural trailer',
      },
    ],
  },
  {
    title: 'Oculus Medium',
    year: 2019,
    role: 'Developer In Residence',
    category: 'Meta Spatial Computing',
    description: 'VR sculpting tool. Helped develop export pipelines and used it for Beach Body Bros.',
    hoverVideo: 'work/oculus-medium/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://youtu.be/KvlaY-lEILU',
        title: 'Oculus Medium trailer',
      },
    ],
  },
  {
    title: 'Old Friend',
    year: 2016,
    role: 'Creator / Director',
    category: 'Originals',
    description: 'Emotional, character-forward VR narrative.',
    image: '',
    hoverVideo: 'work/old-friend-vr/cover.mp4',
    media: [
      'work/old-friend-vr/cover.jpg',
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/gyLAE7aR92c',
        title: 'Old Friend VR trailer',
      },
      'work/old-friend-vr/media/OldFriendScreen1.jpg',
      'work/old-friend-vr/media/OldFriendScreen2.jpg',
      'work/old-friend-vr/media/OldFriendScreen3.jpg',
      'work/old-friend-vr/media/OldFriendScreen4.jpg',
      'work/old-friend-vr/media/OldFriendScreen5.jpg',
      'work/old-friend-vr/media/OldFriendScreen6.jpg',
    ],
    detailsPath: 'work/old-friend-vr/details.html',
  },

  {
    title: 'Chocolate',
    year: 2017,
    role: 'Creator / Director',
    category: 'Originals',
    description: 'Surreal animated VR short with painterly motion.',
    image: '',
    hoverVideo: 'work/chocolate-vr/cover.mp4',
    media: [
      'work/chocolate-vr/cover.jpg',
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/_r5pvZlW2pk',
        title: 'Chocolate VR trailer',
      },
      'work/chocolate-vr/media/ChocolateVRScreenShot1.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot2.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot3.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot4.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot5.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot6.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot7.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot8.jpg',
      'work/chocolate-vr/media/ChocolateVRScreenShot9.jpg',
    ],
    detailsPath: 'work/chocolate-vr/details.html',
  },

  {
    title: 'Beach Body Bros',
    year: 2018,
    role: 'Creator / Director',
    category: 'Originals',
    description: 'Character comedy with stylized performance capture.',
    hoverVideo: 'work/beach-body-bros/cover.mp4',
    media: [
      'work/beach-body-bros/cover.jpg',
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/8HZ_J62KgKU',
        title: 'Beach Body Bros trailer',
      },
      'work/beach-body-bros/media/BBB_Screenshot1.jpg',
      'work/beach-body-bros/media/BBB_Screenshot2.jpg',
      'work/beach-body-bros/media/BBB_Screenshot3.jpg',
      'work/beach-body-bros/media/BBB_Screenshot4.jpg',
      'work/beach-body-bros/media/BBB_Screenshot5.jpg',
    ],
    detailsPath: 'work/beach-body-bros/details.html',
  },

  {
    title: 'Chorus',
    year: 2017,
    role: 'Creator / Director',
    category: 'Originals',
    description: 'Music-driven animated VR experience.',
    hoverVideo: 'work/chorus-vr/cover.mp4',
    media: [
      'work/chorus-vr/cover.jpg',
      {
        type: 'embed',
        src: 'https://youtu.be/nnfrROjKHaM',
        title: 'Chorus VR trailer',
      },
      'work/chorus-vr/media/ChorusVRScreenshot1.jpg',
      'work/chorus-vr/media/ChorusVRScreenshot2.jpg',
      'work/chorus-vr/media/ChorusVRScreenshot3.jpg',
      'work/chorus-vr/media/ChorusVRScreenshot4.jpg',
    ],
    detailsPath: 'work/chorus-vr/details.html',
  },

  {
    title: 'BUTTS VR',
    year: 2014,
    role: 'Creator / Director',
    category: 'Originals',
    description: 'Physically based, character-driven VR experience.',
    hoverVideo: 'work/butts-vr/cover.mp4',
    media: [
      'work/butts-vr/cover.jpg',
      'work/butts-vr/media/BUTTSScreen1.jpg',
      'work/butts-vr/media/BUTTSScreen2.jpg',
      'work/butts-vr/media/BUTTSScreen3.jpg',
      'work/butts-vr/media/BUTTSScreen4.jpg',
      'work/butts-vr/media/BUTTSScreen5.jpg',
    ],
    detailsPath: 'work/butts-vr/details.html',
  },

  {
    title: 'Actuator',
    year: 2019,
    role: 'Creator / Developer',
    category: 'Originals',
    description: 'Real-time, physically based puppeteering workflow for VR characters.',
    hoverVideo: 'work/actuator/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/moYfppZzf2c',
        title: 'Actuator demo',
      },
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/Sib6Cx9knns',
        title: 'Actuator demo 2',
      },
      'work/actuator/cover.jpg',
    ],
    detailsPath: 'work/actuator/details.html',
  },
  {
    title: 'Polly Pocket',
    year: 2013,
    role: 'Solo 3D Animator / Character TD',
    category: 'Advertising',
    description: 'Solo 3D animation, character TD work for Polly, camera, and timing.',
    image: '',
    hoverVideo: 'work/polly-pocket/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://player.vimeo.com/video/62657901',
        title: 'Polly Pocket',
      },
    ],
  },

  {
    title: 'Sony PlayStation 4',
    year: 2014,
    role: 'Freelance Senior Animator / Character TD',
    category: 'Advertising',
    description: 'Animation and pipeline work at The Mill.',
    image: 'work/sony-playstation-4/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube.com/embed/_B8PK-eg2QY',
        title: 'Sony PlayStation 4',
      },
    ],
  },
  {
    title: 'Froot Loops',
    year: 2013,
    role: 'Freelance Senior Animator / Character TD',
    category: 'Advertising',
    description: 'Character animation at Nathan Love.',
    image: '',
    hoverVideo: 'work/froot-loops/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://player.vimeo.com/video/65061922',
        title: 'Froot Loops',
      },
    ],
  },
  {
    title: "Uncle Ben's",
    modalTitle: "Uncle Ben's, Teach Your Children",
    year: 2014,
    role: 'Sole Animator / Character TD',
    category: 'Advertising',
    description: "Sole animator and character TD for the Uncle Ben's spot.",
    image: 'work/uncle-bens/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://vimeo.com/125635156',
        title: "Uncle Ben's, Teach Your Children",
      },
    ],
  },
  {
    title: 'Happy Action Theater',
    year: 2012,
    role: 'Senior Animator / Character TD',
    category: 'Shipped Games',
    description: '(AKA Kinect Party) Kinect based mini-games, character animation and effects work.',
    image: '',
    hoverVideo: 'work/kinect-party/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://youtu.be/YdNnVqvXk2Y',
        title: 'Happy Action Theater',
      },
    ],
  },
  {
    title: 'Once Upon A Monster',
    year: 2011,
    role: 'Senior Animator / Character TD',
    category: 'Shipped Games',
    description: 'Kinect-based character performance and animation support.',
    hoverVideo: 'work/once-upon-a-monster/cover.mp4',
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube.com/watch?v=Vp9Ew73iWhQ',
        title: 'Once Upon A Monster trailer',
      },
      'work/once-upon-a-monster/cover.jpg',
    ],
  },
  {
    title: 'Costume Quest',
    year: 2010,
    role: 'Senior Animator / Character TD',
    category: 'Shipped Games',
    description: 'Stylized character animation and rigging.',
    image: 'work/costume-quest/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube.com/watch?v=p-xYP8krxxQ',
        title: 'Costume Quest trailer',
      },
      'work/costume-quest/cover.jpg',
    ],
  },
  {
    title: 'Brutal Legend',
    year: 2009,
    role: 'Senior Animator / Character TD',
    category: 'Shipped Games',
    description: 'Character animation and tooling in a large-scale action game.',
    image: 'work/brutal-legend/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://www.youtube.com/watch?v=apbgshuBe6M',
        title: 'Brutal Legend trailer',
      },
      'work/brutal-legend/cover.jpg',
    ],
  },
  {
    title: 'Psychonauts',
    year: 2005,
    role: 'Senior Animator / Character TD',
    category: 'Shipped Games',
    description: 'Animated, modeled, and rigged characters; built tools in Maya.',
    image: 'work/psychonauts/cover.jpg',
    media: [
      {
        type: 'embed',
        src: 'https://youtu.be/aDbDShqvc_o',
        title: 'Psychonauts trailer',
      },
      'work/psychonauts/cover.jpg',
    ],
  },
];

const projectGrid = document.getElementById('project-grid');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalMeta = document.getElementById('modal-meta');
const modalDetails = document.getElementById('modal-details');
const mediaStrip = document.getElementById('modal-media-strip');
const closeButton = document.querySelector('.modal-close');
const backdrop = document.querySelector('.modal-backdrop');
const prevButton = document.querySelector('.media-nav.prev');
const nextButton = document.querySelector('.media-nav.next');
const motionSettings = {
  duration: 900,
  y: -18,
  scale: 1.12,
  rotMax: 2.5,
  z: 90,
};
const detailsCache = new Map();
let detailsRequestId = 0;

const elastic = (x) => {
  if (x === 0 || x === 1) return x;
  const c4 = (2 * Math.PI) / 3;
  return Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

const stopMediaPlayback = () => {
  if (!mediaStrip) return;
  mediaStrip.querySelectorAll('video').forEach((video) => {
    video.pause();
  });
  mediaStrip.querySelectorAll('iframe').forEach((frame) => {
    frame.dataset.src = frame.src;
    frame.src = 'about:blank';
  });
};

const pauseInlineVideos = () => {
  if (!mediaStrip) return;
  mediaStrip.querySelectorAll('video').forEach((video) => {
    video.pause();
  });
};

let scrollStopTimer;
let programmaticScroll = false;
const resetMediaScroll = () => {
  if (!mediaStrip) return;
  programmaticScroll = true;
  mediaStrip.style.scrollBehavior = 'auto';
  mediaStrip.scrollLeft = 0;
  mediaStrip.scrollTo({ left: 0, behavior: 'auto' });
  window.setTimeout(() => {
    mediaStrip.scrollLeft = 0;
    mediaStrip.style.scrollBehavior = '';
    programmaticScroll = false;
  }, 60);
};

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

function buildProjectCard(project) {
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'project-card reveal';
  const rotation = (Math.random() * 6 - 3).toFixed(2);
  card.style.setProperty('--rot', rotation);
  const slug = project.slug || slugify(project.title);
  project.slug = slug;
  card.id = `project-${slug}`;
  card.setAttribute('data-project', slug);
  const titleHtml = `<div class="project-title">${project.title}</div>`;
  const imageHtml = project.image
    ? `<img src="${project.image}" alt="${project.title} cover" />`
    : '';
  const showVideoOnly = !project.image && project.hoverVideo;
  const videoHtml = showVideoOnly
    ? `<video class="card-video" muted loop playsinline preload="auto" autoplay src="${project.hoverVideo}"></video>`
    : '';
  card.innerHTML = `${imageHtml}${videoHtml}${titleHtml}`;
  const img = card.querySelector('img');
  if (img) {
    img.dataset.static = project.image;
    if (project.hoverImage) {
      img.dataset.hover = project.hoverImage;
    }
  }
  const cardVideo = card.querySelector('.card-video');
  if (cardVideo) {
    card.classList.add('has-video-only');
    cardVideo.addEventListener('canplay', () => {
      cardVideo.play().catch(() => {});
    });
  }
  card.addEventListener('click', () => {
    history.replaceState(null, '', `#project-${slug}`);
    openModal(project);
  });
  return card;
}

function renderProjects() {
  if (!projectGrid) return;
  const categories = [
    { id: 'Originals', title: 'Originals' },
    { id: 'Meta Spatial Computing', title: 'Meta Spatial Computing' },
    { id: 'Shipped Games', title: 'Shipped Games' },
    { id: 'Advertising', title: 'Advertising' },
  ];
  const vrOrder = [
    'Old Friend VR',
    'Chocolate VR',
    'Beach Body Bros',
    'Chorus VR',
    'BUTTS VR',
    'Actuator',
  ];

  const categoryDescriptions = {
    Originals:
      'Original VR experiences I designed and created solo or with small teams, short music video format, lots of festival premieres and a few awards.',
    'Meta Spatial Computing':
      '<strong>[NOTE: My R&amp;D prototypes were under NDA]</strong>  These are a few shipped products I contributed to.',
    Advertising:
      'A few select works during 2 years freelancing on advertisements in NYC.',
    'Shipped Games':
      'Character TD / Animator for 9 years at Double Fine Productions.',
  };

  categories.forEach((category) => {
    const items = projects
      .filter((project) => project.category === category.id)
      .sort((a, b) => {
        if (category.id === 'Originals') {
          return vrOrder.indexOf(a.title) - vrOrder.indexOf(b.title);
        }
        return b.year - a.year;
      });

    if (!items.length) return;

    const section = document.createElement('section');
    section.className = 'section';
    const description = categoryDescriptions[category.id] || '';
    section.innerHTML = `
      <h3 class="section-title">${category.title}</h3>
      ${description ? `<p class="section-sub">${description}</p>` : ''}
    `;
    const grid = document.createElement('div');
    grid.className = 'project-grid';

    items.forEach((project) => grid.appendChild(buildProjectCard(project)));

    section.appendChild(grid);
    projectGrid.appendChild(section);
  });

  initCardSprings();

  const hash = decodeURIComponent(window.location.hash || '');
  if (hash.startsWith('#project-')) {
    const slug = hash.slice('#project-'.length);
    const project = projects.find((item) => (item.slug || slugify(item.title)) === slug);
    const card = document.getElementById(`project-${slug}`);
    if (project && card) {
      card.scrollIntoView({ block: 'center' });
      openModal(project);
    }
  }
}

function openModal(project) {
  if (!project) return;
  modalTitle.textContent = project.modalTitle || project.title;
  modalDescription.textContent = project.description;
  modalMeta.innerHTML = `
    <div>Year: ${project.year}</div>
    <div>Role: ${project.role}</div>
    <div>Category: ${project.category}</div>
  `;
  if (project.detailsPath) {
    modalDetails.style.display = 'grid';
    const path = project.detailsPath;
    const requestId = ++detailsRequestId;
    if (detailsCache.has(path)) {
      modalDetails.innerHTML = detailsCache.get(path);
    } else {
      modalDetails.innerHTML = '';
      fetch(path)
        .then((response) => response.text())
        .then((html) => {
          detailsCache.set(path, html);
          if (requestId === detailsRequestId) {
            modalDetails.innerHTML = html;
          }
        })
        .catch(() => {
          if (requestId === detailsRequestId) {
            modalDetails.innerHTML = '';
          }
        });
    }
  } else {
    modalDetails.innerHTML = '';
    modalDetails.style.display = 'none';
  }

  mediaStrip.innerHTML = '';
  const appendMediaItem = (node, aspect = null) => {
    const holder = document.createElement('div');
    holder.className = 'media-item';
    if (node.tagName === 'IFRAME') {
      const frame = document.createElement('div');
      frame.className = 'media-embed';
      frame.style.aspectRatio = aspect || '16 / 9';
      frame.appendChild(node);
      holder.appendChild(frame);
    } else {
      holder.appendChild(node);
    }
    mediaStrip.appendChild(holder);
  };
  (project.media || [project.image]).forEach((item) => {
    if (typeof item === 'string') {
      const img = document.createElement('img');
      img.src = item;
      img.alt = project.title;
      appendMediaItem(img);
      return;
    }

    if (item?.type === 'embed') {
      const iframe = document.createElement('iframe');
      const isVimeo = item.src.includes('vimeo.com');
      const isYouTube = item.src.includes('youtube.com') || item.src.includes('youtu.be');
      let embedBase = item.src;
      if (isVimeo && !embedBase.includes('player.vimeo.com')) {
        const match = embedBase.match(/vimeo\.com\/(?:video\/)?(\d+)/);
        if (match) {
          const query = embedBase.split('?')[1];
          embedBase = `https://player.vimeo.com/video/${match[1]}${query ? `?${query}` : ''}`;
        }
      }
      if (isYouTube && !embedBase.includes('youtube-nocookie.com')) {
        const match = embedBase.match(/(?:youtu\.be\/|embed\/|v=)([^?&/]+)/);
        if (match) {
          embedBase = `https://www.youtube-nocookie.com/embed/${match[1]}`;
        }
      }
      const embedSrc = isVimeo
        ? (embedBase.includes('?') ? `${embedBase}&title=0&byline=0&portrait=0` : `${embedBase}?title=0&byline=0&portrait=0`)
        : (embedBase.includes('?') ? `${embedBase}&rel=0` : `${embedBase}?rel=0`);
      iframe.src = embedSrc;
      iframe.dataset.src = embedSrc;
      iframe.title = item.title || project.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      appendMediaItem(iframe, item.aspect);
      return;
    }

    if (item?.type === 'video') {
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      appendMediaItem(video);
    }
  });
  mediaStrip.classList.toggle('single-media', mediaStrip.children.length <= 1);
  modal.classList.remove('hidden');
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  resetMediaScroll();
}

function closeModal() {
  if (!modal || modal.classList.contains('hidden') || modal.classList.contains('closing')) {
    return;
  }
  stopMediaPlayback();
  modal.classList.add('closing');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (window.location.hash.startsWith('#project-')) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  window.setTimeout(() => {
    modal.classList.add('hidden');
    modal.classList.remove('closing');
  }, 260);
}

function scrollMedia(direction) {
  const width = mediaStrip.clientWidth;
  mediaStrip.scrollBy({ left: direction * width, behavior: 'smooth' });
}

closeButton?.addEventListener('click', closeModal);
backdrop?.addEventListener('click', closeModal);
prevButton?.addEventListener('click', () => scrollMedia(-1));
nextButton?.addEventListener('click', () => scrollMedia(1));
mediaStrip?.addEventListener('scroll', () => {
  if (programmaticScroll) {
    return;
  }
  pauseInlineVideos();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

renderProjects();

function initCardSprings() {
  const cards = Array.from(document.querySelectorAll('.project-card'));
  const animateCard = (card, opts) => {
    if (card._rafId) {
      cancelAnimationFrame(card._rafId);
    }

    const base = card._state || { y: 0, z: 0, scale: 1, rot: 0 };
    const target = {
      y: opts.y || 0,
      z: opts.z || 0,
      scale: opts.scale || 1,
      rot: opts.rotate ? (Math.random() * motionSettings.rotMax * 2 - motionSettings.rotMax) : 0,
    };

    if (opts.direction === 'out') {
      target.y = 0;
      target.z = 0;
      target.scale = 1;
      target.rot = 0;
    }

    const start = performance.now();
    const duration = motionSettings.duration;
    const durTranslate = duration * 0.9;
    const durScale = duration * 1.2;
    const durRotate = duration * 1.4;

    const animate = (now) => {
      const tTranslate = Math.min((now - start) / durTranslate, 1);
      const tScale = Math.min((now - start) / durScale, 1);
      const tRotate = Math.min((now - start) / durRotate, 1);

      const eTranslate = elastic(tTranslate);
      const eScale = elastic(tScale);
      const eRotate = elastic(tRotate);

      const y = base.y + (target.y - base.y) * eTranslate;
      const z = base.z + (target.z - base.z) * eTranslate;
      const scale = base.scale + (target.scale - base.scale) * eScale;
      const rot = base.rot + (target.rot - base.rot) * eRotate;

      card.style.transform = `translate3d(0, ${y}px, ${z}px) rotate(${rot}deg) scale(${scale})`;

      card._state = { y, z, scale, rot };

      if (tTranslate < 1 || tScale < 1 || tRotate < 1) {
        card._rafId = requestAnimationFrame(animate);
      }
    };

    card._rafId = requestAnimationFrame(animate);
  };

  cards.forEach((card) => {
    card.addEventListener('pointerenter', () => {
      const img = card.querySelector('img');
      if (img?.dataset.hover) {
        img.src = img.dataset.hover;
      }
      cards.forEach((el) => {
        el.style.zIndex = '1';
        el.classList.remove('is-hovered');
      });
      card.classList.add('is-hovered');
      card.style.zIndex = '20';
      animateCard(card, { y: motionSettings.y, scale: motionSettings.scale, rotate: true, z: motionSettings.z, direction: 'in' });
    });

    card.addEventListener('pointerleave', () => {
      const img = card.querySelector('img');
      if (img?.dataset.static) {
        img.src = img.dataset.static;
      }
      card.classList.remove('is-hovered');
      animateCard(card, { y: 0, scale: 1, rotate: false, z: 0, direction: 'out' });
      window.setTimeout(() => {
        card.style.zIndex = '';
      }, motionSettings.duration * 1.2);
    });
  });
}
