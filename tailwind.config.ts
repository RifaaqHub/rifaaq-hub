import { type Config } from 'tailwindcss'

export default {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
        primary: '#1A2A55',
        secondary: '#FFCF3F',
      },
      fontFamily: {
        roboto: ['var(--font-inter)'],
        serif: ['var(--font-roboto-serif)'],
      },
    },
  },
  plugins: [],
} satisfies Config
