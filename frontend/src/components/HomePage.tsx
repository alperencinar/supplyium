import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Supplyium
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your Platform for Buy, Sell, and Forwarder Adverts
        </Typography>
        <Typography variant="body1" paragraph>
          Supplyium is a comprehensive platform designed to facilitate the creation and management of Buy, Sell, and Forwarder adverts. Our platform enables efficient offer submissions and robust user management.
        </Typography>
        <Box sx={{ '& > button': { m: 1 } }}>
          <Button variant="contained" color="primary">
            Sign In
          </Button>
          <Button variant="outlined" color="primary">
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
