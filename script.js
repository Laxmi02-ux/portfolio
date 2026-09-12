// =========================================================
// Content data — edit this to update the site
// =========================================================
const SKILLS = [
  {
    group: "Languages & data tools",
    items: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "Advanced Excel", level: 85 },
      { name: "HTML5 / CSS3 / JavaScript", level: 75 },
    ],
  },
  {
    group: "Libraries & frameworks",
    items: [
      { name: "Pandas / NumPy", level: 88 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Flask", level: 80 },
      { name: "Chart.js", level: 75 },
      { name: "Matplotlib / Seaborn", level: 80 },
    ],
  },
  {
    group: "Databases & analytics",
    items: [
      { name: "SQLite / MySQL", level: 85 },
      { name: "Power Query", level: 78 },
      { name: "ETL pipeline design", level: 80 },
      { name: "Data cleaning & EDA", level: 88 },
    ],
  },
  {
    group: "BI & visualization",
    items: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "Executive KPI design", level: 82 },
      { name: "Financial ratio modelling", level: 80 },
    ],
  },
  {
    group: "Machine learning & logic",
    items: [
      { name: "Linear regression", level: 82 },
      { name: "Logistic regression", level: 82 },
      { name: "Z-score anomaly detection", level: 85 },
    ],
  },
];

const PROJECTS = [
  {
    title: "AI-Powered Financial & Sales Analytics Assistant",
    year: "2026",
    desc: "A full-stack conversational BI dashboard that lets users query business metrics in plain English, instead of writing SQL themselves.",
    points: [
      "Built with Flask, SQLite, HTML/CSS/JS, Chart.js and Scikit-Learn",
      "Calculates financial ratios (ROI, Gross Profit Margin) dynamically from live data",
      "Forecasts revenue using a linear regression model",
      "Deployed on Render with GitHub CI/CD for automatic redeploys",
    ],
    tags: ["Flask", "SQLite", "Scikit-Learn", "Chart.js", "CI/CD"],
  },
  {
    title: "SmartSpend AI — Financial Anomaly Detection Platform",
    year: "2025",
    desc: "A financial analytics web app that tracks spending patterns and flags suspicious transactions before they become a problem.",
    points: [
      "Built with Python, Flask, SQLite and vanilla JavaScript",
      "Engineered a custom Z-score anomaly detection engine",
      "Automates expense monitoring and budget reporting",
    ],
    tags: ["Python", "Flask", "SQLite", "Z-Score"],
  },
  {
    title: "Customer Churn Prediction & Analysis",
    year: "2025",
    desc: "Telecom-domain analytics aimed at customer retention, built on a dataset of 7,000+ customer records.",
    points: [
      "Full EDA and data cleaning pipeline in Python and SQL",
      "Logistic regression model reaching ~79% accuracy",
      "Flags high-risk segments: month-to-month contracts, short tenure, high monthly fees",
      "Interactive Power BI dashboard for executive retention planning",
    ],
    tags: ["Python", "SQL", "Logistic Regression", "Power BI"],
  },
  {
    title: "Credit Risk Analysis Dashboard",
    year: "2025",
    desc: "Banking and finance analytics identifying loan default risk factors across 32,000+ applicant records.",
    points: [
      "Built with Python, SQLite and Power BI",
      "Feature-engineered age groups, income categories and loan-to-income ratios",
      "Visualizes borrower default patterns for credit decisioning",
    ],
    tags: ["Python", "SQLite", "Power BI", "Feature Engineering"],
  },
];

const CERTIFICATIONS = [
  { issuer: "IBM", name: "Databases and SQL for Data Science" },
  { issuer: "Meta", name: "Python for Data Analytics" },
  { issuer: "Microsoft", name: "Data Analysis and Visualization with Power BI" },
  { issuer: "Microsoft", name: "ETL in Power BI" },
  { issuer: "Johns Hopkins University", name: "HTML, CSS & JavaScript for Web Developers", score: "86.95%" },
];

// =========================================================
// Render: skills matrix
// =========================================================
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILLS.map((group) => `
    <div class="skill-group">
      <h3>${group.group}</h3>
      ${group.items.map((item) => `
        <div class="skill-item">
          <div class="skill-item-head">
            <span>${item.name}</span>
            <span>${item.level}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-level="${item.level}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

// =========================================================
// Render: projects
// =========================================================
function renderProjects() {
  const list = document.getElementById("projects-list");
  list.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-entry">
      <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <div class="project-title-row">
          <h3 class="project-title">${p.title}</h3>
          <span class="project-year">${p.year}</span>
        </div>
        <p class="project-desc">${p.desc}</p>
        <ul class="project-points">
          ${p.points.map((pt) => `<li>${pt}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

// =========================================================
// Render: certifications
// =========================================================
function renderCertifications() {
  const wrap = document.getElementById("cert-list");
  const rows = CERTIFICATIONS.map((c) => `
    <div class="ledger-row">
      <span class="font-mono text-inksoft text-sm">${c.score ? c.score : "—"}</span>
      <span>
        <span class="cert-issuer">${c.issuer}</span>
        ${c.name}
      </span>
    </div>
  `).join("");

  wrap.innerHTML = `
    <div class="ledger-row ledger-row--head">
      <span>Score</span><span>Certification</span>
    </div>
    ${rows}
  `;
}

// =========================================================
// Nav: mobile toggle
// =========================================================
function setupMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// Nav: scroll-spy active state
// =========================================================
function setupScrollSpy() {
  const sections = ["profile", "skills", "projects", "certifications", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navLinks = document.querySelectorAll("[data-nav]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// =========================================================
// Skill bars: animate on scroll into view
// =========================================================
function setupSkillBarAnimation() {
  const bars = document.querySelectorAll(".skill-bar-fill");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = `${el.dataset.level}%`;
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

// =========================================================
// Init
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  setupMobileMenu();
  setupScrollSpy();
  setupSkillBarAnimation();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
