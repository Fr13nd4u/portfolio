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
  text_error: 'rgb(204, 18, 18)',
  bg: '#f5f5f5',
  primary: '#2C3E50',
  secondary: '#FF5722',
  tertiary: '#E67E22',
}

const gradients = {
  primary: `linear-gradient(${colors.primary} 15%, transparent)`,
  blob: `linear-gradient(180deg, ${colors.primary} 31.77%, ${colors.secondary} 100%)`,
}

const opacities = {
  secondary_dark: colors.secondary + '80',
  tertiary_light: colors.tertiary + '1f',
  tertiary_dark: colors.tertiary + '80',
}

const shadows = {
  blob: `inset 0 0 0 5px rgba(0, 0, 0, 0.6),
  inset 100px 100px 0 0px ${colors.primary}, inset 200px 200px 0 0px ${colors.secondary},
  inset 300px 300px 0 0px ${colors.tertiary}`,
}

export const main = {
	colors,
	shadows,
  gradients,
  opacities
};