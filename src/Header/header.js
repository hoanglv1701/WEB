import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { VI } from '../config';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    ultil_header: {
        flexGrow: 1,
        borderBottom: '1px solid rgba(255,255,255,.25)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menu_item_type: {
        padding: '0 1.25rem',
        fontSize: '.6875rem',
        letterSpacing: '.0625rem',
        textTransform: 'uppercase',
        '&:hover': {
            color: 'red',
        },
        cursor: 'pointer',
    },
    menu_lang: {
        padding: '0 .15rem',
        fontSize: '.6875rem',
        letterSpacing: '.0625rem',
        textTransform: 'uppercase',
        '&:hover': {
            color: 'red',
        },
        cursor: 'pointer',
    },
    icon_lang: {
        marginTop: '-2px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    headerLogo: {
    },
    menu_item: {
        position: 'relative',
        '&:hover $sub_menu_lv1': {
            display: 'block',
            color: 'red'
        },
    },
    menu_item_link: {
        position: 'relative',
        padding: '1.75rem 0.25rem',
        whiteSpace: 'nowrap',

    },
    sub_menu_lv1: {
        display: 'none',
        listStyle: 'none'
    }
}));

function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <div className={classes.menu}>
            <Menu
                anchorEl={true}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id={menuId}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>English</MenuItem>
                <MenuItem onClick={handleMenuClose}>Chinas</MenuItem>
            </Menu>
        </div>

    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <a>{VI.header_giaiphap}</a>
            </MenuItem>
        </Menu>
    );

    return (
        <div>
            <div className={classes.ultil_header}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <Typography className={`${classes.menu_item_type} ${classes.sectionDesktop}`} variant="h6" noWrap>{VI.header_giaiphap}</Typography>
                        <Typography className={`${classes.menu_item_type} ${classes.sectionDesktop}`} variant="h6" noWrap>{VI.header_tintuc}</Typography>
                        <Typography className={`${classes.menu_item_type} ${classes.sectionDesktop}`} variant="h6" noWrap>{VI.header_lienhe}</Typography>
                        <div className={classes.sectionDesktop}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <LanguageIcon fontSize="small" />
                                <Typography className={`${classes.menu_lang} ${classes.sectionDesktop}`} variant="h6" noWrap>{VI.header_ngonngu_viet}</Typography>
                                <ExpandMoreIcon className={classes.icon_lang} fontSize="small" />

                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <FormatListBulletedIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div >
            <div className={classes.ultil_header}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.headerLogo}>
                            <a href='https://www.youtube.com/'>
                                <img src='https://www.sml.com/wp-content/uploads/2021/11/sml-group-logo.svg' alt=''>
                                </img>
                            </a>
                        </div>
                        <div className={classes.grow} />
                        <div>
                            <li className={classes.menu_item}>
                                <a className={classes.menu_item_link} href="">
                                    Product

                                </a>
                                <ul className={classes.sub_menu_lv1}>
                                    <li>
                                        aaaa
                                    </li>
                                    <li>
                                        aaaabbb
                                    </li>
                                    <li>
                                        aaaabbbccc
                                    </li>
                                </ul>

                            </li>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        </div >
    );
}