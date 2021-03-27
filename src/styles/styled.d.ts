import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      colorblack: string
      total: string
      white: string
      colorTableHead: string
    }
  }
}
