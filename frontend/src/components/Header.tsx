import React from 'react';
import { AppBar, Toolbar, Typography, ButtonBase } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Supplyium
        </Typography>
        <ButtonBase onClick={() => handleNavigation('/')} style={{ color: 'inherit', padding: '6px 8px' }}>
          Home
        </ButtonBase>
        <ButtonBase onClick={() => handleNavigation('/adverts')} style={{ color: 'inherit', padding: '6px 8px' }}>
          Adverts
        </ButtonBase>
        <ButtonBase onClick={() => handleNavigation('/profile')} style={{ color: 'inherit', padding: '6px 8px' }}>
          Profile
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
