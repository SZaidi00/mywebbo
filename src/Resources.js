
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

import { pink } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';


export default function Resources() {
  return (
      <div className='resources'>

      
    <Stack  spacing={5} alignItems= "center" >
        <Stack direction="row">

        <a href = "https://www.google.com/">
      <IconButton aria-label="delete">
        <GoogleIcon 
        sx={{color: green[500],fontSize: "10vw"}}
        />
      </IconButton>
      </a>
        
  
      <a href = "https://www.linkedin.com/in/shumail-zaidi/">
      <IconButton aria-label="delete">
        <LinkedInIcon 
        sx={{color: blue[500], fontSize: "10vw"}}
        />
      </IconButton>
      </a>


      <a href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
      <IconButton aria-label="delete">
        <QuestionMarkIcon
        sx={{color: red[500], fontSize: "10vw"}}
         />
      </IconButton>
      </a>

      <a href = "https://akram.dev/">
      <IconButton aria-label="delete">
        <PriorityHighIcon
        sx={{color: yellow[500], fontSize: "10vw"}}
         />
      </IconButton>
      </a>


      <a href = "https://github.com/SZaidi00">
      <IconButton aria-label="delete">
        <GitHubIcon
         sx={{color: pink[500], fontSize: "10vw"}}
         
          />
      </IconButton>
      </a>


      </Stack>
    </Stack>
    </div>
  );
}