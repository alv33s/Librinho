// Validação de login - Aluno
document.getElementById("loginFormAluno")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("emailAluno").value.trim();
  const password = document.getElementById("passwordAluno").value.trim();
  if (email === "admin@librinho.com" && password === "1234") {
    window.location.href = "home-aluno.html";
  } else {
    alert("Email ou senha incorretos!");
  }
});

// Validação de cadastro - Aluno
document.getElementById("cadastroFormAluno")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = document.getElementById("nomeAluno").value.trim();
  const email = document.getElementById("emailAlunoReg").value.trim();
  const password = document.getElementById("passwordAlunoReg").value.trim();
  const confirmPassword = document.getElementById("confirmPasswordAluno").value.trim();
  if (password !== confirmPassword) { alert("As senhas não conferem!"); return; }
  if (password.length < 6) { alert("A senha deve ter no mínimo 6 caracteres!"); return; }
  window.location.href = "home-aluno.html";
});

// Validação de login - Escola
document.getElementById("loginFormEscola")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailCnpj = document.getElementById("emailCnpjEscola").value.trim();
  const password = document.getElementById("passwordEscola").value.trim();
  if ((emailCnpj === "admin@escola.com" || emailCnpj === "00000000000000") && password === "1234") {
    window.location.href = "home-escola.html";
  } else {
    alert("Email/CNPJ ou senha incorretos!");
  }
});

// Validação de cadastro - Escola
document.getElementById("cadastroFormEscola")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const cnpj = document.getElementById("cnpjEscola").value.trim();
  const email = document.getElementById("emailEscola").value.trim();
  const password = document.getElementById("passwordEscola").value.trim();
  const confirmPassword = document.getElementById("confirmPasswordEscola").value.trim();
  if (password !== confirmPassword) { alert("As senhas não conferem!"); return; }
  if (password.length < 6) { alert("A senha deve ter no mínimo 6 caracteres!"); return; }
  window.location.href = "home-escola.html";
});

/* ========================= Novas funcionalidades =========================
   - Handler para ícone de download, perfil e escudo
   - Render de lista de alunos e perfil a partir de dados em memória
======================================================================== */

const STUDENTS = [
  { id: 'arthur', name: 'Arthur Mota', days: 3, class: '1º B - Escola Arco-íris', avatar: '../img/img-aluno1.svg', thisWeek: 12, lastWeek: 10, hours: 6 },
  { id: 'benicio', name: 'Benicio Filho', days: 5, class: '1º B - Escola Arco-íris', avatar: '../img/img-aluno2.svg', thisWeek: 8, lastWeek: 9, hours: 3 },
  { id: 'daniela', name: 'Daniela Dias', days: 11, class: '1º B - Escola Arco-íris', avatar: '../img/img-aluno3.svg', thisWeek: 15, lastWeek: 17, hours: 20 },
  { id: 'gabriela', name: 'Gabriela Soares', days: 8, class: '1º B - Escola Arco-íris', avatar: '../img/img-aluno4.svg', thisWeek: 15, lastWeek: 17, hours: 20 },
  { id: 'joao', name: 'João Silva', days: 5, class: '1º B - Escola Arco-íris', avatar: '../img/img-aluno5.svg', thisWeek: 7, lastWeek: 6, hours: 4 }
];

document.addEventListener('DOMContentLoaded', () => {
  // ícone de download -> downloads.html
  document.querySelectorAll('img[src$="icon-baixar.svg"]').forEach(img => {
    const anchor = img.closest('a') || img;
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'downloads.html';
    });
  });

  // ícone de perfil -> perfil-aluno.html
  document.querySelectorAll('img[src$="icon-perfil.svg"]').forEach(img => {
    const anchor = img.closest('a') || img;
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'perfil-aluno.html';
    });
  });

  // ícone de escudo -> lista-alunos.html
  document.querySelectorAll('img[src$="icon-escudo.svg"]').forEach(img => {
    const anchor = img.closest('a') || img;
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'lista-alunos.html';
    });
  });

  // Renderiza lista se estiver em lista-alunos.html
  if (document.getElementById('studentsList')) renderStudentsList();

  // Renderiza perfil se estiver em perfil-aluno.html
  if (document.getElementById('studentName')) renderStudentProfile();
});

/* Render da lista de alunos */
function renderStudentsList() {
  const container = document.getElementById('studentsList');
  container.innerHTML = '';
  STUDENTS.forEach(s => {
    const item = document.createElement('article');
    item.className = 'download-item student-item';
    item.innerHTML = `
      <a href="perfil-aluno.html?id=${encodeURIComponent(s.id)}" class="student-link" style="display:flex;align-items:center;width:100%;text-decoration:none;color:inherit;">
        <div style="display:flex;align-items:center;gap:12px;">
          <img src="${s.avatar}" alt="${s.name}" style="width:48px;height:48px;border-radius:999px;object-fit:cover;">
          <div>
            <div style="font-weight:700;color:#111827;">${s.name}</div>
            <div style="color:#6b7280;font-size:0.92rem;">${s.class}</div>
          </div>
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:8px;color:#7AC142;font-weight:600;">
          <div>${s.days} dias</div>
          <img src="../img/icon-calendar.svg" alt="cal" style="width:18px;opacity:0.7;">
        </div>
      </a>
    `;
    container.appendChild(item);
  });
}

/* Render do perfil do aluno */
/* Render da lista de alunos */
function renderStudentsList() {
  const container = document.getElementById('studentsList');
  container.innerHTML = '';
  STUDENTS.forEach(s => {
    const item = document.createElement('article');
    item.className = 'download-item student-item';
    item.innerHTML = `
      <a href="perfil-aluno.html?id=${encodeURIComponent(s.id)}" class="student-link" style="display:flex;align-items:center;width:100%;text-decoration:none;color:inherit;gap:12px;">
        <img src="${s.avatar}" alt="${s.name}" style="width:48px;height:48px;border-radius:999px;object-fit:cover;flex-shrink:0;">
        <div style="flex:1;">
          <div style="font-weight:700;color:#111827;">${s.name}</div>
          <div style="color:#6b7280;font-size:0.92rem;">${s.class}</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;color:#7AC142;font-weight:600;flex-shrink:0;">
          <span>${s.days} dias</span>
        </div>
      </a>
    `;
    container.appendChild(item);
  });
}

/* util: gera série com soma aproximada */
function generateSeries(total) {
  const arr = Array.from({length:7}, () => Math.max(0, Math.round(total/7 + (Math.random()-0.5)*3)));
  return arr;
}

/* util: desenha gráfico SVG simples */
function drawSparkline(svgEl, seriesA, seriesB) {
  const w = 360, h = 140, pad = 24;
  svgEl.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svgEl.innerHTML = '';

  const maxVal = Math.max(...seriesA, ...seriesB, 1);
  const pointsA = seriesA.map((v,i) => {
    const x = pad + (i*(w-2*pad)/6);
    const y = h - pad - (v/maxVal)*(h-2*pad);
    return `${x},${y}`;
  }).join(' ');
  const pointsB = seriesB.map((v,i) => {
    const x = pad + (i*(w-2*pad)/6);
    const y = h - pad - (v/maxVal)*(h-2*pad);
    return `${x},${y}`;
  }).join(' ');

  // grid / axes
  const grid = document.createElementNS('http://www.w3.org/2000/svg','rect');
  grid.setAttribute('x',pad); grid.setAttribute('y',pad/2); grid.setAttribute('width', w-2*pad); grid.setAttribute('height', h-1.5*pad);
  grid.setAttribute('fill','none'); grid.setAttribute('stroke','#f1f5f9'); grid.setAttribute('stroke-width','1');
  svgEl.appendChild(grid);

  // linha B (última semana) - cinza
  const polyB = document.createElementNS('http://www.w3.org/2000/svg','polyline');
  polyB.setAttribute('points', pointsB);
  polyB.setAttribute('fill','none');
  polyB.setAttribute('stroke','#9CA3AF');
  polyB.setAttribute('stroke-width','2');
  svgEl.appendChild(polyB);

  // linha A (esta semana) - verde
  const polyA = document.createElementNS('http://www.w3.org/2000/svg','polyline');
  polyA.setAttribute('points', pointsA);
  polyA.setAttribute('fill','none');
  polyA.setAttribute('stroke','#7AC142');
  polyA.setAttribute('stroke-width','3');
  svgEl.appendChild(polyA);

  // pontos
  seriesA.forEach((v,i) => {
    const x = pad + (i*(w-2*pad)/6);
    const y = h - pad - (v/maxVal)*(h-2*pad);
    const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx', x); c.setAttribute('cy', y); c.setAttribute('r', 3);
    c.setAttribute('fill','#7AC142');
    svgEl.appendChild(c);
  });
}

/* fallback: abrir downloads */
document.addEventListener('click', (e) => {
  // garantir que clicks em elementos com data-download abram downloads (caso necessário)
  const el = e.target.closest('[data-download-page]');
  if (el) { e.preventDefault(); window.location.href = 'downloads.html'; }
});