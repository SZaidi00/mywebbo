// import React from 'react'

// export default function Resources() {
//   return (
//     <><h1>Responsive grid of cards/tiles</h1><section class="Resource-main">

//           <article class="Resource-tile">
//               <a href="#" target="_blank" class="Resource-tile-anchor">

//                   <div class="Resource-tile-media">
//                       <span class="Resource-tile-time">60 min read</span>
//                       {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=50"> */}
//                       </div>

//                   <div class="Resource-tile-content">
//                       <h2 class="Resource-tile-title">I am a resource item</h2>

//                       <div class="Resource-tile-intro">
//                           <p>Choosing the performance management system that’s right for you is never easy, particularly when it comes to driving adoption.</p>
//                       </div>
//                   </div>
//               </a>

//               <ul class="Resource-tile-tags">
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">E-Book</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
//               </ul>
//           </article>

//           <article class="Resource-tile ">
//               <a href="#" target="_self" class="Resource-tile-anchor">

//                   <div class="Resource-tile-content">
//                       <h2 class="Resource-tile-title">Blog entry white background</h2>

//                       <div class="Resource-tile-intro">
//                           <div class="section-inner sectionLayout--insetColumn">
//                               <p class="graf graf--p graf-after--figure">There is of course, no ‘sure thing’ in business. It’s all a gamble, so raise the damn stakes. Stop playing the fixed odd slot machines in the lobby when you can don your tux or slip on your cocktail dress and play for real stakes in the high
//                                   roller’s room. The tux, the dress, is</p>
//                           </div>
//                           <div class="section-inner sectionLayout--outsetColumn">
//                               <figure class="graf graf--figure graf--layoutOutsetCenter graf-after--p">
//                                   <div class="aspectRatioPlaceholder is-locked"></div>
//                               </figure>
//                           </div>
//                       </div>
//                   </div>
//               </a>

//               <ul class="Resource-tile-tags">
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Blog</a></li>
//               </ul>
//           </article>

//           <article class="Resource-tile">
//               <a href="#" target="" class="Resource-tile-anchor">

//                   <div class="Resource-tile-media">
//                       <span class="Resource-tile-time">10 min read</span>
//                       {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=90" /> */}
//                   </div>

//                   <div class="Resource-tile-content">
//                       <h2 class="Resource-tile-title">Guide entry</h2>

//                       <div class="Resource-tile-intro">
//                           <p>To establishing a new model rather than slavishly serving a legacy. Is its’ demise necessary for us to truly take an evolutionary leap? “<em>Dear John, it’s not me, it’s you…”</em></p>
//                       </div>
//                   </div>
//               </a>

//               <ul class="Resource-tile-tags">
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Guide</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Performance management</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Another topic</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
//               </ul>
//           </article>

//           <article class="Resource-tile">
//               <a href="#" target="" class="Resource-tile-anchor">

//                   <div class="Resource-tile-media">

//                       {/* <img class="Resource-tile-img" src="https://picsum.photos/720/540/?image=10" /> */}
//                   </div>

//                   <div class="Resource-tile-content">
//                       <h2 class="Resource-tile-title">Is Being Best Enough?</h2>

//                       <div class="Resource-tile-intro">
//                           <p>In <em>State</em>, I offered the simple logic that there are more great projects than there are great teams, so studios that deliver to the highest standards will thrive.</p>
//                       </div>
//                   </div>
//               </a>

//               <ul class="Resource-tile-tags">
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Webinar</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
//               </ul>
//           </article>

//           <article class="Resource-tile">
//               <a href="#" target="_self" class="Resource-tile-anchor">

//                   <div class="Resource-tile-content">
//                       <h2 class="Resource-tile-title">Changing The Terms Of Business</h2>

//                       <div class="Resource-tile-intro">
//                           <p>It all begs the question, should the existing agency model just die and break so that we can properly put our minds to establishing a new model rather than slavishly serving a legacy.</p>
//                       </div>
//                   </div>
//               </a>

//               <ul class="Resource-tile-tags">
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Blog</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Employee feedback</a></li>
//                   <li class="Resource-tile-tag"><a href="#" class="Resource-tag-anchor">Pants</a></li>
//               </ul>
//           </article>
//       </section></>
//   )
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  }));


export default function Resource() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800 }}>
        <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 10, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Item>
            
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }

        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Item>
      </Grid>


      <Grid item xs={6}>
        <Item>
            
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            d
          </Avatar>
        }

        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
     
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
        </Item>
        </Grid>

        </Grid>
      </Box>
    </Card>

    

    
  );
}
