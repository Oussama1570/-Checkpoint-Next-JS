import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CardOussama.css";

export default function MediaCard() {
  return (

    <div>
<div className='OussamaCardPortfolio'>

    <Card sx={{ maxWidth: 480 }}>
      <CardMedia
        sx={{ height: 450 }}
        image="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/441968294_961740182340987_6390255842580440414_n.png?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3RKkwQBZX_4Q7kNvgHKYsVE&_nc_ht=scontent.ftun16-1.fna&oh=03_Q7cD1QHAPWIeyKc8WoiiREdo7m5CYzKUJ9d2YLxRJz7ecvceSg&oe=6690133A"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='TitleINtroduction'>
          Introducing me
        </Typography>
        <Typography variant="body2" color="text.secondary" className='TextIntroduction'>
        Hey dear guests and friends, I am Oussama Labben aged 28 years Old,
         I'm a graphic Designer professionnel and creative
         Welcome to My Website Oussama's Portfolio, My Portfolio is well done created and very good designed
        </Typography>
      </CardContent>
      <CardActions className='ButtonsMe'>
        <a href='/Projects'><Button size="small">See my Projects</Button></a>
        <a href='/About'><Button size="small">About me</Button></a>
      </CardActions>
    </Card>

    </div>
    </div>
  );
}