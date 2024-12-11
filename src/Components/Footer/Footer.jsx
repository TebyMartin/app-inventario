import { Box, Typography, Container } from "@mui/material"
import { useState, useEffect } from "react";

function Footer() {
const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

useEffect(() => {
      const year = new Date().getFullYear();
      setCurrentYear(year);
    }, []);
  
  return (
    <Box
  component="footer"
  sx={{
    position: 'sticky',
    bottom: 0,
    
    color: 'white',
    py: 3,
    width: '100%',
  }}
>
    <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',color: '#A68C4C' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        © {currentYear}  Mercadito La riojanita. 
        </Typography>
        
      </Container>
</Box>
  )
}

export default Footer