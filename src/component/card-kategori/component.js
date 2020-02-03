import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Cookie from '../../asset/cookie 1.png';
import Rice from '../../asset/rice.png';
import Lonceng from '../../asset/lonceng.png';

function Snack() {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        style={{ paddingTop: '50px', fontWeight: 'bold', fontSize: '16px' }}>
        Kategori Pilihan
      </Typography>
      <Grid container spacing={5} style={{ paddingTop: '30px' }}>
        <Grid item xs={4}>
          <Paper style={{ width: '99px', height: '99px' }}>
            <img
              src={Cookie}
              style={{
                width: '40px',
                height: '40px',
                paddingLeft: '30px',
                paddingTop: '25px'
              }}
            />
            <Typography style={{ color: '#A9A9A9', paddingLeft: '30px' }}>
              Snack
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ width: '99px', height: '99px' }}>
            <img
              src={Rice}
              style={{
                width: '40px',
                height: '40px',
                paddingLeft: '30px',
                paddingTop: '25px'
              }}
            />
            <Typography style={{ color: '#A9A9A9', paddingLeft: '17px' }}>
              Rice Box
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ width: '99px', height: '99px' }}>
            <img
              src={Lonceng}
              style={{
                width: '40px',
                height: '40px',
                paddingLeft: '30px',
                paddingTop: '25px'
              }}
            />
            <Typography style={{ color: '#A9A9A9', paddingLeft: '28px' }}>
              Buffet
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Snack;
