/**
 * נתוני התייחסות - מידע סטטי על סוגי עבודות, יחידות מידה וקטגוריות
 * משמש כמאגר מידע קבוע לתצוגת ערכים בטבלה
 */
const referenceData = {
  workTypes: {
    excavation: {
      id: "EXC",
      hebrewName: "חפירה ופינוי",
      englishName: "Excavation and Removal",
    },
    concrete: {
      id: "CON",
      hebrewName: "ברזל ויציקה",
      englishName: "Iron and Casting",
    },
    formwork: {
      id: "FRM",
      hebrewName: "טפ+בר+יצ",
      englishName: "Formwork + Iron + Casting",
      fullHebrewName: "טפסנות + ברזלנות + יציקה",
    },
    masonry: {
      id: "MAS",
      hebrewName: "בנייה",
      englishName: "Masonry",
    },
    waterproofing: {
      id: "WTR",
      hebrewName: "איטום",
      englishName: "Waterproofing",
    },
    drillingAndCasting: {
      id: "DRC",
      hebrewName: "קידוח ויציקה",
      englishName: "Drilling and Casting",
    },
    supportingWalls: {
      id: "SUP",
      hebrewName: "קירות תומכים",
      englishName: "Supporting Walls",
    },
    leanAndWaterproofing: {
      id: "LWC",
      hebrewName: "רזה + איטום",
      englishName: "Lean + Waterproofing",
    },
    wallWaterproofing: {
      id: "WWP",
      hebrewName: "איטום קירות",
      englishName: "Wall Waterproofing",
    },
    interiorPlaster: {
      id: "IP",
      hebrewName: "טיח פנים",
      englishName: "Interior Plaster",
    },
    exteriorPlaster: {
      id: "EP",
      hebrewName: "טיח חוץ",
      englishName: "Exterior Plaster",
    },
    flooring: {
      id: "FLR",
      hebrewName: "ריצוף",
      englishName: "Flooring",
    },
    painting: {
      id: "PTG",
      hebrewName: "צביעה",
      englishName: "Painting",
    },
    windowInstallation: {
      id: "WI",
      hebrewName: "הרכבת חלונות",
      englishName: "Window Installation",
    },
    concretePouring: {
      id: "CP",
      hebrewName: "יציקת בטקל",
      englishName: "Concrete Pouring",
    },
    roofWaterproofing: {
      id: "RW",
      hebrewName: "איטום גגות",
      englishName: "Roof Waterproofing",
    },
    miscellaneousWork: {
      id: "MW",
      hebrewName: "עבודות שונות",
      englishName: "Miscellaneous Work",
    },
  },
  units: {
    m3: {
      symbol: 'מ"ק',
      hebrewName: "מטר מעוקב",
      englishName: "cubic meters",
    },
    m2: {
      symbol: 'מ"ר',
      hebrewName: "מטר מרובע",
      englishName: "square meters",
    },
    m: {
      symbol: 'מ"א',
      hebrewName: "מטר אורך",
      englishName: "linear meters",
    },
    comp: {
      symbol: "קומפ'",
      hebrewName: "קומפלט",
      englishName: "complete unit",
    },
  },
  categories: {
    foundation: {
      id: "FND",
      hebrewName: "יסודות",
      englishName: "Foundations",
      items: [1, 2, 3, 4],
    },
    basement: {
      id: "BSM",
      hebrewName: "מרתף",
      englishName: "Basement",
      items: [5, 6, 7, 8, 9, 10],
    },
    groundFloor: {
      id: "GRD",
      hebrewName: "קומת קרקע",
      englishName: "Ground Floor",
      items: [11, 12, 13, 14],
    },
    firstFloor: {
      id: "FLR",
      hebrewName: "קומה א'",
      englishName: "First Floor",
      items: [15, 16, 17, 18],
    },
    finishing: {
      id: "FIN",
      hebrewName: "גמרים",
      englishName: "Finishing",
      items: [19, 20, 21, 22, 23, 24, 25],
    },
  },
};
/**
 * נתוני הפרויקט - מידע דינמי על הפרויקט הנוכחי
 * כולל מידע כללי על הפרויקט ורשימת הפריטים
 */
const projectData = {
  projectInfo: {
    id: "PROJ-2024-001",
    name: "Construction Project",
    numberOfBuildings: 5,
    startDate: "2024-01-01",
    lastUpdate: "2024-01-01",
    status: "active",
  },
  items: [
    {
      id: "BOQ-001",
      itemNumber: 1,
      detailedNumber: "00.00.0000",
      descriptionHebrew: "חפירה ו / או חציבה",
      workTypeId: "EXC",
      unitType: "m3",
      area: "כל המגרשים",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-002",
      itemNumber: 2,
      descriptionHebrew: "קירות תומכים בפיתוח",
      workTypeId: "SUP",
      unitType: "m3",
      area: "כל המגרשים",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-003",
      itemNumber: 3,
      descriptionHebrew: "יסודות (כלונסאות)",
      workTypeId: "DRC",
      unitType: "m",
      area: "יסודות",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-004",
      itemNumber: 4,
      descriptionHebrew: "יסודות בודדים (אושיות)",
      workTypeId: "DRC",
      unitType: "m3",
      area: "יסודות",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-005",
      itemNumber: 5,
      descriptionHebrew: "בטון רזה + 1 יום לאיטום הרצפה",
      workTypeId: "LWC",
      unitType: "m2",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-006",
      itemNumber: 6,
      descriptionHebrew: "קורות קשר קומת מרתף",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-007",
      itemNumber: 7,
      descriptionHebrew: "רצפת בטון למרתף",
      workTypeId: "FRM",
      unitType: "m2",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-008",
      itemNumber: 8,
      descriptionHebrew: "קירות בטון למרתף",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-009",
      itemNumber: 9,
      descriptionHebrew: "תקרת המרתף ורצפת מבנה",
      workTypeId: "FRM",
      unitType: "m2",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-010",
      itemNumber: 10,
      descriptionHebrew: "איטום קירות מרתף כולל מילוי חוזר",
      workTypeId: "WTR",
      unitType: "m2",
      area: "קומת מרתף",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-011",
      itemNumber: 11,
      descriptionHebrew: "בניית בלוקי חוץ קומת קרקע",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומת קרקע",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-012",
      itemNumber: 12,
      descriptionHebrew: "עמודי בטון קומת קרקע",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומת קרקע",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-013",
      itemNumber: 13,
      descriptionHebrew: "קירות בטון קומת קרקע",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומת קרקע",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-014",
      itemNumber: 14,
      descriptionHebrew: "תקרת קומת קרקע",
      workTypeId: "FRM",
      unitType: "m2",
      area: "קומת קרקע",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-015",
      itemNumber: 15,
      descriptionHebrew: "בניית בלוקי קירות חוץ קומה א'",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומה א",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-016",
      itemNumber: 16,
      descriptionHebrew: "עמודי בטון קומה א'",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומה א",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-017",
      itemNumber: 17,
      descriptionHebrew: "קירות בטון קומה א'",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומה א",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-018",
      itemNumber: 18,
      descriptionHebrew: "תקרת קומה א'",
      workTypeId: "FRM",
      unitType: "m2",
      area: "קומה א",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-037",
      itemNumber: 19,
      descriptionHebrew: "בניית בלוקי קירות חוץ קומה ב'",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומה ב",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-038",
      itemNumber: 20,
      descriptionHebrew: "עמודי בטון קומה ב'",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומה ב",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-039",
      itemNumber: 21,
      descriptionHebrew: "קירות בטון קומה ב'",
      workTypeId: "FRM",
      unitType: "m3",
      area: "קומה ב",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-040",
      itemNumber: 22,
      descriptionHebrew: "תקרת קומה ב'",
      workTypeId: "FRM",
      unitType: "m2",
      area: "קומה ב",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-019",
      itemNumber: 23,
      descriptionHebrew: "מחיצות לקומת קרקע",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומת קרקע",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-020",
      itemNumber: 24,
      descriptionHebrew: "מחיצות קומה א'",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומה א",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-041",
      itemNumber: 25,
      descriptionHebrew: "מחיצות קומה ב'",
      workTypeId: "MAS",
      unitType: "m2",
      area: "קומה ב",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-021",
      itemNumber: 26,
      descriptionHebrew: "הכנות קווי אינסטלציה",
      workTypeId: "PLM",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-022",
      itemNumber: 27,
      descriptionHebrew: "הכנת שרוולי חשמל",
      workTypeId: "ELC",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-023",
      itemNumber: 28,
      descriptionHebrew: "טיח פנים לכל הקומות",
      workTypeId: "IP",
      unitType: "m2",
      area: "כל המבנה",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-024",
      itemNumber: 29,
      descriptionHebrew: "טיח חוץ לכל המבנה",
      workTypeId: "EP",
      unitType: "m2",
      area: "חזיתות",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-025",
      itemNumber: 30,
      descriptionHebrew: "איטום חללים רטובים",
      workTypeId: "WTR",
      unitType: "m2",
      area: "כל המבנה",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-026",
      itemNumber: 31,
      descriptionHebrew: "ריצוף וחיפוי קירות לכל הקומות",
      workTypeId: "FLR",
      unitType: "m2",
      area: "כל המבנה",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-027",
      itemNumber: 32,
      descriptionHebrew: "צבע לכל הקומות (פנים)",
      workTypeId: "PTG",
      unitType: "m2",
      area: "כל המבנה",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-028",
      itemNumber: 33,
      descriptionHebrew: "עבודות אלומיניום",
      workTypeId: "WI",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-029",
      itemNumber: 34,
      descriptionHebrew: "מתקנים סיניטריים",
      workTypeId: "",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-030",
      itemNumber: 35,
      descriptionHebrew: "מיזוג אוויר",
      workTypeId: "",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-031",
      itemNumber: 36,
      descriptionHebrew: "השלמת עבודות חשמל",
      workTypeId: "",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-032",
      itemNumber: 37,
      descriptionHebrew: "יציקת בטקל על הגג",
      workTypeId: "CP",
      unitType: "comp",
      area: "גגות",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-033",
      itemNumber: 38,
      descriptionHebrew: "איטום גג",
      workTypeId: "RW",
      unitType: "m2",
      area: "גגות",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-034",
      itemNumber: 39,
      descriptionHebrew: "צבע חוץ לכל המבנה",
      workTypeId: "PTG",
      unitType: "m2",
      area: "חזיתות",
      sections: [
        {
          sectionId: "00.00.0000",
          detailedNumber: "00.00.0000",
          quantity: 0,
          remarks: "",
        },
      ],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-035",
      itemNumber: 40,
      descriptionHebrew: "פיתוח חוץ כולל השלמת קירות תומכים",
      workTypeId: "MW",
      unitType: "comp",
      area: "פיתוח",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
    {
      id: "BOQ-036",
      itemNumber: 41,
      descriptionHebrew: "תיקונים ומסירה",
      workTypeId: "",
      unitType: "comp",
      area: "כל המבנה",
      sections: [],
      totalQuantity: 0,
      quantityPerBuilding: 0,
    },
  ],
};
// הסרת סעיפים מפריטים עם יחידת מידה "comp"
projectData.items.forEach((item) => {
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
             this.projectData = projectData;
             this.referenceData = referenceData;
             this.hasUnsavedChanges = false;
             this.pwdInit();
             
         }

         pwdInit() {
             this.pwdCreateTable();
             //this.pwdAttachEventListeners();
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
             const headers = [
                 { text: 'מס׳', tooltip: 'מספר הפריט ברשימת הפריטים' },
                 { text: 'תיאור', tooltip: 'תיאור הפריט בעברית' },
                 { text: 'יחידה', tooltip: 'יחידת המידה של הפריט (מ"ק, מ"ר, מ"א, קומפ\')' },
                 { text: 'מספר סעיף', tooltip: 'מספר הסעיף המפורט בכתב הכמויות' },
                 { text: 'כמות', tooltip: 'כמות העבודה בסעיף' },
                 { text: 'תיאור סעיף', tooltip: 'תיאור הסעיף' },
                 { text: 'כמות ליח׳', tooltip: 'כמות העבודה למבנה בודד (חלוקת הכמות הכוללת במספר המבנים)' },
                 { text: 'סה״כ', tooltip: 'סכום הכמויות של כל הסעיפים בפריט' },
                 { text: 'פעולות', tooltip: 'פעולות אפשריות כמו הוספת סעיף או מחיקת סעיף' }
             ];

             const thead = document.createElement('thead');
             const headerRow = document.createElement('tr');
             
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
                     const rect = th.getBoundingClientRect();
                     tooltip.style.visibility = 'visible';
                     // Position tooltip above the header
                     tooltip.style.bottom = `${rect.height + 5}px`;
                     tooltip.style.left = '50%';
                     tooltip.style.transform = 'translateX(-50%)';
                 });

                 th.addEventListener('mouseleave', () => {
                     tooltip.style.visibility = 'hidden';
                 });

                 th.appendChild(tooltip);
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

             const titleRow = document.createElement('tr');
             const titleCell = document.createElement('td');
             titleCell.colSpan = 8;
             titleCell.textContent = "כמויות לכל הפרויקט";
             titleCell.style.textAlign = 'center';
             titleCell.style.fontWeight = 'bold';
             titleCell.style.fontSize = '20px';
             titleRow.appendChild(titleCell);
             tbody.appendChild(titleRow);

             let currentArea = '';
             this.projectData.items.forEach((item, index) => {
                 const rows = this.pwdCreateItemHeaderRow(item);
                 
                 // Add bold top border to first row of each area (up to item 26), excluding the first area
                 if (item.area !== currentArea && (item.itemNumber <= 26) && currentArea !== '') {
                     if (Array.isArray(rows)) {
                         rows[rows.length - 1].style.borderTop = '3px solid black';
                     } else {
                         rows.style.borderTop = '3px solid black';
                     }
                     currentArea = item.area;
                 } else if (currentArea === '') {
                     currentArea = item.area;
                 }
                 
                 if (Array.isArray(rows)) {
                     rows.forEach(row => {
                         if (item.unitType === "comp") {
                             row.style.backgroundColor = 'lightpink';
                         }
                         tbody.appendChild(row);
                     });
                 } else {
                     if (item.unitType === "comp") {
                         rows.style.backgroundColor = 'lightpink';
                     }
                     tbody.appendChild(rows);
                 }
                 item.sections.forEach(section => {
                     tbody.appendChild(this.pwdCreateSectionRow(item, section));
                 });
             });
             return tbody;
         }

         pwdCreateItemHeaderRow(item) {
             const row = document.createElement('tr');
             row.className = 'item-header';
             row.dataset.itemId = item.id;
             
             const numberCell = document.createElement('td');
             numberCell.textContent = item.itemNumber.toFixed(2);
             numberCell.rowSpan = item.sections.length + 1;
             row.appendChild(numberCell);
             
             const descCell = document.createElement('td');
             descCell.textContent = item.descriptionHebrew;
             descCell.rowSpan = item.sections.length + 1;
             row.appendChild(descCell);
             
             const unitCell = document.createElement('td');
             const unit = this.referenceData.units[item.unitType];
             unitCell.textContent = unit ? unit.symbol : '';
             unitCell.rowSpan = item.sections.length + 1;
             row.appendChild(unitCell);

             row.appendChild(document.createElement('td'));
             row.appendChild(document.createElement('td'));
             row.appendChild(document.createElement('td'));

             const perBuildingCell = document.createElement('td');
             const totalCell = document.createElement('td');
             const actionsCell = document.createElement('td');

             if (item.unitType === "comp") {
                 perBuildingCell.textContent = ''; // Hide quantity per building
                 totalCell.textContent = ''; // Hide total quantity
                 actionsCell.style.display = 'none'; // Hide actions cell
                 row.appendChild(document.createElement('td'));
             } else {
                 perBuildingCell.className = 'quantity-per-building';
                 perBuildingCell.textContent = item.itemNumber >= 3 ? item.quantityPerBuilding.toLocaleString('he-IL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';
                 totalCell.className = 'total-quantity';
                 totalCell.textContent = item.totalQuantity.toFixed(2);
                     
                 const addButton = document.createElement('button');
                 addButton.textContent = 'הוסף סעיף +';
                 addButton.className = 'add-section-btn';
                 addButton.addEventListener('click', () => {
                     this.pwdAddNewSection(item);
                     this.hasUnsavedChanges = true;
                 });
                 actionsCell.appendChild(addButton);
             }

             perBuildingCell.rowSpan = item.sections.length + 1;
             totalCell.rowSpan = item.sections.length + 1;
             row.appendChild(perBuildingCell);
             row.appendChild(totalCell);
             row.appendChild(actionsCell);

             if (item.itemNumber === 3) {
                 const titleRow = document.createElement('tr');
                 const titleCell = document.createElement('td');
                 titleCell.colSpan = 8;
                 titleCell.textContent = "כמויות למבנה בודד (הכמויות חלקי מס' המבנים)";  
                 titleCell.style.textAlign = 'center';
                 titleCell.style.fontWeight = 'bold';
                 titleCell.style.fontSize = '20px';
                 titleRow.appendChild(titleCell);
                 
                 const numberRow = document.createElement('tr');
                 const numberCell = document.createElement('td');
                 numberCell.colSpan = 9;
                 numberCell.style.textAlign = 'center';
                 numberRow.appendChild(numberCell);
                 
                 return [titleRow, row];
             }

             return row;
         }

         pwdCreateSectionRow(item, section) {
             const row = document.createElement('tr');
             row.className = 'section-row';
             row.dataset.itemId = item.id;
             row.dataset.sectionId = section.sectionId;

             row.appendChild(document.createElement('td')).style.display = 'none';

             for (let i = 0; i < 2; i++) {
                 row.appendChild(document.createElement('td')).style.display = 'none';
             }

             const sectionIdCell = document.createElement('td');
             const sectionIdInput = document.createElement('input');
             sectionIdInput.type = 'text';
             sectionIdInput.value = section.detailedNumber;
             sectionIdInput.dataset.itemId = item.id;
             sectionIdInput.dataset.sectionId = section.sectionId;
             sectionIdInput.dataset.field = "sectionId";
             sectionIdInput.addEventListener('change', (e) => {
                 this.pwdHandleSectionIdChange(e);
                 this.hasUnsavedChanges = true;
             });
             sectionIdInput.setAttribute("area", item.area);
             sectionIdCell.appendChild(sectionIdInput);
             row.appendChild(sectionIdCell);

             const quantityCell = document.createElement('td');
             const quantityInput = document.createElement('span');
             quantityInput.textContent = section.quantity.toFixed(2);
             quantityInput.dataset.itemId = item.id;
             quantityInput.dataset.sectionId = section.sectionId;
             quantityInput.dataset.field = "quantity";
             quantityCell.appendChild(quantityInput);
             row.appendChild(quantityCell);

             const remarksCell = document.createElement('td');
             const remarksInput = document.createElement('span');
             remarksInput.textContent = section.remarks;
             remarksInput.dataset.itemId = item.id;
             remarksInput.dataset.sectionId = section.sectionId;
             remarksInput.dataset.field = "remarks";
             remarksCell.appendChild(remarksInput);
             row.appendChild(remarksCell);

             const actionsCell = document.createElement('td');
             if (item.sections.length > 1) {
                 const deleteButton = document.createElement('button');
                 deleteButton.textContent = '🗑️';
                 deleteButton.className = 'delete-section-btn';
                 deleteButton.addEventListener('click', () => {
                     this.pwdDeleteSection(item, section);
                     this.hasUnsavedChanges = true;
                 });
                 actionsCell.appendChild(deleteButton);
             }
             row.appendChild(actionsCell);

             return row;
         }

         pwdAddNewSection(item) {
             const existingIds = item.sections.map(section => section.sectionId);
             
             let newSectionId;
             let counter = 1;
             do {
                 newSectionId = `00.00.${String(counter).padStart(4, '0')}`;
                 counter++;
             } while (existingIds.includes(newSectionId));

             const newSection = {
                 sectionId: newSectionId,
                 detailedNumber: "00.00.0000",
                 quantity: 0.00,
                 remarks: ''
             };
             
             item.sections.push(newSection);
             this.pwdRefreshTable();
             this.pwdDispatchDataChangedEvent();
             this.saveProjectDataToFile();
         }

         pwdDeleteSection(item, section) {
             const index = item.sections.findIndex(s => s.sectionId === section.sectionId);
             if (index !== -1 && item.sections.length > 1) {
                 item.sections.splice(index, 1);
                 this.pwdRefreshTable();
                 this.pwdDispatchDataChangedEvent();
                 this.saveProjectDataToFile();
             }
         }

         pwdHandleRemarksChange(event) {
             const input = event.target;
             const itemId = input.dataset.itemId;
             const sectionId = input.dataset.sectionId;
             const newRemarks = input.value;
             
             const item = this.projectData.items.find(item => item.id === itemId);
             if (item) {
                 const section = item.sections.find(section => section.sectionId === sectionId);
                 if (section) {
                     section.remarks = newRemarks;
                     this.hasUnsavedChanges = true;
                     this.pwdDispatchDataChangedEvent();
                     this.saveProjectDataToFile();
                 }
             }
         }

         pwdHandleSectionIdChange(event) {
             const input = event.target;
             const itemId = input.dataset.itemId;
             const oldSectionId = input.dataset.sectionId;
             const newSectionId = input.value.trim();
             const row = input.closest('tr');

             // אם השדה ריק, לא נבצע עדכון
             if (!newSectionId) return;

             const regex = /^\d{2}\.\d{2}\.\d{4}$/;
             if (!regex.test(newSectionId)) {
                 return;
             }

             const item = this.projectData.items.find(item => item.id === itemId);
             if (!item) return;
             const boqStore = localStorage.getItem('boqStore');
             const boqData = JSON.parse(boqStore);
             // חיפוש הסעיף הקיים ב-BOQ לפי ה-sectionId החדש
            const secSplit = newSectionId.split('.');
            const sId = secSplit[0];
            const subId = secSplit[1];
            const itId = newSectionId;
             const boqSection = boqData.boq_sections.find(section => section.boq_section_num === sId).boq_subsections.find(sub => sub.boq_subsection_num === sId +'.'+ subId).boq_items.find(it => it.boq_table_cell_number === itId);
             if (!boqSection) {
                 // במקום alert, נציג הודעה בתוך הטבלה או נחזיר את הערך הישן
                 input.value = oldSectionId;
                 return;
             }

             // מציאת הסעיף הקיים בפריט
             const section = item.sections.find(section => section.sectionId === oldSectionId);
             if (!section) return;

             // עדכון מיידי של ה-UI
             const updateUI = () => {
                 const quantityElement = row.querySelector(`[data-field="quantity"][data-section-id="${oldSectionId}"]`);
                 const remarksElement = row.querySelector(`[data-field="remarks"][data-section-id="${oldSectionId}"]`);

                 // Check if boqData.ground_work exists before accessing its properties
                 if (boqData.ground_work && item.area === "כל המגרשים" && 
                     (boqData.ground_work.ground_work_2m_item_id === boqSection.boq_table_cell_number || 
                      boqData.ground_work.ground_work_1m_item_id === boqSection.boq_table_cell_number)) {
                     
                     section.quantity = Number(boqSection.boq_table_cell_count) || 0;
                     section.remarks = boqSection.boq_table_cell_description || '';

                     if (quantityElement) {
                         quantityElement.textContent = section.quantity.toFixed(2);
                         quantityElement.dataset.sectionId = newSectionId;
                     }

                     if (remarksElement) {
                         remarksElement.textContent = section.remarks || '';
                         remarksElement.dataset.sectionId = newSectionId;
                     }

                     // Update data
                     section.detailedNumber = newSectionId;
                     section.sectionId = newSectionId;
                     input.dataset.sectionId = newSectionId;
                 } else if (boqSection.boq_item_quantities) {
                     const regionQuantity = boqSection.boq_item_quantities.find(regions => 
                         regions.boq_calc_region === item.area
                     );

                     if (regionQuantity) {
                         let res = 0;
                         regionQuantity.boq_calc_quantities.forEach((quan) => {
                             res += Number(quan.boq_calc_total);
                           });
                         section.quantity = Number(res.toFixed(2));
                         section.remarks = boqSection.boq_table_cell_description || '';

                         if (quantityElement) {
                             quantityElement.textContent = section.quantity.toFixed(2);
                             quantityElement.dataset.sectionId = newSectionId;
                         }

                         if (remarksElement) {
                             remarksElement.textContent = section.remarks || '';
                             remarksElement.dataset.sectionId = newSectionId;
                         }

                         // Update data
                         section.detailedNumber = newSectionId;
                         section.sectionId = newSectionId;
                         input.dataset.sectionId = newSectionId;

                     } else {
                         const popup = document.createElement('div');
                         popup.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0,0,0,0.5); z-index: 1000; text-align: center; direction: rtl;';
                         popup.innerHTML = `
                             <p>הסעיף החדש לא מכיל את האזור ${item.area}</p>
                             <button onclick="this.parentElement.remove()" style="margin-top: 10px; padding: 5px 10px;">אישור</button>
                         `;
                         document.body.appendChild(popup);
                         section.detailedNumber = oldSectionId;
                         section.sectionId = oldSectionId;
                         input.value = oldSectionId;
                         return;
                     }
                 }
             };

             // ביצוע העדכון באופן מיידי
             updateUI();

             // שמירת השינויים רק כאשר הערך תקין לחלוטין
             if (regex.test(newSectionId) && boqSection) {
                 this.hasUnsavedChanges = true;
                 this.pwdDispatchDataChangedEvent();
                 this.pwdUpdateTotals(item);
                 this.saveProjectDataToFile();
             }
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
                 projectData: this.projectData,
                 lastSaved: new Date().toISOString()
             };

             localStorage.setItem('projectData', JSON.stringify(data)); // שמירה ב-localStorage
             this.hasUnsavedChanges = false; // Reset unsaved changes flag after saving
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

         hidePopup() {
             const popup = document.querySelector('.popup-container');
             if (popup) {
                 popup.style.display = 'none';
             }
         }

         // עדכון ה-HTML של הכפתורים כדי להשתמש במתודות של המחלקה
         generatePopupHTML() {
             return `
                 <div class="popup-container" style="display: none;">
                     <div class="popup-content">
                         <h3>יש לך שינויים שלא נשמרו</h3>
                         <p>האם ברצונך לשמור את השינויים לפני היציאה?</p>
                         <p>אם תצא בלי לשמור, כל השינויים שביצעת יאבדו</p>
                         <div class="popup-buttons">
                             <button onclick="window.boqTableGenerator.saveChanges()" 
                                     style="background: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                                 שמור שינויים
                             </button>
                             <button onclick="window.boqTableGenerator.discardAndExit()" 
                                     style="background: #f44336; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                                 התעלם וצא
                             </button>
                             <button onclick="window.boqTableGenerator.closePopup()" 
                                     style="background: #9e9e9e; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
                                 ביטול
                             </button>
                         </div>
                     </div>
                 </div>
             `;
         }

         // מתודה לאתחול המחלקה והפופאפ
         initialize() {
             // שמירת הפניה למופע המחלקה בחלון הגלובלי
             window.boqTableGenerator = this;
             
             // הוספת ה-HTML של הפופאפ לדף
             document.body.insertAdjacentHTML('beforeend', this.generatePopupHTML());
         }

         createPopup() {
             const popupHTML = `
                 <div class="popup-container" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1000;">
                     <div class="popup-content" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 5px; text-align: center; direction: rtl;">
                         <h3>יש לך שינויים שלא נשמרו</h3>
                         <p>האם ברצונך לשמור את השינויים?</p>
                         <div class="popup-buttons" style="margin-top: 20px;">
                             <button id="saveChangesBtn" style="background: #4CAF50; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">
                                 שמור שינויים
                             </button>
                             <button id="discardBtn" style="background: #f44336; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">
                                 התעלם וצא
                             </button>
                             <button id="cancelBtn" style="background: #9e9e9e; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin: 0 5px;">
                                 ביטול
                             </button>
                         </div>
                     </div>
                 </div>
             `;

             // הוספת הפופאפ לדף
             document.body.insertAdjacentHTML('beforeend', popupHTML);
             
             // הוספת מאזיני אירועים לכפתורים
             document.getElementById('saveChangesBtn').addEventListener('click', () => {
                 this.saveChanges();
             });
             
             document.getElementById('discardBtn').addEventListener('click', () => {
                 this.discardAndExit();
             });
             
             document.getElementById('cancelBtn').addEventListener('click', () => {
                 this.closePopup();
             });
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
         loadFileAutomatically(); // Load and save data only when ready
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
                 saveInitialProjectData(); // Save initial data if not found
             }
         } catch (error) {
             console.error('שגיאה בטעינת הנתונים:', error);
         }
     }

     // Function to save initial projectData to localStorage
     function saveInitialProjectData() {
         const initialData = {
             projectData: projectData,
             lastSaved: new Date().toISOString()
         };
         localStorage.setItem('projectData', JSON.stringify(initialData));
         console.log('Initial projectData saved to localStorage.');
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
         const data = storedData ? JSON.parse(storedData).projectData : projectData;
         
         const printWindow = window.open('', '_blank');
         printWindow.document.write(`
             <!DOCTYPE html>
             <html dir="rtl">
             <head>
                 <meta charset="UTF-8">
                 <title>כתב כמויות - הדפסה</title>
                 <style>
                     body { font-family: Arial, sans-serif; }
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
                     .title-row {
                         background-color: #e6e6e6;
                         font-weight: bold;
                         text-align: center;
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
                     <h2>הכנה לחישוב ימי עבודה - ${new Date().toLocaleDateString('he-IL')}</h2>
                     <div>
                         <span>שם פרויקט: ${data.projectInfo.name}</span> |
                         <span>מספר מבנים: ${data.projectInfo.numberOfBuildings}</span>
                     </div>
                 </div>
         `);

         // יצירת טבלה נקייה
         let tableHTML = `
             <table>
                 <thead>
                     <tr>
                         <th>מס׳</th>
                         <th>תיאור</th>
                         <th>יחידה</th>
                         <th>מספר סעיף</th>
                         <th>כמות</th>
                         <th>תיאור סעיף</th>
                         <th>כמות ליח׳</th>
                         <th>סה״כ</th>
                     </tr>
                 </thead>
                 <tbody>
         `;

         // כותרת ראשונה
         tableHTML += `
             <tr class="title-row">
                 <td colspan="8">כמויות לכל הפרויקט</td>
             </tr>
         `;

         data.items.forEach((item, index) => {
             if (item.itemNumber === 4) {
                 tableHTML += `
                     <tr class="title-row">
                         <td colspan="8">כמויות למבנה בודד (הכמויות חלקי מס' המבנים)</td>
                     </tr>
                 `;
             }
             
             // הוספת סגנון לגבול עליון מודגש לפריטים 11, 16 ו-20
             const borderStyle = (item.itemNumber === 11 || item.itemNumber === 16 || item.itemNumber === 20) ? 'border-top: 3px solid black;' : '';

             const workType = Object.values(referenceData.workTypes)
                 .find(type => type.id === item.workTypeId);
             const unit = referenceData.units[item.unitType];

             if (item.sections.length === 0) {
                 // פריט ללא סעיפים (comp)
                 tableHTML += `
                     <tr>
                         <td style="${borderStyle}">${item.itemNumber}</td>
                         <td style="${borderStyle}">${item.descriptionHebrew}</td>
                         <td style="${borderStyle}">${unit ? unit.symbol : ''}</td>
                         <td style="${borderStyle}">-</td>
                         <td style="${borderStyle}">-</td>
                         <td style="${borderStyle}">-</td>
                         <td style="${borderStyle}">-</td>
                         <td style="${borderStyle}">-</td>
                     </tr>
                 `;
             } else {
                 // פריט עם סעיפים
                 item.sections.forEach((section, sIndex) => {
                     tableHTML += `
                         <tr>
                             ${sIndex === 0 ? `
                                 <td style="${borderStyle}" rowspan="${item.sections.length}">${item.itemNumber}</td>
                                 <td style="${borderStyle}" rowspan="${item.sections.length}">${item.descriptionHebrew}</td>
                                 <td style="${borderStyle}" rowspan="${item.sections.length}">${unit ? unit.symbol : ''}</td>
                             ` : ''}
                             <td style="${borderStyle}">${section.detailedNumber}</td>
                             <td style="${borderStyle}">${section.quantity.toFixed(2)}</td>
                             <td style="${borderStyle}">${section.remarks || ''}</td>
                             ${sIndex === 0 ? `
                                 <td style="${borderStyle}" rowspan="${item.sections.length}">${item.itemNumber >= 4 ? item.quantityPerBuilding.toFixed(2) : ''}</td>
                                 <td style="${borderStyle}" rowspan="${item.sections.length}">${item.totalQuantity.toFixed(2)}</td>
                             ` : ''}
                         </tr>
                     `;
                 });
             }
         });

         tableHTML += `
         </tbody>
     </table>
 `;

 printWindow.document.write(tableHTML);
 printWindow.document.close();
 
 // הדפסה אחרי טעינת התוכן
 printWindow.onload = function() {
     printWindow.print();
 };
}

     // הוספת מאזין לכפתור ההדפסה
     document.addEventListener('DOMContentLoaded', () => {
         const printBtn = document.getElementById('print-btn');
         if (printBtn) {
             printBtn.addEventListener('click', printTable);
         }
     });

document.addEventListener('DOMContentLoaded', () => {
    // Save initial projectData to localStorage if not already saved
    if (!localStorage.getItem('projectData')) {
        const initialData = {
            projectData: projectData,
            lastSaved: new Date().toISOString()
        };
        localStorage.setItem('projectData', JSON.stringify(initialData));
        console.log('Initial projectData saved to localStorage.');
    }
});
