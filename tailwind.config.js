/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verde-serra': 'var(--color-verde-serra)',
        'pedra': 'var(--color-pedra)',
        'pedra-clara': 'var(--color-pedra-clara)',
        'cobre': 'var(--color-cobre)',
        'off-white': 'var(--color-off-white)',
        'preto-quente': 'var(--color-preto-quente)',
        'bg-dark': 'var(--color-bg-dark)',
        'nevoa': 'var(--color-nevoa)',
        'erro': 'var(--color-erro)',
        'sucesso': 'var(--color-sucesso)',
        'aviso': 'var(--color-aviso)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'h1': ['var(--h1-font-size)', { lineHeight: 'var(--h1-line-height)' }],
        'h2': ['var(--h2-font-size)', { lineHeight: 'var(--h2-line-height)' }],
        'h3': ['var(--h3-font-size)', { lineHeight: 'var(--h3-line-height)' }],
        'body': ['var(--body-font-size)', { lineHeight: 'var(--body-line-height)' }],
        'label': ['var(--label-font-size)', { lineHeight: '1.5' }],
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'base': 'var(--transition-base)',
        'slow': 'var(--transition-slow)',
        'cine': 'var(--transition-cine)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'full': 'var(--radius-full)',
      },
      screens: {
        'xs': '375px',
        'md': '768px',
        'lg': '1024px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

