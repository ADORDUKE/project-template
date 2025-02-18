import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      
      <Typography component="p" variant="h4">
        ХЗ как это все работает
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Но работает
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          не работает
        </Link>
      </div>
    </React.Fragment>
  );
}