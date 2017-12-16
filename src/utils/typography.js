import Typography from 'typography'
import twinpeaksTheme from 'typography-theme-twin-peaks'

twinpeaksTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginBottom: rhythm(1/2),
    marginTop: rhythm(2),
  }
})

const typography = new Typography(twinpeaksTheme)

export default typography