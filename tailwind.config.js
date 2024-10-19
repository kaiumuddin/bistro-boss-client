/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3b3f", // Bold red
        secondary: "#00b4d8", // Vibrant blue
        accent: "#fbbf24", // Yellow accent
        background: "#f5f5f5", // Light gray background
        border: "#000", // Solid black for borders
        text: "#333", // Dark text
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
      fontSize: {
        huge: "5rem", // Extra large for impactful headings
        massive: "7rem", // Even larger for special elements
      },
      fontWeight: {
        extrabold: "800",
      },
      letterSpacing: {
        wider: ".1em", // Slightly wider text for certain elements
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000", // Thick, offset shadow
        brutalLight: "2px 2px 0 0 #000", // Lighter version for smaller elements
        brutalHover: "4px 4px 0 0 #000", // Shadow effect for hover states
      },
      borderWidth: {
        DEFAULT: "3px", // Thicker borders for all elements
        2: "4px", // Additional thickness options
        3: "6px",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      transitionTimingFunction: {
        brutal: "cubic-bezier(0.4, 0.0, 0.2, 1)", // Snappy easing for animations
      },
      borderRadius: {
        none: "0", // Keep corners sharp
        xs: "2px", // Minimal rounding for specific cases
      },
      backgroundImage: {
        "brutal-pattern": "url('/src/assets/brutal-pattern.svg')",
        "brutal-dots": "url('/src/assets/brutal-dots.svg')", // Dots background
        "brutal-stripes": "url('/src/assets/brutal-stripes.svg')", // Stripes background
        "brutal-gradient": "linear-gradient(90deg, #ff3b3f 50%, #00b4d8 50%)", // Hard-stop gradient
      },
      opacity: {
        5: "0.05",
        10: "0.1",
        85: "0.85",
      },
      padding: {
        "btn-lg": "1rem 2rem", // Larger padding for oversized buttons
      },
    },
  },
  plugins: [],
};
