// green 

// const colors = {
//   white: '#fff',
//   text: '#333',
//   bg: '#fcfaef',
//   primary: '#d8e267',
//   secondary: '#035a53',
//   tertiary: '#035a53',
// }

const colors = {
  white: '#fff',
  text: '#333',
  bg: '#f5f5f5',
  primary: '#2C3E50',
  secondary: '#FF5722',
  tertiary: '#E67E22',
}

const gradients = {
  primary: `linear-gradient(${colors.primary} 15%, transparent)`,
}

const opacities = {
  tertiary_light: colors.tertiary + '1f',
  tertiary_dark: colors.tertiary + '80',
}

const shadows = {}

export const main = {
	colors,
	shadows,
  gradients,
  opacities
};