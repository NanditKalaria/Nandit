module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgba(177,108,234,1)",
          DEFAULT: "rgba(177,108,234,1)",
          dark: "rgba(255,94,105,1)"
        },
        background: {
          light: "#ffffff",
          dark: "#121212",
          DEFAULT: "#ffffff"
        },
        foreground: {
          light: "#000000",
          dark: "#ffffff",
          DEFAULT: "#000000"
        },
        huggingfacecoblack: "var(--huggingfacecoblack)",
        huggingfacecowhite: "var(--huggingfacecowhite)",
        blogbg: "#000000",
        footerbg: "#000000",
        border: "#e5e7eb",
        justinhinhwebflowiodove: {
          gray: "#000000",
          "gray-dark": "#ffffff"
        }
      },
      borderColor: {
        DEFAULT: "#e5e7eb"
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards'
      }
    }
  }
}
