// ── WEDDING GUEST LIST ──
// key: what goes in the URL (?guest=esam)
// name: displayed on the invite
// options: the dropdown choices for that guest
//   { value: submitted to Formspree, label: shown in dropdown }

const GUESTS = {
  "esam": {
    name: "Esam & Jathwa",
    options: [
      { value: "Esam & Jathwa (2)", label: "Both of us" },
      { value: "Esam only (1)",     label: "Esam only" },
      { value: "Jathwa only (1)",   label: "Jathwa only" }
    ]
  },
  "faris": {
    name: "Faris & Nuha",
    options: [
      { value: "Faris & Nuha (2)", label: "Both of us" },
      { value: "Faris only (1)",   label: "Faris only" },
      { value: "Nuha only (1)",    label: "Nuha only" }
    ]
  },
  "sinan": {
    name: "Sinan & Marwa",
    options: [
      { value: "Sinan, Marwa & 2 kids (4)", label: "All of us (4)" },
      { value: "Sinan & Marwa (2)",         label: "Sinan & Marwa only" },
      { value: "Sinan, Marwa & 1 kid (3)",  label: "Us + 1 child" }
    ]
  }
};
