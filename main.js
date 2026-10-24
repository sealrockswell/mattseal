/* Native anchors and all milestone content work before enhancement. */
(() => {
  const lab = document.querySelector('.evolution-lab');
  if (!lab) return;
  const list = lab.querySelector('.version-selector');
  const tabs = [...list.querySelectorAll('a')];
  const panels = tabs.map(tab => document.getElementById(tab.hash.slice(1)));
  if (panels.some(panel => !panel)) return;

  const supported = matchMedia('(min-width: 1100px)');
  let activePanel = null;
  let frame = null;

  function availability() {
    panels.forEach(panel => {
      const button = panel.querySelector('.archive-load');
      button.hidden = !supported.matches || panel === activePanel;
      button.setAttribute('aria-expanded', String(panel === activePanel));
    });
  }

  function unload() {
    frame?.remove();
    frame = null;
    if (activePanel) {
      activePanel.querySelector('.archive-stage').hidden = true;
      activePanel.querySelector('figure').hidden = false;
      activePanel.classList.remove('archive-is-live');
    }
    activePanel = null;
    availability();
  }

  panels.forEach((panel, index) => {
    const load = panel.querySelector('.archive-load');
    const close = panel.querySelector('.archive-close');
    const stage = panel.querySelector('.archive-stage');
    load.addEventListener('click', () => {
      if (!supported.matches) return;
      unload();
      activePanel = panel;
      frame = document.createElement('iframe');
      frame.title = `V${index + 1} — ${panel.querySelector('h3').textContent}, historical website`;
      // Opaque origin isolates the archive from the current homepage.
      frame.setAttribute('sandbox', 'allow-scripts allow-popups allow-popups-to-escape-sandbox');
      frame.src = panel.querySelector('.archive-full').href;
      const status = panel.querySelector('.archive-status');
      status.textContent = 'Loading historical version…';
      frame.addEventListener('load', () => {
        status.textContent = 'Live historical website. Scroll inside to explore; Open full version gives you more room.';
      });
      stage.hidden = false;
      panel.querySelector('figure').hidden = true;
      panel.classList.add('archive-is-live');
      stage.append(frame);
      availability();
      close.focus();
    });
    close.addEventListener('click', () => {
      unload();
      load.focus({ preventScroll: true });
    });
  });
  supported.addEventListener('change', () => {
    const previous = activePanel;
    const restoreFocus = previous && (document.activeElement === frame || previous.querySelector('.archive-close') === document.activeElement);
    if (!supported.matches) unload();
    availability();
    if (restoreFocus && !supported.matches) previous.querySelector('.archive-full').focus();
  });
  availability();

  function select(index, focus = false) {
    if (activePanel && activePanel !== panels[index]) unload();
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (focus) tabs[index].focus();
  }

  list.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    panels[index].tabIndex = 0;
    tab.addEventListener('click', event => {
      event.preventDefault();
      select(index);
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (event.key === ' ') next = index;
      if (next === undefined) return;
      event.preventDefault();
      select(next, true);
    });
  });
  const linked = panels.findIndex(panel => `#${panel.id}` === location.hash);
  select(linked >= 0 ? linked : 0);
  window.addEventListener('hashchange', () => {
    const index = panels.findIndex(panel => `#${panel.id}` === location.hash);
    if (index >= 0) select(index);
  });
})();

/* Load only on request. The cross-origin TV remains entirely under its owner's control. */
(() => {
  const feature = document.querySelector('.tv-discovery');
  if (!feature) return;
  const load = feature.querySelector('.tv-load');
  const close = feature.querySelector('.tv-close');
  const toolbar = feature.querySelector('.tv-toolbar');
  const preview = feature.querySelector('.discovery-preview');
  const stage = feature.querySelector('#tv-stage');
  const help = feature.querySelector('.tv-help');
  const launch = feature.querySelector('.discovery-link');
  // Narrow frames add source-page overflow; tablet controls are too small for touch.
  const supported = matchMedia('(min-width: 1100px)');
  let frame = null;

  function updateAvailability() {
    feature.classList.toggle('tv-can-embed', supported.matches);
    load.setAttribute('aria-expanded', String(Boolean(frame)));
    load.hidden = !supported.matches || Boolean(frame);
    help.textContent = frame
      ? 'Use the TV’s POWER and channel controls. If playback is unavailable, launch the full site in a new tab.'
      : supported.matches
        ? 'Load the interactive TV here, then use its POWER control. No external player loads until you ask.'
        : 'For the full controls and more room to explore, launch the TV in a new tab.';
  }

  function unload() {
    frame?.remove();
    frame = null;
    toolbar.hidden = true;
    preview.hidden = false;
    feature.classList.remove('tv-is-live');
    updateAvailability();
  }

  load.addEventListener('click', () => {
    if (!supported.matches || frame) return;
    frame = document.createElement('iframe');
    frame.title = 'My 80s TV — interactive television and channel controls';
    frame.src = 'https://80s.theretrotvs.com/';
    frame.loading = 'lazy';
    frame.allow = 'autoplay; fullscreen; picture-in-picture';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.setAttribute('aria-describedby', 'tv-help');
    preview.hidden = true;
    toolbar.hidden = false;
    feature.classList.add('tv-is-live');
    stage.append(frame);
    updateAvailability();
    // Bring the toolbar into view so focus is visible and lazy loading can begin.
    close.focus();
  });
  close.addEventListener('click', () => {
    unload();
    (supported.matches ? load : launch).focus({ preventScroll: true });
  });
  supported.addEventListener('change', () => {
    if (!supported.matches && frame) {
      const focusInside = document.activeElement === frame || document.activeElement === close;
      unload();
      if (focusInside) launch.focus({ preventScroll: true });
    }
    updateAvailability();
  });
  updateAvailability();
})();
