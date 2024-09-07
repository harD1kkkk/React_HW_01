import React from 'react';
import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: 'auto',
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.name}
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>
          {product.price} грн
        </Typography>
        <Typography variant="body2" color={product.isRunningOut ? 'error.main' : 'success.main'} sx={{ mt: 1 }}>
          {product.isRunningOut ? 'Закінчується' : 'В наявності'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;