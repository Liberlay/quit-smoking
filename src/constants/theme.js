const COLORS = {
  light: {
    gradient: {
      top: '#E5FBE5',
      bottom: '#6E8473',
    },

    text: {
      primary: '#273C31',
      title: '#000',
      inverted: '#97BDAD',
    },

    background: {
      primary: 'rgba(255,255,255,0.25)',
      button: '#9EAEA1',
    },

    border: {
      primary: '#273C31',
      secondary: '#273C31',
      timer: '#273C3140',
    },

    link: {
      active: '#273C31',
      unactive: '#273C3180',
    },

    tile: {
      bg: 'rgba(255,255,255,0.25)',
      border: '#273C31',
      progress: 'rgba(39,60,49,0.15)',
      icon: '#273C31',
    },

    error: {
      primary: '#7E4141',
      bg: 'rgba(126, 65, 65, 0.15)',
    },

    switch: {
      off: {
        bg: 'rgba(39, 60, 49, 0.5)',
        thumb: 'rgba(255,255,255,0.75)',
      },

      on: {
        bg: '#273C31',
        thumb: 'rgba(255,255,255,0.75)',
      },
    },

    emergency: {
      background: {
        theme: 'rgba(255,255,255,0.5)',
        red: 'rgba(126,65,65,0.25)',
      },
      border: 'rgba(126,65,65,0.5)',
      text: '#7E4141',
      buttons: {
        yes: {
          bg: 'rgba(126,65,65,0.75)',
          text: 'rgba(255,255,255,0.75)',
        },

        no: {
          bg: 'rgba(255,255,255,0.75))',
          text: '#7E4141',
        },
      },
    },

    tip: 'rgba(229,251,229,0.75)',
  },

  dark: {
    gradient: {
      top: '#1E1E1E',
      bottom: '#1E1E1E',
    },

    text: {
      primary: '#D3D3D3',
      title: '#D3D3D3',
      inverted: '#273C31',
    },

    background: {
      primary: '#1E473A',
      button: '#2E2E2E',
    },

    border: {
      primary: 'transparent',
      secondary: '#D3D3D3',
      timer: '#A9A9A9',
    },

    link: {
      active: '#D3D3D3',
      unactive: 'rgba(211,211,211,0.5)',
    },

    tile: {
      bg: '#3A3A3A',
      border: 'transparent',
      progress: '#1E473A',
      icon: '#D3D3D3',
    },

    error: {
      primary: '#C36464',
      bg: 'rgba(195, 100, 100, 0.15)',
    },

    switch: {
      off: {
        bg: 'rgba(211,211,211,0.75)',
        thumb: '#1E473A',
      },

      on: {
        bg: '#D3D3D3',
        thumb: '#1E473A',
      },
    },

    emergency: {
      background: {
        theme: 'rgba(0,0,0,0.5)',
        red: 'rgba(195,100,100,0.25)',
      },
      border: 'rgba(126,65,65,0.5)',
      text: '#C36464',
      buttons: {
        yes: {
          bg: 'rgba(195,100,100,0.75)',
          text: 'rgba(255,255,255,0.75)',
        },

        no: {
          bg: 'rgba(255,255,255,0.75))',
          text: '#C36464',
        },
      },
    },

    tip: 'rgba(30,71,58,0.9 )',
  },
}

const FONT = {
  thin: 'RThin',
  light: 'RLight',
  regular: 'RRegular',
  medium: 'RMedium',
  bold: 'RBold',
}

const THEMES = [
  ['light', 'Light'],
  ['dark', 'Dark'],
  [null, 'Auto'],
]

export { COLORS, FONT, THEMES }
