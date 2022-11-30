// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string

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
        }
    }
}
