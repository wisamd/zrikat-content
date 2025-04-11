/**
 * נתוני התייחסות - מידע סטטי על סוגי עבודות, יחידות מידה וקטגוריות
 * משמש כמאגר מידע קבוע לתצוגת ערכים בטבלה
 */
const referenceData = {
    workTypes: {
        excavation: {
            id: "EXC",
            hebrewName: "חפירה ופינוי",
            englishName: "Excavation and Removal"
        },
        concrete: {
            id: "CON",
            hebrewName: "ברזל ויציקה",
            englishName: "Iron and Casting"
        },
        formwork: {
            id: "FRM",
            hebrewName: "טפ+בר+יצ",
            englishName: "Formwork + Iron + Casting",
            fullHebrewName: "טפסנות + ברזלנות + יציקה"
        },
        masonry: {
            id: "MAS",
            hebrewName: "בנייה",
            englishName: "Masonry"
        },
        waterproofing: {
            id: "WTR",
            hebrewName: "איטום",
            englishName: "Waterproofing"
        },
        drillingAndCasting: {
            id: "DRC",
            hebrewName: "קידוח ויציקה",
            englishName: "Drilling and Casting"
        },
        supportingWalls: {
            id: "SUP",
            hebrewName: "קירות תומכים",
            englishName: "Supporting Walls"
        },
        leanAndWaterproofing: {
            id: "LWC",
            hebrewName: "רזה + איטום",
            englishName: "Lean + Waterproofing"
        },
        wallWaterproofing: {
            id: "WWP",
            hebrewName: "איטום קירות",
            englishName: "Wall Waterproofing"
        },
        interiorPlaster: {
            id: "IP",
            hebrewName: "טיח פנים",
            englishName: "Interior Plaster"
        },
        exteriorPlaster: {
            id: "EP",
            hebrewName: "טיח חוץ",
            englishName: "Exterior Plaster"
        },
        flooring: {
            id: "FLR",
            hebrewName: "ריצוף",
            englishName: "Flooring"
        },
        painting: {
            id: "PTG",
            hebrewName: "צביעה",
            englishName: "Painting"
        },
        windowInstallation: {
            id: "WI",
            hebrewName: "הרכבת חלונות",
            englishName: "Window Installation"
        },
        concretePouring: {
            id: "CP",
            hebrewName: "יציקת בטקל",
            englishName: "Concrete Pouring"
        },
        roofWaterproofing: {
            id: "RW",
            hebrewName: "איטום גגות",
            englishName: "Roof Waterproofing"
        },
        miscellaneousWork: {
            id: "MW",
            hebrewName: "עבודות שונות",
            englishName: "Miscellaneous Work"
        }
    },
    units: {
        m3: {
            symbol: "מ\"ק",
            hebrewName: "מטר מעוקב",
            englishName: "cubic meters"
        },
        m2: {
            symbol: "מ\"ר",
            hebrewName: "מטר מרובע",
            englishName: "square meters"
        },
        m: {
            symbol: "מ\"א",
            hebrewName: "מטר אורך",
            englishName: "linear meters"
        },
        comp: {
            symbol: "קומפ'",
            hebrewName: "קומפלט",
            englishName: "complete unit"
        }
    },
    categories: {
        foundation: {
            id: "FND",
            hebrewName: "יסודות",
            englishName: "Foundations",
            items: [1, 2, 3, 4]
        },
        basement: {
            id: "BSM",
            hebrewName: "מרתף",
            englishName: "Basement",
            items: [5, 6, 7, 8, 9, 10]
        },
        groundFloor: {
            id: "GRD",
            hebrewName: "קומת קרקע",
            englishName: "Ground Floor",
            items: [11, 12, 13, 14]
        },
        firstFloor: {
            id: "FLR",
            hebrewName: "קומה א'",
            englishName: "First Floor",
            items: [15, 16, 17, 18]
        },
        finishing: {
            id: "FIN",
            hebrewName: "גמרים",
            englishName: "Finishing",
            items: [19, 20, 21, 22, 23, 24, 25]
        }
    }
};
/**
 * נתוני הפרויקט - מידע דינמי על הפרויקט הנוכחי
 * כולל מידע כללי על הפרויקט ורשימת הפריטים
 */
const projectData = {
"projectInfo": {
  "id": "PROJ-2024-001",
  "name": "Construction Project",
  "numberOfBuildings": 5,
  "startDate": "2024-01-01",
  "lastUpdate": "2024-01-01",
  "status": "active"
},
"items": [
  {
    "id": "BOQ-001",
    "itemNumber": 1,
    "detailedNumber": "00.00.0000",
    "descriptionHebrew": "חפירה ו / או חציבה",
    "workTypeId": "EXC",
    "unitType": "m3",
    "area": "כל המגרשים",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-002",
    "itemNumber": 2,
    "descriptionHebrew": "קירות תומכים בפיתוח",
    "workTypeId": "SUP",
    "unitType": "m3",
    "area": "כל המגרשים",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-003",
    "itemNumber": 3,
    "descriptionHebrew": "יסודות (כלונסאות)",
    "workTypeId": "DRC",
    "unitType": "m",
    "area": "יסודות",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-004",
    "itemNumber": 4,
    "descriptionHebrew": "יסודות בודדים (אושיות)",
    "workTypeId": "DRC",
    "unitType": "m3",
    "area": "יסודות",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-005",
    "itemNumber": 5,
    "descriptionHebrew": "בטון רזה + 1 יום לאיטום הרצפה",
    "workTypeId": "LWC",
    "unitType": "m2",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-006",
    "itemNumber": 6,
    "descriptionHebrew": "קורות קשר קומת מרתף",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-007",
    "itemNumber": 7,
    "descriptionHebrew": "רצפת בטון למרתף",
    "workTypeId": "FRM",
    "unitType": "m2",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-008",
    "itemNumber": 8,
    "descriptionHebrew": "קירות בטון למרתף",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-009",
    "itemNumber": 9,
    "descriptionHebrew": "תקרת המרתף ורצפת קומת קרקע",
    "workTypeId": "FRM",
    "unitType": "m2",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-010",
    "itemNumber": 10,
    "descriptionHebrew": "איטום קירות מרתף כולל מילוי חוזר",
    "workTypeId": "WTR", 
    "unitType": "m2",
    "area": "קומת מרתף",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-010a",
    "itemNumber": 11,
    "descriptionHebrew": "רצפת קומת קרקע",
    "workTypeId": "FRM",
    "unitType": "m2", 
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-011",
    "itemNumber": 12,
    "descriptionHebrew": "בניית בלוקי חוץ קומת קרקע",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-012",
    "itemNumber": 13,
    "descriptionHebrew": "עמודי בטון קומת קרקע",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-013",
    "itemNumber": 14,
    "descriptionHebrew": "קירות בטון קומת קרקע",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-014",
    "itemNumber": 15,
    "descriptionHebrew": "תקרת קומת קרקע",
    "workTypeId": "FRM",
    "unitType": "m2",
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-015",
    "itemNumber": 16,
    "descriptionHebrew": "בניית בלוקי קירות חוץ קומה א'",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומה א",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-016",
    "itemNumber": 17,
    "descriptionHebrew": "עמודי בטון קומה א'",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומה א",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-017",
    "itemNumber": 18,
    "descriptionHebrew": "קירות בטון קומה א'",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומה א",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-018",
    "itemNumber": 19,
    "descriptionHebrew": "תקרת קומה א'",
    "workTypeId": "FRM",
    "unitType": "m2",
    "area": "קומה א",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-037",
    "itemNumber": 20,
    "descriptionHebrew": "בניית בלוקי קירות חוץ קומה ב'",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומה ב",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-038",
    "itemNumber": 21,
    "descriptionHebrew": "עמודי בטון קומה ב'",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומה ב",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-039",
    "itemNumber": 22,
    "descriptionHebrew": "קירות בטון קומה ב'",
    "workTypeId": "FRM",
    "unitType": "m3",
    "area": "קומה ב",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-040",
    "itemNumber": 23,
    "descriptionHebrew": "תקרת קומה ב'",
    "workTypeId": "FRM",
    "unitType": "m2",
    "area": "קומה ב",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-019",
    "itemNumber": 24,
    "descriptionHebrew": "מחיצות לקומת קרקע",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומת קרקע",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-020",
    "itemNumber": 25,
    "descriptionHebrew": "מחיצות קומה א'",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומה א",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-041",
    "itemNumber": 26,
    "descriptionHebrew": "מחיצות קומה ב'",
    "workTypeId": "MAS",
    "unitType": "m2",
    "area": "קומה ב",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-021",
    "itemNumber": 27,
    "descriptionHebrew": "הכנות קווי אינסטלציה",
    "workTypeId": "PLM",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-022",
    "itemNumber": 28,
    "descriptionHebrew": "הכנת שרוולי חשמל",
    "workTypeId": "ELC",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-023",
    "itemNumber": 29,
    "descriptionHebrew": "טיח פנים לכל הקומות",
    "workTypeId": "IP",
    "unitType": "m2",
    "area": "כל המבנה",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-024",
    "itemNumber": 30,
    "descriptionHebrew": "טיח חוץ לכל המבנה",
    "workTypeId": "EP",
    "unitType": "m2",
    "area": "חזיתות",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-025",
    "itemNumber": 31,
    "descriptionHebrew": "איטום חללים רטובים",
    "workTypeId": "WTR",
    "unitType": "m2",
    "area": "כל המבנה",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-026",
    "itemNumber": 32,
    "descriptionHebrew": "ריצוף וחיפוי קירות לכל הקומות",
    "workTypeId": "FLR",
    "unitType": "m2",
    "area": "כל המבנה",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-027",
    "itemNumber": 33,
    "descriptionHebrew": "צבע לכל הקומות (פנים)",
    "workTypeId": "PTG",
    "unitType": "m2",
    "area": "כל המבנה",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-028",
    "itemNumber": 34,
    "descriptionHebrew": "עבודות אלומיניום",
    "workTypeId": "WI",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-029",
    "itemNumber": 35,
    "descriptionHebrew": "מתקנים סיניטריים",
    "workTypeId": "",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-030",
    "itemNumber": 36,
    "descriptionHebrew": "מיזוג אוויר",
    "workTypeId": "",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-031",
    "itemNumber": 37,
    "descriptionHebrew": "השלמת עבודות חשמל",
    "workTypeId": "",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-032",
    "itemNumber": 38,
    "descriptionHebrew": "יציקת בטקל על הגג",
    "workTypeId": "CP",
    "unitType": "comp",
    "area": "גגות",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-033",
    "itemNumber": 39,
    "descriptionHebrew": "איטום גג",
    "workTypeId": "RW",
    "unitType": "m2",
    "area": "גגות",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-034",
    "itemNumber": 40,
    "descriptionHebrew": "צבע חוץ לכל המבנה",
    "workTypeId": "PTG",
    "unitType": "m2",
    "area": "חזיתות",
    "sections": [
      {
        "sectionId": "00.00.0000",
        "detailedNumber": "00.00.0000",
        "quantity": 0,
        "remarks": ""
      }
    ],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-035",
    "itemNumber": 41,
    "descriptionHebrew": "פיתוח חוץ כולל השלמת קירות תומכים",
    "workTypeId": "MW",
    "unitType": "comp",
    "area": "פיתוח",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  },
  {
    "id": "BOQ-036",
    "itemNumber": 42,
    "descriptionHebrew": "תיקונים ומסירה",
    "workTypeId": "",
    "unitType": "comp",
    "area": "כל המבנה",
    "sections": [],
    "totalQuantity": 0,
    "quantityPerBuilding": 0
  }
]
};
// הסרת סעיפים מפריטים עם יחידת מידה "comp"
projectData.items.forEach(item => {
    if (item.unitType === "comp") {
        item.sections = []; // הסרת כל הסעיפים
    }
});

/**
         /**
         * מחלקה ליצירת וניהול טבלת כתב הכמויות
         * אחראית על תצוגת הטבלה, הוספת שורות, עריכת כמויות והערות
         */
        class BOQTableGenerator {
            constructor(containerId, projectData, referenceData) {
                this.container = document.getElementById(containerId);
                this.projectData = JSON.parse(JSON.stringify(projectData)); // Create a deep copy of project data
                this.referenceData = referenceData;
                this.hasUnsavedChanges = false;
                this.loadProjectData(); // Load saved data first
                this.pwdInit();
            }
            pwdInit() {
                this.pwdCreateTable();
            }
            pwdCreateTable() {
                const table = document.createElement('table');
                table.className = 'boq-table';
                table.appendChild(this.pwdCreateHeader());
                table.appendChild(this.pwdCreateBody());
                this.container.innerHTML = '';
                this.container.appendChild(table);
            }
            pwdCreateHeader() {
                const thead = document.createElement('thead');
                const headerRow = document.createElement('tr');
                const headers = [
                    {
                        text: 'מס׳',
                        tooltip: 'מספר סידורי של הפריט בטבלה'
                    },
                    {
                        text: 'סוג העבודה',
                        tooltip: 'תיאור העבודה או הפריט'
                    },
                    {
                        text: 'כמות',
                        tooltip: 'הכמות הכוללת של הפריט (לפי יחידת המידה)'
                    },
                    {
                        text: 'יחידות',
                        tooltip: 'יחידת המידה של הפריט (מ"ק, מ"ר, מ"א, קומפ\')'
                    },
                    {
                        text: 'תשומה / תפוקה',
                        tooltip: 'שעות עבודה נדרשות ליחידת מידה אחת'
                    },
                    {
                        text: 'יחידות',
                        tooltip: 'יחידת המידה של התשומה/תפוקה (שעות)'
                    },
                    {
                        text: 'סה"כ שעות',
                        tooltip: 'חישוב: כמות × תשומה/תפוקה'
                    },
                    {
                        text: 'מס׳ פועלים',
                        tooltip: 'מספר הפועלים שיבצעו את העבודה'
                    },
                    {
                        text: 'שעות ביום',
                        tooltip: 'מספר שעות העבודה ליום לפועל'
                    },
                    {
                        text: 'סה"כ ימים',
                        tooltip: 'חישוב: סה"כ שעות ÷ (מס׳ פועלים × שעות ביום)'
                    },
                    {
                        text: 'עיגול כלפי מעלה',
                        tooltip: 'עיגול של סה"כ הימים כלפי מעלה למספר שלם'
                    }
                ];

                headers.forEach(header => {
                    const th = document.createElement('th');
                    th.textContent = header.text;
                    th.style.position = 'relative';
                    
                    // Add tooltip
                    const tooltip = document.createElement('div');
                    tooltip.className = 'tooltip';
                    tooltip.textContent = header.tooltip;
                    tooltip.style.cssText = `
                        visibility: hidden;
                        position: absolute;
                        z-index: 100;
                        background: #f8f9fa;
                        border: 1px solid #dee2e6;
                        border-radius: 4px;
                        padding: 8px;
                        font-size: 12px;
                        max-width: 200px;
                        text-align: right;
                        direction: rtl;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    `;
                    
                    // Add hover events
                    th.addEventListener('mouseenter', () => {
                        tooltip.style.visibility = 'visible';
                        // Position tooltip above the header
                        const rect = th.getBoundingClientRect();
                        tooltip.style.bottom = `${rect.height + 5}px`;
                        tooltip.style.left = '50%';
                        tooltip.style.transform = 'translateX(-50%)';
                    });
                    
                    th.addEventListener('mouseleave', () => {
                        tooltip.style.visibility = 'hidden';
                    });
                    
                    th.appendChild(tooltip);
                    th.appendChild(this.pwdCreateResizeHandle());
                    headerRow.appendChild(th);
                });
                
                thead.appendChild(headerRow);
                return thead;
            }
            pwdCreateResizeHandle() {
                const handle = document.createElement('div');
                handle.className = 'resize-handle';
                handle.style.cursor = 'col-resize';
                handle.addEventListener('mousedown', this.pwdInitResize.bind(this));
                return handle;
            }
            pwdInitResize(e) {
                const th = e.target.parentElement;
                const startX = e.clientX;
                const startWidth = th.offsetWidth;
                const doDrag = (e) => {
                    th.style.width = `${startWidth + e.clientX - startX}px`;
                };
                const stopDrag = () => {
                    document.removeEventListener('mousemove', doDrag);
                    document.removeEventListener('mouseup', stopDrag);
                };
                document.addEventListener('mousemove', doDrag);
                document.addEventListener('mouseup', stopDrag);
            }
            pwdCreateBody() {
                const tbody = document.createElement('tbody');
                
                
                // Add organization row at the end
                const orgRow = document.createElement('tr');
                orgRow.className = 'item-row';

                // Number column
                const numberCell = document.createElement('td');
                numberCell.textContent = '0'; // Next number after the last item
                orgRow.appendChild(numberCell);

                // Work Type column
                const workTypeCell = document.createElement('td');
                workTypeCell.textContent = 'התארגנות';
                orgRow.appendChild(workTypeCell);

                // Quantity column with number input
                const quantityCell = document.createElement('td');

                orgRow.appendChild(quantityCell);

                // Units column
                const unitCell = document.createElement('td');
                unitCell.textContent = "קומפ'";
                orgRow.appendChild(unitCell);

                // Input/Output column
                const inputOutputCell = document.createElement('td');
                orgRow.appendChild(inputOutputCell);

                // Units column (second)
                const unitCell2 = document.createElement('td');
                unitCell2.textContent = 'ימים';
                orgRow.appendChild(unitCell2);

                // Total Hours column
                const totalHoursCell = document.createElement('td');
                totalHoursCell.style.textAlign = 'center';
                totalHoursCell.style.fontWeight = 'bold';
                orgRow.appendChild(totalHoursCell);

                // Number of Workers column
                const workersCell = document.createElement('td');
                orgRow.appendChild(workersCell);

                // Hours per Day column
                const hoursPerDayCell = document.createElement('td');
                orgRow.appendChild(hoursPerDayCell);

                // Total Days column
                const totalDaysCell = document.createElement('td');
                const totalDaysInput = document.createElement('input');
                totalDaysInput.type = 'number';
                totalDaysInput.step = '0.01';
                totalDaysInput.value = (this.organizationRowData.totalDays || 4.00).toFixed(2);
                totalDaysInput.style.width = '100px';
                totalDaysInput.style.textAlign = 'center';
                totalDaysInput.addEventListener('change', (e) => {
                    const value = parseFloat(e.target.value);
                    if (!isNaN(value)) {
                        e.target.value = value.toFixed(2);
                        this.organizationRowData.totalDays = value;
                        updateTotalDays();
                        this.updateCalculationData('org-row', { 
                          totalDays: value,
                          roundedUpDays: value // Set rounded up days to the same value
                      });
                        this.saveProjectDataToFile(); 
                    }
                });
                totalDaysCell.appendChild(totalDaysInput);
                orgRow.appendChild(totalDaysCell);
                
                // Rounded Up column
                const roundedUpCell = document.createElement('td');
                roundedUpCell.textContent = '' + this.organizationRowData.totalDays || '4';
                roundedUpCell.style.textAlign = 'center';
                roundedUpCell.style.fontWeight = 'bold';
                orgRow.appendChild(roundedUpCell);
                
                // Add main subtitle cell 
                const excavationSubtitleRow = document.createElement('tr');
                // Add number cell first
                const numberCell1 = document.createElement('td');
                numberCell1.style.width = 'var(--number-cell-width, 60px)';
                numberCell1.style.backgroundColor = '#f8f9fa';
                excavationSubtitleRow.appendChild(numberCell1);
                const excavationSubtitleCell = document.createElement('td');
                excavationSubtitleCell.colSpan = 11;
                excavationSubtitleCell.textContent = "ערסל לחפירה וקידוח";
                excavationSubtitleCell.style.textAlign = 'right';
                excavationSubtitleCell.style.fontWeight = 'bold';
                excavationSubtitleCell.style.fontSize = '16px';
                excavationSubtitleCell.style.padding = '10px';
                excavationSubtitleCell.style.color = '#828aa3';
                excavationSubtitleCell.style.backgroundColor = '#f8f9fa';
                excavationSubtitleCell.style.borderTop = '2px solid #dee2e6';
                excavationSubtitleCell.style.borderBottom = '2px solid #dee2e6';
                excavationSubtitleRow.appendChild(excavationSubtitleCell);
                tbody.appendChild(excavationSubtitleRow);
                
                tbody.appendChild(orgRow);

                // Add subtitle after organization row



                // Sort items by itemNumber to maintain order
                const sortedItems = [...this.projectData.items].sort((a, b) => a.itemNumber - b.itemNumber);

                let previousArea = null;
                let rowCount = 0;
                sortedItems.forEach(item => {
                    const row = this.pwdCreateItemRow(item);
                        if (item.unitType === "comp") {
                        row.style.backgroundColor = 'lightpink';
                    }
                    previousArea = item.area;
                    tbody.appendChild(row);
                    
                    // Add skeleton subtitle after the 4th row
                    rowCount++;
                    if (rowCount === 4) {
                        const skeletonSubtitleRow = document.createElement('tr');

                        // Add number cell first
                        const numberCell = document.createElement('td');
                        numberCell.style.width = 'var(--number-cell-width, 60px)';
                        numberCell.style.backgroundColor = '#f8f9fa';
                        skeletonSubtitleRow.appendChild(numberCell);

                        // Add main subtitle cell
                        const skeletonSubtitleCell = document.createElement('td');
                        skeletonSubtitleCell.colSpan = 11;
                        skeletonSubtitleCell.textContent = "ערסל לשלד";
                        skeletonSubtitleCell.style.textAlign = 'right';
                        skeletonSubtitleCell.style.fontWeight = 'bold';
                        skeletonSubtitleCell.style.fontSize = '16px';
                        skeletonSubtitleCell.style.padding = '10px';
                        skeletonSubtitleCell.style.backgroundColor = '#f8f9fa';
                        skeletonSubtitleCell.style.color = '#828aa3';
                        skeletonSubtitleCell.style.borderTop = '2px solid #dee2e6';
                        skeletonSubtitleCell.style.borderBottom = '2px solid #dee2e6';
                        skeletonSubtitleRow.appendChild(skeletonSubtitleCell);
                        tbody.appendChild(skeletonSubtitleRow);
                    }

                    // Add finishing subtitle after row 26
                    if (rowCount === 26) {
                        const finishingSubtitleRow = document.createElement('tr');
                        
                        // Add number cell first
                        const numberCell = document.createElement('td');
                        numberCell.style.width = 'var(--number-cell-width, 60px)';
                        numberCell.style.backgroundColor = '#f8f9fa';
                        finishingSubtitleRow.appendChild(numberCell);

                        // Add main subtitle cell
                        const finishingSubtitleCell = document.createElement('td');
                        finishingSubtitleCell.colSpan = 10; // Reduced by 1 since we added number cell
                        finishingSubtitleCell.textContent = "ערסל לגמר";
                        finishingSubtitleCell.style.textAlign = 'right';
                        finishingSubtitleCell.style.fontWeight = 'bold';
                        finishingSubtitleCell.style.fontSize = '16px';
                        finishingSubtitleCell.style.padding = '10px';
                        finishingSubtitleCell.style.backgroundColor = '#f8f9fa';
                        finishingSubtitleCell.style.color = '#828aa3';
                        finishingSubtitleCell.style.borderTop = '2px solid #dee2e6';
                        finishingSubtitleCell.style.borderBottom = '2px solid #dee2e6';
                        finishingSubtitleRow.appendChild(finishingSubtitleCell);
                        
                        tbody.appendChild(finishingSubtitleRow);
                    }
                });

                // Add comments at the bottom of the table
                const commentsRow = document.createElement('tr');
                const commentsCell = document.createElement('td');
                commentsCell.colSpan = 11;
                commentsCell.innerHTML = `
                    <div style="text-align: right; padding: 15px; font-size: 14px; line-height: 1.5;">
                        <strong>הבהרות התשומות בטבלה לעיל מהמקורות שלהלן:</strong><br>
                        1. ד"ר עאוני זריקאת - ההנדסה האזרחית, המגמה לניהול הבנייה. שנה ב' פרק מבוא ללוחות הזמנים 2022.<br>
                        2. נתון מהמנחה<br>
                        3. א. אנג'ל, מהנדסים בע"מ, חברת י.ק. תכנון כללי בע"מ (מופיע במקור 1 לעיל).
                    </div>
                `;
                commentsCell.style.backgroundColor = '#f8f9fa';
                commentsCell.style.borderTop = '2px solid #dee2e6';
                commentsRow.appendChild(commentsCell);
                tbody.appendChild(commentsRow);

                // Function to update total days and rounded up value
                const updateTotalDays = () => {
                    let totalDays = parseFloat(totalDaysInput.value) || 0;
                    const roundedUp = Math.ceil(totalDays);
                    roundedUpCell.textContent = '' + roundedUp;
                };
                
                return tbody;
              }
            pwdCreateItemRow(item) {
                const row = document.createElement('tr');
                row.className = 'item-row';
                row.dataset.itemId = item.id;
                const calcData = this.getCalculationData(item.id);
                // Set background color for comp items
                if (item.unitType === "comp") {
                    row.style.backgroundColor = 'lightpink';
                }
                
                // Number column
                const numberCell = document.createElement('td');
                numberCell.textContent = item.itemNumber;
                row.appendChild(numberCell);

                // Work Type column
                const workTypeCell = document.createElement('td');
                workTypeCell.textContent = item.descriptionHebrew;
                row.appendChild(workTypeCell);

                // Quantity column
                const quantityCell = document.createElement('td');
                let quantityInput;
                if (item.unitType === "comp") {
                    quantityCell.textContent = ""; // Default value for comp items
                } else {
                    quantityInput = document.createElement('input');
                    quantityInput.type = 'number';
                    quantityInput.step = '0.01';
                    
                    quantityInput.value = (calcData?.quantity || 0).toFixed(2);
                    quantityInput.style.width = '100px';
                    quantityInput.style.textAlign = 'center';
                    quantityCell.appendChild(quantityInput);
                }
                row.appendChild(quantityCell);

                // Units column
                const unitCell = document.createElement('td');
                const unit = this.referenceData.units[item.unitType];
                unitCell.textContent = unit ? unit.symbol : '';
                row.appendChild(unitCell);

                // Input/Output column
                const inputOutputCell = document.createElement('td');
                let inputOutputInput;
                if (item.unitType === "comp") {
                    inputOutputCell.textContent = ""; // Default value for comp items
                } else {
                  let val = 0;
                  switch (item.itemNumber) {
                        case 1:
                          val = 450.00;
                          break;
                        case 2:
                          val = 17.00;
                          break;
                        case 3:
                          val = 60.00;
                          break;
                        case 4:
                          val = 15.00;
                          break;
                        case 5:
                          val = 0.25;
                          break;
                        case 6: 
                          val = 31.00;
                          break;
                        case 7:
                          val = 1.50;
                          break;
                        case 8:
                          val = 17.00;
                          break;
                        case 9:
                          val = 1.34;
                          break;
                        case 10:
                          val = 0.50;
                          break;
                        case 11:
                          val = 1.60;
                          break;
                        case 12:
                          val = 31.00;
                          break;
                        case 13:
                          val = 170.00;
                          break;
                        case 14:
                          val = 1.34;
                          break;
                        case 15:
                          val = 1.60;
                          break;
                        case 16:
                          val = 31.00;
                          break;
                        case 17:
                          val = 17.00;
                          break;
                        case 18:
                          val = 17.00;
                          break;
                        case 19:
                          val = 1.34;
                          break;  
                        case 20:
                          val = 31.00;
                          break;
                        case 21:
                          val = 17.00;
                          break;
                        case 22:
                          val = 17.00;
                          break;
                        case 23:
                          val = 1.34;
                          break;
                        case 24:
                          val = 1.30;
                          break;
                        case 25:
                          val = 1.30;
                          break;
                        case 26:
                          val = 1.30;
                          break;
                        case 29:
                          val = 0.55;
                          break;
                        case 30:
                          val = 0.70;
                          break;
                        case 31:
                          val = 0.50;
                          break;
                        case 32:
                          val = 0.88;
                          break;
                        case 33:
                          val = 0.10;
                          break;
                        case 39:
                          val = 0.50;
                          break;
                        case 40:
                          val = 0.12;
                          break;
                      }
                    inputOutputInput = document.createElement('input');
                    inputOutputInput.type = 'number';
                    inputOutputInput.step = '0.01';
                    inputOutputInput.value = (calcData?.inputOutput || val).toFixed(2);
                    inputOutputInput.style.width = '100px';
                    inputOutputInput.style.textAlign = 'center';
                    inputOutputCell.appendChild(inputOutputInput);
                }
                row.appendChild(inputOutputCell);

                // Units column (second)
                const unitCell2 = document.createElement('td');
                if (item.unitType === "comp") {
                    unitCell2.textContent = "ימים"; // Set to "ימים" for comp items
                } else {
                    // Set unitCell2 text based on item's unitType
                    if (item.itemNumber === 1) {
                        unitCell2.textContent = "מ\"ק ליום";
                    } else if (item.itemNumber === 2) {
                        unitCell2.textContent = "ש\"ע למ\"ק";
                    } else if (item.itemNumber === 3) {
                        unitCell2.textContent = "מ\"א ליום";
                    } else if ([4, 6, 8, 12, 13, 16, 17].includes(item.itemNumber)) {
                        unitCell2.textContent = "ש\"ע למ\"ק";
                    } else if ([5, 7, 9, 10, 11, 14, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100].includes(item.itemNumber)) {
                        unitCell2.textContent = "ש\"ע למ\"ר";
                    }
                }
                row.appendChild(unitCell2);

                // Total Hours column
                const totalHoursCell = document.createElement('td');
                totalHoursCell.style.textAlign = 'center';
                totalHoursCell.style.fontWeight = 'bold';
                totalHoursCell.style.backgroundColor = item.unitType === "comp" ? 'lightpink' : '#f8f9fa';
                if (item.unitType === "comp") {
                    totalHoursCell.textContent = ""; // Default value for comp items
                }
                row.appendChild(totalHoursCell);

                // Number of Workers column
                const workersCell = document.createElement('td');
                let workersInput;
                if (item.unitType === "comp") {
                    workersCell.textContent = ""; // Default value for comp items
                } else {
                    workersInput = document.createElement('input');
                    workersInput.type = 'number';
                    workersInput.step = '1';
                    workersInput.value = (calcData?.numWorkers || 0);
                    workersInput.style.width = '100px';
                    workersInput.style.textAlign = 'center';
                    workersCell.appendChild(workersInput);
                }
                row.appendChild(workersCell);

                // Hours per Day column
                const hoursPerDayCell = document.createElement('td');
                let hoursPerDayInput;
                if (item.unitType === "comp") {
                    hoursPerDayCell.textContent = ""; // Default value for comp items
                } else {
                    hoursPerDayInput = document.createElement('input');
                    hoursPerDayInput.type = 'number';
                    hoursPerDayInput.step = '0.01';
                    hoursPerDayInput.value = (calcData?.hoursPerDay || 8.00).toFixed(2);
                    hoursPerDayInput.style.width = '100px';
                    hoursPerDayInput.style.textAlign = 'center';
                    hoursPerDayCell.appendChild(hoursPerDayInput);
                }
                row.appendChild(hoursPerDayCell);

                // Total Days column
                const totalDaysCell = document.createElement('td');
                totalDaysCell.style.textAlign = 'center';
                totalDaysCell.style.fontWeight = 'bold';
                totalDaysCell.style.backgroundColor = item.unitType === "comp" ? 'lightpink' : '#f8f9fa';
                if (item.unitType === "comp") {
                    const totalDaysInput = document.createElement('input');
                    totalDaysInput.type = 'number';
                    totalDaysInput.step = '0.01';
                    totalDaysInput.value = (calcData?.totalDays || (item.itemNumber == 38 ? 2 : item.itemNumber == 41 ? 10 : item.itemNumber == 42 ? 7 : 3)).toFixed(2); // Default value of 3 for comp items
                    totalDaysInput.style.width = '100px';
                    totalDaysInput.style.textAlign = 'center';
                    totalDaysInput.addEventListener('change', (e) => {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                            e.target.value = value.toFixed(2);
                            this.updateCalculationData(item.id, { 
                                totalDays: value,
                                roundedUpDays: value // Set rounded up days to the same value
                            });
                            this.hasUnsavedChanges = true;
                            this.saveProjectDataToFile();
                            // Update the rounded up cell to match
                            roundedUpCell.textContent = value;
                        }
                    });
                    totalDaysCell.appendChild(totalDaysInput);
                }
                row.appendChild(totalDaysCell);

                // Rounded Up column
                const roundedUpCell = document.createElement('td');
                roundedUpCell.style.textAlign = 'center';
                roundedUpCell.style.fontWeight = 'bold';
                roundedUpCell.style.backgroundColor = item.unitType === "comp" ? 'lightpink' : '#f8f9fa';
                if (item.unitType === "comp") {
                    const calcData = this.getCalculationData(item.id);
                    let defaultDays = 3;                     
                    if (item.id === "BOQ-036") {
                        defaultDays = 7;
                    } else if (item.id === "BOQ-035") {
                        defaultDays = 10;
                    } else if (item.id === "BOQ-032") {
                        defaultDays = 2;
                    }
                    roundedUpCell.textContent = (calcData?.totalDays || defaultDays);
                }
                row.appendChild(roundedUpCell);

                // Function to update total days and rounded up value
                const updateTotalDays = () => {
                    if (item.unitType === "comp") return; // Skip for comp items
                    
                    const totalHours = parseFloat(totalHoursCell.textContent) || 0;
                    const numWorkers = parseFloat(workersInput?.value || 0);
                    const hoursPerDay = parseFloat(hoursPerDayInput?.value || 0);
                    
                    let totalDays = 0;
                    if (numWorkers > 0 && hoursPerDay > 0) {
                        totalDays = totalHours / (numWorkers * hoursPerDay);
                    }
                    
                    totalDaysCell.textContent = totalDays.toFixed(2);
                    item.totalDays = totalDays;

                    const roundedUp = Math.ceil(totalDays);
                    roundedUpCell.textContent = '' + roundedUp;
                    item.roundedUpDays = roundedUp;
                };

                // Function to update total hours
                const updateTotalHours = () => {
                    if (item.unitType === "comp") return; // Skip for comp items
                    
                    const quantity = parseFloat(quantityInput?.value || 0);
                    const inputOutput = parseFloat(inputOutputInput?.value || 0);
                    const totalHours = quantity * inputOutput;
                    totalHoursCell.textContent = totalHours.toFixed(2);
                    item.totalHours = totalHours;
                    updateTotalDays();
                    this.saveProjectDataToFile();
                };

                // Add event listeners for non-comp items
                if (item.unitType !== "comp") {
                    if (quantityInput) {
                        quantityInput.addEventListener('change', (e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                                e.target.value = value.toFixed(2);
                                this.updateCalculationData(item.id, { quantity: value });
                                this.hasUnsavedChanges = true;
                                updateTotalHours();
                            }
                        });
                    }

                    if (inputOutputInput) {
                        inputOutputInput.addEventListener('change', (e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                                e.target.value = value.toFixed(2);
                                this.updateCalculationData(item.id, { inputOutput: value });
                                item.inputOutput = value;
                                this.hasUnsavedChanges = true;
                                updateTotalHours();
                            }
                        });
                    }

                    if (workersInput) {
                        workersInput.addEventListener('change', (e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                                e.target.value = value;
                                this.updateCalculationData(item.id, { numWorkers: value });
                                item.numWorkers = value;
                                this.hasUnsavedChanges = true;
                                updateTotalDays();
                            }
                        });
                    }
                    if (hoursPerDayInput) {
                        hoursPerDayInput.addEventListener('change', (e) => {
                            const value = parseFloat(e.target.value);
                            if (!isNaN(value)) {
                                e.target.value = value.toFixed(2);
                                this.updateCalculationData(item.id, { hoursPerDay: value });
                                item.hoursPerDay = value;
                                this.hasUnsavedChanges = true;
                                updateTotalDays();
                            }
                        });
                    }

                    // Initial calculations
                    updateTotalHours();
                }

                return row;
            }
            
            pwdRefreshTable() {
                this.pwdCreateTable();
            }
            pwdHandleQuantityChange(event) {
                const input = event.target;
                const itemId = input.dataset.itemId;
                const sectionId = input.dataset.sectionId;
                const newQuantity = parseFloat(input.value) || 0;
                const item = this.projectData.items.find(item => item.id === itemId);
                if (item) {
                    const section = item.sections.find(section => section.sectionId === sectionId);
                    if (section) {
                        section.quantity = Number(newQuantity.toFixed(2));
                        this.hasUnsavedChanges = true;
                        this.pwdUpdateTotals(item);
                        this.pwdDispatchDataChangedEvent();
                        this.saveProjectDataToFile();
                    }
                }
                input.value = newQuantity.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
            pwdUpdateTotals(item) {
                item.totalQuantity = Number(item.sections.reduce((sum, section) => sum + (section.quantity || 0), 0).toFixed(2));
                item.quantityPerBuilding = Number((item.totalQuantity / this.projectData.projectInfo.numberOfBuildings).toFixed(2));
                const headerRow = this.container.querySelector(`tr.item-header[data-item-id="${item.id}"]`);
                if (headerRow) {
                    headerRow.querySelector('.total-quantity').textContent = item.totalQuantity.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    if(item.itemNumber >= 3) {
                        headerRow.querySelector('.quantity-per-building').textContent = item.quantityPerBuilding.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }
                }
            }
            pwdDispatchDataChangedEvent() {
                const event = new CustomEvent('boq-data-changed', {
                    detail: { projectData: this.projectData }
                });
                document.dispatchEvent(event);
            }
            pwdAttachEventListeners() {
                document.getElementById('number-of-buildings').addEventListener('change', (event) => {
                    const newNumberOfBuildings = parseInt(event.target.value) || 1;
                    this.projectData.projectInfo.numberOfBuildings = newNumberOfBuildings;
                    this.hasUnsavedChanges = true;
                    this.pwdUpdateAllCalculations();
                });
                // עבור שדות sectionId
                const sectionIdInputs = document.querySelectorAll('input[data-field="sectionId"]');
                sectionIdInputs.forEach(input => {
                    input.addEventListener('input', (e) => {
                        this.pwdHandleSectionIdChange(e);
                        this.hasUnsavedChanges = true;
                    });
                });
            }
            saveProjectDataToFile() {
                const data = {
                    projectData: {
                        projectInfo: this.projectData.projectInfo,
                        items: this.projectData.items.map(item => ({
                            id: item.id,
                            itemNumber: item.itemNumber,
                            descriptionHebrew: item.descriptionHebrew,
                            workTypeId: item.workTypeId,
                            unitType: item.unitType,
                            area: item.area,
                            sections: item.sections,
                            totalQuantity: item.totalQuantity || 0,
                            quantityPerBuilding: item.quantityPerBuilding || 0
                        }))
                    },
                    calculationData: [
                        // Add organization row as first item
                        {
                            itemId: 'org-row',
                            itemNumber: 0,
                            quantity: this.organizationRowData?.quantity || 0,
                            inputOutput: this.organizationRowData?.inputOutput || 8.00,
                            totalHours: (this.organizationRowData?.quantity || 0) * (this.organizationRowData?.inputOutput || 8.00),
                            numWorkers: this.organizationRowData?.numWorkers || 1,
                            hoursPerDay: this.organizationRowData?.hoursPerDay || 8.00,
                            totalDays: this.organizationRowData?.totalDays || 0,
                            roundedUpDays: this.organizationRowData?.roundedUpDays || 0
                        },
                        // Add regular items
                        ...this.projectData.items.map(item => ({
                            itemId: item.id,
                            itemNumber: item.itemNumber,
                            quantity: this.getCalculationData(item.id).quantity || 0,
                            inputOutput: this.getCalculationData(item.id).inputOutput || 0,
                            totalHours: this.getCalculationData(item.id).totalHours || 0,
                            numWorkers: this.getCalculationData(item.id).numWorkers || 0,
                            hoursPerDay: this.getCalculationData(item.id).hoursPerDay || 8.00,
                            totalDays: this.getCalculationData(item.id).totalDays || 0,
                            roundedUpDays: this.getCalculationData(item.id).roundedUpDays || 0
                        }))
                    ],
                    lastSaved: new Date().toISOString()
                };
                localStorage.setItem('projectData', JSON.stringify(data));
                this.hasUnsavedChanges = false;
            }

            loadProjectData() {
                const savedData = localStorage.getItem('projectData');
                const lastSaved = localStorage.getItem('lastSaved');

                if (savedData) {
                    const parsedData = JSON.parse(savedData);
                    // Update project data while preserving original structure
                    this.projectData.projectInfo = parsedData.projectData?.projectInfo || this.projectData.projectInfo;
                    
                    // Map saved data to original project items
                    this.projectData.items = this.projectData.items.map(item => {
                        const savedItem = parsedData.projectData?.items?.find(saved => saved.itemNumber === item.itemNumber);
                        if (savedItem) {
                            return {
                                ...item,
                                totalQuantity: savedItem.totalQuantity || 0,
                                quantityPerBuilding: savedItem.quantityPerBuilding || 0,
                                unitType: savedItem.unitType || item.unitType,
                                area: savedItem.area || item.area,
                                sections: savedItem.sections || item.sections
                            };
                        }
                        return item;
                    });

                    // Store organization row data
                    const orgRowData = parsedData.calculationData?.find(calc => calc.itemId === 'org-row') || {
                        quantity: 0,
                        inputOutput: 8.00,
                        totalHours: 0,
                        numWorkers: 1,
                        hoursPerDay: 8.00,
                        totalDays: 4.00,
                        roundedUpDays: 4
                    };
                    this.organizationRowData = orgRowData;
                } else {
                    // Initialize organization row data
                    this.organizationRowData = {
                        quantity: 0,
                        inputOutput: 8.00,
                        totalHours: 0,
                        numWorkers: 1,
                        hoursPerDay: 8.00,
                        totalDays: 4.00,
                        roundedUpDays: 4
                    };
                }

                // Handle comp items
                this.projectData.items = this.projectData.items.map(item => {
                    if (item.unitType === "comp") {
                        return {
                            ...item,
                            sections: []
                        };
                    }
                    return item;
                });

                if (lastSaved) {
                    this.lastSaved = new Date(lastSaved);
                }
            }
            saveChanges() {
                try {
                    this.pwdDispatchDataChangedEvent();
                    this.saveProjectDataToFile();
                    this.hidePopup();
                    location.reload(); // רענון הדף אחרי שמירה
                } catch (error) {
                    console.error('Error saving changes:', error);
                }
            }
            discardAndExit() {
                try {
                    this.hasUnsavedChanges = false; // מאפס את הדגל
                    this.hidePopup();
                    location.reload(); // רענון הדף בלי לשמור
                } catch (error) {
                    console.error('Error discarding changes:', error);
                }
            }
            closePopup() {
                this.hidePopup();
            }
            
            // Add new methods to handle calculation data
            getCalculationData(itemId) {
                const savedData = localStorage.getItem('projectData');
                if (savedData) {
                    const data = JSON.parse(savedData);
                    // Check if calculationData exists and is an array
                    if (data.calculationData && Array.isArray(data.calculationData)) {
                        const calcData = data.calculationData.find(calc => calc.itemId === itemId);
                        if (calcData) {
                            return calcData;
                        }
                    }
                }
                // Return default values if no data found
                return {
                    quantity: 0,
                    inputOutput: 0,
                    totalHours: 0,
                    numWorkers: 0,
                    hoursPerDay: 8.00,
                    totalDays: 0,
                    roundedUpDays: 0
                };
            }

            updateCalculationData(itemId, updates) {
                const savedData = localStorage.getItem('projectData');
                let data = savedData ? JSON.parse(savedData) : {
                    projectData: this.projectData,
                    calculationData: []
                };

                // Ensure calculationData is an array
                if (!data.calculationData || !Array.isArray(data.calculationData)) {
                    data.calculationData = [];
                }

                const existingCalc = data.calculationData.find(calc => calc.itemId === itemId);
                if (existingCalc) {
                    Object.assign(existingCalc, updates);
                } else {
                    data.calculationData.push({
                        itemId,
                        ...this.getCalculationData(itemId),
                        ...updates
                    });
                }

                localStorage.setItem('projectData', JSON.stringify(data));
            }
        }
        /**
         * מחלקה לביצוע חישובים
         * אחראית על חישוב סכומים וכמויות
         */
        class BOQCalculations {
            constructor(projectData) {
                this.projectData = projectData;
            }
            pwdCalculateTotalQuantity(item) {
                let sum = 0;
                return Number(item.sections.reduce((sum, section) => sum + (section.quantity || 0), 0).toFixed(2));
            }
            pwdCalculateQuantityPerBuilding(item) {
                return Number((this.pwdCalculateTotalQuantity(item) / this.projectData.projectInfo.numberOfBuildings).toFixed(2));
            }
            pwdUpdateAllCalculations() {
                this.projectData.items.forEach(item => {
                    item.totalQuantity = this.pwdCalculateTotalQuantity(item);
                    item.quantityPerBuilding = this.pwdCalculateQuantityPerBuilding(item);
                });
            }
        }
        /**
         * מחלקה ראשית של האפליקציה
         * מנהלת את כל הרכיבים ומטפלת בשמירה וטעינת נתונים
         */
        class BOQApp {
            constructor() {
                this.tableGenerator = null;
                this.calculations = null;
                this.init();
            }
            init() {
                this.tableGenerator = new BOQTableGenerator('boq-table-container', projectData, referenceData);
                this.calculations = new BOQCalculations(projectData);
                this.attachEventListeners();
            }
            attachEventListeners() {
                document.addEventListener('boq-data-changed', () => {
                    this.calculations.pwdUpdateAllCalculations();
                });
            }
        }
        document.addEventListener('DOMContentLoaded', () => {
            window.boqApp = new BOQApp();
            loadFileAutomatically(); // קריאה לפונקציה לטעינת קובץ אוטומטית
        });
				function loadFileAutomatically() {
            try {
                // ניסיון לקרוא נתונים מה-localStorage
                const storedData = localStorage.getItem('projectData');
                if (storedData) {
                    const data = JSON.parse(storedData);
                    if (data.projectData) {
                        // טיפול בפריטי comp
                        data.projectData.items.forEach(item => {
                            if (item.unitType === "comp") {
                                item.sections = []; // הסרת כל הסעיפים
                            }
                        });
                        // עדכון הנתונים באפליקציה
                        boqApp.tableGenerator.projectData = data.projectData;
                        boqApp.calculations.projectData = data.projectData;
                        // רענון הטבלה ועדכון החישובים
                        boqApp.tableGenerator.pwdRefreshTable();
                        boqApp.calculations.pwdUpdateAllCalculations();
                    }
                } else {
                    console.log('לא נמצאו נתונים ב-localStorage');
                }
            } catch (error) {
                console.error('שגיאה בטעינת הנתונים:', error);
            }
        }
        function checkScreenSize() {
            const message = document.getElementById('small-screen-message');
            if (window.innerWidth < 768) {
                message.style.display = 'flex';
            } else {
                message.style.display = 'none';
            }
        }
        window.addEventListener('load', checkScreenSize);
        window.addEventListener('resize', checkScreenSize);

        // הוספת סגנונות הדפסה
        const printStyles = document.createElement('style');
        printStyles.textContent = `
            @media print {
                @page {
                    size: landscape;
                    margin: 1cm;
                }
                body * {
                    visibility: hidden;
                }
                #boq-table-container, #boq-table-container * {
                    visibility: visible;
                }
                #boq-table-container {
                    position: absolute;
                    left: 0;
                    top: 0;
                }
                button, .resize-handle, #print-btn, #small-screen-message {
                    display: none !important;
                }
                .print-header {
                    display: block !important;
                    visibility: visible !important;
                    margin-bottom: 20px;
                }
                thead {
                    display: table-header-group;
                }
            }
        `;
        document.head.appendChild(printStyles);
        // פונקציית הדפסה פשוטה
        function printTable() {
            const storedData = localStorage.getItem('projectData');
            if (!storedData) {
                console.error('No data found in localStorage');
                return;
            }

            const data = JSON.parse(storedData);
            const printWindow = window.open('', '_blank');
            
            // Wait for the window to load before writing content
            printWindow.onload = function() {
            printWindow.document.write(`
                <!DOCTYPE html>
                <html dir="rtl">
                <head>
                    <meta charset="UTF-8">
                        <title>חישוב ימי עבודה - הדפסה</title>
                    <style>
                            body { 
                                font-family: Arial, sans-serif;
                                margin: 20px;
                            }
                        table { 
                            width: 100%; 
                            border-collapse: collapse; 
                            margin-top: 20px;
                        }
                        th, td { 
                            border: 1px solid black; 
                            padding: 8px; 
                            text-align: right;
                        }
                        th { 
                            background-color: #f2f2f2; 
                            font-weight: bold;
                        }
                        .print-header {
                            text-align: center;
                            margin-bottom: 20px;
                        }
                            .subtitle-row {
                                background-color: #f8f9fa;
                            font-weight: bold;
                            text-align: center;
                                font-size: 16px;
                                border-top: 2px solid #dee2e6;
                                border-bottom: 2px solid #dee2e6;
                            }
                            .organization-row {
                            }
                            .comp-row {
                                background-color: lightpink;
                            }
                            .comments-row {
                                background-color: #f8f9fa;
                                text-align: right;
                                padding: 15px;
                                font-size: 14px;
                                line-height: 1.5;
                        }
                        @media print {
                            @page {
                                size: landscape;
                                margin: 1cm;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="print-header">
                            <h2>חישוב ימי עבודה - ${new Date().toLocaleDateString('he-IL')}</h2>
                        <div>
                            <span>פרויקט: ${v.oBoq.boq_title}</span> |
                            <span>מספר מבנים: ${v.oBoq.boq_num_of_buildings}</span> |
                            <span>שם סטודנט: ${v.user.user_metadata.name}</span>
                        </div>
                    </div>
            `);

                // יצירת טבלה
            let tableHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>מס׳</th>
                            <th>סוג העבודה</th>
                            <th>כמות</th>
                            <th>יחידות</th>
                            <th>תשומה / תפוקה</th>
                            <th>יחידות</th>
                            <th>סה"כ שעות</th>
                            <th>מס׳ פועלים</th>
                            <th>שעות ביום</th>
                            <th>סה"כ ימים</th>
                            <th>עיגול כלפי מעלה</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            // Add excavation subtitle
            tableHTML += `
                    <tr class="subtitle-row">
                        <td colspan="1"></td>
                        <td colspan="10">ערסל לחפירה וקידוח</td>
                        </tr>
                    `;

            // Add organization row with actual data
            const orgRowData = data.calculationData.find(calc => calc.itemId === 'org-row') || {
                totalDays: 4.00,
                roundedUpDays: 4
            };
            tableHTML += `
                    <tr class="organization-row">
                        <td>0</td>
                        <td>התארגנות</td>
                        <td></td>
                        <td>קומפ'</td>
                        <td></td>
                        <td>ימים</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>${orgRowData.totalDays.toFixed(2)}</td>
                        <td>${orgRowData.roundedUpDays}</td>
                </tr>
            `;
             // Sort items by itemNumber to maintain order
            const sortedItems = [...data.projectData.items].sort((a, b) => a.itemNumber - b.itemNumber);
            // Add items
            let rowCount = 0;
            sortedItems.forEach((item) => {
                // Get calculation data for this item
                const calcData = data.calculationData.find(calc => calc.itemId === item.id) || {
                    quantity: item.totalQuantity || 0,
                    inputOutput: 0,
                    totalHours: 0,
                    numWorkers: 0,
                    hoursPerDay: 8.00,
                    totalDays: 0,
                    roundedUpDays: 0
                };

                // Add skeleton subtitle after 4th row
                
                if (rowCount === 4) {
                    tableHTML += `
                        <tr class="subtitle-row">
                            <td colspan="1"></td>
                            <td colspan="10">ערסל לשלד</td>
                        </tr>
                    `;
                }

                // Add finishing subtitle after 25th row
                if (rowCount === 26) {
                    tableHTML += `
                        <tr class="subtitle-row">
                            <td colspan="1"></td>
                            <td colspan="10">ערסל לגמר</td>
                        </tr>
                    `;
                }

                // Get default values for comp items
                let defaultDays = 3;
                if (item.id === "BOQ-036") {
                    defaultDays = 7;
                } else if (item.id === "BOQ-035") {
                    defaultDays = 10;
                } else if (item.id === "BOQ-032") {
                    defaultDays = 2;
                }

                // Get default input/output value based on item number
                let defaultInputOutput = 0;
                switch (item.itemNumber) {
                    case 1: defaultInputOutput = 450.00; break;
                    case 2: defaultInputOutput = 17.00; break;
                    case 3: defaultInputOutput = 60.00; break;
                    case 4: defaultInputOutput = 15.00; break;
                    case 5: defaultInputOutput = 0.25; break;
                    case 6: defaultInputOutput = 31.00; break;
                    case 7: defaultInputOutput = 1.50; break;
                    case 8: defaultInputOutput = 17.00; break;
                    case 9: defaultInputOutput = 1.34; break;
                    case 10: defaultInputOutput = 0.50; break;
                    case 11: defaultInputOutput = 1.60; break;
                    case 12: defaultInputOutput = 31.00; break;
                    case 13: defaultInputOutput = 170.00; break;
                    case 14: defaultInputOutput = 1.34; break;
                    case 15: defaultInputOutput = 1.60; break;
                    case 16: defaultInputOutput = 31.00; break;
                    case 17: defaultInputOutput = 17.00; break;
                    case 18: defaultInputOutput = 17.00; break;
                    case 19: defaultInputOutput = 1.34; break;
                    case 20: defaultInputOutput = 31.00; break;
                    case 21: defaultInputOutput = 17.00; break;
                    case 22: defaultInputOutput = 17.00; break;
                    case 23: defaultInputOutput = 1.34; break;
                    case 24: defaultInputOutput = 1.30; break;
                    case 25: defaultInputOutput = 1.30; break;
                    case 26: defaultInputOutput = 1.30; break;
                    case 29: defaultInputOutput = 0.55; break;
                    case 30: defaultInputOutput = 0.70; break;
                    case 31: defaultInputOutput = 0.50; break;
                    case 32: defaultInputOutput = 0.88; break;
                    case 33: defaultInputOutput = 0.10; break;
                    case 39: defaultInputOutput = 0.50; break;
                    case 40: defaultInputOutput = 0.12; break;
                }

                // Get unit text based on item number
                let unitText = '';
                if (item.unitType === 'comp') {
                    unitText = 'קומפ\'';
                } else if (item.itemNumber === 1) {
                    unitText = 'מ"ק ליום';
                } else if (item.itemNumber === 2) {
                    unitText = 'ש"ע למ"ק';
                } else if (item.itemNumber === 3) {
                    unitText = 'מ"א ליום';
                } else if ([4, 6, 8, 12, 13, 16, 17].includes(item.itemNumber)) {
                    unitText = 'ש"ע למ"ק';
                } else {
                    unitText = 'ש"ע למ"ר';
                }

                // Calculate values for non-comp items
                let totalHours = 0;
                let totalDays = 0;
                let roundedUpDays = 0;

                if (item.unitType !== 'comp') {
                    const quantity = calcData.quantity || 0;
                    const inputOutput = calcData.inputOutput || defaultInputOutput;
                    const numWorkers = calcData.numWorkers || 0;
                    const hoursPerDay = calcData.hoursPerDay || 8.00;

                    totalHours = quantity * inputOutput;
                    if (numWorkers > 0 && hoursPerDay > 0) {
                        totalDays = totalHours / (numWorkers * hoursPerDay);
                    }
                    roundedUpDays = Math.ceil(totalDays);
                } else {
                    totalDays = calcData.totalDays? calcData.totalDays.toFixed(2) : defaultDays;
                    roundedUpDays = calcData.roundedUpDays ? calcData.roundedUpDays : defaultDays;
                }

                // Add item row with actual data
                tableHTML += `
                    <tr class="${item.unitType === 'comp' ? 'comp-row' : ''}">
                        <td>${item.itemNumber}</td>
                        <td>${item.descriptionHebrew}</td>
                        <td>${item.unitType !== 'comp' ? calcData.quantity.toFixed(2) : ''}</td>
                        <td>${item.unitType === 'm3' ? 'מ"ק' : item.unitType === 'm2' ? 'מ"ר' : item.unitType === 'm' ? 'מ"א' : item.unitType === 'comp' ? 'קומפ\'' : ''}</td>
                        <td>${item.unitType !== 'comp' ? (calcData.inputOutput || defaultInputOutput).toFixed(2) : ''}</td>
                        <td>${unitText}</td>
                        <td>${item.unitType !== 'comp' ? totalHours.toFixed(2) : ''}</td>
                        <td>${item.unitType !== 'comp' ? calcData.numWorkers : ''}</td>
                        <td>${item.unitType !== 'comp' ? calcData.hoursPerDay.toFixed(2) : ''}</td>
                        <td>${totalDays.toFixed(2)}</td>
                        <td>${roundedUpDays}</td>
                    </tr>
                `;
                rowCount++;
            });

            // Add comments
            tableHTML += `
                <tr class="comments-row">
                    <td colspan="11">
                        <strong>הבהרות התשומות בטבלה לעיל מהמקורות שלהלן:</strong><br>
                        1. ד"ר עאוני זריקאת - ההנדסה האזרחית, המגמה לניהול הבנייה. שנה ב' פרק מבוא ללוחות הזמנים 2022.<br>
                        2. נתון מהמנחה<br>
                        3. א. אנג'ל, מהנדסים בע"מ, חברת י.ק. תכנון כללי בע"מ (מופיע במקור 1 לעיל).
                    </td>
                </tr>
            `;

            tableHTML += `
            </tbody>
        </table>
    `;

    printWindow.document.write(tableHTML);
    printWindow.document.close();
        
    // Wait a short moment before printing to ensure content is loaded
    setTimeout(() => {
        printWindow.print();
    }, 500);
};
}
        // הוספת מאזין לכפתור ההדפסה
        document.addEventListener('DOMContentLoaded', () => {
            // Remove the old print button event listener
            const printBtn = document.getElementById('print-btn');
            if (printBtn) {
                printBtn.removeEventListener('click', printTable);
            }

            // Add event listener for Wized print button
            const wizedPrintBtn = document.querySelector('[wized="boq_pwd_print_btn"]');
            if (wizedPrintBtn) {
                wizedPrintBtn.addEventListener('click', printTable);
            }
        });
