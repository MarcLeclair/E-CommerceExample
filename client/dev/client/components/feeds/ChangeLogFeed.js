import React from 'react';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const panelPadding = {
  padding: '2rem',
}

function ChangeLogFeed (props) {

  return (
    <Grid item xs={10} md={5} lg={4}>
      <Paper style={panelPadding}>
        <Typography type="display1" component="h3">
          Latest Updates
        </Typography><br /><br />
        <Typography type="title">New features this iteration</Typography>
        <Typography type="body2">
          <ul>
            <li>Implemented new administrator secured login</li>
            <li>Implemented table of available products with filters</li>
            <li>Implemented add new product modal for administrator only</li>
            <li>Implemented view product details from product listing</li>
            <li>Setup react redux boilerplate with webpack</li>
            <li>Setup material ui components in react stack</li>
          </ul>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default (ChangeLogFeed);