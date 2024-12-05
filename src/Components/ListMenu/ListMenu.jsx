import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  
  export const ListMenu = ({ icon, path, titulo }) => {
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={titulo} />
        </ListItemButton>
      </ListItem>
    );
  };
  