import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Container,
    Tooltip,
    Avatar,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout";
import kmaLogo from "../../assets/kma_logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const pages = ["tasks", "annoucement", "news"];
const settings = ["profile", "logout"];
const avatarImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQht5VSVQFL1pm0nJZP-_B0jdGsGinEx5yvrbolCxSjhO4_ykjrXm6cCPTv1bpfJ0vF5Zw&usqp=CAU";

const LoggedInAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState();

    const [anchorElUser, setAnchorElUser] = useState();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: "white" }}
            elevation={0}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <img src={kmaLogo} alt="avatar" style={{ width: "5%" }} />

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                >
                                    <AnchorLink
                                        href={`#` + page}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#18A0FB",
                                                fontFamily:
                                                    "Montserrat sans-serif",
                                                textDecoration: "none",
                                                fontSize: "1rem",
                                                fontWeight: "400",
                                            }}
                                        >
                                            {page}
                                        </Typography>
                                    </AnchorLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    mx: 3,
                                    display: "block",
                                }}
                            >
                                <AnchorLink
                                    href={`#` + page}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#18A0FB",
                                            fontFamily: "Montserrat sans-serif",
                                            textDecoration: "none",
                                            fontSize: "1rem",
                                            fontWeight: "400",
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </AnchorLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar alt="John Doe" src={avatarImgUrl} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    {setting === "logout" ? (
                                        <Logout />
                                    ) : (
                                        <Typography textAlign="center">
                                            {setting}
                                        </Typography>
                                    )}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default LoggedInAppBar;
