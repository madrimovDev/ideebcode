import { extendTheme } from "@chakra-ui/react";
import {StyleFunctionProps, mode} from "@chakra-ui/theme-tools"

const theme = extendTheme({
  ...extendTheme,
  colors: {
    primary: "#FF4C60"
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#FFFAFA", "#282828")(props),
        color: mode("#282828", "#FFFAFA")(props)
      }
    })
  }

})

export default theme
