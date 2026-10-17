/**
 * Late Night Bar - Complete Cocktail Database (104 Authentic Recipes)
 * Categories: 想放鬆 (relax), 想慶祝 (celebrate), 想喝醉 (drunk), 睡前微醺 (nightcap)
 * Curated from IBA Official Cocktails, Classic Standards, and Late-Night Comfort Drinks.
 */

window.COCKTAIL_DATABASE = [
  {
    "id": "gin-and-tonic",
    "name": "經典琴通寧",
    "enName": "Gin & Tonic",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(0, 210, 211, 0.35), rgba(46, 213, 115, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "tonic",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "通寧水 (Tonic Water)",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬角",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯中裝入滿滿的厚實大冰塊冰杯。",
      "量取 45ml 琴酒倒入杯中，輕拌使酒體與冰塊融合降溫。",
      "沿著吧叉匙緩慢倒入通寧水，保留細緻持久的氣泡感。",
      "擠入新鮮檸檬角釋放精油香氣後投入杯中，輕提冰塊一下即成。"
    ],
    "quote": "不知道喝什麼的時候，就選琴通寧。杜松子與氣泡能帶走一整天的疲憊。"
  },
  {
    "id": "mojito",
    "name": "薄荷莫希托",
    "enName": "Mojito",
    "icon": "🍹",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(46, 213, 115, 0.35), rgba(0, 210, 211, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "搗壓直調 (Muddle & Build)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "白蘭姆酒 (White Rum)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮薄荷葉",
        "baseMl": 10,
        "unit": "片",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純蔗糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水 (Soda Water)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯底放入薄荷葉、檸檬汁與糖漿，用搗棒輕柔按壓出草本芳香。",
      "加入碎冰至半滿，倒入白蘭姆酒充分攪拌融合。",
      "補滿碎冰至滿杯，注入氣泡水。",
      "拍打新鮮薄荷枝插在杯口，清涼香氣撲鼻而來。"
    ],
    "quote": "夏夜的風與杯中的碎冰，是焦慮靈魂最好的退燒藥。"
  },
  {
    "id": "moscow-mule",
    "name": "莫斯科騾子",
    "enName": "Moscow Mule",
    "icon": "🍺",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.35), rgba(255, 220, 100, 0.2))",
    "glass": "純銅杯 (Copper Mug)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "薑汁啤酒/薑汁汽水",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬輪片",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "銅杯中裝滿結實老冰塊。",
      "倒入伏特加與新鮮檸檬汁，輕輕提攪融合。",
      "補滿冰透的薑汁啤酒或薑汁汽水。",
      "放上檸檬片裝飾，感受手把冰涼凝霜的痛快感。"
    ],
    "quote": "手握冰透銅杯的那一刻，世界上的雜音彷彿都被冰封了。"
  },
  {
    "id": "aperol-spritz",
    "name": "阿佩羅橙光",
    "enName": "Aperol Spritz",
    "icon": "🥂",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 107, 43, 0.45), rgba(255, 177, 66, 0.3))",
    "glass": "大肚酒杯 (Wine Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "soda"
    ],
    "ingredients": [
      {
        "name": "阿佩羅開胃酒 (Aperol)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "普羅賽克氣泡酒 (Prosecco)",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水 (Soda Water)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮柳橙片",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "在大型葡萄酒杯中加入冰塊。",
      "依序注入 Prosecco 氣泡酒、Aperol 與少許氣泡水 (3:2:1黃金比例)。",
      "輕輕提攪一次，維持豐沛細緻的氣泡感。",
      "放入新鮮柳橙片點綴，享受義大利式的慵懶傍晚時光。"
    ],
    "quote": "橙紅色的氣泡像晚霞，放鬆從不用繁複的藉口。"
  },
  {
    "id": "gin-fizz",
    "name": "琴費士",
    "enName": "Gin Fizz",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 240, 240, 0.35), rgba(120, 200, 180, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "搖盪注氣 (Shake & Top)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水 (Soda Water)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入琴酒、檸檬汁與糖漿，加入冰塊用力搖勻 10 秒。",
      "濾入放有冰塊的高球杯中。",
      "注入冰涼氣泡水至滿杯，產生綿密細緻的氣泡頂層。"
    ],
    "quote": "Fizz 是氣泡在杯壁破裂的聲音，也是緊繃神經鬆開的聲音。"
  },
  {
    "id": "tom-collins",
    "name": "湯姆柯林斯",
    "enName": "Tom Collins",
    "icon": "🍹",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 255, 230, 0.35), rgba(200, 230, 160, 0.25))",
    "glass": "柯林杯 (Collins Glass)",
    "method": "直調攪拌 (Build)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "老湯姆琴酒 (Old Tom Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水",
        "baseMl": 80,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "柯林杯中加入老湯姆琴酒、檸檬汁與糖漿。",
      "加入長條冰塊並輕微攪拌化糖。",
      "注入氣泡水至九分滿，飾以檸檬輪與櫻桃。"
    ],
    "quote": "百年前流傳至今的清冽，不管任何時代，都是最愜意的陪伴。"
  },
  {
    "id": "cuba-libre",
    "name": "自由古巴",
    "enName": "Cuba Libre",
    "icon": "🥤",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(60, 30, 10, 0.45), rgba(200, 100, 30, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "cola",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "蘭姆酒 (Rum)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "冰鎮可樂 (Cola)",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬角",
        "baseMl": 2,
        "unit": "塊",
        "isKey": false
      }
    ],
    "steps": [
      "在高球杯中擠入檸檬角汁並直接投入杯底。",
      "填入八分滿大冰塊，倒入蘭姆酒。",
      "緩緩倒滿可樂，用吧叉匙輕提一次保持強烈碳酸感。"
    ],
    "quote": "可樂與蘭姆酒的碰撞，平凡材料裡也能藏著無拘無束的自由。"
  },
  {
    "id": "sea-breeze",
    "name": "海風",
    "enName": "Sea Breeze",
    "icon": "🌊",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(255, 107, 129, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "蔓越莓汁",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "葡萄柚汁",
        "baseMl": 45,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯裝入滿冰。",
      "依序注入伏特加、蔓越莓汁與葡萄柚汁。",
      "輕輕攪拌均勻，杯口以檸檬角或薄荷裝飾。"
    ],
    "quote": "海風拂過心頭，微酸微甜的果香，把生活的重力卸在一旁。"
  },
  {
    "id": "paloma",
    "name": "帕洛瑪",
    "enName": "Paloma",
    "icon": "🍹",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 120, 150, 0.4), rgba(255, 180, 120, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "tequila"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "龍舌蘭酒 (Tequila)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "葡萄柚氣泡水/汽水",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "海鹽",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "杯沿抹鹽或在酒液中加入一撮海鹽引出龍舌蘭香氣。",
      "加入冰塊、龍舌蘭酒與新鮮萊姆汁。",
      "補滿冰涼葡萄柚汽水，放上葡萄柚片。"
    ],
    "quote": "在墨西哥，人們喝得最多的不是瑪格麗特，而是清爽療癒的帕洛瑪。"
  },
  {
    "id": "gimlet",
    "name": "經典琴蕾",
    "enName": "Gimlet",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 18%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 240, 200, 0.35), rgba(150, 220, 180, 0.25))",
    "glass": "馬丁尼杯 / 碟形杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "簡單糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將琴酒、萊姆汁與糖漿倒入裝有冰塊的雪克杯中。",
      "快速有力地搖盪 12 秒至外壁掛霜。",
      "雙重濾網濾入冰鎮好的碟形杯中，以萊姆輪裝飾。"
    ],
    "quote": "「說再見就是死去一點點。」雷蒙錢德勒筆下最俐落的放鬆良方。"
  },
  {
    "id": "sangria",
    "name": "西班牙水果桑格利亞",
    "enName": "Spanish Sangria",
    "icon": "🍷",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 8%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 20, 40, 0.5), rgba(90, 10, 25, 0.4))",
    "glass": "大肚紅酒杯 (Wine Glass)",
    "method": "直調浸泡 (Build)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [
      "juice",
      "soda"
    ],
    "ingredients": [
      {
        "name": "西班牙紅酒 (Red Wine)",
        "baseMl": 90,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白蘭地或橙酒",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "柳橙汁與檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "切片新鮮蘋果與柳橙",
        "baseMl": 3,
        "unit": "片",
        "isKey": false
      },
      {
        "name": "氣泡水 (加頂)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯中放入水果片，倒入白蘭地與果汁輕壓浸潤。",
      "倒入紅酒與冰塊，攪拌均勻。",
      "最後倒入少量氣泡水增添清爽感。"
    ],
    "quote": "飽滿果香在酒中綻放，給今夜一個被陽光親吻過的慵懶好心情。"
  },
  {
    "id": "whisky-buck",
    "name": "威士忌霸克",
    "enName": "Whisky Buck",
    "icon": "🥃",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.4), rgba(200, 110, 20, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "波本或調和威士忌",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "薑汁汽水",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯裝滿冰塊，倒入威士忌與檸檬汁。",
      "倒滿辛口薑汁汽水。",
      "用吧叉匙順時針輕攪一次，以檸檬角點綴。"
    ],
    "quote": "威士忌的橡木辛香遇到生薑氣泡，恰如其分的清爽微醺。"
  },
  {
    "id": "campari-tonic",
    "name": "金巴利通寧",
    "enName": "Campari Tonic",
    "icon": "🍷",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 8%)",
    "colorGrad": "linear-gradient(135deg, rgba(235, 47, 60, 0.45), rgba(255, 100, 110, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "tonic"
    ],
    "ingredients": [
      {
        "name": "金巴利苦酒 (Campari)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "通寧水 (Tonic Water)",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆角",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      }
    ],
    "steps": [
      "杯中填入大量冰塊，倒入深紅色的金巴利草本苦酒。",
      "補滿通寧水，氣泡中升起草本植物芬芳。",
      "擠入萊姆角，清苦後的回甘最適合放空思緒。"
    ],
    "quote": "成人的放鬆往往從接受微苦開始，然後在回甘中找到平靜。"
  },
  {
    "id": "greyhound",
    "name": "灰獵犬",
    "enName": "Greyhound",
    "icon": "🍹",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 150, 150, 0.4), rgba(255, 200, 150, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮葡萄柚汁",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "在盛滿冰塊的高球杯中倒入伏特加。",
      "注入新鮮現榨或優質葡萄柚汁至滿杯。",
      "用攪拌匙輕輕調和，葡萄柚的酸甜苦香撫平躁動。"
    ],
    "quote": "純淨伏特加遇上多汁葡萄柚，簡簡單單就是最好的放鬆劑。"
  },
  {
    "id": "salty-dog",
    "name": "鹹狗",
    "enName": "Salty Dog",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 140, 160, 0.4), rgba(255, 190, 170, 0.3))",
    "glass": "古典杯或高球杯",
    "method": "鹽口直調 (Salt Rim & Build)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "琴酒或伏特加",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "葡萄柚汁",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "杯口海鹽圈",
        "baseMl": 1,
        "unit": "圈",
        "isKey": false
      }
    ],
    "steps": [
      "用檸檬片在杯沿抹上一圈，沾上細海鹽製成半圈鹽口。",
      "加入冰塊，倒入琴酒與葡萄柚汁。",
      "輕輕攪拌，鹽粒會神奇地化解苦澀，凸顯鮮甜。"
    ],
    "quote": "一點點鹽，就能讓葡萄柚的甜更純粹，如同適時放手才能感受自在。"
  },
  {
    "id": "midori-sour",
    "name": "綠野仙蹤蜜多麗酸酒",
    "enName": "Midori Sour",
    "icon": "🍈",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(46, 213, 115, 0.5), rgba(120, 255, 100, 0.3))",
    "glass": "高球杯或颶風杯",
    "method": "搖盪注氣 (Shake & Top)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "蜜多麗哈密瓜香甜酒 (Midori)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水或檸檬雪碧",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入蜜多麗酒與檸檬汁，加入冰塊快速搖盪降溫。",
      "濾入放有冰塊的高球杯中。",
      "頂部注滿氣泡水，翠綠如翡翠般的色澤極具療癒感。"
    ],
    "quote": "翠綠的光澤像森林深處的螢火，清甜果香帶你逃離都市紛擾。"
  },
  {
    "id": "whisky-highball",
    "name": "經典威士忌蘇打",
    "enName": "Whisky Highball",
    "icon": "🥃",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 190, 80, 0.35), rgba(200, 140, 40, 0.2))",
    "glass": "薄吹高球杯 (Highball Glass)",
    "method": "日式調和 (Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "soda"
    ],
    "ingredients": [
      {
        "name": "日本/蘇格蘭威士忌",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "強氣泡水 (Strong Soda)",
        "baseMl": 140,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬皮 (可選)",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "杯中放入透明老冰塊，攪拌冰杯倒掉溶水。",
      "倒入威士忌，順時針攪拌 13 次降溫。",
      "沿著冰塊縫隙極其溫柔注入強氣泡水。",
      "輕輕提起冰塊一次，噴附檸檬皮精油。"
    ],
    "quote": "最簡單的酒，最純粹的放鬆。氣泡升起時，夜晚才真正開始。"
  },
  {
    "id": "horses-neck",
    "name": "馬頭圍脖",
    "enName": "Horse's Neck",
    "icon": "🐴",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(220, 140, 40, 0.4), rgba(255, 180, 60, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "長皮直調 (Build)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [
      "soda"
    ],
    "ingredients": [
      {
        "name": "干邑白蘭地或波本",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "薑汁汽水",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "旋轉長檸檬皮 (Spiral Peel)",
        "baseMl": 1,
        "unit": "長條",
        "isKey": false
      }
    ],
    "steps": [
      "將一整顆檸檬削出不斷裂的長條螺旋皮，掛入高球杯壁。",
      "填滿冰塊，倒入白蘭地。",
      "補滿薑汁汽水，享受甘醇果香與薑味的悠長回韻。"
    ],
    "quote": "優雅的長檸檬皮如馬頸般蜿蜒，這杯酒教人學會慢下步調。"
  },
  {
    "id": "gin-buck",
    "name": "琴霸克",
    "enName": "Gin Buck",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(180, 230, 200, 0.35), rgba(120, 200, 160, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "薑汁汽水",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯中裝滿冰塊。",
      "倒入琴酒與現擠檸檬汁。",
      "注入冰涼薑汁汽水，輕拌一下即可飲用。"
    ],
    "quote": "比琴通寧更親和，生薑的微辛與杜松子的草本香是天然的解壓神仙水。"
  },
  {
    "id": "cape-codder",
    "name": "鱈魚角 (伏特加蔓越莓)",
    "enName": "Cape Codder",
    "icon": "🍒",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 71, 87, 0.45), rgba(180, 20, 40, 0.3))",
    "glass": "古典杯或高球杯",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "蔓越莓汁",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬角",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      }
    ],
    "steps": [
      "杯中放滿冰塊，倒入伏特加。",
      "注入酸甜蔓越莓汁。",
      "擠入檸檬角汁並放入杯中裝飾。"
    ],
    "quote": "最不費力的一杯，不需要思考比例，酸甜自然就能撫慰心緒。"
  },
  {
    "id": "amaretto-sour",
    "name": "杏仁酸酒",
    "enName": "Amaretto Sour",
    "icon": "🥃",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.4), rgba(200, 120, 30, 0.3))",
    "glass": "古典杯 (Rock Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "迪薩諾羅杏仁酒 (Amaretto)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "波本威士忌 (平衡甜度)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "糖漿 (依喜好)",
        "baseMl": 5,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將杏仁酒、波本威士忌與檸檬汁加入雪克杯。",
      "加入滿滿冰塊搖盪 12 秒。",
      "濾入裝有大冰塊的古典杯中，飾以櫻桃與檸檬皮。"
    ],
    "quote": "杏仁的濃醇堅果香被檸檬酸優雅化解，柔順得讓人卸下所有防備。"
  },
  {
    "id": "pisco-sour",
    "name": "皮斯可酸酒",
    "enName": "Pisco Sour",
    "icon": "🍸",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 16%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 245, 230, 0.4), rgba(180, 210, 160, 0.3))",
    "glass": "碟形杯 / 馬丁尼杯",
    "method": "蛋白搖盪 (Dry Shake & Shake)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "皮斯可葡萄蒸餾酒 (Pisco)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "糖漿",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蛋白液",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "安格仕苦精",
        "baseMl": 2,
        "unit": "滴",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料先在不加冰雪克杯中強力乾搖（Dry Shake）打發蛋白泡沫。",
      "加入冰塊二次強力搖盪 15 秒。",
      "濾入酒杯中，在綿密雪白的泡沫上滴上 2 滴苦精拉花。"
    ],
    "quote": "綿密的奶泡如雲朵浮在舌尖，南美的熱情化作今晚最柔和的撫慰。"
  },
  {
    "id": "bamboo",
    "name": "竹子 (竹雞尾酒)",
    "enName": "Bamboo",
    "icon": "🎋",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 14%)",
    "colorGrad": "linear-gradient(135deg, rgba(230, 210, 150, 0.4), rgba(180, 160, 90, 0.3))",
    "glass": "馬丁尼杯",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "雪莉酒 (Fino Sherry)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "乾苦艾酒 (Dry Vermouth)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "橙苦精 (Orange Bitters)",
        "baseMl": 2,
        "unit": "滴",
        "isKey": false
      }
    ],
    "steps": [
      "調酒杯中加入雪莉酒、苦艾酒與橙苦精。",
      "加入大冰塊順時針優雅攪拌 25 次。",
      "濾入冰鎮馬丁尼杯，噴擠橙皮精油點綴。"
    ],
    "quote": "低酒精度的古老經典，如竹林微風般清雅高潔，不搶風頭卻餘韻悠長。"
  },
  {
    "id": "shirley-temple",
    "name": "雪莉登波 (無酒精特調)",
    "enName": "Shirley Temple",
    "icon": "🍒",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "non-alcoholic",
    "abvText": "無酒精 (0%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(255, 159, 67, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "薑汁汽水",
        "baseMl": 140,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿 (Grenadine)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "酒漬櫻桃",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "杯中裝滿冰塊，倒入薑汁汽水與檸檬汁。",
      "緩緩淋入紅石榴糖漿，看紅色精靈沉澱泛起夢幻漸層。",
      "放上一顆鮮紅櫻桃，零負擔暢飲。"
    ],
    "quote": "放鬆未必要有酒精，心情純淨的時候，一杯甜美的汽水就是天堂。"
  },
  {
    "id": "virgin-mojito",
    "name": "純真莫希托 (無酒精特調)",
    "enName": "Virgin Mojito",
    "icon": "🌱",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "non-alcoholic",
    "abvText": "無酒精 (0%)",
    "colorGrad": "linear-gradient(135deg, rgba(46, 213, 115, 0.35), rgba(0, 210, 211, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "搗壓直調 (Muddle & Build)",
    "baseIngredients": [],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "新鮮薄荷葉",
        "baseMl": 12,
        "unit": "片",
        "isKey": false
      },
      {
        "name": "檸檬角",
        "baseMl": 3,
        "unit": "塊",
        "isKey": false
      },
      {
        "name": "蔗糖漿",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純氣泡水",
        "baseMl": 150,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯底放入檸檬角與糖漿，輕柔壓出汁水。",
      "放入薄荷葉，用攪拌棒輕壓喚醒香氣。",
      "填滿碎冰，倒入氣泡水，由下往上輕柔翻攪。"
    ],
    "quote": "最乾淨的草本冷霧，撫平一切焦慮，給靈魂一記深呼吸。"
  },
  {
    "id": "cinderella",
    "name": "灰姑娘 (無酒精綜合果汁)",
    "enName": "Cinderella Mocktail",
    "icon": "👑",
    "mood": "relax",
    "moodText": "想放鬆",
    "abvLevel": "non-alcoholic",
    "abvText": "無酒精 (0%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.45), rgba(255, 120, 80, 0.3))",
    "glass": "高球杯或颶風杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [],
    "mixers": [
      "juice",
      "soda"
    ],
    "ingredients": [
      {
        "name": "柳橙汁",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鳳梨汁",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬汁",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "氣泡水 (補滿)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將柳橙汁、鳳梨汁與檸檬汁加入雪克杯，加冰強力搖勻。",
      "濾入放有冰塊的杯中，注入少許氣泡水增添清爽度。",
      "最後沿杯壁淋入紅石榴糖漿製造漸層效果。"
    ],
    "quote": "午夜十二點鐘聲響起，卸下所有偽裝，回歸最真實放鬆的自己。"
  },
  {
    "id": "margarita",
    "name": "經典瑪格麗特",
    "enName": "Margarita",
    "icon": "🍸",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 20%)",
    "colorGrad": "linear-gradient(135deg, rgba(230, 230, 25, 0.4), rgba(46, 213, 115, 0.25))",
    "glass": "瑪格麗特杯 / 碟形杯",
    "method": "鹽口搖盪 (Shake)",
    "baseIngredients": [
      "tequila"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "龍舌蘭酒 (Tequila)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "杯口鹽圈",
        "baseMl": 1,
        "unit": "圈",
        "isKey": false
      }
    ],
    "steps": [
      "杯口抹上萊姆汁，在細鹽盤上輕轉一圈完成精緻鹽口。",
      "雪克杯中加入龍舌蘭、橙酒與萊姆汁，填滿硬冰塊。",
      "雙手握杯節奏明快地搖盪 12 秒。",
      "濾入備好的鹽口杯中，慶祝今晚的每個勝利瞬間。"
    ],
    "quote": "碰杯的清脆聲響與微鹹鹽邊，是獻給美好成果的最佳禮讚！"
  },
  {
    "id": "tequila-sunrise",
    "name": "龍舌蘭日出",
    "enName": "Tequila Sunrise",
    "icon": "🌅",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 177, 66, 0.5) 30%, rgba(255, 71, 87, 0.5) 90%)",
    "glass": "高球杯 (Highball Glass)",
    "method": "漸層直調 (Build & Layer)",
    "baseIngredients": [
      "tequila"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "龍舌蘭酒 (Tequila)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮柳橙汁",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿 (Grenadine)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯填入八分滿冰塊。",
      "倒入龍舌蘭與柳橙汁，輕輕攪拌均勻呈現金黃底色。",
      "吧叉匙沿杯壁貼底，緩緩注入石榴糖漿自然沉底形成燦爛日出。",
      "飾以柳橙片與櫻桃，舉杯歡慶。"
    ],
    "quote": "色彩絢麗得像節日煙火，今夜值得為努力後的自己喝彩！"
  },
  {
    "id": "french-75",
    "name": "法式75",
    "enName": "French 75",
    "icon": "🥂",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 17%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 230, 100, 0.4), rgba(255, 177, 66, 0.25))",
    "glass": "笛型香檳杯 (Flute)",
    "method": "搖盪注氣 (Shake & Top)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon",
      "soda"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 35,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "冰鎮香檳或氣泡酒",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "琴酒、檸檬汁與糖漿入雪克杯，加冰搖盪 10 秒。",
      "濾入優雅細長的香檳杯。",
      "注入冰涼香檳至滿杯，螺旋檸檬皮掛於杯緣。"
    ],
    "quote": "香檳氣泡如禮炮升起，每一次成功都值得用最優雅的姿態碰杯。"
  },
  {
    "id": "pina-colada",
    "name": "鳳梨可樂達",
    "enName": "Piña Colada",
    "icon": "🥥",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 250, 220, 0.45), rgba(255, 210, 100, 0.3))",
    "glass": "颶風杯 (Hurricane Glass)",
    "method": "果汁搖盪 / 冰沙 (Blend or Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "白蘭姆酒 (White Rum)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "椰漿/椰奶 (Coconut Cream)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鳳梨汁 (Pineapple Juice)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮鳳梨角",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入蘭姆酒、濃郁椰奶與鳳梨汁，加入大量冰塊。",
      "強力搖盪 15 秒至乳化起泡，或放入果汁機打成綿密冰沙。",
      "倒入大颶風杯中，插上小雨傘與鳳梨角裝飾。"
    ],
    "quote": "熱帶島嶼的嘉年華派對！濃郁椰香與酸甜鳳梨把氣氛拉到最高點。"
  },
  {
    "id": "mai-tai",
    "name": "邁泰 (大溪地派對之王)",
    "enName": "Mai Tai",
    "icon": "🗿",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "strong",
    "abvText": "烈性微醺 (約 23%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 140, 20, 0.45), rgba(180, 70, 10, 0.35))",
    "glass": "古典威士忌杯或 Tiki 杯",
    "method": "搖盪碎冰 (Shake with Crushed Ice)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "陳年深黑蘭姆酒",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "金/白蘭姆酒",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "橙皮利口酒 (Orange Curaçao)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "杏仁糖漿 (Orgeat Syrup)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將所有材料除黑蘭姆酒外加入雪克杯，加碎冰搖勻。",
      "連同碎冰倒入古典杯中。",
      "頂部漂浮黑蘭姆酒，以新鮮薄荷枝插在杯口象徵棕櫚樹。"
    ],
    "quote": "大溪地語中的『Mai Tai-Roa Aé』意思是『極致的美好』，慶祝就該這麼豪邁！"
  },
  {
    "id": "cosmopolitan",
    "name": "柯夢波丹",
    "enName": "Cosmopolitan",
    "icon": "🍸",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 18%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 71, 87, 0.45), rgba(255, 120, 180, 0.3))",
    "glass": "馬丁尼杯 (Cocktail Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "柑橘伏特加 (Citron Vodka)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蔓越莓汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯加入所有材料與飽滿冰塊。",
      "雙手快速搖盪 12 秒使酒液呈現柔美粉紅帶微霜。",
      "濾入冰鎮馬丁尼杯，擠壓橙皮點燃皮油香氣。"
    ],
    "quote": "都會摩登慶祝的象徵！酸甜明快，在燈光下閃耀著勝利的粉紅微光。"
  },
  {
    "id": "blue-hawaii",
    "name": "藍色夏威夷",
    "enName": "Blue Hawaii",
    "icon": "🏝️",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(0, 180, 255, 0.5), rgba(0, 230, 200, 0.3))",
    "glass": "颶風杯 (Hurricane Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "rum",
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "白蘭姆酒 (Rum)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "藍柑橘香甜酒 (Blue Curaçao)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鳳梨汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將所有材料加入裝滿冰塊的雪克杯中。",
      "搖盪至外層冰冷起霧。",
      "倒入盛滿碎冰的颶風杯，放上鳳梨切片與櫻桃。"
    ],
    "quote": "蔚藍海洋在杯中蕩漾，快樂不需要等待假期，此刻就是慶典。"
  },
  {
    "id": "sex-on-the-beach",
    "name": "性感海灘",
    "enName": "Sex on the Beach",
    "icon": "🏖️",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 100, 50, 0.5), rgba(255, 40, 100, 0.4))",
    "glass": "高球杯 (Highball Glass)",
    "method": "搖盪注層 (Shake & Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "水蜜桃香甜酒 (Peach Schnapps)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "柳橙汁",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蔓越莓汁",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "伏特加、水蜜桃酒與柳橙汁入雪克杯加冰搖勻，倒入滿冰杯中。",
      "緩緩注入深紅蔓越莓汁於頂層，自然產生由金黃到桃紅的漸層色。",
      "以柳橙輪片點綴。"
    ],
    "quote": "熱情奔放的果香派對酒，把快樂大方展現給夜晚！"
  },
  {
    "id": "champagne-cocktail",
    "name": "皇家香檳雞尾酒",
    "enName": "Champagne Cocktail",
    "icon": "🥂",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 15%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 215, 0, 0.45), rgba(255, 180, 50, 0.3))",
    "glass": "笛型香檳杯 (Flute)",
    "method": "方糖直調 (Build)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "頂級干邑白蘭地",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "冰鎮香檳 (Champagne)",
        "baseMl": 90,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "安格仕苦精浸潤方糖",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      },
      {
        "name": "長條橙皮",
        "baseMl": 1,
        "unit": "條",
        "isKey": false
      }
    ],
    "steps": [
      "取一顆方糖滴上 3 滴安格仕苦精至完全浸潤，投入笛型杯底。",
      "加入干邑白蘭地。",
      "緩緩注滿冰鎮香檳，方糖會持續釋放晶瑩剔透的氣泡泉柱。"
    ],
    "quote": "當方糖在杯底化開，不絕如縷的金色氣泡柱是勝利最神聖的註腳。"
  },
  {
    "id": "kir-royale",
    "name": "皇家吉爾",
    "enName": "Kir Royale",
    "icon": "🍷",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 20, 60, 0.5), rgba(220, 40, 100, 0.3))",
    "glass": "笛型香檳杯 (Flute)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "黑醋栗香甜酒 (Crème de Cassis)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "冰鎮香檳或乾氣泡酒",
        "baseMl": 90,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "在笛型香檳杯底注入深紫色的黑醋栗利口酒。",
      "傾斜杯身緩緩注入冰涼香檳，兩者交融成高貴的寶石紅。",
      "飾以新鮮黑莓或覆盆子。"
    ],
    "quote": "法式貴族典雅慶典，紅寶石般的深沉酒色裡滿溢歡愉。"
  },
  {
    "id": "grasshopper",
    "name": "綠色蚱蜢",
    "enName": "Grasshopper",
    "icon": "🦗",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 13%)",
    "colorGrad": "linear-gradient(135deg, rgba(46, 213, 115, 0.45), rgba(200, 255, 220, 0.3))",
    "glass": "馬丁尼杯 / 碟形杯",
    "method": "甜點搖盪 (Shake)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "綠薄荷香甜酒 (Crème de Menthe)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白可可香甜酒 (Crème de Cacao)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鮮奶油 (Heavy Cream)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入 1:1:1 比例的薄荷酒、白可可酒與鮮奶油。",
      "加入滿滿冰塊，強力搖盪 15 秒使鮮奶油起泡綿密。",
      "過濾倒入冰鎮馬丁尼杯，如薄荷巧克力冰淇淋般的綠色令人雀躍。"
    ],
    "quote": "像液體薄荷巧克力冰淇淋！慶祝也可以是純真甜蜜的美味派對。"
  },
  {
    "id": "golden-dream",
    "name": "金色夢想",
    "enName": "Golden Dream",
    "icon": "✨",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 215, 0, 0.5), rgba(255, 160, 50, 0.3))",
    "glass": "馬丁尼杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "加利安諾香甜酒 (Galliano)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮柳橙汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鮮奶油",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將所有材料加入雪克杯中，加入冰塊搖盪 12 秒。",
      "濾入冰鎮雞尾酒杯中。",
      "香草與柑橘交融的金色酒體，如陽光般耀眼。"
    ],
    "quote": "敬夢想成真的時刻，金色液體盛載著對未來無限的期許。"
  },
  {
    "id": "singapore-sling",
    "name": "新加坡司令",
    "enName": "Singapore Sling",
    "icon": "🍹",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 15%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 60, 80, 0.5), rgba(255, 140, 60, 0.3))",
    "glass": "高球杯或柯林杯",
    "method": "繁複搖盪 (Shake & Top)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "juice",
      "soda"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "櫻桃白蘭地 (Cherry Heering)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "班尼狄克丁利口酒 (D.O.M.)",
        "baseMl": 7.5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "君度橙酒",
        "baseMl": 7.5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮鳳梨汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬汁與紅石榴糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蘇打水 (頂部微量)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料除蘇打水外加入雪克杯，加冰強力搖勻。",
      "濾入高球杯中，注入少許蘇打水頂層起泡。",
      "裝飾鳳梨切片與紅櫻桃。"
    ],
    "quote": "萊佛士酒店的傳奇誕生，熱帶風情與繁複層次的頂級慶祝特調。"
  },
  {
    "id": "chi-chi",
    "name": "奇奇 (伏特加可樂達)",
    "enName": "Chi-Chi",
    "icon": "🥥",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 255, 240, 0.5), rgba(240, 220, 160, 0.3))",
    "glass": "颶風杯 (Hurricane Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鳳梨汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "濃椰漿 (Cream of Coconut)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將伏特加、鳳梨汁與椰奶加入雪克杯。",
      "填滿冰塊強力搖盪 15 秒打出濃郁椰泡。",
      "倒入裝滿碎冰的杯中，飾以蘭花或鳳梨葉。"
    ],
    "quote": "伏特加的純淨讓椰子與鳳梨風味更加突出，爽快慶祝每一天！"
  },
  {
    "id": "hurricane",
    "name": "颶風",
    "enName": "Hurricane",
    "icon": "🌀",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "strong",
    "abvText": "烈性微醺 (約 22%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 80, 40, 0.5), rgba(200, 20, 60, 0.4))",
    "glass": "颶風杯 (Hurricane Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "深色黑蘭姆酒",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白蘭姆酒",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "百香果果泥或糖漿",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "柳橙汁與檸檬汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料加入雪克杯，填入滿杯碎冰。",
      "大膽用力搖盪至手掌冰麻。",
      "倒入標誌性颶風杯，放上柳橙切片與櫻桃。"
    ],
    "quote": "紐奧良狂歡節的心臟！如狂風暴雨般席捲全場的熱烈歡呼。"
  },
  {
    "id": "daiquiri",
    "name": "經典戴克利",
    "enName": "Classic Daiquiri",
    "icon": "🍸",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 19%)",
    "colorGrad": "linear-gradient(135deg, rgba(230, 255, 230, 0.4), rgba(180, 230, 180, 0.25))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "白蘭姆酒 (White Rum)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純蔗糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯加入蘭姆酒、新鮮現擠萊姆汁與糖漿。",
      "加入大量冰塊，極速搖盪 10 秒打入細碎空氣氣泡。",
      "雙重過濾倒入冰鎮碟形杯，感受海明威最鍾愛的完美酸甜平衡。"
    ],
    "quote": "三種純粹材料的終極合奏，乾淨俐落，為純粹的成就舉杯。"
  },
  {
    "id": "strawberry-daiquiri",
    "name": "草莓戴克利",
    "enName": "Strawberry Daiquiri",
    "icon": "🍓",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 60, 100, 0.5), rgba(255, 120, 150, 0.3))",
    "glass": "高腳杯或碟形杯",
    "method": "果泥搖盪 / 冰沙 (Blend or Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "白蘭姆酒 (White Rum)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮草莓或草莓果泥",
        "baseMl": 40,
        "unit": "g",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "草莓與萊姆汁、糖漿搗碎成泥。",
      "加入蘭姆酒與冰塊，搖盪均勻或打成細滑雪泥。",
      "倒入杯中，杯緣插上新鮮草莓裝飾。"
    ],
    "quote": "鮮豔的草莓紅散發無限喜悅，每一口都是青春與狂歡的甜美氣息。"
  },
  {
    "id": "white-lady",
    "name": "白色佳人",
    "enName": "White Lady",
    "icon": "🍸",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 22%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(220, 240, 255, 0.25))",
    "glass": "馬丁尼杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入琴酒、君度橙酒與檸檬汁。",
      "加入滿冰用力搖盪 12 秒使外壁凝結白霜。",
      "濾入冰鎮馬丁尼杯，展現如絲綢白裙般的純淨高雅。"
    ],
    "quote": "俐落典雅的貴婦，柑橘與杜松子的明亮共鳴，慶祝非凡時刻。"
  },
  {
    "id": "clover-club",
    "name": "幸運草俱樂部",
    "enName": "Clover Club",
    "icon": "🍀",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 16%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 100, 140, 0.45), rgba(255, 180, 200, 0.3))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "果泥蛋白搖盪 (Dry Shake & Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "覆盆子果泥或糖漿",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蛋白液",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料先無冰乾搖打發蛋白，形成粉紅綿密質地。",
      "加冰二次搖盪降溫。",
      "濾入碟形杯，頂部懸浮著如絲絨般的粉嫩奶沫，放上覆盆子點綴。"
    ],
    "quote": "二十世紀初費城名流聚會之選，象徵好運與榮耀的璀璨名品。"
  },
  {
    "id": "el-matador",
    "name": "龍舌蘭鬥牛士",
    "enName": "The Matador",
    "icon": "🐂",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 16%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 200, 40, 0.45), rgba(240, 130, 20, 0.3))",
    "glass": "馬丁尼杯或笛型杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "tequila"
    ],
    "mixers": [
      "juice",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "銀龍舌蘭 (Silver Tequila)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鳳梨汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯加入龍舌蘭、鳳梨汁與萊姆汁。",
      "加入大冰塊強力搖盪，使鳳梨天然果膠產生細密泡沫。",
      "過濾倒入酒杯，以鳳梨葉點綴。"
    ],
    "quote": "鬥牛士勝利繞場的豪情，熱情果香中透著狂放不羈的王者之氣。"
  },
  {
    "id": "bellini",
    "name": "經典貝里尼",
    "enName": "Bellini",
    "icon": "🍑",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 8%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 180, 150, 0.45), rgba(255, 220, 190, 0.3))",
    "glass": "笛型香檳杯 (Flute)",
    "method": "果泥直調 (Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "白桃果泥 (White Peach Puree)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "普羅賽克氣泡酒 (Prosecco)",
        "baseMl": 80,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "在笛型杯中放入冷藏白桃果泥。",
      "先注入少許 Prosecco 輕柔攪拌化開果泥。",
      "緩緩倒滿氣泡酒，欣賞粉橘色氣泡冉冉升起。"
    ],
    "quote": "威尼斯哈利酒吧的浪漫代表作，慶祝生活中每一朵粉嫩的花開。"
  },
  {
    "id": "woo-woo",
    "name": "激情海岸",
    "enName": "Woo Woo",
    "icon": "🎉",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 40, 80, 0.5), rgba(255, 120, 160, 0.3))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "水蜜桃香甜酒 (Peach Schnapps)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蔓越莓汁",
        "baseMl": 80,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "高球杯裝滿冰塊，倒入伏特加與水蜜桃酒。",
      "補滿蔓越莓汁並攪拌均勻。",
      "放上一角青檸，歡呼乾杯！"
    ],
    "quote": "在八零年代酒吧，每當有人點這杯酒，全場就會高呼『Woo Woo!』！"
  },
  {
    "id": "bramble",
    "name": "黑莓荊棘",
    "enName": "Bramble",
    "icon": "🫐",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 16%)",
    "colorGrad": "linear-gradient(180deg, rgba(120, 20, 80, 0.6) 30%, rgba(220, 240, 220, 0.4) 100%)",
    "glass": "古典杯 (Rock Glass)",
    "method": "碎冰淋淋 (Shake & Drizzle)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "黑莓香甜酒 (Crème de Mûre)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "琴酒、檸檬汁與糖漿加冰搖勻，濾入裝滿碎冰的古典杯。",
      "將黑莓酒緩緩淋在碎冰山頂，讓深紫紅的果漿順著冰隙流淌蔓延。",
      "飾以新鮮黑莓與檸檬輪。"
    ],
    "quote": "倫敦現代經典，如黑莓灌木穿透雪地的美景，歡騰慶祝靈感乍現。"
  },
  {
    "id": "pink-lady",
    "name": "紅粉佳人",
    "enName": "Pink Lady",
    "icon": "🎀",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 18%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 120, 160, 0.45), rgba(255, 180, 210, 0.3))",
    "glass": "馬丁尼杯",
    "method": "搖盪法 (Shake with Egg White)",
    "baseIngredients": [
      "gin",
      "brandy"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "蘋果白蘭地 (Calvados)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蛋白液",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料先乾搖打發蛋白至綿密粉紅泡沫。",
      "加入大冰塊搖盪冰鎮。",
      "濾入冰鎮高腳杯中，點綴酒漬紅櫻桃。"
    ],
    "quote": "百老匯傳奇女主角的同名慶祝特調，嬌豔粉紅中帶著堅實的酒感。"
  },
  {
    "id": "blue-margarita",
    "name": "藍色瑪格麗特",
    "enName": "Blue Margarita",
    "icon": "🌊",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "medium",
    "abvText": "中度微醺 (約 20%)",
    "colorGrad": "linear-gradient(135deg, rgba(0, 160, 255, 0.5), rgba(0, 220, 200, 0.35))",
    "glass": "瑪格麗特杯",
    "method": "鹽口搖盪 (Shake)",
    "baseIngredients": [
      "tequila"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "白龍舌蘭 (Blanco Tequila)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "藍柑橘酒 (Blue Curaçao)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "海鹽杯圈",
        "baseMl": 1,
        "unit": "圈",
        "isKey": false
      }
    ],
    "steps": [
      "杯口半圈抹上海鹽。",
      "將龍舌蘭、藍柑酒與萊姆汁加冰快搖 10 秒。",
      "雙重過濾倒入杯中，寶石藍色澤如同加勒比海波光。"
    ],
    "quote": "將一整片湛藍汪洋端上慶祝舞台，這就是今晚的主角氣場！"
  },
  {
    "id": "mimosa",
    "name": "香檳含羞草",
    "enName": "Mimosa",
    "icon": "🍊",
    "mood": "celebrate",
    "moodText": "想慶祝",
    "abvLevel": "mild",
    "abvText": "輕度微醺 (約 7%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 190, 40, 0.45), rgba(255, 150, 20, 0.3))",
    "glass": "笛型香檳杯 (Flute)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "新鮮現榨柳橙汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "冰鎮香檳或 Prosecco",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "香檳杯中倒入冷藏無果肉柳橙汁。",
      "等量傾斜注入冰鎮香檳氣泡酒，自然混勻。",
      "以柳橙皮螺旋圈飾於杯口。"
    ],
    "quote": "最輕鬆的早午餐與深夜派對開場酒，微醺如含羞草般優雅綻放。"
  },
  {
    "id": "long-island-iced-tea",
    "name": "長島冰茶 (失身酒之王)",
    "enName": "Long Island Iced Tea",
    "icon": "🍹",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 26%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 80, 20, 0.5), rgba(255, 177, 66, 0.35))",
    "glass": "柯林杯 (Collins Glass)",
    "method": "四大基酒搖盪 (Shake & Top)",
    "baseIngredients": [
      "vodka",
      "gin",
      "rum",
      "tequila"
    ],
    "mixers": [
      "cola",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "琴酒 (Gin)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白蘭姆酒 (Rum)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "龍舌蘭酒 (Tequila)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙皮酒 (Triple Sec)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "可樂 (微量染色調味)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "四大基酒、橙酒、檸檬汁與糖漿倒入雪克杯加冰快搖 10 秒。",
      "連冰倒入高球杯中。",
      "淋入少量可樂調和出如檸檬紅茶般的琥珀色，放上檸檬角。"
    ],
    "quote": "名為茶卻無一滴茶，偽裝在柔和茶色下的，是毫無保留的狂烈醉意。"
  },
  {
    "id": "dry-martini",
    "name": "經典乾馬丁尼 (雞尾酒之王)",
    "enName": "Dry Martini",
    "icon": "🍸",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 32%)",
    "colorGrad": "linear-gradient(135deg, rgba(220, 240, 245, 0.4), rgba(160, 200, 220, 0.25))",
    "glass": "馬丁尼杯 (Martini Glass)",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "倫敦乾琴酒 (London Dry Gin)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "乾苦艾酒 (Dry Vermouth)",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "橙苦精 (可選)",
        "baseMl": 1,
        "unit": "滴",
        "isKey": false
      },
      {
        "name": "綠橄欖或檸檬皮",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "調酒杯加入大量冰塊冰透。",
      "倒入琴酒、苦艾酒與苦精，順時針平穩攪拌 40 次直到酒體極凍且化水平衡。",
      "濾入冰鎮馬丁尼杯中，串上一顆橄欖或噴附檸檬皮精油。"
    ],
    "quote": "極致凜冽，毫無廢話。今夜只想直面高濃度酒精的純粹震撼。"
  },
  {
    "id": "old-fashioned",
    "name": "古典雞尾酒",
    "enName": "Old Fashioned",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 34%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.45), rgba(184, 119, 30, 0.35))",
    "glass": "古典杯 (Rock Glass)",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "波本或裸麥威士忌 (Bourbon/Rye)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "安格仕苦精 (Bitters)",
        "baseMl": 3,
        "unit": "滴",
        "isKey": false
      },
      {
        "name": "方糖或濃糖漿",
        "baseMl": 5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "橙皮",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "古典杯中放方糖與苦精，加入少許水壓碎融化。",
      "加入一顆大手工老冰塊。",
      "分次倒入威士忌，每次攪拌 20 秒直到杯壁凝霜。",
      "擠壓橙皮釋放皮油抹勻杯口後投入。"
    ],
    "quote": "厚重的波本酒香帶著焦糖與木質苦香，這是一杯喝完就能安心沉醉的男人酒。"
  },
  {
    "id": "negroni",
    "name": "經典內格羅尼",
    "enName": "Negroni",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 25%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 71, 87, 0.5), rgba(180, 20, 40, 0.4))",
    "glass": "古典杯 (Rock Glass)",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "金巴利苦酒 (Campari)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "甜苦艾酒 (Sweet Vermouth)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "橙皮",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "以 1:1:1 黃金比例將三款酒倒入加滿冰塊的調酒杯。",
      "攪拌 30 次直至冰涼甘潤。",
      "濾入放有大冰塊的古典杯中，放上新鮮橙皮。"
    ],
    "quote": "苦、甜、烈的鐵三角！在濃重苦甜中快速迷失在醉意深處。"
  },
  {
    "id": "manhattan",
    "name": "曼哈頓 (雞尾酒之后)",
    "enName": "Manhattan",
    "icon": "🍸",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 30%)",
    "colorGrad": "linear-gradient(135deg, rgba(180, 30, 40, 0.5), rgba(120, 20, 30, 0.4))",
    "glass": "馬丁尼杯 / 碟形杯",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "裸麥或波本威士忌",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "紅甜苦艾酒 (Sweet Vermouth)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "安格仕苦精",
        "baseMl": 2,
        "unit": "滴",
        "isKey": false
      },
      {
        "name": "酒漬黑櫻桃",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "調酒杯加入威士忌、甜苦艾酒與苦精。",
      "加冰攪拌至低溫冰涼融合。",
      "濾入冰鎮高腳杯，投入一顆浸潤過酒液的黑櫻桃。"
    ],
    "quote": "如紐約深夜的繁華霓虹，甜苦深邃，不知不覺將整個人浸入醉意。"
  },
  {
    "id": "zombie",
    "name": "殭屍 (熱帶斷片酒)",
    "enName": "Zombie",
    "icon": "🧟",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 28%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 100, 20, 0.55), rgba(160, 20, 20, 0.45))",
    "glass": "Tiki 杯或長飲杯",
    "method": "三款蘭姆酒搖盪 (Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "juice",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "金蘭姆酒 (Gold Rum)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白蘭姆酒 (White Rum)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "151 過度蒸餾超烈黑蘭姆酒",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮萊姆汁與葡萄柚汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紅石榴糖漿",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "除 151 蘭姆酒外的所有材料加碎冰強力搖盪。",
      "連冰倒入大型 Tiki 雕刻杯中。",
      "頂層緩緩淋上 75.5% 烈性 151 黑蘭姆酒漂浮，放上薄荷枝。"
    ],
    "quote": "據說發明者規定每人限點一杯，因為第二杯會讓你直接變成行屍走肉。"
  },
  {
    "id": "brooklyn",
    "name": "布魯克林",
    "enName": "Brooklyn",
    "icon": "🍸",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 31%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 100, 40, 0.5), rgba(140, 50, 20, 0.4))",
    "glass": "馬丁尼杯",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "裸麥威士忌 (Rye Whisky)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "乾苦艾酒 (Dry Vermouth)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "黑櫻桃利口酒 (Maraschino)",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "美式苦艾酒 (Amer Picon)",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "將材料全部加入調酒杯加冰攪拌 30 次降溫。",
      "過濾倒入高腳碟形杯。",
      "飾以黑櫻桃，品嚐辛辣與果核木質調交織的深沉醉意。"
    ],
    "quote": "比曼哈頓更粗獷辛辣，今夜就想狠狠醉倒在布魯克林的鐵橋下。"
  },
  {
    "id": "penicillin",
    "name": "盤尼西林 (現代泥煤消炎針)",
    "enName": "Penicillin",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 24%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 180, 50, 0.5), rgba(180, 110, 20, 0.4))",
    "glass": "古典杯 (Rock Glass)",
    "method": "泥煤漂浮 (Shake & Float)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "蘇格蘭調和威士忌",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "艾雷島重泥煤威士忌 (Laphroaig)",
        "baseMl": 10,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蜂蜜生薑糖漿",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "糖漬薑片",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "調和威士忌、檸檬汁與蜂蜜薑汁入雪克杯加冰快搖。",
      "倒入放有老冰塊的古典杯中。",
      "吧叉匙倒扣在杯面，緩緩漂浮重泥煤正露丸風味的艾雷威士忌。",
      "放上糖漬薑片。"
    ],
    "quote": "煙燻消毒水般的強勁泥煤香！靈魂生病時，這是最強烈的解藥。"
  },
  {
    "id": "absinthe-drip",
    "name": "苦艾滴漏 (綠色妖精)",
    "enName": "Absinthe Drip",
    "icon": "🧚",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 45%)",
    "colorGrad": "linear-gradient(135deg, rgba(80, 220, 100, 0.6), rgba(40, 150, 60, 0.4))",
    "glass": "苦艾酒專用杯 (Pontarlier Glass)",
    "method": "法式水滴漏 (Drip & Louche)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "經典苦艾酒 (Absinthe 68%)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "冰水 (Ice Water)",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "方糖",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      }
    ],
    "steps": [
      "杯底注入高純度苦艾酒。",
      "杯口平放鏤空苦艾匙，放上一塊方糖。",
      "用冰水壺極慢一滴一滴滴在方糖上融化注入酒中。",
      "綠色酒液遇水乳化成神秘的白霧雲朵（Louche效果）。"
    ],
    "quote": "王爾德與梵谷的最愛，高純度八角草本迷霧，帶你跌入幻覺般的深醉。"
  },
  {
    "id": "vesper-martini",
    "name": "龐德皇家薇絲朋馬丁尼",
    "enName": "Vesper Martini",
    "icon": "🔫",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 33%)",
    "colorGrad": "linear-gradient(135deg, rgba(230, 245, 255, 0.45), rgba(180, 210, 230, 0.3))",
    "glass": "深馬丁尼杯",
    "method": "龐德搖盪法 (Shaken, Not Stirred)",
    "baseIngredients": [
      "gin",
      "vodka"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "莉萊白開胃酒 (Lillet Blanc)",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "長條薄檸檬皮",
        "baseMl": 1,
        "unit": "條",
        "isKey": false
      }
    ],
    "steps": [
      "007 龐德原著指示：『三份琴酒，一份伏特加，半份白利口酒，搖勻，不要攪拌。』",
      "雪克杯加入大量硬冰塊搖盪至極冰。",
      "濾入深口杯中，加入大塊檸檬皮。"
    ],
    "quote": "Shaken, not stirred. 雙重烈酒直球對決，特務專屬的硬派醉意。"
  },
  {
    "id": "the-last-word",
    "name": "臨終之言",
    "enName": "The Last Word",
    "icon": "🗣️",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 25%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 230, 160, 0.45), rgba(80, 180, 100, 0.35))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "四大天王搖盪 (Equal Parts Shake)",
    "baseIngredients": [
      "gin",
      "liqueur"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 22.5,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "綠夏翠絲草本酒 (Green Chartreuse)",
        "baseMl": 22.5,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "黑櫻桃利口酒 (Maraschino)",
        "baseMl": 22.5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萊姆汁",
        "baseMl": 22.5,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "以極其平衡的 1:1:1:1 比例倒入四種材料。",
      "加冰強力搖盪 12 秒。",
      "濾入杯中，淡綠色酒液散發 130 種草本精華與強悍酒精度。"
    ],
    "quote": "喝下這杯酒，今晚的爭論就此結束，因為它擁有最後的發言權。"
  },
  {
    "id": "aviation",
    "name": "飛行",
    "enName": "Aviation",
    "icon": "✈️",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 27%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 170, 240, 0.45), rgba(120, 110, 200, 0.35))",
    "glass": "馬丁尼杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "乾琴酒 (Gin)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "黑櫻桃利口酒 (Maraschino)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "紫羅蘭香甜酒 (Crème de Violette)",
        "baseMl": 7.5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料加入雪克杯，加冰搖盪。",
      "雙重過濾倒入杯中，紫羅蘭酒賦予其如晴空般淡紫青色。",
      "放入一顆黑櫻桃沉底象徵地平線。"
    ],
    "quote": "如衝入雲霄般的空靈淡紫，隨之而來的是強大後勁的飄飄欲仙。"
  },
  {
    "id": "rusty-nail",
    "name": "鏽釘",
    "enName": "Rusty Nail",
    "icon": "🔩",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 35%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 110, 20, 0.5), rgba(140, 60, 10, 0.4))",
    "glass": "古典杯 (Rock Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "蘇格蘭威士忌 (Scotch)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "吉寶蜂蜜威士忌甜酒 (Drambuie)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "檸檬皮 (可選)",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "古典杯放入大老冰塊。",
      "倒入蘇格蘭威士忌與草本蜂蜜調味的 Drambuie。",
      "以吧叉匙緩慢攪拌 20 次使甜烈交融。"
    ],
    "quote": "鐵鏽色澤如生鏽老釘般堅固，烈火與石楠花蜂蜜的交織，一記痛快的重擊。"
  },
  {
    "id": "corpse-reviver-no2",
    "name": "亡者復甦2號",
    "enName": "Corpse Reviver No. 2",
    "icon": "💀",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 25%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 245, 210, 0.45), rgba(190, 220, 160, 0.3))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "苦艾洗杯搖盪 (Rinse & Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "白苦艾酒 (Lillet Blanc)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "苦艾酒 (Absinthe，洗杯用)",
        "baseMl": 3,
        "unit": "滴",
        "isKey": false
      }
    ],
    "steps": [
      "冰鎮碟形杯中滴入數滴苦艾酒旋轉洗杯，倒掉餘酒。",
      "其餘等比例材料入雪克杯加冰快搖。",
      "濾入飄著茴香香氣的杯中。"
    ],
    "quote": "『連續喝四杯，即使是死人也會立刻跳起來。』救命與斷片的界線就在這。"
  },
  {
    "id": "sidecar",
    "name": "側車",
    "enName": "Sidecar",
    "icon": "🏍️",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 28%)",
    "colorGrad": "linear-gradient(135deg, rgba(230, 140, 30, 0.5), rgba(180, 80, 20, 0.4))",
    "glass": "碟形杯 / 馬丁尼杯",
    "method": "糖口搖盪 (Sugar Rim & Shake)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "干邑白蘭地 (Cognac)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "半邊細糖圈",
        "baseMl": 1,
        "unit": "圈",
        "isKey": false
      }
    ],
    "steps": [
      "杯緣抹上半邊細砂糖圈。",
      "白蘭地、橙酒與檸檬汁加冰快速搖勻。",
      "濾入杯中，葡萄熟成的奢華香氣與酸甜直球碰撞。"
    ],
    "quote": "一次大戰軍官跨上三輪摩托側車的豪氣，白蘭地的濃烈令人難以抗拒。"
  },
  {
    "id": "sazerac",
    "name": "薩澤拉克 (紐奧良古老烈魂)",
    "enName": "Sazerac",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 36%)",
    "colorGrad": "linear-gradient(135deg, rgba(220, 90, 20, 0.5), rgba(160, 40, 10, 0.4))",
    "glass": "古典杯 (無冰純飲)",
    "method": "洗杯攪拌 (Rinse & Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "裸麥威士忌或干邑",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "苦艾酒 (Absinthe 洗杯)",
        "baseMl": 5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "裴修苦精 (Peychaud's Bitters)",
        "baseMl": 3,
        "unit": "滴",
        "isKey": false
      },
      {
        "name": "方糖",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "古典杯中倒入苦艾酒涮洗杯壁倒掉。",
      "調酒杯中方糖加苦精壓碎，倒入威士忌加冰攪拌至極度冰涼。",
      "過濾倒入無冰的苦艾香古典杯中，擠壓檸檬皮油投入。"
    ],
    "quote": "美國最古老的官方雞尾酒，不加冰塊的純粹濃烈，一飲而盡直達靈魂。"
  },
  {
    "id": "boulevardier",
    "name": "林蔭大道 (花花公子)",
    "enName": "Boulevardier",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 27%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 30, 30, 0.5), rgba(140, 10, 20, 0.4))",
    "glass": "古典杯 (Rock Glass)",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "波本威士忌 (Bourbon)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "金巴利苦酒 (Campari)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "甜苦艾酒 (Sweet Vermouth)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "材料全數倒入加冰調酒杯。",
      "攪拌 35 次使波本的香草木質香與草本苦甜交融。",
      "倒入盛有大冰塊的古典杯，放上柳橙皮。"
    ],
    "quote": "內格羅尼的威士忌升級版！更加圓潤雄渾，是夜行者最性感的深醉選擇。"
  },
  {
    "id": "black-russian",
    "name": "黑色俄羅斯",
    "enName": "Black Russian",
    "icon": "☕",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 30%)",
    "colorGrad": "linear-gradient(135deg, rgba(50, 25, 10, 0.6), rgba(15, 5, 0, 0.5))",
    "glass": "古典杯 (Rock Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "古典杯裝入老冰塊。",
      "倒入伏特加與卡魯哇咖啡酒。",
      "順時針輕拌幾次，讓深黑的咖啡香與高純度伏特加融為一體。"
    ],
    "quote": "冷戰時期的純粹狠角色，沒有奶油的修飾，濃烈咖啡烘焙伴隨烈酒直衝腦門。"
  },
  {
    "id": "painkiller",
    "name": "痛楚殺手 (止痛藥)",
    "enName": "Painkiller",
    "icon": "💊",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 24%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 160, 40, 0.5), rgba(200, 90, 10, 0.4))",
    "glass": "颶風杯或大口杯",
    "method": "重度搖盪 (Shake)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "普瑟海軍深黑蘭姆酒 (Pusser's Navy Rum)",
        "baseMl": 60,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鳳梨汁",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "柳橙汁",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "濃椰奶",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "現磨肉荳蔻粉",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "將厚重黑蘭姆酒、果汁與椰奶加冰用力搖勻。",
      "倒入盛滿碎冰的杯中。",
      "在冰山頂部大方灑上現磨肉豆蔻粉。"
    ],
    "quote": "英屬維爾京群島的傳奇止痛良方，今夜不管有什麼心碎，都能一醉解千愁。"
  },
  {
    "id": "the-godfather",
    "name": "教父",
    "enName": "The Godfather",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 30%)",
    "colorGrad": "linear-gradient(135deg, rgba(184, 119, 30, 0.5), rgba(120, 50, 10, 0.4))",
    "glass": "古典杯 (Rock Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "蘇格蘭威士忌 (Scotch)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "杏仁香甜酒 (Amaretto)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "古典杯中放入大方冰塊。",
      "倒入威士忌與杏仁酒。",
      "吧叉匙攪拌 15 秒至降溫均勻。"
    ],
    "quote": "不需要多餘的水果或糖漿，威士忌的硬漢骨氣加上杏仁酒的溫柔，敬教父。"
  },
  {
    "id": "the-godmother",
    "name": "教母",
    "enName": "The Godmother",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 30%)",
    "colorGrad": "linear-gradient(135deg, rgba(220, 160, 60, 0.45), rgba(160, 90, 20, 0.35))",
    "glass": "古典杯 (Rock Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "純伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "杏仁香甜酒 (Amaretto)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "杯中加入大冰塊。",
      "注入純淨伏特加與香甜杏仁酒。",
      "輕柔攪拌使其融合。"
    ],
    "quote": "少了威士忌的泥煤煙燻，多了伏特加的純烈，杏仁的甜美偽裝下是致命的後勁。"
  },
  {
    "id": "b-52-shot",
    "name": "轟炸機 B-52 (分層一口杯)",
    "enName": "B-52 Shot",
    "icon": "🚀",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 29%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 140, 20, 0.6) 33%, rgba(240, 230, 210, 0.6) 66%, rgba(60, 30, 10, 0.7) 100%)",
    "glass": "一口杯 (Shot Glass)",
    "method": "精密分層 (Layered)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "貝禮詩奶酒 (Baileys Irish Cream)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "柑橘香甜酒 (Grand Marnier)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "一口杯底先倒入咖啡香甜酒。",
      "吧匙貼壁極其緩慢引流注入貝禮詩奶酒形成中層。",
      "再緩緩注入柑橘香甜酒頂層，形成如地層般分明的完美三色。",
      "可點火後以吸管一飲而盡或直接一口乾杯。"
    ],
    "quote": "三種烈性利口酒的垂直轟炸，甜美滑順中給腦袋來一記痛快的重拳！"
  },
  {
    "id": "depth-charge",
    "name": "水中地雷 (深水炸彈)",
    "enName": "Depth Charge",
    "icon": "💣",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 20%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.6), rgba(180, 80, 10, 0.5))",
    "glass": "大啤酒杯 + 一口杯",
    "method": "投杯乾杯 (Drop Shot)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "冰鎮生啤酒 (Draft Beer)",
        "baseMl": 250,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "高濃度波本威士忌或野格",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "大啤酒杯裝入冰透生啤酒八分滿。",
      "一口杯斟滿威士忌或野格利口酒。",
      "將整只一口杯筆直丟入啤酒杯中，氣泡瞬間激噴，立刻仰頭豪飲見底！"
    ],
    "quote": "啤酒花與烈酒在腹中引爆，今晚就要炸開所有束縛！"
  },
  {
    "id": "earthquake",
    "name": "地震 (巴黎傳奇烈酒)",
    "enName": "Earthquake (Tremblement de Terre)",
    "icon": "⚡",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 50%)",
    "colorGrad": "linear-gradient(135deg, rgba(200, 100, 20, 0.6), rgba(100, 180, 50, 0.5))",
    "glass": "純飲酒杯",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "brandy",
      "liqueur"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "干邑白蘭地 (Cognac)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "苦艾酒 (Absinthe 68%)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "由後印象派畫家羅特列克發明。",
      "將等比例的干邑白蘭地與 68% 苦艾酒加冰快速攪拌。",
      "濾入杯中純飲。"
    ],
    "quote": "一口下肚彷彿腳下大地劇烈晃動，最強悍的靈魂震盪之酒。"
  },
  {
    "id": "rusty-godfather",
    "name": "遺產教父 (雙重威士忌猛擊)",
    "enName": "Rusty Godfather",
    "icon": "🥃",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 33%)",
    "colorGrad": "linear-gradient(135deg, rgba(160, 90, 20, 0.55), rgba(90, 40, 5, 0.45))",
    "glass": "古典杯 (Rock Glass)",
    "method": "攪拌法 (Stir)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "蘇格蘭威士忌",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "吉寶蜂蜜甜酒 (Drambuie)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "杏仁香甜酒 (Amaretto)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": true
      }
    ],
    "steps": [
      "杯中放入大方冰塊。",
      "倒入蘇格蘭威士忌、蜂蜜威士忌酒與杏仁酒。",
      "順時針平穩攪拌 20 次使甜香與酒精深度交融。"
    ],
    "quote": "教父與鏽釘的終極結合，雙倍堅果蜂蜜的甜美，包裹著核彈級的酒感。"
  },
  {
    "id": "new-york-sour",
    "name": "紐約酸酒 (紅酒漂浮)",
    "enName": "New York Sour",
    "icon": "🍷",
    "mood": "drunk",
    "moodText": "想喝醉",
    "abvLevel": "strong",
    "abvText": "烈性重擊 (約 23%)",
    "colorGrad": "linear-gradient(180deg, rgba(150, 10, 40, 0.6) 35%, rgba(255, 190, 70, 0.45) 100%)",
    "glass": "古典杯 (Rock Glass)",
    "method": "紅酒漂浮 (Shake & Wine Float)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "波本或裸麥威士忌",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "乾型紅葡萄酒 (Dry Red Wine)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "威士忌、檸檬汁與糖漿入雪克杯加冰用力搖勻。",
      "濾入放有大冰塊的古典杯中。",
      "用吧叉匙倒扣，極其優雅地將紅酒漂浮在金黃酸酒頂層，形成如曼哈頓黃昏般的壯麗分層。"
    ],
    "quote": "頂層紅酒的單寧與底層威士忌的酸甜，兩重醉意同時襲來，醉倒在紐約的天際線下。"
  },
  {
    "id": "hot-toddy",
    "name": "暖心熱托迪",
    "enName": "Hot Toddy",
    "icon": "☕",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 177, 66, 0.5), rgba(200, 100, 20, 0.35))",
    "glass": "耐熱玻璃馬克杯 (Irish Mug)",
    "method": "溫熱直調 (Hot Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "威士忌或白蘭地",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "純天然蜂蜜",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "滾水或熱紅茶",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "肉桂棒與丁香插檸檬片",
        "baseMl": 1,
        "unit": "份",
        "isKey": false
      }
    ],
    "steps": [
      "在耐熱杯中加入蜂蜜、檸檬汁與威士忌。",
      "注入熱水或熱紅茶，用肉桂棒輕柔攪拌至蜂蜜完全化開。",
      "投入插有丁香的檸檬輪片，雙手捧著杯身深深吸入香氣後慢品。"
    ],
    "quote": "蘇格蘭古老的治癒良方，暖胃暖心，給疲憊的深夜一個最深情的擁抱。"
  },
  {
    "id": "white-russian",
    "name": "白俄羅斯",
    "enName": "White Russian",
    "icon": "🥛",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 13%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 255, 255, 0.55) 30%, rgba(50, 25, 10, 0.6) 80%)",
    "glass": "古典杯 (Rock Glass)",
    "method": "奶油漂浮 (Float)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鮮奶油或全脂鮮奶",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "古典杯放冰塊，倒入伏特加與咖啡酒輕拌。",
      "沿冰塊表面輕柔淋入鮮奶油，看雲霧如大理石紋般緩緩墜落。",
      "不攪拌直接啜飲，感受冰涼甘醇與絲絨奶香的層次對比。"
    ],
    "quote": "像一杯成人的融化咖啡冰淇淋，絲絨般的溫柔包裹住微苦，安然入夢。"
  },
  {
    "id": "espresso-martini",
    "name": "濃縮咖啡馬丁尼",
    "enName": "Espresso Martini",
    "icon": "🍸",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "medium",
    "abvText": "醇香微醺 (約 18%)",
    "colorGrad": "linear-gradient(135deg, rgba(60, 30, 15, 0.55), rgba(20, 10, 5, 0.5))",
    "glass": "馬丁尼杯",
    "method": "強力搖盪出泡 (Hard Shake)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "伏特加 (Vodka)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮萃取濃縮咖啡 (Espresso)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "簡單糖漿",
        "baseMl": 5,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "咖啡豆點綴",
        "baseMl": 3,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯加入大量硬冰塊，注入伏特加、咖啡酒、熱濃縮咖啡與糖漿。",
      "以最快速度劇烈搖盪 15 秒震盪出極其豐沛綿密的 Crema 奶泡。",
      "雙重濾網倒入馬丁尼杯，在油沫上輕置三顆象徵健康、財富與幸福的咖啡豆。"
    ],
    "quote": "濃醇的咖啡油脂香氣與伏特加交融，安撫深夜仍在運轉的靈魂。"
  },
  {
    "id": "irish-coffee",
    "name": "愛爾蘭咖啡",
    "enName": "Irish Coffee",
    "icon": "☕",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 11%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 20%, rgba(40, 20, 10, 0.6) 100%)",
    "glass": "愛爾蘭專用把手玻璃杯",
    "method": "溫熱漂浮 (Hot Layered)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "愛爾蘭威士忌 (Irish Whiskey)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "熱黑咖啡 (Hot Brewed Coffee)",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "棕糖 (Brown Sugar)",
        "baseMl": 1,
        "unit": "茶匙",
        "isKey": false
      },
      {
        "name": "打發微發冷鮮奶油",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "預熱玻璃杯，放入棕糖與愛爾蘭威士忌，倒入滾燙黑咖啡攪拌化糖。",
      "吧叉匙倒扣在液面上，將輕度打發微流動的冰鮮奶油緩慢引流漂浮其上。",
      "絕不可攪拌！嘴唇微抿，讓熱燙威士忌咖啡透過冰冷香甜奶泡滑入喉嚨。"
    ],
    "quote": "都柏林寒冬機場裡的溫暖奇蹟，冰與火在舌尖相融，安神舒眠的極品。"
  },
  {
    "id": "eggnog",
    "name": "經典溫暖蛋酒",
    "enName": "Classic Eggnog",
    "icon": "🥛",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 245, 200, 0.5), rgba(240, 210, 140, 0.35))",
    "glass": "馬克杯或古典杯",
    "method": "乳化攪打 (Whisk & Warm)",
    "baseIngredients": [
      "brandy",
      "rum"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "白蘭地或黑蘭姆酒",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮蛋黃",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      },
      {
        "name": "溫全脂牛奶與鮮奶油",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純糖漿或蜂蜜",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "肉荳蔻粉與肉桂粉",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "蛋黃與糖攪打至泛白濃稠。",
      "將溫熱牛奶緩緩沖入蛋黃糊中拌勻。",
      "加入蘭姆酒或白蘭地，撒上溫暖的肉荳蔻香料粉。"
    ],
    "quote": "歐洲家庭冬夜壁爐旁的睡眠儀式，濃郁蛋奶香像軟綿綿的羽絨被。"
  },
  {
    "id": "brandy-alexander",
    "name": "白蘭地亞歷山大",
    "enName": "Brandy Alexander",
    "icon": "🍸",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 14%)",
    "colorGrad": "linear-gradient(135deg, rgba(235, 215, 190, 0.5), rgba(180, 150, 120, 0.35))",
    "glass": "碟形杯 / 馬丁尼杯",
    "method": "甜點搖盪 (Shake)",
    "baseIngredients": [
      "brandy",
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "干邑白蘭地 (Cognac)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "棕可可香甜酒 (Crème de Cacao)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鮮奶油 (Heavy Cream)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "現磨肉荳蔻粉",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "白蘭地、可可酒與鮮奶油 1:1:1 倒入雪克杯。",
      "加冰快速搖盪 15 秒使酒體柔滑起沫。",
      "濾入冰鎮碟形杯，表面輕撒一小撮現磨肉豆蔻粉。"
    ],
    "quote": "巧克力慕斯般的甜點酒，白蘭地的果香隱於絲滑奶香中，最催眠的微醺甜夢。"
  },
  {
    "id": "amaretto-coffee",
    "name": "杏仁香甜暖咖啡",
    "enName": "Amaretto Hot Coffee",
    "icon": "☕",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 9%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 255, 255, 0.5) 20%, rgba(60, 30, 10, 0.6) 100%)",
    "glass": "暖手馬克杯",
    "method": "熱飲直調 (Hot Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "迪薩諾羅杏仁香甜酒 (Amaretto)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "熱低因/黑咖啡",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "擠花鮮奶油",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "杏仁薄片 (烘烤過)",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "在溫熱的馬克杯中倒入杏仁利口酒。",
      "沖入現煮熱黑咖啡輕拌。",
      "擠上一朵香甜鮮奶油，灑上香脆杏仁片。"
    ],
    "quote": "烘烤杏仁的堅果香氣漫溢整個房間，深吸一口氣，卸下全身疲憊。"
  },
  {
    "id": "mulled-wine",
    "name": "香料熱紅酒",
    "enName": "Mulled Wine (Glühwein)",
    "icon": "🍷",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(140, 20, 30, 0.6), rgba(80, 10, 15, 0.5))",
    "glass": "耐熱馬克杯",
    "method": "香料慢煨 (Simmer)",
    "baseIngredients": [
      "brandy"
    ],
    "mixers": [
      "juice"
    ],
    "ingredients": [
      {
        "name": "紅酒 (Red Wine)",
        "baseMl": 150,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "新鮮柳橙切片",
        "baseMl": 2,
        "unit": "片",
        "isKey": false
      },
      {
        "name": "肉桂棒與八角、丁香",
        "baseMl": 1,
        "unit": "份",
        "isKey": false
      },
      {
        "name": "黑糖或蜂蜜",
        "baseMl": 15,
        "unit": "g",
        "isKey": false
      }
    ],
    "steps": [
      "小鍋中放入紅酒、橙片、肉桂棒、八角與糖。",
      "文火慢煮 8-10 分鐘，千萬不可大火滾沸以免酒精揮發過甚。",
      "過濾倒入溫暖馬克杯，肉桂棒留作攪拌飾品。"
    ],
    "quote": "歐陸冬夜市集的靈魂，滿屋的丁香肉桂暖香，喝完被窩都暖融融的。"
  },
  {
    "id": "baileys-hot-chocolate",
    "name": "貝禮詩微醺熱可可",
    "enName": "Baileys Hot Chocolate",
    "icon": "🍫",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 8%)",
    "colorGrad": "linear-gradient(135deg, rgba(90, 45, 20, 0.6), rgba(50, 20, 10, 0.5))",
    "glass": "大陶瓷馬克杯",
    "method": "熱飲直調 (Hot Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "貝禮詩愛爾蘭奶酒 (Baileys)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "濃郁熱可可牛奶",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "迷你棉花糖",
        "baseMl": 5,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "煮一杯濃郁香醇的熱牛奶巧克力。",
      "倒入馬克杯，注入貝禮詩愛爾蘭香甜奶酒。",
      "輕輕攪勻，表面放上迷你棉花糖慢慢融化。"
    ],
    "quote": "濃可可與愛爾蘭威士忌奶香的完美聯姻，今晚最甜蜜的安全感。"
  },
  {
    "id": "golden-cadillac",
    "name": "金色凱迪拉克",
    "enName": "Golden Cadillac",
    "icon": "✨",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 230, 130, 0.5), rgba(240, 200, 90, 0.35))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "甜點搖盪 (Shake)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "加利安諾草本香草酒 (Galliano)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白可可香甜酒 (White Crème de Cacao)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鮮奶油",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "所有材料等比例加入雪克杯。",
      "加冰劇烈搖盪至綿密泛白起泡。",
      "濾入冰鎮碟形杯中，淡金黃色的質地貴氣又催眠。"
    ],
    "quote": "香草與白巧克力的奢華夢境，坐上金色凱迪拉克，駛入無憂夢鄉。"
  },
  {
    "id": "angels-kiss",
    "name": "天使之吻",
    "enName": "Angel's Kiss",
    "icon": "👼",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 10%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 30%, rgba(120, 20, 40, 0.6) 100%)",
    "glass": "甜酒杯或利口酒杯",
    "method": "分層法 (Layered)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "黑可可香甜酒 (Dark Crème de Cacao)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鮮奶油 (Heavy Cream)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "雞尾酒櫻桃 (紅櫻桃穿心)",
        "baseMl": 1,
        "unit": "顆",
        "isKey": false
      }
    ],
    "steps": [
      "杯底注入黑可可酒。",
      "用吧叉匙沿杯壁輕緩引流鮮奶油漂浮在頂層。",
      "用竹籤串起一顆紅櫻桃，輕輕插在奶油層上，宛如天使送來的印記。"
    ],
    "quote": "黑與白的純潔擁抱，天使在夜深時分印在額頭的一吻，晚安好夢。"
  },
  {
    "id": "hot-buttered-rum",
    "name": "熱奶油蘭姆酒",
    "enName": "Hot Buttered Rum",
    "icon": "🧈",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 14%)",
    "colorGrad": "linear-gradient(135deg, rgba(220, 130, 30, 0.55), rgba(160, 70, 15, 0.4))",
    "glass": "厚底陶瓷馬克杯",
    "method": "奶油溫溶 (Hot Build)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [],
    "ingredients": [
      {
        "name": "陳年黑蘭姆酒 (Dark Rum)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "無鹽發酵奶油",
        "baseMl": 15,
        "unit": "g",
        "isKey": false
      },
      {
        "name": "黑糖與肉桂、肉豆蔻香料粉",
        "baseMl": 1,
        "unit": "茶匙",
        "isKey": false
      },
      {
        "name": "滾燙熱水",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "在馬克杯中將奶油、黑糖與香料粉攪拌成奶油糊。",
      "注入深邃芳香的黑蘭姆酒。",
      "沖入沸騰熱水，充分攪拌至金黃奶油油脂飄逸於水面，趁熱啜飲。"
    ],
    "quote": "航海時代水手的安眠避風港，奶油滑潤包裹喉嚨，溫熱直透胃底。"
  },
  {
    "id": "bees-knees",
    "name": "蜂之膝 (蜜糖檸檬琴酒)",
    "enName": "Bee's Knees",
    "icon": "🐝",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "medium",
    "abvText": "溫潤微醺 (約 18%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 210, 80, 0.5), rgba(220, 160, 40, 0.35))",
    "glass": "碟形杯 (Coupe Glass)",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "gin"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "琴酒 (Gin)",
        "baseMl": 50,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "純蜂蜜糖漿 (蜂蜜:水=2:1)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "琴酒、現擠檸檬汁與溫水融開的蜂蜜糖漿倒入雪克杯。",
      "加冰搖盪 12 秒使蜂蜜與杜松子果香徹底結合。",
      "濾入冰鎮碟形杯，以檸檬皮扭轉裝飾。"
    ],
    "quote": "禁酒令時期的極致代名詞（Bee's Knees 意為最棒事物），蜜糖香氣是最舒緩的催眠曲。"
  },
  {
    "id": "velvet-hammer",
    "name": "天鵝絨之錘",
    "enName": "Velvet Hammer",
    "icon": "🔨",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 13%)",
    "colorGrad": "linear-gradient(135deg, rgba(250, 240, 220, 0.5), rgba(220, 190, 150, 0.35))",
    "glass": "古典杯或碟形杯",
    "method": "搖盪法 (Shake)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "君度橙酒 (Cointreau)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "白可可酒 (White Crème de Cacao)",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "鮮奶油或奶酒",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "橙皮酒、白可可酒與鮮奶油加冰搖勻 15 秒。",
      "濾入古典杯中，放上一小塊老冰塊慢慢融化。"
    ],
    "quote": "觸感像天鵝絨般輕柔順滑，卻能在無聲無息中精準敲落你的睡意。"
  },
  {
    "id": "bourbon-milk-punch",
    "name": "波旁奶香賓治",
    "enName": "Bourbon Milk Punch",
    "icon": "🥛",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 248, 220, 0.5), rgba(230, 200, 150, 0.35))",
    "glass": "古典杯 (Rock Glass)",
    "method": "乳香搖盪 (Shake)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "波本威士忌 (Bourbon)",
        "baseMl": 45,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "全脂鮮乳",
        "baseMl": 90,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純香草精",
        "baseMl": 2,
        "unit": "滴",
        "isKey": false
      },
      {
        "name": "糖粉或純糖漿",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "現磨肉荳蔻粉",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "波本、鮮奶、糖漿與香草精加冰用力搖勻。",
      "濾入放有大冰塊的古典杯中。",
      "頂端撒上肉荳蔻粉點綴。"
    ],
    "quote": "紐奧良南方莊園流傳數百年的安神聖品，波旁的木質甜香與熱奶同頻共振。"
  },
  {
    "id": "black-forest-martini",
    "name": "櫻桃黑森林馬丁尼",
    "enName": "Black Forest Martini",
    "icon": "🍒",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 14%)",
    "colorGrad": "linear-gradient(135deg, rgba(80, 20, 30, 0.6), rgba(40, 10, 15, 0.5))",
    "glass": "馬丁尼杯",
    "method": "甜點搖盪 (Shake)",
    "baseIngredients": [
      "vodka",
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "香草伏特加 (Vanilla Vodka)",
        "baseMl": 35,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "黑可可香甜酒 (Crème de Cacao)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "黑櫻桃利口酒 (Cherry Liqueur)",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鮮奶油 (Cream)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "雪克杯中加入伏特加、可可酒、櫻桃酒與鮮奶油。",
      "加冰搖盪 12 秒使可可與櫻桃充分融合。",
      "濾入杯中，杯底沉入一顆酒漬櫻桃。"
    ],
    "quote": "宛如在深夜慢品一塊經典黑森林蛋糕，微醺果酸與可可香讓人嘴角泛起微笑。"
  },
  {
    "id": "whisky-honey-nightcap",
    "name": "威士忌蜂蜜晚安飲",
    "enName": "Whisky Honey Comfort",
    "icon": "🍯",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 180, 40, 0.5), rgba(200, 110, 20, 0.35))",
    "glass": "古典杯或溫杯",
    "method": "直調法 (Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "蘇格蘭或波本威士忌",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "龍眼蜂蜜",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "溫開水",
        "baseMl": 60,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯中倒入蜂蜜與溫開水攪拌融化。",
      "加入威士忌與少許檸檬汁。",
      "輕柔調和，溫熱飲用或加入一顆老冰塊慢品。"
    ],
    "quote": "最簡潔的入眠配方，蜂蜜的溫潤中和了酒精的鋒利，安心閉上眼睛。"
  },
  {
    "id": "vanilla-white-russian",
    "name": "香草白俄羅斯",
    "enName": "Vanilla White Russian",
    "icon": "🍦",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 12%)",
    "colorGrad": "linear-gradient(180deg, rgba(255, 250, 230, 0.6) 30%, rgba(60, 30, 10, 0.6) 80%)",
    "glass": "古典杯 (Rock Glass)",
    "method": "漂浮直調 (Float)",
    "baseIngredients": [
      "vodka"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "香草伏特加 (Vanilla Vodka)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "全脂鮮奶或燕麥奶",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯中裝入厚實老冰塊，先注入香草伏特加與咖啡酒。",
      "表面淋上鮮奶或絲滑燕麥奶。",
      "靜靜看著雲朵般的奶霜沉降，微甜安神。"
    ],
    "quote": "多了一抹溫暖的波旁香草莢香氣，比原版更療癒入睡前的時光。"
  },
  {
    "id": "chartreuse-herbal-toddy",
    "name": "查特酒草本暖心飲",
    "enName": "Chartreuse Herbal Toddy",
    "icon": "🌿",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 14%)",
    "colorGrad": "linear-gradient(135deg, rgba(180, 220, 140, 0.5), rgba(120, 170, 80, 0.35))",
    "glass": "耐熱馬克杯",
    "method": "溫熱沖泡 (Hot Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "黃夏翠絲甜草本酒 (Yellow Chartreuse)",
        "baseMl": 35,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "熱洋甘菊茶 (Hot Chamomile Tea)",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬角",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      },
      {
        "name": "百花蜂蜜",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "沖泡一杯熱騰騰的洋甘菊香草茶。",
      "在馬克杯中倒入帶有番紅花與蜂蜜芳香的黃夏翠絲酒與蜂蜜。",
      "注入熱茶，擠入檸檬角輕拌。"
    ],
    "quote": "阿爾卑斯山修道院僧侶的古老秘方，一百多種草本精油與熱茶共鳴，安撫整夜好眠。"
  },
  {
    "id": "caramel-whisky-dream",
    "name": "焦糖威士忌熱牛奶",
    "enName": "Caramel Whisky Dream",
    "icon": "🍮",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 190, 130, 0.55), rgba(180, 120, 60, 0.4))",
    "glass": "暖手馬克杯",
    "method": "熱奶調和 (Hot Build)",
    "baseIngredients": [
      "whisky"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "波本威士忌 (Bourbon)",
        "baseMl": 35,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "太妃焦糖糖漿",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "溫熱全脂牛奶",
        "baseMl": 130,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "肉桂粉 (表面輕撒)",
        "baseMl": 1,
        "unit": "撮",
        "isKey": false
      }
    ],
    "steps": [
      "熱牛奶中攪拌化開太妃焦糖糖漿。",
      "倒入波本威士忌。",
      "輕輕攪拌，表面撒上一抹肉桂粉，熱氣撲鼻。"
    ],
    "quote": "小時候睡前的熱牛奶長大了，加了一匙成熟的波本與焦糖香，微甜入眠。"
  },
  {
    "id": "peppermint-mocha-buzz",
    "name": "薄荷摩卡夜宴",
    "enName": "Peppermint Mocha Buzz",
    "icon": "☕",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(70, 35, 20, 0.6), rgba(30, 15, 5, 0.5))",
    "glass": "馬克杯",
    "method": "熱摩卡直調 (Hot Build)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "coffee"
    ],
    "ingredients": [
      {
        "name": "白薄荷香甜酒 (White Crème de Menthe)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "咖啡香甜酒 (Kahlúa)",
        "baseMl": 25,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "熱巧克力牛奶",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "鮮奶油與薄荷葉",
        "baseMl": 1,
        "unit": "份",
        "isKey": false
      }
    ],
    "steps": [
      "馬克杯中倒入薄荷酒與咖啡酒。",
      "注滿熱巧克力牛奶攪拌均勻。",
      "擠上一圈鮮奶油，薄荷的涼意與可可的暖香帶來極致療癒感。"
    ],
    "quote": "微涼的薄荷清新融在醇濃可可中，給今夜的睡意打上一記溫柔的節拍。"
  },
  {
    "id": "fleur-de-sommeil",
    "name": "睡眠之花 (接骨木晚安飲)",
    "enName": "Fleur de Sommeil",
    "icon": "🌸",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 9%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 240, 210, 0.45), rgba(220, 200, 150, 0.3))",
    "glass": "碟形杯或高腳杯",
    "method": "溫柔攪拌 (Stir)",
    "baseIngredients": [
      "liqueur"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "聖杰曼接骨木花香甜酒 (St-Germain)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "蘋果汁或白葡萄汁",
        "baseMl": 50,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 10,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "溫熱水或常溫水",
        "baseMl": 40,
        "unit": "ml",
        "isKey": false
      }
    ],
    "steps": [
      "杯中倒入接骨木花利口酒與果汁。",
      "注入少許溫開水釋放花香，輕柔攪勻。",
      "漂浮一朵可食用白花點綴。"
    ],
    "quote": "在法國，接骨木花象徵治癒與平和。伴著幽雅花香，安然入睡。"
  },
  {
    "id": "rum-chamomile-comfort",
    "name": "蘭姆洋甘菊溫舒飲",
    "enName": "Rum Chamomile Comfort",
    "icon": "🌼",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 11%)",
    "colorGrad": "linear-gradient(135deg, rgba(240, 210, 100, 0.45), rgba(190, 150, 60, 0.35))",
    "glass": "耐熱玻璃馬克杯",
    "method": "溫茶慢調 (Hot Build)",
    "baseIngredients": [
      "rum"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "深金蘭姆酒 (Añejo Rum)",
        "baseMl": 40,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "熱洋甘菊茶湯",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "野花蜂蜜",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "檸檬皮",
        "baseMl": 1,
        "unit": "片",
        "isKey": false
      }
    ],
    "steps": [
      "將剛沖泡好的滾燙洋甘菊茶倒入杯中。",
      "加入蜂蜜攪拌至完全化開。",
      "倒入金黃蘭姆酒與檸檬皮，感受甘蔗甘香與草本花香的和諧。"
    ],
    "quote": "洋甘菊是天然安神草，金蘭姆酒為它注入靈魂，卸下整日的緊繃。"
  },
  {
    "id": "cinnamon-honey-toddy",
    "name": "肉桂蜜桃暖威",
    "enName": "Cinnamon Honey Toddy",
    "icon": "🍑",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "mild",
    "abvText": "溫潤微醺 (約 10%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 160, 100, 0.5), rgba(200, 90, 40, 0.35))",
    "glass": "馬克杯",
    "method": "溫熱直調 (Hot Build)",
    "baseIngredients": [
      "whisky",
      "liqueur"
    ],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "波本威士忌",
        "baseMl": 30,
        "unit": "ml",
        "isKey": true
      },
      {
        "name": "水蜜桃香甜酒 (Peach Schnapps)",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "熱水",
        "baseMl": 100,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "蜂蜜與肉桂棒",
        "baseMl": 1,
        "unit": "份",
        "isKey": false
      }
    ],
    "steps": [
      "在馬克杯中放入波本、水蜜桃酒與蜂蜜。",
      "注入滾水，用肉桂棒慢慢攪開。",
      "蜜桃的清香蒸騰在空氣中，溫潤甘美。"
    ],
    "quote": "帶著微甜蜜桃香的暖飲，喝完微熱的雙頰正好貼緊枕頭入睡。"
  },
  {
    "id": "chamomile-honey-mocktail",
    "name": "洋甘菊蜂蜜安神飲 (無酒精)",
    "enName": "Chamomile Honey Comfort",
    "icon": "🌼",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "non-alcoholic",
    "abvText": "無酒精 (0%)",
    "colorGrad": "linear-gradient(135deg, rgba(255, 230, 120, 0.4), rgba(220, 190, 80, 0.25))",
    "glass": "耐熱陶瓷馬克杯",
    "method": "熱泡調和 (Hot Brew)",
    "baseIngredients": [],
    "mixers": [
      "lemon"
    ],
    "ingredients": [
      {
        "name": "德式有機洋甘菊茶",
        "baseMl": 150,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純百花蜂蜜",
        "baseMl": 20,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬角",
        "baseMl": 1,
        "unit": "塊",
        "isKey": false
      },
      {
        "name": "鮮肉桂棒",
        "baseMl": 1,
        "unit": "根",
        "isKey": false
      }
    ],
    "steps": [
      "沸水沖泡洋甘菊茶袋 5 分鐘出味。",
      "取出茶袋，拌入天然蜂蜜。",
      "擠入少許檸檬汁，以肉桂棒輕攪，溫潤不澀。"
    ],
    "quote": "不需要一滴酒精，天然洋甘菊就能替大腦按下關機鍵，祝好夢。"
  },
  {
    "id": "lavender-night-buzz",
    "name": "薰衣草晚安蘇打 (無酒精)",
    "enName": "Lavender Night Fizz",
    "icon": "🪻",
    "mood": "nightcap",
    "moodText": "睡前微醺",
    "abvLevel": "non-alcoholic",
    "abvText": "無酒精 (0%)",
    "colorGrad": "linear-gradient(135deg, rgba(180, 150, 240, 0.4), rgba(120, 100, 200, 0.25))",
    "glass": "高球杯 (Highball Glass)",
    "method": "直調法 (Build)",
    "baseIngredients": [],
    "mixers": [
      "soda",
      "lemon"
    ],
    "ingredients": [
      {
        "name": "純天然薰衣草花茶/糖漿",
        "baseMl": 30,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "新鮮檸檬汁",
        "baseMl": 15,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "純氣泡水 (Soda Water)",
        "baseMl": 120,
        "unit": "ml",
        "isKey": false
      },
      {
        "name": "乾燥薰衣草小枝",
        "baseMl": 1,
        "unit": "枝",
        "isKey": false
      }
    ],
    "steps": [
      "杯中倒入淡紫色薰衣草茶與檸檬汁。",
      "加入晶瑩冰塊。",
      "注入微氣泡水，放上一枝薰衣草，草本清芬撫平躁動神經。"
    ],
    "quote": "普羅旺斯夜間的花香，靜靜地吹熄心中的最後一盞燈。"
  }
];
