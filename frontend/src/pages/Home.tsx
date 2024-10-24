import React from 'react';
import { Typography, Container, ButtonBase } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAdverts = () => {
    navigate('/adverts');
  };

  return (
    <Container>
      <Typography variant="h4">Welcome to Supplyium</Typography>
      <Typography>Your platform for managing Buy, Sell, and Forwarder adverts.</Typography>
      <ButtonBase
        onClick={handleViewAdverts}
        style={{
          backgroundColor: '#3f51b5',
          color: 'white',
          padding: '6px 16px',
          borderRadius: '4px',
          marginTop: '16px'
        }}
      >
        View Adverts
      </ButtonBase>
    </Container>
  );
};

export default Home;
