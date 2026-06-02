/* ═══════════════════════════════════════════════════════
   DETAIL DATA
   ═══════════════════════════════════════════════════════ */
const DETAILS = {
  p1: {
    kind: 'p1',
    num: '/ 01  Project',
    title: 'YOLOv8 Chess <em>Piece Detection</em>',
    sub: 'Computer Vision · Machine Learning · 2026',
    imgLabel: '[ live inference · webcam feed ]',
    sections: [
      { h: 'Overview', p: 'An AI image-detection model using a personally trained YOLOv8 network to identify, detect, and track chess pieces in real time. The goal: replace the expensive DGT electronic boards that tournament play relies on with a setup that works on any board and any webcam.' },
      { h: 'What I built', p: 'Collected and labeled a custom dataset of chess pieces across different boards and lighting conditions, trained YOLOv8 on the annotations, and wrote the inference pipeline that runs live on webcam input — drawing bounding boxes, class labels, and confidence scores per frame.' },
      { h: 'What I learned', p: 'Dataset quality matters more than model size. A clean, varied training set with good labels beats a bigger model every time. Also: chess pieces look surprisingly different from above versus straight-on, and your dataset had better cover both.' }
    ],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Dataset Curation'],
    links: [{ label: 'View on GitHub', href: '#' }, { label: 'Demo video', href: '#' }],
    progression: [
      {
        title: 'First detections',
        img: 'assets/yolov8-prog-p1-1.png',
        fit: 'cover',
        desc: 'Started with real-life testing on a public dataset before training my own model using YOLOv8 bounding boxes.'
      },
      {
        title: 'Better training data + board warping',
        img: 'assets/yolov8-prog-p2-1.png',
        fit: 'cover',
        desc: 'Ran verification and accuracy testing on dataset images after mixing the public dataset with personal data captured from the bounding boxes.'
      },
      {
        title: 'Live 2D board overlay',
        img: 'assets/yolov8-prog-p3-1.png',
        fit: 'cover',
        desc: 'Implemented a live 2D board overlay to see the detected pieces in real time and generate more training data.'
      },
      {
        title: 'Instance segmentation + manual correction',
        img: 'assets/yolov8-prog-p3-2.png',
        fit: 'cover',
        desc: 'Upgraded to a YOLOv8 segmentation model for higher accuracy — swapping bounding boxes for pixel-level masks that hold up better when pieces overlap from the camera angle.'
      }
    ]
  },
  p2: {
    kind: 'p2',
    num: '/ 02  Project',
    title: 'Machine Learning <em>Chess Bot</em>',
    sub: 'Reinforcement Learning · MCTS · Neural Networks · 2026',
    imgLabel: '[ self-play · policy + value network ]',
    sections: [
      { h: 'Overview', p: 'An AlphaZero-inspired chess engine built from the ground up. It combines a deep neural network for position evaluation with Monte Carlo Tree Search for move selection, and improves itself through self-play — no hand-coded opening books, no human game database.' },
      { h: 'What I built', p: 'A custom bitboard-backed chess engine for fast move generation, a residual-tower neural network that outputs both a move policy and a position value, an MCTS implementation that uses the network to guide search, and a self-play training loop that feeds finished games back into the model.' },
      { h: 'What I learned', p: 'Reinforcement learning is patient work — most of the engineering is in the plumbing, not the math. Reproducing AlphaZero on a single GPU also means learning to love every optimization you can find.' }
    ],
    tags: ['Python', 'PyTorch', 'MCTS', 'Self-play', 'Bitboards'],
    links: [{ label: 'View on GitHub', href: '#' }, { label: 'Training logs', href: '#' }],
    progression: [
      {
        title: 'Playing real games',
        img: 'assets/chessbot-board.png',
        fit: 'cover',
        desc: 'I had the bot play against students at my school — it won some, lost some, and overall wasn\'t amazing, but it worked as a proof of concept that the self-play training pipeline could produce a bot that actually plays legal, reasonable chess.'
      },
      {
        title: 'Training loss across runs',
        img: 'assets/chessbot-loss.png',
        desc: 'Total training loss across three runs. It drops sharply early on as the network learns basic position evaluation, then flattens out and plateaus in later runs as the model approaches the limit of what it could learn at this size — each run picked up from the previous checkpoint.'
      },
      {
        title: 'Cumulative training data growth',
        img: 'assets/chessbot-data-growth.png',
        desc: 'How the training set grew over time. Every self-play iteration generates a fresh batch of games at the bot\'s current skill level, so the dataset steadily accumulates — and because later games come from a stronger bot, the newer samples are higher quality than the early ones.'
      },
      {
        title: 'Average game length per iteration',
        img: 'assets/chessbot-game-length.png',
        desc: 'Average game length per training iteration. Early on, games ran right up against the move cap because the bot shuffled pieces aimlessly. As it improved, games got noticeably shorter — a sign it was actually winning and losing decisively instead of stalling.'
      }
    ]
  },
  p3: {
    kind: 'p3',
    num: '/ 03  Project',
    title: 'FRC 2658 <em>Subsystems</em>',
    sub: 'Robotics · FRC Team 2658 · District Champions · 2025',
    imgLabel: '[ team 2658 competition robot ]',
    sections: [
      { h: 'Overview', p: 'Helped design and build critical subsystems on FRC Team 2658\'s district-winning competition robot — including the intake turret, swerve drive, and indexers. Each subsystem had to survive a six-week build season and then perform under match pressure.' },
      { h: 'What I worked on', p: 'Contributed to the intake turret\'s mechanical design and integration, the swerve drive assembly and tuning, and the indexer that staged game pieces for the shooter. Each one was a collaboration with the rest of the build team.' },
      { h: 'What I learned', p: 'Subsystem design lives at the intersection of mechanical, electrical, and software — nothing works in isolation. Iterating in CAD costs minutes; iterating on the field costs matches.' }
    ],
    tags: ['FRC', 'CAD', 'Swerve Drive', 'Mechanical Design', 'Team 2658'],
    links: [{ label: 'Team 2658', href: '#' }, { label: 'Build photos', href: '#' }],
    progression: [
      {
        title: 'Drivetrain assembly',
        img: 'assets/frc-prog-5-drivetrain.png',
        fit: 'cover',
        desc: 'Where it all starts — assembling the drivetrain frame, mounting the drive motors and wheels, and laying down the first pass of power distribution and wiring. Everything else on the robot bolts onto this base, so it has to be square and solid.'
      },
      {
        title: 'Electrical + subsystem testing',
        img: 'assets/frc-prog-6-wiring.png',
        fit: 'cover',
        desc: 'Wiring up the batteries, motor controllers, and signal runs while bench-testing the early subsystems. This is the messy iteration phase — mocking mechanisms up on the structural pieces, running them, and tweaking until they behave.'
      },
      {
        title: 'Chassis + superstructure',
        img: 'assets/frc-prog-7-chassis.png',
        fit: 'cover',
        desc: 'The laser-cut polycarbonate superstructure going together — the lightweight frame that everything else hangs off of. Strong enough to take a hit on the field, light enough to keep us under the weight limit.'
      },
      {
        title: 'Intake build',
        img: 'assets/frc-prog-4-intake.png',
        fit: 'cover',
        desc: 'Building the intake — the roller and chain assembly that grabs game pieces off the floor. Dialing in the roller spacing and geometry so it picks up cleanly without jamming took a lot of trial and error.'
      },
      {
        title: 'Upper subsystem + indexer',
        img: 'assets/frc-prog-3-upperwiring.png',
        fit: 'cover',
        desc: 'Assembling and wiring the upper stage — the indexer columns that stage game pieces and feed them up to the shooter. Lots of motors, sensors, and wiring packed into a tight space.'
      },
      {
        title: 'Competition-ready robot',
        img: 'assets/frc-prog-2-complete.png',
        fit: 'cover',
        desc: 'Everything coming together — drivetrain, intake, indexer, and shooter all integrated into one competition-ready robot, wired and tuned and ready to load for the event.'
      },
      {
        title: 'District champions',
        img: 'assets/frc-prog-1-districts.png',
        fit: 'cover',
        desc: 'The payoff — Team 2658 taking home the district win. Months of late builds, blown fuses, and re-tuning runs adding up to a banner and a very happy team.'
      }
    ]
  },
  chess: {
    kind: 'chess',
    num: '/ 01  Passion',
    title: '<em>Chess</em>',
    sub: 'Strategy · Pattern recognition · 1700+ rapid',
    imgLabel: '[ 8 × 8 ]',
    sections: [
      { h: 'Why I love it', p: 'Chess is the cleanest expression of "if I think harder, I do better" that exists. Every game is a self-contained problem with perfect information, and every loss is mine to learn from.' },
      { h: 'How I play', p: 'Mostly rapid on chess.com, with a stubborn loyalty to the London opening and an equally stubborn habit of blundering on move 28. Studying endgames, working through Dvoretsky one chapter at a time.' }
    ],
    tags: ['Rapid', 'London System', 'Endgames'],
    links: [{ label: 'chess.com profile', href: '#' }],
    gallery: [
      { title: 'National Master', img: 'assets/chess-nm-certificate.png', cap: 'My official US Chess Federation certificate recognizing the title of National Master.' },
      { title: 'Rating progress', img: 'assets/chess-rating-chart.png', cap: 'My rating climb over the years — peaking at a 2198 regular rating, 99th percentile overall.' },
      { title: 'Team USA', img: 'assets/chess-teamusa-jacket.png', cap: 'Invited to the Team USA Junior Olympiad team.' },
      { title: 'Where it started', img: 'assets/chess-coach.png', cap: 'With my coach and an early tournament trophy — where the obsession began.' }
    ]
  },
  robotics: {
    kind: 'robotics',
    num: '/ 02  Passion',
    title: '<em>Robotics</em>',
    sub: 'FRC Team 2658 · Electrical Member',
    imgLabel: '[ power · wiring · control ]',
    sections: [
      { h: 'Why I love it', p: 'Electrical is the nervous system of the robot — if it isn\'t right, the best mechanical design in the world just sits there. I like that it rewards being careful and methodical: clean routing, solid connections, and labels you\'ll thank yourself for later.' },
      { h: 'My role', p: 'Electrical member on FRC Team 2658. I handle power distribution, wiring harnesses, and motor controller integration — making sure every subsystem gets clean power and talks to the rest of the robot reliably.' }
    ],
    tags: ['FRC', 'Power Distribution', 'Wiring', 'Motor Control', 'Team 2658'],
    links: [{ label: 'Team 2658', href: '#' }],
    gallery: [
      { title: 'Robot 2658', img: 'assets/robotics-comp-robot.png', cap: 'Our competition robot on the field — the machine all the wiring and electrical work comes together to power.' },
      { title: 'The team', img: 'assets/robotics-group.png', cap: 'FRC Team 2658 at a competition, robot and crew all in one place.' },
      { title: 'Long nights, good company', img: 'assets/robotics-dinner.png', cap: 'A late dinner with the team after a build day — half the fun of robotics is the people you do it with.' }
    ]
  },
  future: {
    kind: 'future',
    num: '/ 03  What\'s Next',
    title: 'On the <em>horizon</em>',
    sub: 'Internship · Research · Summer 2026',
    imgLabel: '[ seasats autonomous surface vessels ]',
    sections: [
      { h: 'Overview', p: 'Two roles lined up for the coming year — a software internship at Seasats, the San Diego company building autonomous surface vessels, and a research position through UCSD\'s Research Experience for High School Students (REHS) program at the San Diego Supercomputer Center.' }
    ],
    nextRoles: [
      {
        label: 'Internship',
        title: 'Seasats',
        sub: 'Autonomous Surface Vessels · San Diego',
        logo: 'assets/seasats-logo.png',
        bg: 'assets/seasats-boats-2.png',
        desc: 'Joining Seasats as a software intern — the team designs and operates fleet-ready autonomous boats for ocean missions, and I\'ll be contributing to the software stack that keeps them running offshore.'
      },
      {
        label: 'Research',
        title: 'UCSD REHS',
        sub: 'San Diego Supercomputer Center · Jacobs School · Contextual Robotics',
        logos: ['assets/sdsc-logo.png', 'assets/ucsd-jacobs.png', 'assets/contextual-robotics.png'],
        desc: 'Selected for UCSD\'s Research Experience for High School Students (REHS) program, working alongside graduate researchers at the San Diego Supercomputer Center and the Contextual Robotics Institute. The focus pairs my interest in machine learning with applied robotics work.'
      }
    ]
  },
  coding: {
    kind: 'coding',
    num: '/ 04  Passion',
    title: '<em>Art</em>',
    sub: 'Acrylic · Landscapes · Painting',
    imgLabel: '[ acrylic on canvas ]',
    sections: [
      { h: 'Why I love it', p: 'Art is the part of my week that has nothing to do with right answers. After a day of debugging and tuning, sitting down with a canvas is a completely different kind of focus — slower, looser, and entirely my own.' },
      { h: 'What I paint', p: 'Mostly acrylic landscapes — snowy cabins, mountains, water reflections. I like scenes with a lot of light and atmosphere to work out, where getting the glow and the shadows right is its own little puzzle.' }
    ],
    tags: ['Acrylic', 'Landscapes', 'Canvas'],
    links: [{ label: 'More work', href: '#' }],
    gallery: [
      { title: 'Sun & Tree', img: 'assets/art-tree-sun.png', cap: 'A bare tree silhouetted against a swirling sun and sky — acrylic on canvas.' },
      { title: 'Harbor Boat', img: 'assets/art-boat.png', cap: 'A moored boat and its broken reflection on the water — acrylic.' },
      { title: 'Crushed Can', img: 'assets/art-coke-can.png', cap: 'A crushed soda can still life, built from angular planes of reflected light — acrylic.' },
      { title: 'Lion', img: 'assets/art-lion.png', cap: 'A roaring lion drawn in white colored pencil on black paper.' },
      { title: 'Knight', img: 'assets/art-knight.png', cap: 'A lunging armored knight in colored pencil and watercolor.' }
    ]
  }
};

/* ═══════════════════════════════════════════════════════
   CURSOR
   ═══════════════════════════════════════════════════════ */
const cur = document.getElementById('cur');
const curRing = document.getElementById('cur-ring');
let mx = window.innerWidth / 2, my = window.innerHeight / 2;
let rx = mx, ry = my;
document.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
});
function animateRing() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  curRing.style.left = rx + 'px';
  curRing.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

const HOVER_SELECTORS = 'a, .dot, .proj-card, .hobby-cell, .skill, button, .modal-link, .cta, .c-link';
document.addEventListener('mouseover', (e) => {
  if (e.target.closest(HOVER_SELECTORS)) document.body.classList.add('cur-hover');
});
document.addEventListener('mouseout', (e) => {
  if (e.target.closest(HOVER_SELECTORS)) document.body.classList.remove('cur-hover');
});

/* ═══════════════════════════════════════════════════════
   SCROLL ENGINE
   ═══════════════════════════════════════════════════════ */
const scroller = document.getElementById('scroller');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const dots = document.querySelectorAll('.dot');
const tracks = ['t-hero','t-projects','t-hobbies','t-contact'].map(id => document.getElementById(id));

function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
function ease(t){ return t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2; }

/* Hero entrance — trigger immediately (script runs after DOM is parsed) */
function revealHero() {
  const fades = document.querySelectorAll('#t-hero .fade-up');
  fades.forEach((el, i) => {
    setTimeout(() => {
      el.style.transition = 'opacity 1s var(--ease-out), transform 1s var(--ease-out)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 150 + i * 150);
  });
}
requestAnimationFrame(revealHero);

function update() {
  const sc = scroller.scrollTop;
  const vh = window.innerHeight;

  nav.classList.toggle('scrolled', sc > 60);

  /* Determine current track */
  let activeIdx = 0;
  tracks.forEach((t, i) => {
    const top = t.offsetTop;
    const bot = top + t.offsetHeight;
    if (sc + vh * 0.5 >= top && sc + vh * 0.5 < bot) activeIdx = i;
  });
  navLinks.forEach((l, i) => l.classList.toggle('on', i === activeIdx));
  dots.forEach((d, i) => d.classList.toggle('on', i === activeIdx));

  /* SCENE 1: hero parallax + fade-out */
  {
    const t = tracks[0];
    const p = clamp((sc - t.offsetTop) / (t.offsetHeight - vh), 0, 1);
    const bg = document.getElementById('hero-bg');
    const inner = document.getElementById('hero-inner');
    const stats = document.getElementById('hero-stats');
    const hint = document.getElementById('hero-hint');
    if (bg) bg.style.transform = `scale(${1 + p * 0.12}) translateY(${p * -40}px)`;
    if (inner) {
      inner.style.transform = `translateY(${p * -80}px)`;
      inner.style.opacity = String(1 - p * 1.4);
    }
    if (stats) stats.style.opacity = String(1 - p * 1.6);
    if (hint) hint.style.opacity = String(1 - p * 2.4);
  }

  /* SCENE 2: projects title -> cards */
  {
    const t = tracks[1];
    const p = clamp((sc - t.offsetTop) / (t.offsetHeight - vh), 0, 1);
    const title = document.getElementById('proj-title');
    const cards = document.getElementById('proj-cards');
    const switchP = 0.35;
    if (title && cards) {
      if (p < switchP) {
        const ip = clamp(p / switchP, 0, 1);
        title.style.opacity = String(1 - ip * 0.95);
        title.style.transform = `translateY(${-ip * 50}px) scale(${1 - ip * 0.03})`;
        cards.style.opacity = '0';
        cards.classList.remove('active');
      } else {
        const cp = clamp((p - switchP) / (1 - switchP), 0, 1);
        title.style.opacity = '0';
        cards.style.opacity = String(ease(clamp(cp * 2, 0, 1)));
        cards.style.transform = `translateY(${(1 - ease(clamp(cp * 2, 0, 1))) * 40}px)`;
        cards.classList.add('active');
      }
    }
  }

  /* SCENE 3: hobbies title -> grid */
  {
    const t = tracks[2];
    const p = clamp((sc - t.offsetTop) / (t.offsetHeight - vh), 0, 1);
    const title = document.getElementById('hob-title');
    const grid = document.getElementById('hob-grid');
    const switchP = 0.35;
    if (title && grid) {
      if (p < switchP) {
        const ip = clamp(p / switchP, 0, 1);
        title.style.opacity = String(1 - ip * 0.95);
        title.style.transform = `translateY(${-ip * 50}px) scale(${1 - ip * 0.03})`;
        grid.style.opacity = '0';
        grid.classList.remove('active');
      } else {
        const cp = clamp((p - switchP) / (1 - switchP), 0, 1);
        title.style.opacity = '0';
        grid.style.opacity = String(ease(clamp(cp * 2, 0, 1)));
        grid.style.transform = `translateY(${(1 - ease(clamp(cp * 2, 0, 1))) * 40}px)`;
        grid.classList.add('active');
      }
    }
  }

  /* SCENE 4: contact entrance */
  {
    const t = tracks[3];
    const p = clamp((sc - t.offsetTop) / (t.offsetHeight - vh), 0, 1);
    const left = document.getElementById('contact-left');
    if (left) {
      const cp = clamp((p - 0.05) / 0.5, 0, 1);
      left.style.transform = `translateY(${(1 - cp) * 40}px)`;
      left.style.opacity = String(0.2 + cp * 0.8);
    }
  }
}

scroller.addEventListener('scroll', update, { passive: true });
window.addEventListener('resize', update);
update();

/* ═══════════════════════════════════════════════════════
   NAV CLICKS
   ═══════════════════════════════════════════════════════ */
function goTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  scroller.scrollTo({ top: el.offsetTop + 4, behavior: 'smooth' });
}
document.querySelectorAll('[data-go]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goTo(el.getAttribute('data-go'));
  });
});

/* ═══════════════════════════════════════════════════════
   MODAL
   ═══════════════════════════════════════════════════════ */
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const modalImgInner = document.getElementById('modal-img-inner');
const modalImgLabel = document.getElementById('modal-img-label');

function openDetail(key) {
  const d = DETAILS[key];
  if (!d) return;

  modalImgInner.className = 'modal-img-inner ' + d.kind;
  modalImgLabel.textContent = d.imgLabel;

  modalBody.innerHTML = `
    <div class="modal-num">${d.num}</div>
    <h2 class="modal-title">${d.title}</h2>
    <p class="modal-sub">${d.sub}</p>
    ${d.sections.map(s => `
      <div class="modal-section">
        <h4>${s.h}</h4>
        <p>${s.p}</p>
      </div>
    `).join('')}
    ${d.tags ? `<div class="modal-section">
      <h4>Stack</h4>
      <div class="modal-tags">${d.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
    </div>` : ''}
    ${d.links ? `<div class="modal-links">
      ${d.links.map(l => `<a class="modal-link" href="${l.href}">${l.label}</a>`).join('')}
    </div>` : ''}
    ${d.progression ? `<div class="modal-progression">
      <div class="modal-progression-head">
        <h3>The <em>progression</em></h3>
        <span class="count">${String(d.progression.length).padStart(2, '0')} stages</span>
      </div>
      ${d.progression.map((s, i) => `
        <div class="prog-stage">
          <div class="prog-stage-head">
            <span class="prog-stage-num">Stage ${String(i + 1).padStart(2, '0')}</span>
            <h4 class="prog-stage-title">${s.title}</h4>
          </div>
          <div class="prog-stage-img${s.fit === 'cover' ? ' cover' : ''}" style="background-image:url('${s.img}')"></div>
          <p class="prog-stage-desc">${s.desc}</p>
        </div>
      `).join('')}
    </div>` : ''}
    ${d.gallery ? `<div class="modal-progression">
      <div class="modal-progression-head">
        <h3>The <em>gallery</em></h3>
        <span class="count">${String(d.gallery.length).padStart(2, '0')} pieces</span>
      </div>
      ${d.gallery.map((g, i) => `
        <div class="prog-stage">
          <div class="prog-stage-head">
            <span class="prog-stage-num">${String(i + 1).padStart(2, '0')}</span>
            <h4 class="prog-stage-title">${g.title}</h4>
          </div>
          <img class="gallery-img" src="${g.img}" alt="${g.title}" />
          <p class="prog-stage-desc">${g.cap}</p>
        </div>
      `).join('')}
    </div>` : ''}
    ${d.nextRoles ? `<div class="next-roles">
      <div class="next-roles-head">
        <h3>What's <em>next</em></h3>
        <span class="count">${String(d.nextRoles.length).padStart(2, '0')} roles</span>
      </div>
      ${d.nextRoles.map(r => `
        <div class="role-card">
          ${r.bg ? `<div class="role-card-bg" style="background-image:url('${r.bg}')"></div>` : ''}
          <div class="role-card-body">
            <div class="role-head">
              <span class="role-label">${r.label}</span>
            </div>
            <div>
              <h4 class="role-title">${r.title}</h4>
              <p class="role-sub">${r.sub}</p>
            </div>
            <p class="role-desc">${r.desc}</p>
          </div>
          ${r.logo || r.logos ? `<div class="role-logos">
            ${(r.logos || [r.logo]).map((l, i, arr) => `
              <img class="role-logo" src="${l}" alt="" />${i < arr.length - 1 ? '<div class="role-logo-divider"></div>' : ''}
            `).join('')}
          </div>` : ''}
        </div>
      `).join('')}
    </div>` : ''}
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDetail() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-detail]').forEach(el => {
  el.addEventListener('click', () => openDetail(el.getAttribute('data-detail')));
});
modalClose.addEventListener('click', closeDetail);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeDetail();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetail();
});

/* ═══════════════════════════════════════════════════════
   NEURAL NETWORK — hover a node, an image card pops up
   ═══════════════════════════════════════════════════════ */
(function buildNeural() {
  const stage = document.getElementById('s-hero');
  const wrap = document.getElementById('neural');
  const nodesEl = document.getElementById('neural-nodes');
  const linesEl = document.getElementById('neural-lines');
  const pop = document.getElementById('neural-pop');
  const popImg = document.getElementById('neural-pop-img');
  if (!stage || !wrap || !nodesEl || !linesEl || !pop || !popImg) return;

  // x,y in % of the .neural box; r = node radius px; img = pop image
  const NODES = [
    { x: 34, y: 30, r: 18, img: 'assets/frc-prog-1-districts.png' },
    { x: 52, y: 18, r: 13, img: 'assets/yolov8-chess.png' },
    { x: 64, y: 31, r: 15, img: 'assets/robotics-comp-robot.png' },
    { x: 44, y: 44, r: 11, img: 'assets/art-tree-sun.png' },
    { x: 20, y: 22, r: 10, img: 'assets/chess-nm-certificate.png' },
    { x: 16, y: 42, r: 9,  img: 'assets/chess-coach.png' },
    { x: 74, y: 16, r: 9,  img: 'assets/art-knight.png' },
    { x: 82, y: 34, r: 12, img: 'assets/seasats-boats-3.png' },
    { x: 58, y: 48, r: 9,  img: 'assets/chessbot-board.png' },
    { x: 90, y: 22, r: 7,  img: 'assets/art-boat.png' },
    { x: 40, y: 14, r: 8,  img: 'assets/chess-rating-chart.png' },
    { x: 26, y: 56, r: 9,  img: 'assets/robotics-group.png' },
    { x: 70, y: 46, r: 11, img: 'assets/frc-2658-robot.png' },
    { x: 88, y: 48, r: 8,  img: 'assets/art-lion.png' },
    { x: 9,  y: 30, r: 7,  img: 'assets/chess-teamusa-jacket.png' },
    { x: 50, y: 36, r: 9,  img: 'assets/robotics-dinner.png' },
    { x: 78, y: 26, r: 7,  img: 'assets/art-coke-can.png' },
    { x: 42, y: 60, r: 10, img: 'assets/frc-prog-2-complete.png' },
    // trailing downward
    { x: 60, y: 64, r: 9,  img: 'assets/frc-prog-5-drivetrain.png' },
    { x: 33, y: 72, r: 8,  img: 'assets/yolov8-prog-p3-1.png' },
    { x: 74, y: 70, r: 8,  img: 'assets/chessbot-loss.png' },
    { x: 52, y: 78, r: 11, img: 'assets/frc-prog-7-chassis.png' },
    { x: 22, y: 84, r: 7,  img: 'assets/art-winter-cabin.png' },
    { x: 66, y: 86, r: 9,  img: 'assets/frc-prog-4-intake.png' },
    { x: 44, y: 92, r: 8,  img: 'assets/chess-tournament.png' }
  ];
  const EDGES = [
    [0,1],[0,3],[0,4],[0,5],[0,10],[0,15],[1,2],[1,6],[1,10],[2,7],[2,8],[2,16],
    [7,9],[6,7],[3,8],[3,11],[4,1],[4,14],[12,2],[12,8],[12,13],[7,13],[15,17],
    [16,7],[5,11],[11,19],[17,18],[8,17],[12,18],[18,20],[20,12],[19,21],[17,21],
    [21,23],[18,23],[19,22],[21,24],[11,22],[20,13],[24,17]
  ];

  // Preload pop images
  NODES.forEach(n => { const im = new Image(); im.src = n.img; });

  // Lines (coords are % within the .neural box)
  const svgNS = 'http://www.w3.org/2000/svg';
  EDGES.forEach(([a, b]) => {
    if (!NODES[a] || !NODES[b]) return;
    const ln = document.createElementNS(svgNS, 'line');
    ln.setAttribute('x1', NODES[a].x); ln.setAttribute('y1', NODES[a].y);
    ln.setAttribute('x2', NODES[b].x); ln.setAttribute('y2', NODES[b].y);
    linesEl.appendChild(ln);
  });

  // Nodes
  let hideTimer = null;
  let token = 0;
  function showPop(el, n) {
    clearTimeout(hideTimer);
    const sr = stage.getBoundingClientRect();
    const nr = el.getBoundingClientRect();
    const cx = nr.left + nr.width / 2 - sr.left;
    const nodeTop = nr.top - sr.top;
    const nodeBottom = nr.bottom - sr.top;
    const half = 165;
    const clampedX = Math.max(half, Math.min(sr.width - half, cx));
    const below = nodeTop < 270;
    pop.style.left = clampedX + 'px';
    pop.style.top = (below ? nodeBottom + 14 : nodeTop - 14) + 'px';
    pop.style.transform = below ? 'translate(-50%, 0)' : 'translate(-50%, -100%)';
    wrap.classList.add('revealing');

    // Decode the new image off-screen, then swap — prevents the
    // browser from briefly showing the previously-shown image.
    const my = ++token;
    const swap = () => {
      if (my !== token) return;        // a newer hover won; abort
      popImg.src = n.img;
      pop.classList.add('on');
    };
    if (popImg.src && popImg.src.indexOf(n.img) === -1) {
      // hide instantly (no fade) so the old frame can't show through
      pop.classList.remove('on');
    }
    const probe = new Image();
    probe.src = n.img;
    if (probe.decode) {
      probe.decode().then(swap).catch(swap);
    } else {
      probe.onload = swap;
      probe.onerror = swap;
      if (probe.complete) swap();
    }
  }

  NODES.forEach((n) => {
    const el = document.createElement('button');
    el.className = 'node';
    el.style.left = n.x + '%';
    el.style.top = n.y + '%';
    el.style.width = (n.r * 2) + 'px';
    el.style.height = (n.r * 2) + 'px';
    el.setAttribute('aria-label', 'View work');
    el.addEventListener('mouseenter', () => showPop(el, n));
    el.addEventListener('mouseleave', () => {
      token++;  // invalidate any pending decode swap
      hideTimer = setTimeout(() => {
        pop.classList.remove('on');
        wrap.classList.remove('revealing');
      }, 120);
    });
    nodesEl.appendChild(el);
  });
})();
