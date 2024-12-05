import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from "@mui/icons-material/Star";
import { ListMenu } from '../ListMenu/ListMenu';
import TableApp from '../TableApp/TableApp';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css'
import ManageSearchSharpIcon from '@mui/icons-material/ManageSearchSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';





const drawerWidth = 240;

function MenuApp({children}) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    
  const menu = [
    {
      id: 1,
      titulo: "Busqueda de Productos",
      path: "/",
      icon: <ManageSearchSharpIcon />,
    },
    {
      id: 2,
      titulo: "Listado de Productos",
      path: "/dashboard",
      icon: <FormatListBulletedSharpIcon />,
    },
    {
      id: 3,
      titulo: "Agregá un Producto",
      path: "/agregar",
      icon: <AddToPhotosOutlinedIcon />,
    },
    {
      id: 4,
      titulo: "Carga de cantidades",
      path: "/cargacontenido",
      icon: <FileUploadOutlinedIcon />,
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`app-bar ${open ? 'open' : ''}`}
        sx={{
            backgroundColor: '#A68C4C', // Cambia a tu color deseado (HEX, RGB, etc.)
          }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Inventario de Stock "Mercadito La Riojanita"
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <Divider />
        <List>
            {menu.map(({ id, titulo, path, icon }) => (
              <>
                <NavLink
                  key={id}
                  to={path}
                  style={{ textDecoration: "none", color: "#4A4A4A" }}
                >
                  <ListMenu titulo={titulo} path={path} icon={icon} />
                </NavLink>
              </>
            ))}
          </List>
      </Drawer>
      {children}
      <Outlet/>
    </Box>
  );
}

export default MenuApp;
