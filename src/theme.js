// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#E6FBFF",
      100: "#E3E7D6",
      200: "#6FCF97",
      300: "#27AE60",
      400: "#0FA958",
      500: "#067E28",
      600: "#3E6F55",
      700: "#667A8A",
      800: "#84837D",
    },
    yellow: {
        100: "#FDEB4A",
        200: "#FF9D09"
    },
    red: {
        100: "#E04141",
        200: "#F00505",
        300: "#EC0101",
    },
    blue: {
        100: "#0C7FDA",
    }
};
  
//   mui theme settings
export const themeSettings = () => {
    return {
        palette: {
            green: {
                main: colorTokens.primary[300],
                light: colorTokens.primary[200],
                pear: colorTokens.primary[100],
                medium: colorTokens.primary[400],
                title: colorTokens.primary[500],
                dark: colorTokens.primary[600],
            },
            yellow: {
                light: colorTokens.yellow[100],
                dark: colorTokens.yellow[200],
            },
            red: {
                light: colorTokens.red[100],
                medium: colorTokens.red[200],
                dark: colorTokens.red[300],
            },
            blue: {
                main: colorTokens.blue[100]
            }
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 40,
            },
            h2: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 32,
            },
            h3: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 24,
            },
            h4: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 20,
            },
            h5: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 16,
            },
            h6: {
              fontFamily: ["Poppins", "sans-serif"].join(","),
              fontSize: 14,
            },
        },
    }
}