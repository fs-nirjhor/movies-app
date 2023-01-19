import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid} from '@mui/material';

export default function Movies(props) {
  const {movie} = props ;
  const {title, overview, poster_path, release_date} = movie;
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <Grid item xs={12} sm={6} lg={4} p={1}>
    <Card >
      <CardActionArea >
        <CardMedia
          component="img"
          image={poster}
          alt="loading..."
          sx={{ width: '50%', m: 'auto' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign='center'>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {overview}
          </Typography>
           <Typography color={'brown'}>
            Release on {release_date}
          </Typography>
        </CardContent>
        </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Show now
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}