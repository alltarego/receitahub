
const receitas = [
  { nome: "Frango Grelhado",       categoria: "Frango",  tempo: "30 min", porcoes: 4 },
  { nome: "Espaguete à Carbonara", categoria: "Massas",  tempo: "25 min", porcoes: 2 },
  { nome: "Salada Caesar",         categoria: "Saladas", tempo: "15 min", porcoes: 2 },
  { nome: "Picanha Assada",        categoria: "Carnes",  tempo: "60 min", porcoes: 6 },
  { nome: "Frango à Parmegiana",   categoria: "Frango",  tempo: "45 min", porcoes: 4 },
  { nome: "Macarrão ao Molho",     categoria: "Massas",  tempo: "20 min", porcoes: 3 },
];

let filtroAtivo = "Todos";

// ── Renderiza os cards ────────────────────────────────────────
function renderCards() {
  const grid = document.getElementById("cardsGrid");

  const filtradas = filtroAtivo === "Todos"
    ? receitas
    : receitas.filter(r => r.categoria === filtroAtivo);

  if (filtradas.length === 0) {
    grid.innerHTML = '<p class="empty">Nenhuma receita encontrada.</p>';
    return;
  }

  grid.innerHTML = filtradas.map(r => `
    <div class="card">
      <div class="card-img">[img]</div>
      <div class="card-body">
        <p class="card-categoria">${r.categoria}</p>
        <h3 class="card-nome">${r.nome}</h3>
        <p class="card-info">&#128336; ${r.tempo} &nbsp; &#128101; ${r.porcoes}</p>
        <div class="card-actions">
          <button class="btn-editar">Editar</button>
          <button class="btn-deletar">Deletar</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ── Filtros ───────────────────────────────────────────────────
function configurarFiltros() {
  const botoes = document.querySelectorAll(".filtro");

  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filtroAtivo = btn.textContent;
      renderCards();
    });
  });
}

// ── Inicializa ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  configurarFiltros();
  renderCards();
});
