const STORAGE_KEY = "blt-roadmap-v1";
const TARGET_DATE = "2030-04-30";

const defaultGoals = [
  {
    id: "foundation",
    title: "Program foundation",
    description: "Create the team structure, documentation habits, safety culture, budget ownership, and review cadence needed for a multi-year program.",
    category: "Program",
    dueDate: "2026-12-15",
    status: "in-progress",
    parentId: null
  },
  {
    id: "requirements",
    title: "Define SpaceShot mission requirements",
    description: "Agree on the mission-level definition of success, constraints, responsibilities, and evidence required at each major review.",
    category: "Program",
    dueDate: "2027-02-15",
    status: "todo",
    parentId: "foundation"
  },
  {
    id: "funding",
    title: "Build multi-year funding & sponsorship plan",
    description: "Create a realistic funding model, sponsor pipeline, purchasing process, and reserve strategy for testing and launch operations.",
    category: "Program",
    dueDate: "2027-05-01",
    status: "todo",
    parentId: "foundation"
  },
  {
    id: "team-training",
    title: "Establish member training pathway",
    description: "Create repeatable onboarding and subsystem training so knowledge survives leadership turnover and new members can contribute quickly.",
    category: "Program",
    dueDate: "2027-06-01",
    status: "todo",
    parentId: "foundation"
  },
  {
    id: "propulsion-path",
    title: "Mature liquid propulsion workstream",
    description: "Progress through design reviews and increasingly integrated tests while maintaining clear test readiness and safety gates.",
    category: "Propulsion",
    dueDate: "2028-06-01",
    status: "todo",
    parentId: null
  },
  {
    id: "prop-design-review",
    title: "Complete propulsion preliminary design review",
    description: "Document architecture, interfaces, risks, verification approach, and open decisions for club review.",
    category: "Propulsion",
    dueDate: "2027-08-15",
    status: "todo",
    parentId: "propulsion-path"
  },
  {
    id: "prop-test-readiness",
    title: "Establish propulsion test-readiness process",
    description: "Standardize pre-test checklists, hazard review, instrumentation readiness, data ownership, and post-test review practices.",
    category: "Propulsion",
    dueDate: "2027-11-15",
    status: "todo",
    parentId: "propulsion-path"
  },
  {
    id: "structures-path",
    title: "Develop flight structures & recovery",
    description: "Advance airframe, interfaces, recovery architecture, manufacturability, and inspection practices toward an integrated flight vehicle.",
    category: "Structures",
    dueDate: "2028-09-01",
    status: "todo",
    parentId: null
  },
  {
    id: "structures-pdr",
    title: "Complete structures preliminary design review",
    description: "Baseline structural concepts, interfaces, loads assumptions, fabrication approach, and verification plan.",
    category: "Structures",
    dueDate: "2027-10-15",
    status: "todo",
    parentId: "structures-path"
  },
  {
    id: "avionics-path",
    title: "Develop avionics & telemetry platform",
    description: "Build a maintainable flight-computing, sensing, telemetry, and ground-data workflow with staged verification.",
    category: "Avionics",
    dueDate: "2028-08-01",
    status: "todo",
    parentId: null
  },
  {
    id: "avionics-prototype",
    title: "Validate avionics prototype stack",
    description: "Demonstrate the core sensing, logging, telemetry, and recovery-control workflow in representative tests.",
    category: "Avionics",
    dueDate: "2027-12-01",
    status: "todo",
    parentId: "avionics-path"
  },
  {
    id: "ground-systems",
    title: "Develop ground systems & operations",
    description: "Create the tooling, procedures, roles, communications, and site-readiness practices required to support integrated testing and flight operations.",
    category: "Operations",
    dueDate: "2029-01-15",
    status: "todo",
    parentId: null
  },
  {
    id: "integrated-vehicle",
    title: "Integrated vehicle campaign",
    description: "Bring the major workstreams together through formal integration reviews, rehearsals, and progressive vehicle-level validation.",
    category: "Integration",
    dueDate: "2029-06-15",
    status: "todo",
    parentId: null
  },
  {
    id: "cdr",
    title: "Complete critical design review",
    description: "Freeze the primary vehicle configuration and confirm interfaces, risks, verification plans, ownership, and remaining work.",
    category: "Integration",
    dueDate: "2028-12-15",
    status: "todo",
    parentId: "integrated-vehicle"
  },
  {
    id: "full-integration",
    title: "Complete full-system integration rehearsal",
    description: "Run an end-to-end team rehearsal covering vehicle, ground systems, data flow, procedures, communications, and decision gates.",
    category: "Integration",
    dueDate: "2029-04-15",
    status: "todo",
    parentId: "integrated-vehicle"
  },
  {
    id: "flight-campaign",
    title: "Flight-test campaign",
    description: "Use progressive flight opportunities to validate operations, recovery, avionics, interfaces, team execution, and post-flight review practices.",
    category: "Flight Test",
    dueDate: "2030-02-01",
    status: "todo",
    parentId: null
  },
  {
    id: "dress-rehearsal",
    title: "Complete mission dress rehearsal",
    description: "Execute the complete launch-day process with the final team structure, checklists, communications, and go/no-go criteria.",
    category: "Flight Test",
    dueDate: "2030-02-15",
    status: "todo",
    parentId: "flight-campaign"
  },
  {
    id: "spaceshot-readiness",
    title: "SpaceShot readiness review",
    description: "Close mission-critical actions and confirm vehicle, team, site, documentation, logistics, and contingency readiness.",
    category: "Mission",
    dueDate: "2030-03-15",
    status: "todo",
    parentId: null
  },
  {
    id: "spaceshot",
    title: "Liquid SpaceShot attempt",
    description: "BLT's April 2030 mission milestone.",
    category: "Mission",
    dueDate: TARGET_DATE,
    status: "todo",
    parentId: "spaceshot-readiness"
  }
];

const categoryColors = {
  Program: "#ff7144",
  Propulsion: "#ffb65c",
  Structures: "#8d9eff",
  Avionics: "#60c8ff",
  Operations: "#a58cff",
  Integration: "#61d6a4",
  "Flight Test": "#ff84b7",
  Mission: "#ffd166"
};

let goals = loadGoals();
let filters = { search: "", status: "all", category: "all" };
let expanded = new Set();

const els = {
  roadmap: document.querySelector("#roadmap"),
  emptyState: document.querySelector("#emptyState"),
  overallProgress: document.querySelector("#overallProgress"),
  overallPercent: document.querySelector("#overallPercent"),
  progressSummary: document.querySelector("#progressSummary"),
  nextMilestone: document.querySelector("#nextMilestone"),
  timeRemaining: document.querySelector("#timeRemaining"),
  yearRail: document.querySelector("#yearRail"),
  statsGrid: document.querySelector("#statsGrid"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  categoryFilter: document.querySelector("#categoryFilter"),
  addGoalTopBtn: document.querySelector("#addGoalTopBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  expandAllBtn: document.querySelector("#expandAllBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  goalDialog: document.querySelector("#goalDialog"),
  goalForm: document.querySelector("#goalForm"),
  goalId: document.querySelector("#goalId"),
  goalTitle: document.querySelector("#goalTitle"),
  goalDescription: document.querySelector("#goalDescription"),
  goalCategory: document.querySelector("#goalCategory"),
  goalDueDate: document.querySelector("#goalDueDate"),
  goalStatus: document.querySelector("#goalStatus"),
  goalParent: document.querySelector("#goalParent"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogEyebrow: document.querySelector("#dialogEyebrow"),
  deleteGoalBtn: document.querySelector("#deleteGoalBtn"),
  closeDialogBtn: document.querySelector("#closeDialogBtn"),
  cancelDialogBtn: document.querySelector("#cancelDialogBtn"),
  categoryOptions: document.querySelector("#categoryOptions"),
  toast: document.querySelector("#toast")
};

function loadGoals() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) && saved.length ? saved : structuredClone(defaultGoals);
  } catch {
    return structuredClone(defaultGoals);
  }
}

function saveGoals(message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(goals));
  render();
  if (message) showToast(message);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function uid() {
  return `goal-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function safeText(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function prettyDate(dateString) {
  if (!dateString) return "No date";
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function statusLabel(status) {
  return ({ todo: "Not started", "in-progress": "In progress", blocked: "Blocked", done: "Complete" })[status] || status;
}

function getChildren(parentId) {
  return goals.filter(goal => goal.parentId === parentId).sort((a, b) => a.dueDate.localeCompare(b.dueDate));
}

function descendantsOf(id) {
  const found = [];
  function walk(parentId) {
    getChildren(parentId).forEach(child => {
      found.push(child.id);
      walk(child.id);
    });
  }
  walk(id);
  return found;
}

function goalDepth(goal) {
  let depth = 0;
  let current = goal;
  const visited = new Set();
  while (current?.parentId && depth < 8 && !visited.has(current.id)) {
    visited.add(current.id);
    current = goals.find(g => g.id === current.parentId);
    depth++;
  }
  return depth;
}

function matchesFilters(goal) {
  const search = filters.search.trim().toLowerCase();
  const haystack = `${goal.title} ${goal.description || ""} ${goal.category || ""}`.toLowerCase();
  const searchMatch = !search || haystack.includes(search);
  const statusMatch = filters.status === "all" || goal.status === filters.status;
  const categoryMatch = filters.category === "all" || goal.category === filters.category;
  return searchMatch && statusMatch && categoryMatch;
}

function buildVisibleGoals() {
  const directMatches = new Set(goals.filter(matchesFilters).map(g => g.id));
  const visible = new Set(directMatches);

  directMatches.forEach(id => {
    let current = goals.find(g => g.id === id);
    while (current?.parentId) {
      visible.add(current.parentId);
      current = goals.find(g => g.id === current.parentId);
    }
  });

  return visible;
}

function renderRoadmap() {
  const visible = buildVisibleGoals();
  const roots = getChildren(null);
  let html = "";

  function renderBranch(goal) {
    if (!visible.has(goal.id)) return;
    const depth = goalDepth(goal);
    const children = getChildren(goal.id);
    const isExpanded = expanded.has(goal.id) || filters.search || filters.status !== "all" || filters.category !== "all";
    const color = categoryColors[goal.category] || "#ff7a3d";
    const childLabel = children.length ? `${children.length} subgoal${children.length === 1 ? "" : "s"}` : "";

    html += `
      <article class="goal-card ${goal.status === "done" ? "is-done" : ""} ${isExpanded ? "expanded" : ""}" style="--depth:${depth};--category-color:${color}" data-id="${safeText(goal.id)}">
        <div class="goal-main">
          <button class="goal-check ${goal.status === "done" ? "checked" : ""}" type="button" data-action="toggle-done" aria-label="${goal.status === "done" ? "Mark incomplete" : "Mark complete"}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4.2 4.2L19 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="goal-content" data-action="expand" role="button" tabindex="0" aria-label="${isExpanded ? "Collapse" : "Expand"} ${safeText(goal.title)}">
            <div class="goal-topline">
              <h3 class="goal-title">${safeText(goal.title)}</h3>
              <span class="category-pill">${safeText(goal.category || "General")}</span>
              <span class="badge ${safeText(goal.status)}">${safeText(statusLabel(goal.status))}</span>
              ${childLabel ? `<span class="child-count">${childLabel}</span>` : ""}
            </div>
            ${goal.description ? `<p class="goal-description">${safeText(goal.description)}</p>` : ""}
          </div>
          <div class="goal-side">
            <span class="date-pill">${prettyDate(goal.dueDate)}</span>
            <div class="goal-actions">
              <button class="icon-button" type="button" data-action="add-child" aria-label="Add subgoal" title="Add subgoal">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </button>
              <button class="icon-button" type="button" data-action="edit" aria-label="Edit goal" title="Edit goal">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="1.4" fill="currentColor"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/><circle cx="18" cy="12" r="1.4" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="goal-details">
          <div class="detail-item"><span>Workstream</span><strong>${safeText(goal.category || "General")}</strong></div>
          <div class="detail-item"><span>Due</span><strong>${prettyDate(goal.dueDate)}</strong></div>
          <div class="detail-item"><span>Status</span><strong>${safeText(statusLabel(goal.status))}</strong></div>
          <button class="button button-secondary" type="button" data-action="edit">Edit details</button>
        </div>
      </article>`;

    if (isExpanded || expanded.has(goal.id)) {
      children.forEach(renderBranch);
    }
  }

  roots.forEach(renderBranch);
  els.roadmap.innerHTML = html;
  els.emptyState.hidden = Boolean(html.trim());
}

function renderProgress() {
  const completed = goals.filter(g => g.status === "done").length;
  const total = goals.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  els.overallProgress.style.width = `${percent}%`;
  els.overallPercent.textContent = `${percent}%`;
  els.progressSummary.textContent = `${completed} of ${total} goals complete`;

  const dial = document.querySelector("#progressDial");
  if (dial) dial.style.setProperty("--mission-progress", `${percent * 3.6}deg`);

  const next = goals
    .filter(g => g.status !== "done" && g.dueDate)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))[0];
  els.nextMilestone.textContent = next ? `Next: ${next.title} · ${prettyDate(next.dueDate)}` : "All roadmap goals complete";
}

function renderTimeRemaining() {
  const target = new Date(`${TARGET_DATE}T23:59:59`);
  const now = new Date();
  const days = Math.max(0, Math.ceil((target - now) / 86400000));
  if (!days) {
    els.timeRemaining.textContent = "Target date reached";
    return;
  }
  const years = Math.floor(days / 365.2425);
  const months = Math.floor((days - years * 365.2425) / 30.44);
  els.timeRemaining.textContent = `${years}y ${months}m • ${days.toLocaleString()} days`;
}

function renderYearRail() {
  const startYear = 2026;
  const endYear = 2030;
  const nowYear = new Date().getFullYear();
  els.yearRail.innerHTML = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
    .map(year => `<div class="year-chip ${year === nowYear ? "current" : ""}">${year}</div>`)
    .join("");
}

function renderStats() {
  const done = goals.filter(g => g.status === "done").length;
  const active = goals.filter(g => g.status === "in-progress").length;
  const blocked = goals.filter(g => g.status === "blocked").length;
  const categories = new Set(goals.map(g => g.category).filter(Boolean)).size;

  const stats = [
    {
      value: goals.length,
      label: "Total objectives",
      note: `${categories} active workstream${categories === 1 ? "" : "s"} across the mission.`,
      icon: '<path d="M5 6h14M5 12h14M5 18h9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
    },
    {
      value: done,
      label: "Complete",
      note: goals.length ? `${Math.round((done / goals.length) * 100)}% of the roadmap has been closed.` : "No goals yet.",
      icon: '<path d="m5 12 4.2 4.2L19 6.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      value: active,
      label: "In progress",
      note: "Objectives currently moving through execution.",
      icon: '<path d="M12 3a9 9 0 1 0 9 9M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    },
    {
      value: blocked,
      label: "Blocked",
      note: blocked ? "Needs attention before downstream work can move." : "No blockers currently recorded.",
      icon: '<path d="M12 8v5m0 3.2v.1M10.4 4.7 3.6 17a2 2 0 0 0 1.7 3h13.4a2 2 0 0 0 1.7-3L13.6 4.7a1.8 1.8 0 0 0-3.2 0Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
    }
  ];

  els.statsGrid.innerHTML = stats.map(stat => `
    <article class="stat-card">
      <div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${stat.icon}</svg></div>
      <div class="stat-top">
        <div>
          <span class="stat-label">${safeText(stat.label)}</span>
          <strong class="stat-value">${safeText(stat.value)}</strong>
        </div>
      </div>
      <span class="stat-note">${safeText(stat.note)}</span>
    </article>`).join("");
}

function renderFilters() {
  const categories = [...new Set(goals.map(g => g.category).filter(Boolean))].sort();
  const current = els.categoryFilter.value || filters.category;
  els.categoryFilter.innerHTML = `<option value="all">All workstreams</option>` + categories
    .map(category => `<option value="${safeText(category)}">${safeText(category)}</option>`)
    .join("");
  els.categoryFilter.value = categories.includes(current) ? current : "all";
  filters.category = els.categoryFilter.value;

  els.categoryOptions.innerHTML = categories.map(category => `<option value="${safeText(category)}"></option>`).join("");
}

function render() {
  renderFilters();
  renderProgress();
  renderTimeRemaining();
  renderYearRail();
  renderRoadmap();
  renderStats();
}

function populateParentOptions(currentId = null, preselectedParent = null) {
  const excluded = new Set(currentId ? [currentId, ...descendantsOf(currentId)] : []);
  const candidates = goals.filter(goal => !excluded.has(goal.id)).sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  els.goalParent.innerHTML = `<option value="">Top-level goal</option>` + candidates.map(goal => {
    const depth = goalDepth(goal);
    const indent = "— ".repeat(depth);
    return `<option value="${safeText(goal.id)}">${safeText(indent + goal.title)}</option>`;
  }).join("");
  els.goalParent.value = preselectedParent || "";
}

function openGoalDialog(goal = null, parentId = null) {
  const editing = Boolean(goal);
  els.goalForm.reset();
  els.goalId.value = goal?.id || "";
  els.dialogEyebrow.textContent = editing ? "Edit roadmap item" : parentId ? "New subgoal" : "New roadmap item";
  els.dialogTitle.textContent = editing ? "Edit goal" : "Add goal";
  els.deleteGoalBtn.hidden = !editing;

  populateParentOptions(goal?.id || null, goal?.parentId || parentId || null);

  els.goalTitle.value = goal?.title || "";
  els.goalDescription.value = goal?.description || "";
  els.goalCategory.value = goal?.category || "Program";
  els.goalDueDate.value = goal?.dueDate || new Date().toISOString().slice(0, 10);
  els.goalStatus.value = goal?.status || "todo";
  els.goalParent.value = goal?.parentId || parentId || "";

  els.goalDialog.showModal();
  setTimeout(() => els.goalTitle.focus(), 30);
}

function closeGoalDialog() {
  els.goalDialog.close();
}

function handleGoalSubmit(event) {
  event.preventDefault();
  const id = els.goalId.value || uid();
  const parentId = els.goalParent.value || null;
  const goal = {
    id,
    title: els.goalTitle.value.trim(),
    description: els.goalDescription.value.trim(),
    category: els.goalCategory.value.trim() || "General",
    dueDate: els.goalDueDate.value,
    status: els.goalStatus.value,
    parentId
  };

  if (!goal.title) return;

  const index = goals.findIndex(g => g.id === id);
  if (index >= 0) {
    goals[index] = goal;
    saveGoals("Goal updated");
  } else {
    goals.push(goal);
    if (parentId) expanded.add(parentId);
    saveGoals("Goal added");
  }
  closeGoalDialog();
}

function deleteGoal(id) {
  const goal = goals.find(g => g.id === id);
  if (!goal) return;
  const descendants = descendantsOf(id);
  const count = descendants.length;
  const message = count
    ? `Delete “${goal.title}” and its ${count} subgoal${count === 1 ? "" : "s"}?`
    : `Delete “${goal.title}”?`;

  if (!confirm(message)) return;
  const remove = new Set([id, ...descendants]);
  goals = goals.filter(g => !remove.has(g.id));
  remove.forEach(goalId => expanded.delete(goalId));
  saveGoals("Goal deleted");
  closeGoalDialog();
}

function toggleDone(id) {
  const goal = goals.find(g => g.id === id);
  if (!goal) return;
  goal.status = goal.status === "done" ? "todo" : "done";
  saveGoals(goal.status === "done" ? "Goal completed" : "Goal reopened");
}

function handleRoadmapClick(event) {
  const card = event.target.closest(".goal-card");
  if (!card) return;
  const id = card.dataset.id;
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "toggle-done") toggleDone(id);
  if (action === "edit") openGoalDialog(goals.find(g => g.id === id));
  if (action === "add-child") openGoalDialog(null, id);
  if (action === "expand") {
    expanded.has(id) ? expanded.delete(id) : expanded.add(id);
    renderRoadmap();
  }
}

function exportRoadmap() {
  const payload = {
    club: "BLT Rocketry",
    mission: "Liquid SpaceShot",
    targetDate: TARGET_DATE,
    exportedAt: new Date().toISOString(),
    goals
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `blt-roadmap-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast("Roadmap exported");
}

function importRoadmap(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const importedGoals = Array.isArray(data) ? data : data.goals;
      if (!Array.isArray(importedGoals)) throw new Error("No goals array found");

      const clean = importedGoals.map((goal, index) => ({
        id: String(goal.id || `imported-${index}-${Date.now()}`),
        title: String(goal.title || "Untitled goal"),
        description: String(goal.description || ""),
        category: String(goal.category || "General"),
        dueDate: /^\d{4}-\d{2}-\d{2}$/.test(goal.dueDate) ? goal.dueDate : TARGET_DATE,
        status: ["todo", "in-progress", "blocked", "done"].includes(goal.status) ? goal.status : "todo",
        parentId: goal.parentId ? String(goal.parentId) : null
      }));

      const ids = new Set(clean.map(g => g.id));
      clean.forEach(goal => { if (goal.parentId && !ids.has(goal.parentId)) goal.parentId = null; });
      goals = clean;
      expanded.clear();
      saveGoals("Roadmap imported");
    } catch (error) {
      console.error(error);
      alert("That file does not look like a valid BLT roadmap JSON export.");
    } finally {
      els.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function resetRoadmap() {
  if (!confirm("Reset every roadmap item back to the original BLT starter roadmap? This will overwrite your local changes.")) return;
  goals = structuredClone(defaultGoals);
  expanded.clear();
  saveGoals("Starter roadmap restored");
}

els.searchInput.addEventListener("input", event => {
  filters.search = event.target.value;
  renderRoadmap();
});

els.statusFilter.addEventListener("change", event => {
  filters.status = event.target.value;
  renderRoadmap();
});

els.categoryFilter.addEventListener("change", event => {
  filters.category = event.target.value;
  renderRoadmap();
});

els.addGoalTopBtn.addEventListener("click", () => openGoalDialog());
els.goalForm.addEventListener("submit", handleGoalSubmit);
els.closeDialogBtn.addEventListener("click", closeGoalDialog);
els.cancelDialogBtn.addEventListener("click", closeGoalDialog);
els.deleteGoalBtn.addEventListener("click", () => deleteGoal(els.goalId.value));
els.roadmap.addEventListener("click", handleRoadmapClick);
els.exportBtn.addEventListener("click", exportRoadmap);
els.importInput.addEventListener("change", event => {
  const [file] = event.target.files;
  if (file) importRoadmap(file);
});
els.resetBtn.addEventListener("click", resetRoadmap);

els.expandAllBtn.addEventListener("click", () => {
  const allExpanded = goals.every(goal => expanded.has(goal.id) || getChildren(goal.id).length === 0);
  if (allExpanded) {
    expanded.clear();
    els.expandAllBtn.textContent = "Expand all";
  } else {
    goals.forEach(goal => { if (getChildren(goal.id).length) expanded.add(goal.id); });
    els.expandAllBtn.textContent = "Collapse all";
  }
  renderRoadmap();
});

els.goalDialog.addEventListener("click", event => {
  if (event.target === els.goalDialog) closeGoalDialog();
});

window.addEventListener("storage", event => {
  if (event.key === STORAGE_KEY) {
    goals = loadGoals();
    render();
    showToast("Roadmap refreshed from another tab");
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    els.searchInput.focus();
  }
  if (event.key === "Escape" && els.goalDialog.open) closeGoalDialog();
  if ((event.key === "Enter" || event.key === " ") && document.activeElement?.matches?.('[data-action="expand"]')) {
    event.preventDefault();
    document.activeElement.click();
  }
});

render();
