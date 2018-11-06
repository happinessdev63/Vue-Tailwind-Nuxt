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
      ],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            }
          },
          extensions: ['html', 'vue']
        }
      ],
      whitelist: [
        'router-link-active',
        'router-link-exact-active'
      ]
    }) : null,
    require('autoprefixer')
  ]
}
