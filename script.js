// Datos de los animales (Estadísticas base reales de D&D 5e)
const animals = [
    { 
        id: 1, name: "Chacal", type: "Bestia Pequeña", emoji: "🐺", ac: 12, hitDice: "1d6", hitDiceBonus: 0, speed: "40 pies", 
        stats: { str: 8, dex: 15, con: 11, int: 3, wis: 12, cha: 6 },
        skills: "Percepción +3", senses: "Percepción pasiva 13",
        traits: [
            { name: "Olfato y oído agudizados", desc: "Ventaja en pruebas de Sabiduría (Percepción) basadas en el oído o el olfato." },
            { name: "Tácticas de manada", desc: "Ventaja en ataque si un aliado está a 5 pies y no incapacitado." }
        ],
        actions: [
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +1 al ataque, alcance 5 pies, un objetivo. Impacto: 1 (1d4-1) puntos de daño perforante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/225-chacal" 
    },
    { 
        id: 2, name: "Simio", type: "Bestia Mediana", emoji: "🦍", ac: 12, hitDice: "3d8", hitDiceBonus: 6, speed: "30 pies, 30 pies escalando", 
        stats: { str: 16, dex: 14, con: 14, int: 6, wis: 12, cha: 7 },
        skills: "Atletismo +5, Percepción +3", senses: "Percepción pasiva 13",
        traits: [],
        actions: [
            { name: "Multiataque", desc: "El simio realiza dos ataques de puños." },
            { name: "Puño", desc: "Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 6 (1d6+3) puntos de daño contundente." },
            { name: "Roca", desc: "Ataque de arma a distancia: +5 al ataque, alcance 25/50 pies, un objetivo. Impacto: 6 (1d6+3) puntos de daño contundente." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/284-simio" 
    },
    { 
        id: 3, name: "Babuino", type: "Bestia Pequeña", emoji: "🐒", ac: 12, hitDice: "1d6", hitDiceBonus: 0, speed: "30 pies, 30 pies escalando", 
        stats: { str: 8, dex: 14, con: 11, int: 4, wis: 12, cha: 6 },
        skills: "-", senses: "Percepción pasiva 11",
        traits: [
            { name: "Tácticas de manada", desc: "Ventaja en ataque si un aliado babuino está a 5 pies y no incapacitado." }
        ],
        actions: [
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +1 al ataque, alcance 5 pies, un objetivo. Impacto: 1 (1d4-1) puntos de daño perforante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/209-babuino" 
    },
    { 
        id: 4, name: "Pico de Hacha", type: "Bestia Grande", emoji: "🦤", ac: 11, hitDice: "3d10", hitDiceBonus: 3, speed: "50 pies", 
        stats: { str: 14, dex: 12, con: 12, int: 2, wis: 10, cha: 5 },
        skills: "-", senses: "Percepción pasiva 10",
        traits: [],
        actions: [
            { name: "Pico", desc: "Ataque de arma cuerpo a cuerpo: +4 al ataque, alcance 5 pies, un objetivo. Impacto: 6 (1d8+2) puntos de daño cortante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/244-hachapico" 
    },
    { 
        id: 5, name: "Oso Negro", type: "Bestia Mediana", emoji: "🐻", ac: 11, hitDice: "3d8", hitDiceBonus: 6, speed: "40 pies, 30 pies escalando", 
        stats: { str: 15, dex: 10, con: 14, int: 2, wis: 12, cha: 7 },
        skills: "Percepción +3", senses: "Percepción pasiva 13",
        traits: [
            { name: "Olfato agudizado", desc: "Ventaja en pruebas de Sabiduría (Percepción) basadas en el olfato." }
        ],
        actions: [
            { name: "Multiataque", desc: "El oso realiza dos ataques: uno con su mordisco y uno con sus garras." },
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +3 al ataque, alcance 5 pies, un objetivo. Impacto: 5 (1d6+2) puntos de daño perforante." },
            { name: "Garras", desc: "Ataque de arma cuerpo a cuerpo: +3 al ataque, alcance 5 pies, un objetivo. Impacto: 7 (2d4+2) puntos de daño cortante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/263-oso-negro" 
    },
    { 
        id: 6, name: "Comadreja Gigante", type: "Bestia Mediana", emoji: "🦦", ac: 13, hitDice: "2d8", hitDiceBonus: 0, speed: "40 pies", 
        stats: { str: 11, dex: 16, con: 10, int: 4, wis: 12, cha: 5 },
        skills: "Percepción +3, Sigilo +5", senses: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        traits: [
            { name: "Oído y olfato agudizado", desc: "Ventaja en pruebas de Sabiduría (Percepción) basadas en el oído o en el olfato." }
        ],
        actions: [
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 5 (1d4+3) puntos de daño perforante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/231-comadreja-gigante" 
    },
    { 
        id: 7, name: "Hiena Gigante", type: "Bestia Grande", emoji: "🐕", ac: 12, hitDice: "6d10", hitDiceBonus: 12, speed: "50 pies", 
        stats: { str: 16, dex: 14, con: 14, int: 2, wis: 12, cha: 7 },
        skills: "Percepción +3", senses: "Percepción pasiva 13",
        traits: [
            { name: "Devastación", desc: "Cuando reduce a 0 pg a una criatura con ataque cuerpo a cuerpo, puede usar acción adicional para moverse y atacar con mordisco." }
        ],
        actions: [
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 10 (2d6+3) puntos de daño perforante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/248-hiena-gigante" 
    },
    { 
        id: 8, name: "Tigre", type: "Bestia Grande", emoji: "🐅", ac: 12, hitDice: "5d10", hitDiceBonus: 10, speed: "40 pies", 
        stats: { str: 17, dex: 15, con: 14, int: 3, wis: 12, cha: 8 },
        skills: "Percepción +3, Sigilo +6", senses: "Visión en la oscuridad 60 pies, Percepción pasiva 13",
        traits: [
            { name: "Olfato agudizado", desc: "Ventaja en pruebas de Sabiduría (Percepción) basadas en el olfato." },
            { name: "Salto", desc: "Si se mueve 20 pies y golpea con garras, objetivo debe salvar FUE CD 13 o caer tumbado. Si cae, acción adicional mordisco." }
        ],
        actions: [
            { name: "Mordisco", desc: "Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 8 (1d10+3) puntos de daño perforante." },
            { name: "Garra", desc: "Ataque de arma cuerpo a cuerpo: +5 al ataque, alcance 5 pies, un objetivo. Impacto: 7 (1d8+3) puntos de daño cortante." }
        ],
        url: "https://nivel20.com/games/dnd-5/creatures/291-tigre" 
    }
];

let currentCreature = null;
let currentHP = 0;
let maxHP = 0;

// Función para tirar dados de golpe
function rollHitDice(diceString) {
    // diceString formato: "3d8" o "1d6"
    const parts = diceString.split('d');
    const numDice = parseInt(parts[0]);
    const diceSize = parseInt(parts[1]);
    
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSize) + 1;
    }
    return total;
}

// Función para calcular HP
function calculateHP(creature) {
    return rollHitDice(creature.hitDice) + creature.hitDiceBonus;
}

// Función para actualizar la barra de vida
function updateHealthBar() {
    const healthFill = document.getElementById('healthFill');
    const healthText = document.getElementById('healthText');
    
    if (!healthFill || !healthText) return;
    
    const percentage = Math.max(0, Math.min(100, (currentHP / maxHP) * 100));
    healthFill.style.width = percentage + '%';
    healthText.innerText = `${currentHP} / ${maxHP}`;
    
    // Cambiar color según el porcentaje de vida
    if (percentage > 50) {
        healthFill.style.background = 'linear-gradient(to right, #27ae60, #2ecc71)';
    } else if (percentage > 25) {
        healthFill.style.background = 'linear-gradient(to right, #f39c12, #f1c40f)';
    } else {
        healthFill.style.background = 'linear-gradient(to right, #c0392b, #e74c3c)';
    }
}

// Funciones para los botones de HP
function damageHP() {
    if (currentHP > 0) {
        currentHP--;
        updateHealthBar();
    }
}

function healHP() {
    if (currentHP < maxHP) {
        currentHP++;
        updateHealthBar();
    }
}

function rerollHP() {
    if (!currentCreature) return;
    
    // Recalcular HP con nueva tirada
    maxHP = calculateHP(currentCreature);
    currentHP = maxHP;
    
    // Actualizar visualmente
    const healthText = document.getElementById('healthText');
    const hpDisplay = document.getElementById('hpDisplay');
    
    if (hpDisplay) {
        hpDisplay.innerText = `${currentCreature.hitDice}+${currentCreature.hitDiceBonus}`;
    }
    
    updateHealthBar();
    
    // Animación del botón
    const btn = document.getElementById('rerollHPBtn');
    if (btn) {
        btn.style.animation = 'none';
        setTimeout(() => {
            btn.style.animation = 'spin 0.5s ease-out';
        }, 10);
    }
}

// Asignar eventos a los botones después de que se creen
function attachHPButtonEvents() {
    const rerollBtn = document.getElementById('rerollHPBtn');
    const damageBtn = document.getElementById('damageBtn');
    const healBtn = document.getElementById('healBtn');
    
    if (rerollBtn) {
        rerollBtn.onclick = function(e) {
            e.stopPropagation();
            rerollHP();
        };
    }
    
    if (damageBtn) {
        damageBtn.onclick = function(e) {
            e.stopPropagation();
            damageHP();
        };
    }
    
    if (healBtn) {
        healBtn.onclick = function(e) {
            e.stopPropagation();
            healHP();
        };
    }
}

const animalSprite = document.getElementById('animalSprite');
const statCard = document.getElementById('statCard');
const resultText = document.getElementById('resultText');
let isRolling = false;

function rollDice() {
    if (isRolling) return;
    isRolling = true;

    // 1. Resetear estado
    statCard.style.display = 'none';
    animalSprite.classList.remove('show');
    resultText.innerText = 'Invocando...';
    animalSprite.innerText = '✨'; 

    // 2. Calcular resultado (1-8)
    const result = Math.floor(Math.random() * 8) + 1;
    const creature = animals.find(a => a.id === result);

    // 3. Esperar un momento antes de mostrar (efecto de suspense)
    setTimeout(() => {
        showResult(creature);
        isRolling = false;
    }, 800);
}

function showResult(creature) {
    // Calcular HP aleatorio
    currentCreature = creature;
    maxHP = calculateHP(creature);
    currentHP = maxHP;
    
    // Mostrar texto del resultado
    resultText.innerHTML = `¡Ha salido un <span style="color:white; font-size:1.8rem">${creature.id}</span>!`;

    // Preparar emoji del animal
    animalSprite.innerText = creature.emoji;
    
    // Animar salida de la bolsa con un pequeño retraso
    setTimeout(() => {
        animalSprite.classList.add('show');
    }, 200);

    // Helper para modificadores
    const getMod = (score) => {
        const mod = Math.floor((score - 10) / 2);
        return mod >= 0 ? `+${mod}` : `${mod}`;
    };

    // Generar HTML de Stats
    const statsHtml = `
        <div class="stats-grid">
            <div class="stat-box"><div>FUE</div><div>${creature.stats.str} (${getMod(creature.stats.str)})</div></div>
            <div class="stat-box"><div>DES</div><div>${creature.stats.dex} (${getMod(creature.stats.dex)})</div></div>
            <div class="stat-box"><div>CON</div><div>${creature.stats.con} (${getMod(creature.stats.con)})</div></div>
            <div class="stat-box"><div>INT</div><div>${creature.stats.int} (${getMod(creature.stats.int)})</div></div>
            <div class="stat-box"><div>SAB</div><div>${creature.stats.wis} (${getMod(creature.stats.wis)})</div></div>
            <div class="stat-box"><div>CAR</div><div>${creature.stats.cha} (${getMod(creature.stats.cha)})</div></div>
        </div>
    `;

    // Generar HTML de Rasgos
    let traitsHtml = '';
    if (creature.traits && creature.traits.length > 0) {
        traitsHtml = `<div class="section-card"><h3>🧠 Rasgos</h3>`;
        creature.traits.forEach(t => {
            traitsHtml += `<p><strong>${t.name}.</strong> ${t.desc}</p>`;
        });
        traitsHtml += `</div>`;
    }

    // Generar HTML de Acciones
    let actionsHtml = `<div class="section-card"><h3>⚔️ Acciones</h3>`;
    creature.actions.forEach(a => {
        actionsHtml += `<p><strong>${a.name}.</strong> ${a.desc}</p>`;
    });
    actionsHtml += `</div>`;

    // Llenar la ficha HTML
    statCard.innerHTML = `
        <div class="stat-header">
            <h2>${creature.emoji} ${creature.name}</h2>
            <span>${creature.type} - D&D 5e</span>
        </div>
        
        ${statsHtml}

        <div class="stat-row">
            <span>🛡️ Clase de Armadura</span> <span class="red-text">${creature.ac}</span>
        </div>
        <div class="stat-row">
            <span>❤️ Puntos de Golpe</span>
            <div class="hp-row">
                <span class="red-text" id="hpDisplay">${creature.hitDice}+${creature.hitDiceBonus}</span>
                <button class="reroll-hp-btn" id="rerollHPBtn" title="Recalcular HP">🎲</button>
            </div>
        </div>
        <div class="health-bar-container">
            <div class="health-bar">
                <div class="health-fill" id="healthFill"></div>
                <div class="health-text" id="healthText">${currentHP} / ${maxHP}</div>
            </div>
            <div class="health-buttons">
                <button class="hp-button damage-btn" id="damageBtn">➖ Daño</button>
                <button class="hp-button heal-btn" id="healBtn">➕ Curar</button>
            </div>
        </div>
        <div class="stat-row">
            <span>🦶 Velocidad</span> <span>${creature.speed}</span>
        </div>
        
        <div class="info-row"><p><strong>Habilidades:</strong> ${creature.skills}</p></div>
        <div class="info-row"><p><strong>Sentidos:</strong> ${creature.senses}</p></div>

        ${traitsHtml}
        ${actionsHtml}

        <a href="${creature.url}" target="_blank" class="creature-link-btn">
            📖 Ver ficha completa
        </a>
    `;

    // Mostrar la carta deslizándola hacia arriba
    setTimeout(() => {
        statCard.style.display = 'block';
        updateHealthBar();
        attachHPButtonEvents(); // Asignar eventos a los botones
        // Scroll suave hacia la ficha en móviles si queda muy abajo
        statCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 800);
}
