import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Search, ShoppingCart, Person } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled('input')(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#00a046' }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
          <img src="https://content.rozetka.com.ua/mb_logo/image_site_light_theme/original/458307143.svg" alt="Rozetka Logo" style={{ height: '40px' }} />
        </Typography>
        <SearchBar>
          <SearchIconWrapper>
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Пошук товарів…" />
        </SearchBar>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton size="large" color="inherit">
          <Person />
        </IconButton>
        <IconButton size="large" aria-label="cart" color="inherit">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;