/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat', 'fadeInUp', 'delay-1s', 'delay-2s', 'delay-3s']
    },
    colors: {
      extend: {},
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#7dcdc5',
      secondary: '#1d8289',
      accent: '#928098',
      black: colors.black,
      white: colors.white,
      gray: colors.stone,
      blue: colors.sky,
      red: colors.red,
      yellow: colors.amber,
      pink: colors.pink,
      green: colors.lime,
      orange: colors.orange,
      teal: colors.teal,
      indigo: colors.indigo,
      slate: colors.slate,
      emerald: colors.emerald,
      violet: colors.violet
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animatecss'),
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/line-clamp')
  ]
}
