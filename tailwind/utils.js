function utils({ addUtilities }) {
  const newUtilities = {
    '.clip-half-left': {
      'clip-path': 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
    },
    '.clip-half-right': {
      'clip-path': 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
    },
    '.clip-half-top': {
      'clip-path': 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
    },
    '.clip-half-bottom': {
      'clip-path': 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
    },
  };
  addUtilities(newUtilities, ['responsive']);
}

module.exports = utils;
