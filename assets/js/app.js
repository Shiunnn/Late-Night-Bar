/**
 * Late Night Bar - Application Logic
 * Pure ES6+, Web Audio API Synthesizer, Dynamic Scaling, LocalStorage Favorites
 * Tailored for indecisive cocktail lovers with 104 authentic recipes.
 */

// ============================================================================
// 1. Web Audio Synthesizer (Zero External Audio File Dependency)
// ============================================================================
class CocktailAudioEngine {
  constructor() {
    this.ctx = null;
    this.soundEnabled = localStorage.getItem('late_night_bar_sound') !== 'muted';
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('late_night_bar_sound', this.soundEnabled ? 'enabled' : 'muted');
    if (this.soundEnabled) {
      this.initContext();
      this.playIceClink();
    }
    return this.soundEnabled;
  }

  // UI Tap / Click Sound
  playClick() {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Ice cube clinking against glass (Resonant acoustic bell tone)
  playIceClink() {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const freqs = [2180, 3250, 4420];

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (Math.random() * 40 - 20), now);

      const delay = idx * 0.035;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.setValueAtTime(0.08 / (idx + 1), now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 0.3);
    });
  }

  // Cocktail Pouring sound (Filtered white noise resonance)
  playPour() {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const duration = 0.55;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1400, this.ctx.currentTime + duration);
    filter.Q.setValueAtTime(4, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + duration);
  }

  // Card Flip Whoosh
  playCardFlip() {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const duration = 0.28;
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.12);
    filter.frequency.exponentialRampToValueAtTime(250, this.ctx.currentTime + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.16, this.ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start();
    noise.stop(this.ctx.currentTime + duration);
  }

  // Neon Magic Chime / Sparkle
  playSparkle() {
    if (!this.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [587.33, 739.99, 880.00, 1174.66, 1479.98]; // D major pentatonic
    const now = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.06);

      gain.gain.setValueAtTime(0.001, now + i * 0.06);
      gain.gain.linearRampToValueAtTime(0.08, now + i * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.45);
    });
  }
}

// ============================================================================
// 2. Application State & Controller
// ============================================================================
class LateNightBarApp {
  constructor() {
    this.soundEngine = new CocktailAudioEngine();
    this.currentMood = 'all';
    this.selectedIngredients = new Set();
    this.searchQuery = '';
    this.onlyFavorites = false;

    // Load database from recipes.js
    this.cocktails = window.COCKTAIL_DATABASE || [];

    // Servings map: cocktailId -> number (1-8)
    this.servingsMap = {};
    this.cocktails.forEach(c => {
      this.servingsMap[c.id] = 1;
    });

    // Favorites persistence via LocalStorage
    this.favorites = new Set(this.loadFavorites());

    // Active Modal
    this.activeModalCocktail = null;
    this.modalServings = 1;

    // Surprise draw state
    this.drawnCocktail = null;

    // Cache DOM Elements
    this.initElements();
    this.bindEvents();
    this.render();
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('late_night_bar_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load favorites', e);
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('late_night_bar_favorites', JSON.stringify([...this.favorites]));
    } catch (e) {
      console.error('Failed to save favorites', e);
    }
  }

  initElements() {
    this.recipesContainer = document.getElementById('recipesGrid');
    this.cabinetCounter = document.getElementById('cabinetCount');
    this.cabinetToggleBtn = document.getElementById('cabinetToggleBtn');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.matchCountSpan = document.getElementById('matchCount');
    this.searchInput = document.getElementById('searchInput');
    this.clearSearchBtn = document.getElementById('clearSearchBtn');
    this.chipResetBtn = document.getElementById('chipResetBtn');

    // Modals
    this.recipeModal = document.getElementById('recipeDetailModal');
    this.surpriseModal = document.getElementById('surpriseModal');
    this.surpriseDrawBtn = document.getElementById('surpriseDrawBtn');
    this.heroSurpriseBtn = document.getElementById('heroSurpriseBtn');
    this.flipperCard = document.getElementById('flipperCard');
    this.toastContainer = document.getElementById('toastContainer');

    // Update sound toggle button appearance
    if (this.soundEngine.soundEnabled) {
      this.soundToggleBtn.classList.add('playing');
    }
  }

  bindEvents() {
    // Sound Toggle
    this.soundToggleBtn.addEventListener('click', () => {
      const isEnabled = this.soundEngine.toggleSound();
      if (isEnabled) {
        this.soundToggleBtn.classList.add('playing');
        this.showToast('🔊 氛圍音效已開啟');
      } else {
        this.soundToggleBtn.classList.remove('playing');
        this.showToast('🔇 氛圍音效已靜音');
      }
    });

    // Mood Selector Tabs (想放鬆, 想慶祝, 想喝醉, 睡前微醺)
    document.querySelectorAll('.mood-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.soundEngine.playClick();
        document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentMood = btn.dataset.mood;
        this.render();
      });
    });

    // Ingredient Filter Chips
    document.querySelectorAll('.chip[data-ing]').forEach(chip => {
      chip.addEventListener('click', () => {
        this.soundEngine.playClick();
        const ing = chip.dataset.ing;
        if (this.selectedIngredients.has(ing)) {
          this.selectedIngredients.delete(ing);
          chip.classList.remove('active');
        } else {
          this.selectedIngredients.add(ing);
          chip.classList.add('active');
        }
        this.render();
      });
    });

    // Reset Ingredient Chips
    this.chipResetBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.selectedIngredients.clear();
      document.querySelectorAll('.chip[data-ing]').forEach(c => c.classList.remove('active'));
      this.render();
    });

    // Search Input (Real-time debounce-less instant search)
    this.searchInput.addEventListener('input', e => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      if (this.searchQuery.length > 0) {
        this.clearSearchBtn.classList.add('visible');
      } else {
        this.clearSearchBtn.classList.remove('visible');
      }
      this.render();
    });

    this.clearSearchBtn.addEventListener('click', () => {
      this.searchInput.value = '';
      this.searchQuery = '';
      this.clearSearchBtn.classList.remove('visible');
      this.render();
    });

    // Cabinet Favorites View Toggle
    this.cabinetToggleBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      this.onlyFavorites = !this.onlyFavorites;
      this.cabinetToggleBtn.classList.toggle('active', this.onlyFavorites);
      this.render();
    });

    // Surprise Draw Trigger Buttons
    const triggerSurprise = () => {
      this.openSurpriseModal();
    };
    if (this.surpriseDrawBtn) this.surpriseDrawBtn.addEventListener('click', triggerSurprise);
    if (this.heroSurpriseBtn) this.heroSurpriseBtn.addEventListener('click', triggerSurprise);

    // 3D Card Flipper in Surprise Modal
    if (this.flipperCard) {
      this.flipperCard.addEventListener('click', () => {
        if (!this.flipperCard.classList.contains('flipped')) {
          this.soundEngine.playCardFlip();
          this.soundEngine.playSparkle();
          this.flipperCard.classList.add('flipped');
        }
      });
    }

    // Modal Close buttons & Backdrop clicks
    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        this.soundEngine.playClick();
        this.closeAllModals();
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          this.soundEngine.playClick();
          this.closeAllModals();
        }
      });
    });

    // Keyboard ESC close
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.closeAllModals();
      }
    });
  }

  // Filter evaluation logic
  getFilteredCocktails() {
    return this.cocktails.filter(cocktail => {
      // 1. Mood match (relax, celebrate, drunk, nightcap)
      if (this.currentMood !== 'all' && cocktail.mood !== this.currentMood) {
        return false;
      }

      // 2. Favorites only match
      if (this.onlyFavorites && !this.favorites.has(cocktail.id)) {
        return false;
      }

      // 3. Ingredient match
      if (this.selectedIngredients.size > 0) {
        const matchesAny = [...this.selectedIngredients].some(reqIng => {
          return (
            (cocktail.baseIngredients && cocktail.baseIngredients.includes(reqIng)) ||
            (cocktail.mixers && cocktail.mixers.includes(reqIng)) ||
            cocktail.ingredients.some(ing => ing.name.toLowerCase().includes(reqIng))
          );
        });
        if (!matchesAny) return false;
      }

      // 4. Search match (name, enName, ingredients, quote, glass, method)
      if (this.searchQuery) {
        const q = this.searchQuery;
        const inZh = cocktail.name.toLowerCase().includes(q);
        const inEn = cocktail.enName.toLowerCase().includes(q);
        const inIng = cocktail.ingredients.some(i => i.name.toLowerCase().includes(q));
        const inQuote = cocktail.quote ? cocktail.quote.toLowerCase().includes(q) : false;
        const inGlass = cocktail.glass ? cocktail.glass.toLowerCase().includes(q) : false;
        if (!inZh && !inEn && !inIng && !inQuote && !inGlass) return false;
      }

      return true;
    });
  }

  // Render main grid
  render() {
    const list = this.getFilteredCocktails();

    // Update Counter & Badge
    this.cabinetCounter.textContent = this.favorites.size;
    this.matchCountSpan.textContent = list.length;

    if (list.length === 0) {
      this.recipesContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🌙</div>
          <h3 class="empty-title">${this.onlyFavorites ? '酒櫃尚無收藏' : '未找到符合條件的調酒'}</h3>
          <p class="empty-desc">
            ${
              this.onlyFavorites
                ? '點擊卡片右上角的愛心 ❤️，把想喝的酒譜收藏到個人酒櫃吧！'
                : '試試切換上方目的分類（想放鬆、想慶祝、想喝醉、睡前微醺）或重設材料篩選。'
            }
          </p>
          ${
            this.onlyFavorites
              ? `<button class="btn-primary" id="exploreAllBtn">瀏覽全部 104 款特調</button>`
              : `<button class="btn-secondary" id="resetAllFilterBtn">清除全部篩選</button>`
          }
        </div>
      `;

      const exploreBtn = document.getElementById('exploreAllBtn');
      if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
          this.onlyFavorites = false;
          this.cabinetToggleBtn.classList.remove('active');
          this.render();
        });
      }

      const resetBtn = document.getElementById('resetAllFilterBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.currentMood = 'all';
          this.selectedIngredients.clear();
          this.searchQuery = '';
          this.searchInput.value = '';
          this.clearSearchBtn.classList.remove('visible');
          document.querySelectorAll('.mood-btn').forEach(b => b.classList.toggle('active', b.dataset.mood === 'all'));
          document.querySelectorAll('.chip[data-ing]').forEach(c => c.classList.remove('active'));
          this.render();
        });
      }
      return;
    }

    this.recipesContainer.innerHTML = list.map(cocktail => this.createCocktailCardHTML(cocktail)).join('');

    // Attach card event listeners
    list.forEach(cocktail => {
      const cardEl = document.getElementById(`card-${cocktail.id}`);
      if (!cardEl) return;

      // Heart / Favorite toggle
      const favBtn = cardEl.querySelector('.favorite-btn');
      favBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.toggleFavorite(cocktail.id);
      });

      // Servings Stepper Minus
      const minusBtn = cardEl.querySelector('.stepper-minus');
      minusBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.soundEngine.playClick();
        if ((this.servingsMap[cocktail.id] || 1) > 1) {
          this.servingsMap[cocktail.id]--;
          this.updateCardServings(cocktail.id);
        }
      });

      // Servings Stepper Plus
      const plusBtn = cardEl.querySelector('.stepper-plus');
      plusBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.soundEngine.playClick();
        if ((this.servingsMap[cocktail.id] || 1) < 8) {
          this.servingsMap[cocktail.id] = (this.servingsMap[cocktail.id] || 1) + 1;
          this.updateCardServings(cocktail.id);
        }
      });

      // Card detail button & Card body click
      const detailBtn = cardEl.querySelector('.btn-card-detail');
      detailBtn.addEventListener('click', e => {
        e.stopPropagation();
        this.soundEngine.playPour();
        this.openRecipeModal(cocktail);
      });

      cardEl.addEventListener('click', () => {
        this.soundEngine.playIceClink();
        this.openRecipeModal(cocktail);
      });
    });
  }

  // Generate Card HTML
  createCocktailCardHTML(cocktail) {
    const isFav = this.favorites.has(cocktail.id);
    const servings = this.servingsMap[cocktail.id] || 1;

    // Mood Badge Color
    let moodStyle = 'background: rgba(138, 43, 226, 0.15); color: #d1a8ff; border: 1px solid rgba(138, 43, 226, 0.3);';
    if (cocktail.mood === 'relax') {
      moodStyle = 'background: rgba(0, 210, 211, 0.15); color: #00d2d3; border: 1px solid rgba(0, 210, 211, 0.3);';
    } else if (cocktail.mood === 'celebrate') {
      moodStyle = 'background: rgba(255, 177, 66, 0.15); color: #ffb142; border: 1px solid rgba(255, 177, 66, 0.3);';
    } else if (cocktail.mood === 'drunk') {
      moodStyle = 'background: rgba(255, 71, 87, 0.18); color: #ff4757; border: 1px solid rgba(255, 71, 87, 0.35);';
    } else if (cocktail.mood === 'nightcap') {
      moodStyle = 'background: rgba(162, 155, 254, 0.15); color: #a29bfe; border: 1px solid rgba(162, 155, 254, 0.3);';
    }

    // Generate scaled ingredients
    const ingredientsHTML = cocktail.ingredients
      .slice(0, 3)
      .map(item => {
        const scaledVal = Math.round(item.baseMl * servings * 10) / 10;
        return `
          <li class="ingredient-item">
            <span class="ingredient-name">
              <span class="ingredient-dot"></span>
              ${item.name}
            </span>
            <span class="amount-value" data-base="${item.baseMl}" data-unit="${item.unit}">
              ${scaledVal} ${item.unit}
            </span>
          </li>
        `;
      })
      .join('');

    const moreCount = cocktail.ingredients.length > 3 ? `<li class="ingredient-item" style="justify-content:center; opacity:0.6;">+ 還有 ${cocktail.ingredients.length - 3} 種調味材料</li>` : '';

    return `
      <article class="recipe-card" id="card-${cocktail.id}" style="--card-accent: ${cocktail.abvLevel === 'strong' ? '#ff4757' : '#8a2be2'};">
        <header class="card-header">
          <div class="card-title-group">
            <h3 class="cocktail-zh-name">${cocktail.name}</h3>
            <span class="cocktail-en-name">${cocktail.enName}</span>
          </div>
          <button class="favorite-btn ${isFav ? 'favorited' : ''}" title="加入個人酒櫃" aria-label="收藏 ${cocktail.name}">
            ${isFav ? '❤️' : '🤍'}
          </button>
        </header>

        <div class="card-visual-row">
          <div class="glass-preview-box" style="background: ${cocktail.colorGrad};">
            <span class="glass-preview-icon">${cocktail.icon}</span>
          </div>
          <div class="card-badges">
            <div class="badge-row">
              <span class="abv-badge ${cocktail.abvLevel}">
                ● ${cocktail.abvText}
              </span>
            </div>
            <div class="badge-row">
              <span class="mood-tag" style="${moodStyle}">✦ ${cocktail.moodText}</span>
              <span class="mood-tag" style="opacity: 0.7;">${cocktail.method}</span>
            </div>
          </div>
        </div>

        <!-- Servings Stepper -->
        <div class="servings-stepper-row" onclick="event.stopPropagation();">
          <span class="stepper-label">
            <span>製作杯數</span>
          </span>
          <div class="stepper-controls">
            <button class="stepper-btn stepper-minus" ${servings <= 1 ? 'disabled' : ''} aria-label="減少杯數">−</button>
            <span class="servings-count">${servings} 杯</span>
            <button class="stepper-btn stepper-plus" ${servings >= 8 ? 'disabled' : ''} aria-label="增加杯數">+</button>
          </div>
        </div>

        <!-- Real-time scaled ingredients list -->
        <ul class="card-ingredients-list" id="card-ing-${cocktail.id}">
          ${ingredientsHTML}
          ${moreCount}
        </ul>

        <button class="btn-card-detail" aria-label="查看 ${cocktail.name} 調製步驟">
          <span>📜 調製步驟與靈感</span>
        </button>
      </article>
    `;
  }

  // Update card ingredients on servings change without re-rendering entire list
  updateCardServings(cocktailId) {
    const cardEl = document.getElementById(`card-${cocktailId}`);
    if (!cardEl) return;

    const servings = this.servingsMap[cocktailId];
    const countSpan = cardEl.querySelector('.servings-count');
    const minusBtn = cardEl.querySelector('.stepper-minus');
    const plusBtn = cardEl.querySelector('.stepper-plus');

    countSpan.textContent = `${servings} 杯`;
    minusBtn.disabled = servings <= 1;
    plusBtn.disabled = servings >= 8;

    const amountValues = cardEl.querySelectorAll('.amount-value');
    amountValues.forEach(el => {
      const base = parseFloat(el.dataset.base);
      const unit = el.dataset.unit;
      const scaledVal = Math.round(base * servings * 10) / 10;
      el.textContent = `${scaledVal} ${unit}`;
    });
  }

  // Toggle Favorite
  toggleFavorite(cocktailId) {
    const isFav = this.favorites.has(cocktailId);
    if (isFav) {
      this.favorites.delete(cocktailId);
      this.showToast('已自個人酒櫃移出');
    } else {
      this.favorites.add(cocktailId);
      this.soundEngine.playSparkle();
      this.showToast('❤️ 已收藏至深夜酒櫃！');
    }
    this.saveFavorites();

    if (this.onlyFavorites) {
      this.render();
    } else {
      const card = document.getElementById(`card-${cocktailId}`);
      if (card) {
        const btn = card.querySelector('.favorite-btn');
        btn.classList.toggle('favorited', !isFav);
        btn.textContent = !isFav ? '❤️' : '🤍';
      }
      this.cabinetCounter.textContent = this.favorites.size;
    }
  }

  // ==========================================================================
  // Modal: Recipe Details & Step-by-Step
  // ==========================================================================
  openRecipeModal(cocktail) {
    this.activeModalCocktail = cocktail;
    this.modalServings = this.servingsMap[cocktail.id] || 1;

    const modalBody = document.getElementById('modalDynamicContent');
    const isFav = this.favorites.has(cocktail.id);

    modalBody.innerHTML = `
      <div class="modal-header-hero">
        <div class="modal-cocktail-icon" style="background: ${cocktail.colorGrad};">
          ${cocktail.icon}
        </div>
        <div class="modal-title-group">
          <h2>${cocktail.name}</h2>
          <div class="en-title">${cocktail.enName}</div>
          <div class="badge-row" style="margin-top: 0.4rem;">
            <span class="abv-badge ${cocktail.abvLevel}">● ${cocktail.abvText}</span>
            <span class="mood-tag">✦ ${cocktail.moodText}</span>
            <span class="mood-tag">${cocktail.glass}</span>
            <span class="mood-tag">${cocktail.method}</span>
          </div>
        </div>
      </div>

      <!-- Late Night Soul Quote -->
      <div class="soul-quote-box">
        <div class="quote-mark">“</div>
        <p class="soul-quote-text">${cocktail.quote}</p>
        <span class="bartender-signature">— Bartender's Midnight Note</span>
      </div>

      <!-- Modal Dynamic Servings Stepper -->
      <div class="servings-stepper-row" style="margin-bottom: 1.25rem;">
        <span class="stepper-label">
          <span>🍹 動態配方比例試算</span>
        </span>
        <div class="stepper-controls">
          <button class="stepper-btn" id="modalMinusBtn" ${this.modalServings <= 1 ? 'disabled' : ''}>−</button>
          <span class="servings-count" id="modalServingsCount">${this.modalServings} 杯</span>
          <button class="stepper-btn" id="modalPlusBtn" ${this.modalServings >= 8 ? 'disabled' : ''}>+</button>
        </div>
      </div>

      <!-- Ingredients Table -->
      <div class="modal-section-title">
        <span>材料清單 (Recipe Ingredients)</span>
        <span style="font-size: 0.75rem; color: var(--text-subtle);">依製作杯數動態計算</span>
      </div>
      <table class="modal-ingredients-table">
        <tbody id="modalIngredientsTbody">
          ${this.getModalIngredientsRows(cocktail, this.modalServings)}
        </tbody>
      </table>

      <!-- Steps -->
      <div class="modal-section-title">
        <span>Step-by-Step 調製步驟</span>
      </div>
      <ol class="steps-list">
        ${cocktail.steps
          .map(
            (step, idx) => `
          <li class="step-card">
            <span class="step-number">${idx + 1}</span>
            <span class="step-text">${step}</span>
          </li>
        `
          )
          .join('')}
      </ol>

      <div class="modal-actions">
        <button class="btn-secondary" id="modalCopyBtn">
          📋 複製完整酒譜
        </button>
        <button class="btn-primary" id="modalFavBtn">
          ${isFav ? '❤️ 已在酒櫃' : '🤍 收藏至酒櫃'}
        </button>
      </div>
    `;

    // Modal Servings Stepper Events
    const minusBtn = document.getElementById('modalMinusBtn');
    const plusBtn = document.getElementById('modalPlusBtn');
    const countSpan = document.getElementById('modalServingsCount');
    const tbody = document.getElementById('modalIngredientsTbody');

    minusBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      if (this.modalServings > 1) {
        this.modalServings--;
        this.servingsMap[cocktail.id] = this.modalServings;
        this.updateCardServings(cocktail.id);
        countSpan.textContent = `${this.modalServings} 杯`;
        minusBtn.disabled = this.modalServings <= 1;
        plusBtn.disabled = this.modalServings >= 8;
        tbody.innerHTML = this.getModalIngredientsRows(cocktail, this.modalServings);
      }
    });

    plusBtn.addEventListener('click', () => {
      this.soundEngine.playClick();
      if (this.modalServings < 8) {
        this.modalServings++;
        this.servingsMap[cocktail.id] = this.modalServings;
        this.updateCardServings(cocktail.id);
        countSpan.textContent = `${this.modalServings} 杯`;
        minusBtn.disabled = this.modalServings <= 1;
        plusBtn.disabled = this.modalServings >= 8;
        tbody.innerHTML = this.getModalIngredientsRows(cocktail, this.modalServings);
      }
    });

    // Copy Button
    document.getElementById('modalCopyBtn').addEventListener('click', () => {
      this.soundEngine.playClick();
      this.copyCocktailRecipe(cocktail, this.modalServings);
    });

    // Favorite Button in Modal
    const favBtn = document.getElementById('modalFavBtn');
    favBtn.addEventListener('click', () => {
      this.toggleFavorite(cocktail.id);
      const isNowFav = this.favorites.has(cocktail.id);
      favBtn.innerHTML = isNowFav ? '❤️ 已在酒櫃' : '🤍 收藏至酒櫃';
    });

    this.recipeModal.classList.add('active');
  }

  getModalIngredientsRows(cocktail, servings) {
    return cocktail.ingredients
      .map(item => {
        const scaledVal = Math.round(item.baseMl * servings * 10) / 10;
        return `
        <tr>
          <td>
            <span style="color: ${item.isKey ? 'var(--text-gold)' : 'var(--text-main)'}; font-weight: ${
          item.isKey ? '600' : '400'
        };">
              ${item.name}
            </span>
          </td>
          <td class="td-amount">${scaledVal} ${item.unit}</td>
        </tr>
      `;
      })
      .join('');
  }

  copyCocktailRecipe(cocktail, servings) {
    const lines = [
      `🍸 Late Night Bar - 【${cocktail.name} (${cocktail.enName})】`,
      `分類目的：${cocktail.moodText} | 製作杯數：${servings} 杯 | 酒精濃度：${cocktail.abvText}`,
      `推薦杯型：${cocktail.glass} | 調製技法：${cocktail.method}`,
      `深夜語錄：${cocktail.quote}`,
      ``,
      `【材料清單】：`,
      ...cocktail.ingredients.map(
        i => `• ${i.name}：${Math.round(i.baseMl * servings * 10) / 10} ${i.unit}`
      ),
      ``,
      `【調製步驟】：`,
      ...cocktail.steps.map((s, idx) => `${idx + 1}. ${s}`),
      ``,
      `— Late Night Bar 深夜調酒指南`
    ];

    const text = lines.join('\n');
    navigator.clipboard.writeText(text).then(
      () => {
        this.showToast('📋 已複製完整酒譜至剪貼簿！');
      },
      () => {
        this.showToast('複製失敗，請手動選取');
      }
    );
  }

  // ==========================================================================
  // Modal: Surprise Lounge (Bartender 隨機特調 3D 抽卡)
  // ==========================================================================
  openSurpriseModal() {
    this.soundEngine.playIceClink();

    // Reset flipper card state
    this.flipperCard.classList.remove('flipped');

    // Pick random cocktail from the 104 database (optionally filtering by current mood if not all)
    let candidatePool = this.cocktails;
    if (this.currentMood !== 'all') {
      candidatePool = this.cocktails.filter(c => c.mood === this.currentMood);
    }
    if (candidatePool.length === 0) candidatePool = this.cocktails;

    const randomIndex = Math.floor(Math.random() * candidatePool.length);
    this.drawnCocktail = candidatePool[randomIndex];

    // Populate Card Back
    const backEl = document.getElementById('flipperBackContent');
    backEl.innerHTML = `
      <div class="revealed-drink-icon">${this.drawnCocktail.icon}</div>
      <h3 class="revealed-title">${this.drawnCocktail.name}</h3>
      <div class="revealed-en">${this.drawnCocktail.enName}</div>
      <div class="badge-row" style="justify-content:center; margin-bottom: 0.75rem;">
        <span class="abv-badge ${this.drawnCocktail.abvLevel}">● ${this.drawnCocktail.abvText}</span>
        <span class="mood-tag">✦ ${this.drawnCocktail.moodText}</span>
      </div>
      <p class="revealed-quote">${this.drawnCocktail.quote}</p>
      <div style="display: flex; gap: 0.5rem; justify-content: center; width: 100%;">
        <button class="btn-primary" id="surpriseViewDetailBtn" style="padding: 0.55rem 1.1rem; font-size: 0.85rem;">
          查看完整調製步驟
        </button>
      </div>
    `;

    // Hook View Detail button
    setTimeout(() => {
      const viewBtn = document.getElementById('surpriseViewDetailBtn');
      if (viewBtn) {
        viewBtn.addEventListener('click', e => {
          e.stopPropagation();
          this.closeAllModals();
          this.openRecipeModal(this.drawnCocktail);
        });
      }
    }, 50);

    this.surpriseModal.classList.add('active');
  }

  closeAllModals() {
    this.recipeModal.classList.remove('active');
    this.surpriseModal.classList.remove('active');
  }

  // Toast System
  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${message}</span>`;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2400);
  }
}

// Initialize Application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.lateNightBar = new LateNightBarApp();
});
