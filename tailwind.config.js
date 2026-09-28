/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Os valores vivem em src/styles/globals.css (claro e escuro)
      colors: {
        paper: "var(--paper)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        line: "var(--line)",
        pen: "var(--pen)",
        "pen-soft": "var(--pen-soft)",
        ok: "var(--ok)",
        danger: "var(--danger)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        pen: ["var(--font-pen)", "cursive"],
      },
      boxShadow: {
        paper: "var(--shadow)",
      },
      maxWidth: {
        page: "1120px",
      },
    },
  },
  plugins: [],
};
