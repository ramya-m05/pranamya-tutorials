/**
 * Pranamya Tutorials - Cinematic 3D Learning Journey Hero Scene
 * "Every Step Takes You Closer to Excellence"
 * 
 * Features:
 * 1. Realistic Ascending Staircase representing academic progress.
 * 2. Realistic Stack of Educational Books with leather covers, gold foil spines, and silk ribbons.
 * 3. Realistic Rotating Globe on turned brass pedestal with detailed continents map.
 * 4. Floating Hexagonal Academic Pencil with cedar wood cone and graphite tip.
 * 5. Graduation Cap (Mortarboard) with velvet texture and silk gold tassel representing achievement.
 * 6. Translucent Acrylic Drafting Triangle, Golden Academic Stars, and luminous dust motes.
 * 7. Studio 3-point lighting + cinematic crimson rim light and soft ground shadows.
 * 8. Mouse parallax (desktop), scroll-driven depth parallax, and smooth staggered entrance timeline.
 * 9. Idle sinusoidal floating physics.
 * 10. Automatic pause via IntersectionObserver when scrolled out of view.
 * 11. Full mobile optimization, static fallback, and prefers-reduced-motion support.
 */

(function () {
  'use strict';

  // Prevent multiple initializations
  if (window.PranamyaHero3D) return;

  const Hero3D = {
    initialized: false,
    isPaused: false,
    reducedMotion: false,
    isMobile: false,
    container: null,
    canvas: null,
    renderer: null,
    scene: null,
    camera: null,
    clock: null,
    animFrameId: null,

    // Scene Object Groups
    worldGroup: null,
    staircaseGroup: null,
    stairSteps: [],
    booksGroup: null,
    books: [],
    globeGroup: null,
    globeCore: null,
    pencilGroup: null,
    capGroup: null,
    toolsGroup: null,
    particles: null,

    // Mouse Interaction
    mouse: { x: 0, y: 0, targetX: 0, targetY: 0 },
    scrollProgress: 0,

    init: function () {
      if (this.initialized) return;

      this.container = document.getElementById('hero-3d-canvas-container');
      if (!this.container) return;

      // Check prefers-reduced-motion
      this.reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.isMobile = window.innerWidth < 768 || ('ontouchstart' in window);

      // Check WebGL availability
      if (!this.hasWebGLSupport() || typeof THREE === 'undefined') {
        this.showFallback();
        return;
      }

      try {
        this.setupRenderer();
        this.setupScene();
        this.setupCamera();
        this.setupLighting();
        this.buildEnvironment();
        this.buildStaircase();
        this.buildBooks();
        this.buildGlobe();
        this.buildPencil();
        this.buildGraduationCap();
        this.buildAcademicTools();
        this.buildDustParticles();

        this.bindEvents();
        this.setupVisibilityObserver();

        this.initialized = true;

        // Play entrance animation
        this.playEntranceAnimation();

        // Start render loop
        this.clock = new THREE.Clock();
        this.animate();
      } catch (err) {
        console.warn('Hero3D WebGL initialization encountered an error:', err);
        this.showFallback();
      }
    },

    hasWebGLSupport: function () {
      try {
        const testCanvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    },

    showFallback: function () {
      const fallback = document.getElementById('hero-3d-fallback');
      if (fallback) {
        fallback.style.display = 'block';
        fallback.classList.remove('opacity-0');
        fallback.classList.add('opacity-100');
      }
      if (this.container) {
        this.container.classList.add('has-fallback');
      }
    },

    setupRenderer: function () {
      const rect = this.container.getBoundingClientRect();
      const width = rect.width || this.container.clientWidth || 600;
      const height = rect.height || this.container.clientHeight || 550;

      this.renderer = new THREE.WebGLRenderer({
        antialias: !this.isMobile,
        alpha: true,
        powerPreference: 'high-performance',
        precision: this.isMobile ? 'mediump' : 'highp'
      });

      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.25 : 2));

      // Color and shadow settings
      if (THREE.sRGBEncoding) {
        this.renderer.outputEncoding = THREE.sRGBEncoding;
      }
      this.renderer.shadowMap.enabled = !this.isMobile;
      if (this.renderer.shadowMap.enabled) {
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      }

      this.canvas = this.renderer.domElement;
      this.canvas.className = 'w-full h-full object-contain pointer-events-auto';
      this.canvas.setAttribute('aria-hidden', 'true');
      this.container.appendChild(this.canvas);
    },

    setupScene: function () {
      this.scene = new THREE.Scene();
      // Soft atmospheric depth
      this.scene.fog = new THREE.FogExp2(0x0a1122, 0.035);

      // Root world group that will handle mouse parallax and overall orientation
      this.worldGroup = new THREE.Group();
      this.worldGroup.position.set(0, -0.2, 0);
      this.scene.add(this.worldGroup);
    },

    setupCamera: function () {
      const rect = this.container.getBoundingClientRect();
      const aspect = (rect.width || 600) / (rect.height || 550);
      
      this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
      this.camera.position.set(0, 1.8, 7.2);
      this.camera.lookAt(0, 0.3, 0);
    },

    setupLighting: function () {
      // 1. Ambient Light - warm slate tone for subtle fill in shadows
      const ambientLight = new THREE.AmbientLight(0x232D42, 1.1);
      this.scene.add(ambientLight);

      // 2. Key Spotlight - Warm champagne sunlight coming from upper left
      const keyLight = new THREE.SpotLight(0xFFF6E5, 2.4);
      keyLight.position.set(4.5, 7.5, 5.0);
      keyLight.angle = Math.PI / 4.5;
      keyLight.penumbra = 0.55;
      keyLight.decay = 1.2;
      keyLight.distance = 30;

      if (!this.isMobile) {
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 1024;
        keyLight.shadow.mapSize.height = 1024;
        keyLight.shadow.camera.near = 1;
        keyLight.shadow.camera.far = 15;
        keyLight.shadow.bias = -0.001;
      }
      this.scene.add(keyLight);

      // 3. Fill Light - Soft cool slate-blue fill from the right side
      const fillLight = new THREE.DirectionalLight(0x8EB5F0, 0.85);
      fillLight.position.set(-5, 3.5, 3);
      this.scene.add(fillLight);

      // 4. Dramatic Rim Light - Vibrant Crimson-Gold backlight creating rich edge silhouettes
      const rimLight = new THREE.DirectionalLight(0xC8102E, 2.2);
      rimLight.position.set(0, -1.5, -5.5);
      this.scene.add(rimLight);

      // 5. Golden Knowledge Beacon - Soft point light radiating from the center of the books
      const bookGlow = new THREE.PointLight(0xFFB800, 1.6, 6.0, 1.5);
      bookGlow.position.set(0.2, 1.2, 0.5);
      this.scene.add(bookGlow);
    },

    buildEnvironment: function () {
      // Soft radial shadow disc on the ground
      const shadowCanvas = document.createElement('canvas');
      shadowCanvas.width = 256;
      shadowCanvas.height = 256;
      const ctx = shadowCanvas.getContext('2d');
      const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
      grad.addColorStop(0, 'rgba(10, 15, 30, 0.7)');
      grad.addColorStop(0.5, 'rgba(10, 15, 30, 0.35)');
      grad.addColorStop(1, 'rgba(10, 15, 30, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);

      const shadowTex = new THREE.CanvasTexture(shadowCanvas);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        depthWrite: false
      });
      const shadowGeo = new THREE.PlaneGeometry(6.5, 6.5);
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.set(0, -1.6, 0);
      this.worldGroup.add(shadowMesh);
    },

    // 1. The Ascending Staircase: "Every Step Takes You Closer to Excellence"
    buildStaircase: function () {
      this.staircaseGroup = new THREE.Group();
      this.stairSteps = [];

      // Cream marble material for step surfaces
      const stepMat = new THREE.MeshStandardMaterial({
        color: 0xF7F4EE,
        roughness: 0.35,
        metalness: 0.08
      });

      // Champagne Gold Trim for step borders and risers
      const goldTrimMat = new THREE.MeshStandardMaterial({
        color: 0xD4A017,
        roughness: 0.22,
        metalness: 0.85
      });

      // 5 ascending steps curling upward from bottom-left to top-right
      const stepConfigs = [
        { w: 2.3, h: 0.32, d: 1.25, x: -1.35, y: -1.35, z: 0.9, rotY: 0.08 },
        { w: 2.1, h: 0.32, d: 1.2, x: -0.8, y: -0.92, z: 0.45, rotY: 0.16 },
        { w: 1.9, h: 0.32, d: 1.15, x: -0.22, y: -0.48, z: 0.0, rotY: 0.24 },
        { w: 1.75, h: 0.32, d: 1.1, x: 0.38, y: -0.04, z: -0.45, rotY: 0.32 },
        { w: 1.6, h: 0.34, d: 1.05, x: 0.98, y: 0.42, z: -0.9, rotY: 0.40 } // Summit Platform
      ];

      stepConfigs.forEach((cfg, idx) => {
        const singleStepGroup = new THREE.Group();
        singleStepGroup.position.set(cfg.x, cfg.y, cfg.z);
        singleStepGroup.rotation.y = cfg.rotY;

        // Step block
        const blockGeo = new THREE.BoxGeometry(cfg.w, cfg.h, cfg.d);
        const blockMesh = new THREE.Mesh(blockGeo, stepMat);
        blockMesh.castShadow = !this.isMobile;
        blockMesh.receiveShadow = !this.isMobile;
        singleStepGroup.add(blockMesh);

        // Gold decorative perimeter rim on top
        const trimThickness = 0.035;
        const trimGeo = new THREE.BoxGeometry(cfg.w + 0.04, trimThickness, cfg.d + 0.04);
        const trimMesh = new THREE.Mesh(trimGeo, goldTrimMat);
        trimMesh.position.y = cfg.h / 2 + trimThickness / 2;
        trimMesh.castShadow = !this.isMobile;
        singleStepGroup.add(trimMesh);

        // Gold riser inlay accent on the front face
        const inlayGeo = new THREE.BoxGeometry(cfg.w * 0.85, 0.06, 0.02);
        const inlayMesh = new THREE.Mesh(inlayGeo, goldTrimMat);
        inlayMesh.position.set(0, -0.04, cfg.d / 2 + 0.015);
        singleStepGroup.add(inlayMesh);

        // Record initial resting position for animation
        singleStepGroup.userData = {
          targetY: cfg.y,
          stepIndex: idx
        };

        this.stairSteps.push(singleStepGroup);
        this.staircaseGroup.add(singleStepGroup);
      });

      this.worldGroup.add(this.staircaseGroup);
    },

    // Helper: Build a realistic educational hardcover book
    createBook: function (opts) {
      const bookGroup = new THREE.Group();

      const w = opts.width || 1.6;
      const h = opts.height || 0.28;
      const d = opts.depth || 1.25;

      // Cover Material
      const coverMat = new THREE.MeshStandardMaterial({
        color: opts.coverColor || 0x8B1A1A,
        roughness: 0.45,
        metalness: 0.15
      });

      // Gold Foil Stamp Material
      const goldFoilMat = new THREE.MeshStandardMaterial({
        color: 0xF5C842,
        roughness: 0.2,
        metalness: 0.9
      });

      // Cream Pages Material with subtle edge ridges
      const pageMat = new THREE.MeshStandardMaterial({
        color: 0xFFFDF5,
        roughness: 0.7,
        metalness: 0.05
      });

      // 1. Pages Block (recessed slightly from cover margins)
      const pageGeo = new THREE.BoxGeometry(w - 0.06, h - 0.04, d - 0.08);
      const pageMesh = new THREE.Mesh(pageGeo, pageMat);
      pageMesh.position.set(0.03, 0, 0);
      pageMesh.castShadow = !this.isMobile;
      pageMesh.receiveShadow = !this.isMobile;
      bookGroup.add(pageMesh);

      // 2. Top Cover Board
      const topCoverGeo = new THREE.BoxGeometry(w, 0.024, d);
      const topCover = new THREE.Mesh(topCoverGeo, coverMat);
      topCover.position.set(0, h / 2 - 0.012, 0);
      topCover.castShadow = !this.isMobile;
      bookGroup.add(topCover);

      // 3. Bottom Cover Board
      const bottomCoverGeo = new THREE.BoxGeometry(w, 0.024, d);
      const bottomCover = new THREE.Mesh(bottomCoverGeo, coverMat);
      bottomCover.position.set(0, -h / 2 + 0.012, 0);
      bottomCover.castShadow = !this.isMobile;
      bookGroup.add(bottomCover);

      // 4. Curved Book Spine
      const spineGeo = new THREE.CylinderGeometry(h / 2, h / 2, d, 16, 1, false, Math.PI / 2, Math.PI);
      const spine = new THREE.Mesh(spineGeo, coverMat);
      spine.rotation.z = Math.PI / 2;
      spine.rotation.y = Math.PI / 2;
      spine.position.set(-w / 2, 0, 0);
      bookGroup.add(spine);

      // 5. Gold Foil Spine Bands (Ribs)
      const numRibs = 4;
      for (let i = 0; i < numRibs; i++) {
        const ribZ = -d / 2 + (d / (numRibs + 1)) * (i + 1);
        const ribGeo = new THREE.TorusGeometry(h / 2 + 0.006, 0.012, 8, 16, Math.PI);
        const rib = new THREE.Mesh(ribGeo, goldFoilMat);
        rib.rotation.y = Math.PI / 2;
        rib.position.set(-w / 2, 0, ribZ);
        bookGroup.add(rib);
      }

      // 6. Gold Corner Accents on Top Cover
      const cornerGeo = new THREE.BoxGeometry(0.12, 0.03, 0.12);
      const c1 = new THREE.Mesh(cornerGeo, goldFoilMat);
      c1.position.set(w / 2 - 0.06, h / 2 - 0.008, d / 2 - 0.06);
      bookGroup.add(c1);

      const c2 = new THREE.Mesh(cornerGeo, goldFoilMat);
      c2.position.set(w / 2 - 0.06, h / 2 - 0.008, -d / 2 + 0.06);
      bookGroup.add(c2);

      // 7. Silk Bookmark Ribbon trailing off the book edge
      if (opts.hasRibbon) {
        const ribbonCurve = new THREE.CubicBezierCurve3(
          new THREE.Vector3(w / 2 - 0.1, 0, 0),
          new THREE.Vector3(w / 2 + 0.25, -0.1, 0.1),
          new THREE.Vector3(w / 2 + 0.35, -0.35, 0.2),
          new THREE.Vector3(w / 2 + 0.3, -0.55, 0.25)
        );
        const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 20, 0.02, 6, false);
        const ribbonMat = new THREE.MeshStandardMaterial({
          color: opts.ribbonColor || 0xC8102E,
          roughness: 0.3,
          metalness: 0.3
        });
        const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
        bookGroup.add(ribbonMesh);
      }

      return bookGroup;
    },

    // 2. Realistic Stack of Educational Books as the primary focal element
    buildBooks: function () {
      this.booksGroup = new THREE.Group();
      this.books = [];

      // Book 1: Crimson Red Tome (Pranamya Signature - Foundation)
      const book1 = this.createBook({
        width: 1.7,
        height: 0.3,
        depth: 1.3,
        coverColor: 0x8B1A1A,
        hasRibbon: true,
        ribbonColor: 0xFFB800
      });
      book1.position.set(-0.1, -0.25, 0.05);
      book1.rotation.y = 0.05;

      // Book 2: Deep Navy Board Exam Preparation Guide
      const book2 = this.createBook({
        width: 1.6,
        height: 0.26,
        depth: 1.25,
        coverColor: 0x0F2942,
        hasRibbon: false
      });
      book2.position.set(-0.08, 0.03, 0.06);
      book2.rotation.y = 0.22;

      // Book 3: Radiant Amber / Warm Gold Science & Mathematics Textbook
      const book3 = this.createBook({
        width: 1.5,
        height: 0.24,
        depth: 1.2,
        coverColor: 0xD4941E,
        hasRibbon: true,
        ribbonColor: 0xC8102E
      });
      book3.position.set(-0.05, 0.28, 0.08);
      book3.rotation.y = -0.14;

      // Book 4: Emerald Academic Excellence Codex (Top Book)
      const book4 = this.createBook({
        width: 1.4,
        height: 0.22,
        depth: 1.15,
        coverColor: 0x1B4D3E,
        hasRibbon: false
      });
      book4.position.set(-0.02, 0.51, 0.09);
      book4.rotation.y = 0.08;

      [book1, book2, book3, book4].forEach((b, idx) => {
        b.userData = {
          targetY: b.position.y,
          index: idx,
          initialRotY: b.rotation.y
        };
        this.books.push(b);
        this.booksGroup.add(b);
      });

      this.worldGroup.add(this.booksGroup);
    },

    // 3. Realistic Globe: "Knowledge and Global Exploration"
    buildGlobe: function () {
      this.globeGroup = new THREE.Group();
      this.globeGroup.position.set(-1.25, -0.45, 0.75);

      const brassMat = new THREE.MeshStandardMaterial({
        color: 0xD4A017,
        roughness: 0.2,
        metalness: 0.88
      });

      // Base Pedestal: Circular stepped brass
      const baseGeo1 = new THREE.CylinderGeometry(0.38, 0.44, 0.08, 32);
      const base1 = new THREE.Mesh(baseGeo1, brassMat);
      base1.position.y = 0.04;
      base1.castShadow = !this.isMobile;
      this.globeGroup.add(base1);

      const baseGeo2 = new THREE.CylinderGeometry(0.25, 0.34, 0.08, 32);
      const base2 = new THREE.Mesh(baseGeo2, brassMat);
      base2.position.y = 0.12;
      this.globeGroup.add(base2);

      // Vertical turned spindle
      const spindleGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.45, 16);
      const spindle = new THREE.Mesh(spindleGeo, brassMat);
      spindle.position.y = 0.38;
      this.globeGroup.add(spindle);

      // Semi-circular brass meridian arc tilted at 23.5 degrees (0.41 rad)
      const meridianRadius = 0.62;
      const meridianGeo = new THREE.TorusGeometry(meridianRadius, 0.025, 16, 48, Math.PI);
      const meridian = new THREE.Mesh(meridianGeo, brassMat);
      meridian.position.set(0, 0.85, 0);
      meridian.rotation.z = Math.PI / 2;
      meridian.rotation.y = -0.41;
      this.globeGroup.add(meridian);

      // Polar axis pins
      const pinGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.15, 12);
      const topPin = new THREE.Mesh(pinGeo, brassMat);
      topPin.position.set(0, 0.85 + meridianRadius, 0);
      this.globeGroup.add(topPin);

      // Globe sphere with procedural Earth continent texture
      const globeRadius = 0.52;
      const globeGeo = new THREE.SphereGeometry(globeRadius, 40, 40);

      // Generate realistic canvas map texture
      const mapCanvas = document.createElement('canvas');
      mapCanvas.width = 1024;
      mapCanvas.height = 512;
      const ctx = mapCanvas.getContext('2d');

      // 1. Deep Oceanic Blue gradient
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, 512);
      oceanGrad.addColorStop(0, '#0B223D');
      oceanGrad.addColorStop(0.5, '#102F54');
      oceanGrad.addColorStop(1, '#0B223D');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, 1024, 512);

      // 2. Latitude & Longitude Graticule Lines
      ctx.strokeStyle = 'rgba(212, 160, 23, 0.22)';
      ctx.lineWidth = 1;
      for (let y = 32; y < 512; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }
      for (let x = 64; x < 1024; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 512);
        ctx.stroke();
      }

      // Equator line in bold champagne gold
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 256);
      ctx.lineTo(1024, 256);
      ctx.stroke();

      // 3. Continent Landmasses in rich ochre and warm sand
      ctx.fillStyle = '#C69D42';
      ctx.shadowColor = '#FFD700';
      ctx.shadowBlur = 4;

      // Draw stylized world landmasses
      // Eurasia & India
      ctx.beginPath();
      ctx.ellipse(650, 210, 180, 95, 0, 0, Math.PI * 2);
      ctx.fill();
      // Indian Subcontinent Detail
      ctx.beginPath();
      ctx.moveTo(630, 240);
      ctx.lineTo(690, 240);
      ctx.lineTo(660, 310);
      ctx.closePath();
      ctx.fillStyle = '#E5C058';
      ctx.fill();

      // Africa
      ctx.fillStyle = '#C69D42';
      ctx.beginPath();
      ctx.ellipse(520, 290, 90, 110, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Americas
      ctx.beginPath();
      ctx.ellipse(280, 190, 85, 90, -0.2, 0, Math.PI * 2); // North
      ctx.ellipse(330, 350, 70, 115, 0.1, 0, Math.PI * 2); // South
      ctx.fill();

      // Australia
      ctx.beginPath();
      ctx.ellipse(820, 370, 55, 45, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowBlur = 0;

      const globeTexture = new THREE.CanvasTexture(mapCanvas);
      const globeMat = new THREE.MeshStandardMaterial({
        map: globeTexture,
        roughness: 0.35,
        metalness: 0.18
      });

      this.globeCore = new THREE.Mesh(globeGeo, globeMat);
      this.globeCore.castShadow = !this.isMobile;
      this.globeCore.receiveShadow = !this.isMobile;

      // Globe sphere tilt group (realistic 23.5 degrees)
      const tiltGroup = new THREE.Group();
      tiltGroup.position.set(0, 0.85, 0);
      tiltGroup.rotation.z = -0.41;
      tiltGroup.add(this.globeCore);

      this.globeGroup.add(tiltGroup);
      this.worldGroup.add(this.globeGroup);
    },

    // 4. Floating Hexagonal Educational Pencil: "Precision & Practice"
    buildPencil: function () {
      this.pencilGroup = new THREE.Group();

      const pencilLength = 1.6;
      const pencilRadius = 0.055;

      // Yellow Lacquered Hexagonal Barrel
      const barrelGeo = new THREE.CylinderGeometry(pencilRadius, pencilRadius, pencilLength, 6);
      const barrelMat = new THREE.MeshStandardMaterial({
        color: 0xF59E0B,
        roughness: 0.25,
        metalness: 0.1
      });
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.castShadow = !this.isMobile;
      this.pencilGroup.add(barrel);

      // Natural Cedar Wood Cone
      const coneHeight = 0.28;
      const coneGeo = new THREE.ConeGeometry(pencilRadius, coneHeight, 6);
      const coneMat = new THREE.MeshStandardMaterial({
        color: 0xE2BA86,
        roughness: 0.65,
        metalness: 0.0
      });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.y = pencilLength / 2 + coneHeight / 2;
      this.pencilGroup.add(cone);

      // Graphite Point Tip
      const tipHeight = 0.08;
      const tipGeo = new THREE.ConeGeometry(pencilRadius * 0.35, tipHeight, 6);
      const tipMat = new THREE.MeshStandardMaterial({
        color: 0x1E293B,
        roughness: 0.15,
        metalness: 0.3
      });
      const tip = new THREE.Mesh(tipGeo, tipMat);
      tip.position.y = pencilLength / 2 + coneHeight + tipHeight / 2 - 0.02;
      this.pencilGroup.add(tip);

      // Brass Ferrule with embossed ridges
      const ferruleHeight = 0.16;
      const ferruleGeo = new THREE.CylinderGeometry(pencilRadius + 0.005, pencilRadius + 0.005, ferruleHeight, 16);
      const ferruleMat = new THREE.MeshStandardMaterial({
        color: 0xD4A017,
        roughness: 0.2,
        metalness: 0.9
      });
      const ferrule = new THREE.Mesh(ferruleGeo, ferruleMat);
      ferrule.position.y = -pencilLength / 2 - ferruleHeight / 2;
      this.pencilGroup.add(ferrule);

      // Rose Eraser
      const eraserHeight = 0.14;
      const eraserGeo = new THREE.CylinderGeometry(pencilRadius, pencilRadius, eraserHeight, 16);
      const eraserMat = new THREE.MeshStandardMaterial({
        color: 0xF472B6,
        roughness: 0.8,
        metalness: 0.0
      });
      const eraser = new THREE.Mesh(eraserGeo, eraserMat);
      eraser.position.y = -pencilLength / 2 - ferruleHeight - eraserHeight / 2;
      this.pencilGroup.add(eraser);

      // Dynamic floating tilt and location
      this.pencilGroup.position.set(1.45, 1.45, 0.65);
      this.pencilGroup.rotation.set(-0.55, 0.35, 0.75);

      this.pencilGroup.userData = {
        baseY: 1.45,
        baseRotZ: 0.75
      };

      this.worldGroup.add(this.pencilGroup);
    },

    // 5. Graduation Cap (Mortarboard): "Academic Achievement & Board Excellence"
    buildGraduationCap: function () {
      this.capGroup = new THREE.Group();

      const capMat = new THREE.MeshStandardMaterial({
        color: 0x0A0F1D, // Midnight navy velvet
        roughness: 0.9,
        metalness: 0.1
      });

      const goldSilkMat = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        roughness: 0.25,
        metalness: 0.75
      });

      // 1. Skull Cap (Hemisphere fitted base)
      const skullGeo = new THREE.CylinderGeometry(0.38, 0.46, 0.26, 24);
      const skull = new THREE.Mesh(skullGeo, capMat);
      skull.position.y = 0.13;
      skull.castShadow = !this.isMobile;
      this.capGroup.add(skull);

      // 2. Square Mortarboard Diamond Plate
      const boardSize = 1.35;
      const boardThickness = 0.038;
      const boardGeo = new THREE.BoxGeometry(boardSize, boardThickness, boardSize);
      const board = new THREE.Mesh(boardGeo, capMat);
      board.position.y = 0.26 + boardThickness / 2;
      board.rotation.y = Math.PI / 4; // Diamond orientation
      board.castShadow = !this.isMobile;
      this.capGroup.add(board);

      // 3. Center Gold Dome Button
      const buttonGeo = new THREE.CylinderGeometry(0.045, 0.055, 0.025, 16);
      const button = new THREE.Mesh(buttonGeo, goldSilkMat);
      button.position.y = 0.28 + boardThickness;
      this.capGroup.add(button);

      // 4. Gold Braided Silk Tassel draping gracefully over corner
      const tasselCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 0.29 + boardThickness, 0),
        new THREE.Vector3(0.45, 0.29 + boardThickness, 0.2),
        new THREE.Vector3(0.68, 0.22, 0.35),
        new THREE.Vector3(0.72, -0.15, 0.42)
      );
      const tasselCordGeo = new THREE.TubeGeometry(tasselCurve, 16, 0.014, 8, false);
      const tasselCord = new THREE.Mesh(tasselCordGeo, goldSilkMat);
      this.capGroup.add(tasselCord);

      // Tassel Fringe Brush
      const brushGeo = new THREE.ConeGeometry(0.045, 0.18, 12);
      const brush = new THREE.Mesh(brushGeo, goldSilkMat);
      brush.position.set(0.72, -0.22, 0.42);
      this.capGroup.add(brush);

      // Placed proudly at the summit step (Step 4)
      this.capGroup.position.set(1.02, 0.88, -0.85);
      this.capGroup.rotation.set(0.12, -0.25, -0.08);

      this.capGroup.userData = {
        baseY: 0.88,
        baseRotY: -0.25
      };

      this.worldGroup.add(this.capGroup);
    },

    // 6. Subtle Supporting Educational Tools: Acrylic Set Square & Academic Stars
    buildAcademicTools: function () {
      this.toolsGroup = new THREE.Group();

      // Translucent Champagne Acrylic Set Square (Geometry Drafting Triangle)
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(1.1, 0);
      shape.lineTo(0, 0.85);
      shape.closePath();

      // Inner triangular cutout
      const hole = new THREE.Path();
      hole.moveTo(0.2, 0.18);
      hole.lineTo(0.75, 0.18);
      hole.lineTo(0.2, 0.6);
      hole.closePath();
      shape.holes.push(hole);

      const extrudeSettings = {
        depth: 0.025,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.008,
        bevelThickness: 0.008
      };

      const rulerGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      const rulerMat = new THREE.MeshPhysicalMaterial({
        color: 0xFDE68A,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.85,
        transparent: true,
        opacity: 0.9,
        ior: 1.48
      });

      const ruler = new THREE.Mesh(rulerGeo, rulerMat);
      ruler.position.set(-1.6, 1.25, -0.3);
      ruler.rotation.set(0.4, 0.6, -0.35);
      this.toolsGroup.add(ruler);

      // 3 Subtle Golden Academic Stars (Octahedrons) floating in the upper space
      const starGeo = new THREE.OctahedronGeometry(0.12, 0);
      const starMat = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        roughness: 0.2,
        metalness: 0.85
      });

      const starPositions = [
        { x: -0.6, y: 1.85, z: -0.5 },
        { x: 0.65, y: 2.1, z: 0.2 },
        { x: 1.8, y: 0.8, z: -0.4 }
      ];

      starPositions.forEach((pos, i) => {
        const star = new THREE.Mesh(starGeo, starMat);
        star.position.set(pos.x, pos.y, pos.z);
        star.userData = { baseY: pos.y, speed: 1.0 + i * 0.3 };
        this.toolsGroup.add(star);
      });

      this.worldGroup.add(this.toolsGroup);
    },

    // 7. Ambient Knowledge Dust Motes (Sunlit Library Particles)
    buildDustParticles: function () {
      const count = this.isMobile ? 24 : 48;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const scales = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 5 + 0.5;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
        scales[i] = Math.random() * 0.04 + 0.02;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Circular particle texture
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 64;
      pCanvas.height = 64;
      const pCtx = pCanvas.getContext('2d');
      const pGrad = pCtx.createRadialGradient(32, 32, 2, 32, 32, 30);
      pGrad.addColorStop(0, 'rgba(255, 215, 0, 1.0)');
      pGrad.addColorStop(0.5, 'rgba(255, 184, 0, 0.45)');
      pGrad.addColorStop(1, 'rgba(255, 184, 0, 0)');
      pCtx.fillStyle = pGrad;
      pCtx.fillRect(0, 0, 64, 64);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const pMat = new THREE.PointsMaterial({
        size: 0.12,
        map: pTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        color: 0xFFE082
      });

      this.particles = new THREE.Points(geo, pMat);
      this.worldGroup.add(this.particles);
    },

    // Timeline Entrance Animation
    playEntranceAnimation: function () {
      if (this.reducedMotion) {
        // Immediate positioning for users preferring reduced motion
        return;
      }

      // Check if GSAP is available
      if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // 1. Scene fade in
        if (this.canvas) {
          gsap.fromTo(this.canvas, { opacity: 0 }, { opacity: 1, duration: 1.2 });
        }

        // 2. Staircase steps rising sequentially
        this.stairSteps.forEach((step, i) => {
          const targetY = step.userData.targetY;
          step.position.y = targetY - 2.2;
          tl.to(step.position, {
            y: targetY,
            duration: 1.0,
            ease: 'back.out(1.2)'
          }, 0.2 + i * 0.12);
        });

        // 3. Books stack rising and rotating into position
        this.books.forEach((b, i) => {
          const targetY = b.userData.targetY;
          b.position.y = targetY - 1.8;
          b.scale.set(0.6, 0.6, 0.6);
          tl.to(b.position, {
            y: targetY,
            duration: 0.9,
            ease: 'back.out(1.4)'
          }, 0.7 + i * 0.14);
          tl.to(b.scale, {
            x: 1, y: 1, z: 1,
            duration: 0.9,
            ease: 'back.out(1.4)'
          }, 0.7 + i * 0.14);
        });

        // 4. Globe entrance with rotation
        if (this.globeGroup) {
          this.globeGroup.position.y -= 1.4;
          tl.to(this.globeGroup.position, {
            y: -0.45,
            duration: 1.1,
            ease: 'power3.out'
          }, 0.9);
        }

        // 5. Floating Pencil & Graduation Cap
        if (this.pencilGroup) {
          this.pencilGroup.position.y += 1.2;
          tl.to(this.pencilGroup.position, {
            y: this.pencilGroup.userData.baseY,
            duration: 1.2,
            ease: 'elastic.out(1, 0.75)'
          }, 1.1);
        }

        if (this.capGroup) {
          this.capGroup.position.y += 1.0;
          tl.to(this.capGroup.position, {
            y: this.capGroup.userData.baseY,
            duration: 1.3,
            ease: 'back.out(1.5)'
          }, 1.2);
        }
      }
    },

    bindEvents: function () {
      // Mouse Parallax on Desktop
      if (!this.isMobile && !this.reducedMotion) {
        window.addEventListener('mousemove', (e) => {
          const rect = this.container.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          this.mouse.targetX = (e.clientX - centerX) / (window.innerWidth / 2);
          this.mouse.targetY = (e.clientY - centerY) / (window.innerHeight / 2);
        }, { passive: true });
      }

      // Resize listener with debounce
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => this.handleResize(), 150);
      }, { passive: true });

      // Scroll interaction listener
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const heroHeight = this.container.offsetHeight || 600;
        this.scrollProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1.2);
      }, { passive: true });
    },

    setupVisibilityObserver: function () {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            this.isPaused = !entry.isIntersecting;
          });
        }, { threshold: 0.05 });

        observer.observe(this.container);
      }
    },

    handleResize: function () {
      if (!this.renderer || !this.camera || !this.container) return;

      const rect = this.container.getBoundingClientRect();
      const width = rect.width || this.container.clientWidth || 600;
      const height = rect.height || this.container.clientHeight || 550;

      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.isMobile ? 1.25 : 2));
    },

    // Main 60 FPS Render Loop with Harmonic Idle Motion
    animate: function () {
      this.animFrameId = requestAnimationFrame(() => this.animate());

      if (this.isPaused) return;

      const delta = this.clock.getDelta();
      const time = this.clock.getElapsedTime();

      // Idle Rotation & Floating
      if (!this.reducedMotion) {
        // Globe Slow Majestic Axial Rotation
        if (this.globeCore) {
          this.globeCore.rotation.y += delta * 0.28;
        }

        // Books subtle breathing float
        if (this.booksGroup) {
          this.booksGroup.position.y = Math.sin(time * 1.4) * 0.035;
        }

        // Pencil organic floating bob
        if (this.pencilGroup) {
          const baseY = this.pencilGroup.userData.baseY;
          this.pencilGroup.position.y = baseY + Math.sin(time * 1.8) * 0.06;
          this.pencilGroup.rotation.z = this.pencilGroup.userData.baseRotZ + Math.cos(time * 1.2) * 0.04;
        }

        // Graduation Cap gentle pride float
        if (this.capGroup) {
          const capBaseY = this.capGroup.userData.baseY;
          this.capGroup.position.y = capBaseY + Math.sin(time * 1.5 + 1.0) * 0.04;
        }

        // Knowledge Particles drift slowly upwards
        if (this.particles) {
          const pos = this.particles.geometry.attributes.position.array;
          for (let i = 1; i < pos.length; i += 3) {
            pos[i] += delta * 0.12;
            if (pos[i] > 3.0) {
              pos[i] = -1.8;
            }
          }
          this.particles.geometry.attributes.position.needsUpdate = true;
          this.particles.rotation.y += delta * 0.04;
        }
      }

      // Mouse Parallax Lerping (Restrained, professional motion)
      if (!this.isMobile && !this.reducedMotion && this.worldGroup) {
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

        this.worldGroup.rotation.y = this.mouse.x * 0.16;
        this.worldGroup.rotation.x = -this.mouse.y * 0.10;

        // Camera gentle offset
        this.camera.position.x = this.mouse.x * 0.35;
        this.camera.position.y = 1.8 + -this.mouse.y * 0.25;
      }

      // Scroll-based parallax depth enhancement
      if (this.scrollProgress > 0 && !this.reducedMotion) {
        this.camera.position.y = 1.8 + this.scrollProgress * 0.65;
        this.camera.position.z = 7.2 - this.scrollProgress * 0.8;
        if (this.worldGroup) {
          this.worldGroup.rotation.y = (this.mouse.x * 0.16) + (this.scrollProgress * 0.22);
        }
      }

      this.camera.lookAt(0, 0.3, 0);
      this.renderer.render(this.scene, this.camera);
    },

    destroy: function () {
      if (this.animFrameId) {
        cancelAnimationFrame(this.animFrameId);
      }
      if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
        this.renderer.dispose();
      }
      this.initialized = false;
    }
  };

  // Expose to window
  window.PranamyaHero3D = Hero3D;

  // Auto-initialize when DOM and Three.js are ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Lazy load slightly after main thread settles to ensure LCP is instant
      setTimeout(() => Hero3D.init(), 60);
    });
  } else {
    setTimeout(() => Hero3D.init(), 60);
  }
})();

