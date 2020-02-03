import React from 'react';
import Container from '@material-ui/core/Container';
import Appbar from '../../component/appbar';
import Search from '../../component/search-button';
import Setepper from '../../component/seteper';
import CardKategori from '../../component/card-kategori';
import SnackA from '../../component/card-snack A';
import Food from '../../component/food-radio'

function Home() {
  return (
    <Container maxWidth="xs">
      <React.Fragment>
        <Appbar />
        <Search />
        <Food />
        <Setepper />
        <CardKategori />
        <SnackA />
      </React.Fragment>
    </Container>
  );
}
export default Home;
