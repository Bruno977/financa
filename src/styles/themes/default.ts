import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
    container: {
        none: '100%',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
        xl: '80rem',
    },
    lineHeights: {
        leadingNome: '1',
        leadingNormal: '1.5',
        leadingLoose: '2',
    },
    borderRadius: {
        roundedNone: '0px',
        rounded: '0.25rem',
        roundedMd: '0.375rem',
        roundedLg: '0.5rem',
        roundedFull: '9999px',
    },

    fontSizes: {
        textXs: '0.75rem',
        textSm: '0.875rem',
        textBase: '1rem',
        textLg: '1.125rem',
        textXl: '1.25rem',
        text2xl: '1.5rem',
    },

    spacing: {
        0: '0px',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem', // > 20/4 = 5
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
    },

    colors: {
        white: '#ffffff',
        black: '#000000',
        gray100: '#E1E1E6',
        gray300: '#C4C4CC',
        gray400: '#8D8D99',
        gray500: '#7C7C8A',
        gray600: '#323238',
        gray700: '#29292E',
        gray800: '#202024',
        gray900: '#121214',

        green300: '#00B37E',
        green500: '#00875F',
        green700: '#015F43',

        red500: '#AB222E',
        red700: '#7A1921',

        yellow500: '#FBA94C',
        blue: '#61DCFB',
    },
    transitions: {
        all: 'all .2s ease-in-out 0s',
    },
}

export { defaultTheme }
