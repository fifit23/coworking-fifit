import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Back from '../../asset/back.png';
import Toolbar from '@material-ui/core/Toolbar';
import { withRouter } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Appbar(props) {
  const { classes } = props;
  const handleBack = () => {
    props.history.push('/');
  };

  return (
    <Box display="flex" justifyContent="center">
      <AppBar
        position="static"
        style={{
          maxWidth: 448,
          position: 'fixed',
          backgroundColor: '#FFFFFF'
        }}>
        <Toolbar>
          <img
            src={Back}
            style={{ width: 20, height: 20 }}
            onClick={handleBack}
          />
          <Typography
            variant="body2"
            style={{ paddingLeft: '20px', marginTop: '-30px', color: 'black' }}>
            lokasi anda
          </Typography>
          <ExpandMoreIcon
            style={{
              width: '30px',
              height: '30px',
              marginTop: '-30px',
              paddingLeft: '15px',
              color: 'red'
            }}
          />
          <Typography
            style={{
              paddingTop: '21px',
              marginLeft: '-120px',
              color: 'black',
              variant: 'Blod'
            }}>
            Koding Works
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default withRouter(Appbar);
