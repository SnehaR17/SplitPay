// It is a configuaration file for PostCSS. It sets up two plugins
// 1. TailwindCSS: This plugin applies TailwindCSS to your project, which is a popular utility-first CSS framework. It gives you a bunch of predefined classes to style your HTML quickly without writing custom CSS.
// 2. Autoprefixer: This plugin automatically adds browser prefixes (like -webkit- or -moz-) to your CSS, ensuring it works properly across all browsers.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
