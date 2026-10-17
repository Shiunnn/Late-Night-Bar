# 🍸 Late Night Bar | 深夜調酒指南 ‧ 不知喝什麼的靈感解方

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3 Glassmorphism](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=flat-square&logo=css3&logoColor=white)
![Modern JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web%20Audio%20API-Synthesized-8A2BE2?style=flat-square)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-Zero-2ed573?style=flat-square)
![Cocktail Count](https://img.shields.io/badge/Cocktails-104%20Recipes-FFB142?style=flat-square)

> **專為深夜不知道喝什麼、或突然想調一杯卻毫無靈感的時候設計。**  
> 結合酒吧氛圍感 UI、四大目的導向推薦、動態毫升數（ml）試算、命定抽卡與 Web Audio 原生合成音效，打造沉浸式居家調酒互動體驗。

---

## 🌟 核心特色 (Key Features)

### 1. 四大明確目的分類 (104 款標準酒譜)
收錄參考 **國際調酒師協會 (IBA Official Cocktails)** 與世界名品的 104 款經典調酒，消除選擇障礙：
* 🌊 **想放鬆 (Relax)**：清爽長飲、細緻氣泡、低負擔果香（琴通寧、薄荷莫希托、阿佩羅橙光、湯姆柯林斯等 26 款）。
* 🎉 **想慶祝 (Celebrate)**：色彩斑斕、派對香檳、熱帶風情（瑪格麗特、法式75、邁泰、柯夢波丹等 26 款）。
* ⚡ **想喝醉 (Get Drunk)**：高 ABV、重磅直球、硬派經典（長島冰茶、乾馬丁尼、教父、盤尼西林、B-52 等 26 款）。
* 🌙 **睡前微醺 (Nightcap)**：溫潤暖胃、奶香咖啡、安眠舒緩（熱托迪、白俄羅斯、愛爾蘭咖啡、香料熱紅酒等 26 款）。

### 2. 動態份數與毫升數試算 (Dynamic Multiplier)
* 支援 **1~8 杯** 即時調整。
* 所有基酒、副料與糖漿毫升數（ml）自動精確乘算，無論獨酌還是多人派對皆可一鍵換算。

### 3. Web Audio 原生合成音效 (零外部依賴)
* 透過瀏覽器原生 **Web Audio API** 即時動態合成：
  * **冰塊撞擊聲**：多頻諧波模擬厚底威士忌杯冰塊碰撞。
  * **倒酒流動聲**：動態帶通濾波器（Bandpass Filter）合成液體注入聲。
  * **抽卡風聲與星芒和弦**：低通白噪音與 D 大調五聲音階合成。
* 零音檔載入延遲，支援頂部等化器開關與靜音記憶。

### 4. Bartender 隨機命定抽卡 (3D Flip Card)
* 猶豫不決時的終極救星！點擊觸發 3D 牌面翻轉與霓虹光暈，隨機抽取今夜的命定調酒並附贈專屬深夜心靈語錄。

### 5. 個人專屬酒櫃 (LocalStorage 持久化)
* 點擊「❤️ 收藏」即可收錄至個人酒櫃，關閉或重新整理網頁資料不遺失。
* 支援一鍵切換「只看收藏」專屬檢視。

### 6. 現有材料勾選器 (Pantry Matcher)
* 勾選家中現有的 **基酒**（伏特加、琴酒、威士忌、蘭姆酒、龍舌蘭、白蘭地、利口酒）與 **軟飲**（通寧水、氣泡水、可樂、檸檬汁、咖啡/牛奶、果汁），動態篩選立刻能調的酒譜。

---

## 🎨 視覺系統 (Design Aesthetics)

* **色彩系統**：深夜近黑調深灰背景 (`#0A0A0D`, `#121217`)，點綴微醺霓虹紫 (`#8A2BE2`) 與琥珀金輝 (`#FFB142`)。
* **材質質感**：Glassmorphism 毛玻璃擬態（`backdrop-filter: blur(16px)`）、多層柔和外光暈與動態漂浮氛圍光球。
* **字體搭配**：標題使用襯線體 `Playfair Display` 營造奢華酒吧感；內文搭配現代非襯線體 `Outfit`。
* **全響應式設計 (RWD)**：手機、平板、桌面端均提供最舒適的點擊與視覺流暢度。

---

## 📂 專案檔案結構 (Project Structure)

```text
mybar/
├── index.html          # 主頁面 SPA (語意化 HTML5、SEO Meta 與無障礙 Modal)
├── README.md           # 專案技術與功能說明文件
└── assets/
    ├── css/
    │   └── style.css   # 深夜 Glassmorphism 樣式庫、霓虹流光、3D 翻牌與 RWD
    └── js/
        ├── recipes.js  # 104 款國際認證與經典調酒資料庫 (含 ABV、比例、步驟與語錄)
        └── app.js      # 控制器、Web Audio API 合成器、動態試算、酒櫃與篩選邏輯
```

---

## 🚀 快速開始與本地預覽 (Quick Start)

本專案為純前端原生架構（Zero Build Steps），無須安裝任何 npm 套件或建置工具，開箱即用。

### 方式 1：Python 內建伺服器（推薦）
```bash
# 在專案根目錄下執行
python -m http.server 5500
```
開啟瀏覽器訪問：`http://localhost:5500`

### 方式 2：Node.js npx serve
```bash
npx -y serve -p 5500 .
```

### 方式 3：VS Code 擴充套件
使用 **Live Server** 插件，右鍵點擊 `index.html` 選擇 **"Open with Live Server"** 即可。

---

## 🌐 部署至 GitHub Pages (Deployment)

1. 將本專案推送至 GitHub Repository：
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Late Night Bar"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mybar.git
   git push -u origin main
   ```
2. 進入 GitHub Repository 的 **Settings** > **Pages**。
3. 在 **Branch** 選擇 `main` 分支與 `/ (root)` 資料夾，點擊 **Save**。
4. 稍候數分鐘即可在 `https://<your-username>.github.io/mybar/` 線上使用。

---

## 📜 酒譜資料格式規範 (Recipe Schema)

每款酒譜在 [`assets/js/recipes.js`](assets/js/recipes.js) 中的資料結構如下：

```javascript
{
  id: "gin-and-tonic",
  name: "經典琴通寧",
  enName: "Gin & Tonic",
  icon: "🍸",
  mood: "relax",               // 'relax' | 'celebrate' | 'drunk' | 'nightcap'
  moodText: "想放鬆",
  abvLevel: "mild",            // 'non-alcoholic' | 'mild' | 'medium' | 'strong'
  abvText: "輕度微醺 (約 10%)",
  colorGrad: "linear-gradient(135deg, rgba(0, 210, 211, 0.35), rgba(46, 213, 115, 0.25))",
  glass: "高球杯 (Highball Glass)",
  method: "直調法 (Build)",
  baseIngredients: ["gin"],
  mixers: ["tonic", "lemon"],
  ingredients: [
    { name: "琴酒 (Gin)", baseMl: 45, unit: "ml", isKey: true },
    { name: "通寧水 (Tonic Water)", baseMl: 120, unit: "ml", isKey: false },
    { name: "新鮮檸檬角", baseMl: 1, unit: "塊", isKey: false }
  ],
  steps: [
    "高球杯中裝入滿滿的厚實大冰塊冰杯。",
    "量取 45ml 琴酒倒入杯中輕拌降溫。",
    "沿吧叉匙緩慢注入通寧水保留氣泡。",
    "擠入檸檬角釋放精油香氣後投入杯中。"
  ],
  quote: "不知道喝什麼的時候，就選琴通寧。杜松子與氣泡能帶走一整天的疲憊。"
}
```

---

## ⚠️ 免責與理性飲酒聲明 (Disclaimer)

* 本專案僅供成年人作為居家調酒與料理靈感參考。
* **未滿 18 歲禁止飲酒 • 酒後不開車，安全有保障 • 理性飲酒享受微醺**。
