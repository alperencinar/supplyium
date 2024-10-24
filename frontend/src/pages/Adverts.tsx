import React, { useState, useEffect } from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@material-ui/core';
import { getAllAdverts } from '../services/advertService';

interface Advert {
  _id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
}

const Adverts: React.FC = () => {
  const [adverts, setAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await getAllAdverts();
        setAdverts(response.data);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };

    fetchAdverts();
  }, []);

  return (
    <Container>
      <Typography variant="h4">Adverts</Typography>
      <List>
        {adverts.map((advert) => (
          <ListItem key={advert._id}>
            <ListItemText
              primary={advert.title}
              secondary={`${advert.description} - ${advert.price} ${advert.currency}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Adverts;
