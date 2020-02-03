import React from 'react';
import Food from '../../asset/food.png';
import Typography from '@material-ui/core/Typography';

function Card() {
  return (
    <React.Fragment>
      <img
        src={Food}
        style={{ width: '100%', height: '100%', paddingTop: '40px' }}
      />
      <Typography
        style={{ marginTop: '-60px', paddingLeft: '20px', color: '#FFFFFF' }}>
        Gratis Kue Balok Untuk Pengguna Pertama Di Bulan Januari
      </Typography>
    </React.Fragment>
  );
}

export default Card;
