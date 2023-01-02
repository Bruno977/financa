// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        container: {
            none: string
            sm: string
            md: string
            lg: string
            xl: string
        }
        lineHeights: {
            leadingNome: string
            leadingNormal: string
            leadingLoose: string
        }
        borderRadius: {
            roundedNone: string
            rounded: string
            roundedMd: string
            roundedLg: string
            roundedFull: string
        }

        fontSizes: {
            textXs: string
            textSm: string
            textBase: string
            textLg: string
            textXl: string
            text2xl: string
            text3xl: string
            text4xl: string
        }

        spacing: {
            0: string
            1: string
            2: string
            3: string
            4: string
            5: string
            6: string
            7: string
            8: string
            9: string
            10: string
        }

        colors: {
            white: string
            black: string

            gray100: string
            gray300: string
            gray400: string
            gray500: string
            gray600: string
            gray700: string
            gray800: string
            gray900: string

            green300: string
            green500: string
            green700: string

            red500: string
            red700: string

            yellow500: string
            blue: string
        }
        transitions: {
            all: string
        }
    }
}
