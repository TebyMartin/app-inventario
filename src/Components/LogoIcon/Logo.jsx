import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";

export const LogoIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center", 
        margin: "16px",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: "30px", 
          height: "24px", 
          marginRight: "8px", 
        }}
      />
      <Typography
        variant="h6" 
        component="div"
        sx={{
          textAlign: "left",
          lineHeight: "24px", 
          color: "#A68C4C",
          fontWeight: "bold"
        }}
      >
        App Inventario
      </Typography>
    </Box>
  );
};
