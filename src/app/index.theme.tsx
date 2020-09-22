// const theme = {
//     backColor: 'white',
//     color: {
//         greyDark: '#24292e',
//     },
// };

const colors = {
    grey10: '#e1e4e8',
    grey70: '#24292e',

    black: '#1b1f23',

    white: '#fff',
};

const secondaryColors = {};

const breakpoints = [];
const fontSizes = [];
const space = [];
const border = {
    radius: '0.375rem',
    style: `1px solid ${colors.grey10}`,
};

type theme = {
    colors: { [key in keyof typeof colors]: string };
    breakpoints: string[];
    fontSizes: string[];
    space: string[];
    border: { [key in keyof typeof border]: string };
};

// type darkTheme = {
//     colors: { [key in keyof typeof secondaryColors]: string };
//     breakpoints: string[];
//     fontSizes: string[];
//     space: string[];
// };

const light: theme = {
    colors,
    breakpoints,
    fontSizes,
    space,
    border,
};

const dark: theme = {
    colors,
    breakpoints,
    fontSizes,
    space,
    border,
};

export { light, dark };
