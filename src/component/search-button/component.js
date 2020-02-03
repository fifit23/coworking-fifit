import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';

function Search() {
  return (
    <Box display="flex" justifyContent="center">
      <React.Fragment>
        <Button
          position="static"
          variant="contained"
          style={{
            height: '40px',
            width: '375px',
            marginTop: '120px',
            backgroundColor: '#FFFFFF'
          }}>
          <Toolbar>
            <SearchIcon
              style={{
                color: '#778899',
                marginTop: '-30px',
                marginLeft: '-90px'
              }}
            />
            <InputBase
              placeholder="Mau makan apa hari?"
              inputProps={{ 'aria-label': 'search' }}
              style={{ marginTop: '-30px', paddingLeft: '10px' }}
            />
          </Toolbar>
        </Button>
      </React.Fragment>
    </Box>
  );
}

export default Search;
