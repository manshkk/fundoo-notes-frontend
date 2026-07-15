import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },

    secondary: {
      main: colors.secondary,
    },

    background: {
      default: colors.background,
      paper: colors.surface,
    },

    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },

    success: {
      main: colors.success,
    },

    error: {
      main: colors.error,
    },

    warning: {
      main: colors.warning,
    },

    info: {
      main: colors.info,
    },
  },

  typography,

  spacing: 8,

  shape: {
    borderRadius: 8,
  },
});

export default theme;