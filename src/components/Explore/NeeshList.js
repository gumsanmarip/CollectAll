import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import pkm from '../../assets/images/pokemon.png'
import ygo from '../../assets/images/yugioh.png'

export default function BasicList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar alt="Pokemon" src={pkm}/>
              </ListItemIcon>
              <ListItemText primary="Pokemon" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <Avatar alt="Yugioh" src={ygo}/>
              </ListItemIcon>
              <ListItemText primary="Yu-Gi-Oh!" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      
    </Box>
  );
}
