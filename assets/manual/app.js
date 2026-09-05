const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const searchInput = document.querySelector("#manual-search");
const searchStatus = document.querySelector("#search-status");
const sections = Array.from(document.querySelectorAll("[data-search-section]"));

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;
    document.querySelectorAll(".tab-button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === tab);
    });
  });
});

if (searchInput && searchStatus) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    sections.forEach((section) => {
      const text = section.textContent.toLowerCase();
      const visible = query.length === 0 || text.includes(query);
      section.classList.toggle("is-hidden", !visible);
      if (visible) {
        visibleCount += 1;
      }
    });

    searchStatus.textContent =
      query.length === 0 ? "" : `${visibleCount} 件のセクションが見つかりました`;
  });
}
