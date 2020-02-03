import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SnackA from '../../asset/paketA.png';
import SnackB from '../../asset/paketB.png';
import Button from '@material-ui/core/Button';
import SnackC from '../../asset/paketC.png';

function Snack() {
  return (
    <React.Fragment>
      <Typography
        variant="h5"
        style={{ paddingTop: '50px', fontWeight: 'bold', fontSize: '16px' }}>
        Paket Favorit
      </Typography>
      {/* Paket A */}
      <Grid container spacing={0} style={{ paddingTop: '30px' }}>
        <Grid item xs={4}>
          <Paper style={{ width: '376px', height: '114px' }}>
            <img src={SnackA} style={{ width: '114px', height: '114px' }} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{
              paddingTop: '10px',
              fontWeight: 'bold',
              fontSize: '16px',
              paddingLeft: '10px'
            }}>
            Snack Paket A
          </Typography>
          <Typography
            style={{
              paddingTop: '10px',
              fontSize: '13px',
              paddingLeft: '10px',
              color: '#9B9B9B'
            }}>
            Roll Cake, Kue Ku, Pastel, Kl ..
          </Typography>
          <Typography
            style={{
              paddingTop: '10px',
              fontSize: '16px',
              paddingLeft: '10px',
              color: '#FF5B5B',
              fontWeight: 'bold'
            }}>
            IDR 20.000
            <Button
              style={{
                backgroundColor: '#FF5B5B',
                marginTop: '-50px',
                marginLeft: '140px'
              }}
              variant="contained">
              Tambah
            </Button>
          </Typography>
        </Grid>
      </Grid>
      {/* paket B */}
      <Grid container spacing={0} style={{ paddingTop: '30px' }}>
        <Grid item xs={4}>
          <Paper style={{ width: '376px', height: '114px' }}>
            <img src={SnackB} style={{ width: '114px', height: '114px' }} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography
            style={{
              paddingTop: '10px',
              fontWeight: 'bold',
              fontSize: '16px',
              paddingLeft: '10px'
            }}>
            Rice Box Paket B
          </Typography>
          <Typography
            style={{
              paddingTop: '10px',
              fontSize: '13px',
              paddingLeft: '10px',
              color: '#9B9B9B'
            }}>
            Nasi Putih, Ayam Panggang, S ...
          </Typography>
          <Typography
            style={{
              paddingTop: '10px',
              fontSize: '16px',
              paddingLeft: '10px',
              color: '#FF5B5B',
              fontWeight: 'bold'
            }}>
            IDR 35.000
            <Button
              style={{
                backgroundColor: '#FF5B5B',
                marginTop: '-50px',
                marginLeft: '140px'
              }}
              variant="contained">
              Tambah
            </Button>
          </Typography>
        </Grid>
        {/* Paket C */}
        <Grid container spacing={0} style={{ paddingTop: '30px' }}>
          <Grid item xs={4}>
            <Paper style={{ width: '376px', height: '114px' }}>
              <img src={SnackC} style={{ width: '114px', height: '114px' }} />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Typography
              style={{
                paddingTop: '10px',
                fontWeight: 'bold',
                fontSize: '16px',
                paddingLeft: '10px'
              }}>
              Buffet Paket C
            </Typography>
            <Typography
              style={{
                paddingTop: '10px',
                fontSize: '13px',
                paddingLeft: '10px',
                color: '#9B9B9B'
              }}>
              Nasi Putih, Nasi Goreng, Sou ...
            </Typography>
            <Typography
              style={{
                paddingTop: '10px',
                fontSize: '16px',
                paddingLeft: '10px',
                color: '#FF5B5B',
                fontWeight: 'bold'
              }}>
              IDR 65.000
              <Button
                style={{
                  backgroundColor: '#FF5B5B',
                  marginTop: '-50px',
                  marginLeft: '140px'
                }}
                variant="contained">
                Tambah
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Snack;
