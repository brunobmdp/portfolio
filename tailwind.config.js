/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        white: '#ffffff',

        gray100: '#BFBFBF',
        gray200: '#A7A7A7',
        gray300: '#8F8F8F',
        gray400: '#777777',
        gray500: '#606060',
        gray600: '#484848',
        gray700: '#303030',
        gray800: '#262626',
        gray900: '#131313',

        blue100: '#A3BCE5',
        blue200: '#7BA0DA',
        blue300: '#5483CE',
        blue400: '#2C66C3',
        blue500: '#2756A4',
        blue600: '#214785',
        blue700: '#1C3765',
        blue800: '#162846',
        blue900: '#111827',

        cyan600: '#293548',
        cyan700: '#1E293B',
        cyan800: '#161B22',
        cyan900: '#14191f',

        green400: '#2CB67D',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
