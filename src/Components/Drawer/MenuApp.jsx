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
import { ListMenu } from '../ListMenu/ListMenu';
import { NavLink, Outlet } from 'react-router-dom';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Footer from '../Footer/Footer';
import './style.css'
import { LogoIcon } from '../LogoIcon/Logo';





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
      titulo: "Productos Bajo Stock",
      path: "/",
      icon: <ProductionQuantityLimitsIcon />,
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
            backgroundColor: '#A68C4C', 
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img 
              src='/market.png'
              alt="Logo" 
              style={{ width: "40px", height: "auto", marginRight: "8px" }} 
            />
            <Typography 
              variant="h6" 
              noWrap 
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Inventario de Stock "Mercadito La Riojanita"
            </Typography>
          </Box>
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
        <LogoIcon/>
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
        
                  <Box sx={{
            width: '100%',
            padding: 2,
            textAlign: 'center',
            position: 'absolute',
            bottom: 0,
          }}>
            <Footer />
          </Box>
     
      </Drawer>
      
      {children}
      <Outlet />

      
      
      
    </Box>
    
  );
}

export default MenuApp;
