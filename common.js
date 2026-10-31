/* ============================================================
   common.js · shared code for index.html and portfolio.html
   (theme toggle, photo tiles, full-screen viewer).
   You normally do not need to edit this file.
   To change photos, covers or exhibitions, edit photos.js.
   ============================================================ */

const $ = (id) => document.getElementById(id);

// Makes text safe to place inside HTML
const esc = (s) => String(s == null ? "" : s)
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

// Display name for a category key, e.g. "portraits" -> "Portraits"
function getGenreName(catKey) {
  const match = GENRES.find(g => g[0] === catKey);
  return match ? match[1] : String(catKey).charAt(0).toUpperCase() + String(catKey).slice(1);
}

// Photos that are allowed to show on the site (hidden genres are left out)
function visiblePhotos() {
  return PHOTOS.filter(p => !HIDDEN_GENRES.includes(p.cat));
}

function getGenreCount(catKey) {
  const list = visiblePhotos();
  if (catKey === "all") return list.length;
  return list.filter(p => p.cat === catKey).length;
}

function titleOf(item) {
  return item.caption || item.alt || getGenreName(item.cat);
}

/* ---------- THEME TOGGLE ---------- */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#090b0e" : "#f9f8f5");
}

try {
  const savedTheme = localStorage.getItem("bm_portfolio_theme");
  if (savedTheme) setTheme(savedTheme);
} catch (e) {}

const themeBtn = $("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("bm_portfolio_theme", next); } catch (e) {}
  });
}

// Copyright year in the footer
const yearEl = $("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- PHOTO TILES ---------- */
const PLAY_SVG = `<div class="tile-play-indicator"><div class="play-circle"><svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div></div>`;

function renderTiles(container, items, opts) {
  opts = opts || {};
  container.innerHTML = "";

  items.forEach((item, index) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";
    tile.dataset.cat = item.cat;
    tile.setAttribute("aria-label", `Open ${titleOf(item)} in lightbox`);

    const isVideo = item.type === "video";
    const isYouTube = item.type === "youtube";
    const hasMedia = isYouTube ? Boolean(item.id) : Boolean(item.src);

    if (!hasMedia) {
      // Placeholder card
      tile.classList.add("is-placeholder");
      tile.style.aspectRatio = item.ratio || "4 / 5";
      tile.innerHTML = `
        <div class="ph-inner">
          <span class="ph-watermark">${esc(getGenreName(item.cat))} ${isVideo ? "· Clip" : isYouTube ? "· Video" : "· Frame"}</span>
          <h3 class="ph-title serif">${esc(titleOf(item))}</h3>
          <p class="ph-guide">${isVideo ? "Add MP4 file in photos.js" : isYouTube ? "Add YouTube ID in photos.js" : "Add image file in photos.js"}</p>
        </div>
        ${isVideo || isYouTube ? PLAY_SVG : ""}
      `;
    } else if (isYouTube) {
      const mediaWrapper = document.createElement("div");
      mediaWrapper.className = "tile-media-wrapper";
      mediaWrapper.style.aspectRatio = "16 / 9";
      mediaWrapper.innerHTML = `
        <img src="https://i.ytimg.com/vi/${esc(item.id)}/hqdefault.jpg" alt="${esc(item.alt || "Film preview")}" loading="lazy" decoding="async">
        ${PLAY_SVG}
        <div class="tile-overlay">
          <div class="tile-top-badge">
            <span class="tile-cat-badge">${esc(getGenreName(item.cat))}</span>
            <span class="tile-type-pill">YouTube Film</span>
          </div>
          <div class="tile-bottom-info">
            <div class="tile-title serif">${esc(titleOf(item))}</div>
            <div class="tile-action-hint">Click to play</div>
          </div>
        </div>
      `;
      tile.appendChild(mediaWrapper);
    } else if (isVideo) {
      const mediaWrapper = document.createElement("div");
      mediaWrapper.className = "tile-media-wrapper";
      mediaWrapper.style.aspectRatio = item.ratio || (item.w && item.h ? item.w + " / " + item.h : "16 / 9");

      const vid = document.createElement("video");
      vid.src = item.src;
      vid.muted = true;
      vid.loop = true;
      vid.playsInline = true;
      vid.preload = "metadata";

      mediaWrapper.appendChild(vid);
      mediaWrapper.insertAdjacentHTML("beforeend", PLAY_SVG);
      mediaWrapper.insertAdjacentHTML("beforeend", `
        <div class="tile-overlay">
          <div class="tile-top-badge">
            <span class="tile-cat-badge">${esc(getGenreName(item.cat))}</span>
            <span class="tile-type-pill">Motion Clip</span>
          </div>
          <div class="tile-bottom-info">
            <div class="tile-title serif">${esc(titleOf(item))}</div>
            <div class="tile-action-hint">Click to view in lightbox</div>
          </div>
        </div>
      `);
      tile.appendChild(mediaWrapper);
    } else {
      // Photograph
      const mediaWrapper = document.createElement("div");
      mediaWrapper.className = "tile-media-wrapper";
      if (item.w && item.h) mediaWrapper.style.aspectRatio = item.w + " / " + item.h;

      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      img.loading = "lazy";
      img.decoding = "async";
      if (item.w && item.h) {
        img.width = item.w;
        img.height = item.h;
      }

      mediaWrapper.appendChild(img);
      mediaWrapper.insertAdjacentHTML("beforeend", `
        <div class="tile-overlay">
          <div class="tile-top-badge">
            <span class="tile-cat-badge">${esc(getGenreName(item.cat))}</span>
          </div>
          <div class="tile-bottom-info">
            <div class="tile-title serif">${esc(titleOf(item))}</div>
            <div class="tile-action-hint">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
              Expand photograph
            </div>
          </div>
        </div>
      `);
      tile.appendChild(mediaWrapper);
    }

    // Visible caption under the picture (used by the Exhibitions section)
    if (opts.captions && (item.title || item.meta)) {
      tile.insertAdjacentHTML("beforeend", `
        <div class="tile-caption">
          ${item.title ? `<div class="tile-caption-title serif">${esc(item.title)}</div>` : ""}
          ${item.meta ? `<div class="tile-caption-meta">${esc(item.meta)}</div>` : ""}
        </div>
      `);
    }

    tile.addEventListener("click", () => openLightbox(items, index));
    container.appendChild(tile);
  });

  setupVideoIntersection(container);
}

function setupVideoIntersection(container) {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25 });

  container.querySelectorAll("video").forEach(v => observer.observe(v));
}

/* ============================================================
   LIGHTBOX VIEWER (full screen + keyboard + touch swipe)
   ============================================================ */
document.body.insertAdjacentHTML("beforeend", `
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Media viewer">
    <button class="lb-ctrl-btn lb-close-btn" id="lbClose" type="button" aria-label="Close lightbox (Escape)" title="Close (Esc)">
      <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <button class="lb-ctrl-btn lb-prev-btn" id="lbPrev" type="button" aria-label="Previous item (Left Arrow)" title="Previous (Left Arrow)">
      <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
    </button>
    <button class="lb-ctrl-btn lb-next-btn" id="lbNext" type="button" aria-label="Next item (Right Arrow)" title="Next (Right Arrow)">
      <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
    </button>

    <div class="lb-stage-container" id="lbStageContainer">
      <div class="lb-media-frame" id="lbStage"></div>
    </div>

    <div class="lb-bottom-bar">
      <div class="lb-caption-group">
        <span class="lb-cat-tag" id="lbCatTag"></span>
        <span class="lb-title-text" id="lbTitleText"></span>
      </div>
      <div class="lb-counter" id="lbCounter"></div>
    </div>
  </div>
`);

const lb = $("lightbox");
const lbStage = $("lbStage");
const lbCatTag = $("lbCatTag");
const lbTitleText = $("lbTitleText");
const lbCounter = $("lbCounter");
const lbClose = $("lbClose");
const lbPrev = $("lbPrev");
const lbNext = $("lbNext");

let lbItems = [];
let activeLightboxIndex = -1;
let priorFocusedElement = null;

function renderLightboxContent(index) {
  if (!lbItems.length) return;
  activeLightboxIndex = (index + lbItems.length) % lbItems.length;
  const item = lbItems[activeLightboxIndex];

  lbStage.innerHTML = "";

  const isVideo = item.type === "video";
  const isYouTube = item.type === "youtube";

  if (isYouTube && item.id) {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(item.id)}?autoplay=1&rel=0&modestbranding=1`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    iframe.allowFullscreen = true;
    iframe.title = titleOf(item);
    lbStage.appendChild(iframe);
  } else if (isVideo && item.src) {
    const video = document.createElement("video");
    video.src = item.src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;
    lbStage.appendChild(video);
  } else if (!isVideo && !isYouTube && item.src) {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || "";
    img.decoding = "async";
    lbStage.appendChild(img);
  } else {
    const card = document.createElement("div");
    card.className = "lb-placeholder-card";
    card.style.setProperty("--lb-ratio", item.ratio || "4 / 3");
    card.innerHTML = `
      <div>
        <div class="genre">${esc(getGenreName(item.cat))} ${isVideo ? "Motion Clip" : isYouTube ? "YouTube Film" : "Photograph"}</div>
        <h3 class="caption serif">${esc(titleOf(item))}</h3>
      </div>
      <div class="instruction">
        This is currently a placeholder tile. To display your actual file, open <code>photos.js</code> and set <code>src: "images/your-file.jpg"</code> for this item.
      </div>
    `;
    lbStage.appendChild(card);
  }

  lbCatTag.textContent = getGenreName(item.cat);
  lbTitleText.textContent = titleOf(item);
  lbCounter.textContent = `${String(activeLightboxIndex + 1).padStart(2, "0")} / ${String(lbItems.length).padStart(2, "0")}`;
}

function openLightbox(items, index) {
  lbItems = items;
  priorFocusedElement = document.activeElement;
  renderLightboxContent(index);
  lb.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lbClose.focus();
}

function closeLightbox() {
  lb.classList.remove("is-open");
  lbStage.innerHTML = "";
  document.body.style.overflow = "";
  if (priorFocusedElement) priorFocusedElement.focus();
}

lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", () => renderLightboxContent(activeLightboxIndex - 1));
lbNext.addEventListener("click", () => renderLightboxContent(activeLightboxIndex + 1));

// Close when clicking the empty backdrop
lb.addEventListener("click", (e) => {
  if (e.target === lb || e.target === $("lbStageContainer")) closeLightbox();
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") renderLightboxContent(activeLightboxIndex - 1);
  if (e.key === "ArrowRight") renderLightboxContent(activeLightboxIndex + 1);
});

// Mobile swipe
let touchStartX = 0;
let touchStartY = 0;

lb.addEventListener("touchstart", (e) => {
  if (!e.touches || e.touches.length === 0) return;
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive: true });

lb.addEventListener("touchend", (e) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const diffX = e.changedTouches[0].clientX - touchStartX;
  const diffY = e.changedTouches[0].clientY - touchStartY;

  if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
    renderLightboxContent(activeLightboxIndex + (diffX < 0 ? 1 : -1));
  }
}, { passive: true });
