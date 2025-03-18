import { Config } from "tailwindcss";

export default <Partial<Config>> {
    content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md',
  ],
     plugins: [
        require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
    theme: {
        extend: {
           spacing: {
              '1/2': '50%',
              '1/3': '33.333333%',
              '2/3': '66.666667%',
              '1/4': '25%',
              '2/4': '50%',
              '3/4': '75%',
           },
        },
     },

}