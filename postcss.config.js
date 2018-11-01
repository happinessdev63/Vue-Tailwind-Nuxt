const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.js')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('tailwindcss')(tailwindJS),
    process.env.NODE_ENV === 'production' ? cssnano({
      preset: 'default',
    }) : null,
    process.env.NODE_ENV === 'production' ? purgecss({
      content: [
        './**/*.html',
        './**/*.vue'
      ]
    }) : null,
    require('autoprefixer')
  ]
}
