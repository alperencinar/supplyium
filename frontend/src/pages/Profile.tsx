import React from 'react';
import { Typography, Container } from '@material-ui/core';

const Profile: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">User Profile</Typography>
      <Typography>Here you'll see user profile information.</Typography>
    </Container>
  );
};

export default Profile;
