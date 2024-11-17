export const theme = {
  colors: {
    status: {
      Alive: "rgba(135, 199, 64, 0.15)",
      Dead: "rgba(235, 87, 87, 0.15)",
      unknown: "rgba(224, 224, 224, 1)",
    },
    labelBackground: "rgba(178, 208, 235, 1)",
    widgetBackground: "rgba(242, 242, 242, 1)",
    text: "rgba(51, 51, 51, 1)",
    border: "rgba(224, 224, 224, 1)",
  },
  typography: {
    label: {
      fontSize: "11px",
      fontWeight: 600,
    },
    characterName: {
      fontSize: "11px",
      fontWeight: 700,
    },
    button: {
      fontSize: "12px",
      fontWeight: 700,
    },
  },
} as const;
