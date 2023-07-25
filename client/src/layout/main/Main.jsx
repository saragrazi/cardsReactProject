import { node } from "prop-types";
import Paper from "@mui/material/Paper";
import { useTheme } from "../../providers/ThemePrvoider";

const Main = ({ children }) => {
  const { isDark } = useTheme();
  return (
    <Paper
      sx={{
        minHeight: "90vh",
        backgroundColor: isDark ? "#333333" : "#e3f2fd",
      }}
    >
      {children}
    </Paper>
  );
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
