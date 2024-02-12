
import { AppBar, Box, Button, Container, CssBaseline, IconButton, Link, Menu, MenuItem, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material"
import { Url } from "next/dist/shared/lib/router/router"
import { useRouter } from "next/router"
import React from "react"
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkMode } from "@mui/icons-material";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';



const DarkModeToggle = ({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) => {
  return (
  <Button onClick={toggleDarkMode} style={{color:"white"}}>
        {darkMode ? <DarkModeRoundedIcon/> : <LightModeRoundedIcon/>} 
      </Button>
    );
   };




const pages = [
  {
    title: "Imag-GAllery",
    path: "/image",
  },
  {
    title: "DonkiApi",
    path: "/donkiApi",
  },
  {
    title:"Notifications",
    path:"/notificationApi"
  }
 
]



const Header=()=>{
  const [darkMode, setDarkMode] = React.useState(false);

  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );


  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path : Url) => {
    router.push(path)
  };


    return(
      <>

      
      {/* <ul>
        <li><Link href={"/image"}>Image</Link></li>
        <li><Link href={"/donkiApi"}>Donkiapi</Link></li>
      </ul> */}

<ThemeProvider theme={theme}>
      <AppBar position="static">
      <Container maxWidth="xl" sx={{ backgroundColor: "skyblue" }}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => handleCloseNavMenu("/")}
          >
           <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" alt="" style={{width:"60px",height:"60px"}}/>    NASA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={() => handleCloseNavMenu(page.path)}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleCloseNavMenu(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <CssBaseline/>
             <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
      </>
    )

}

export default Header