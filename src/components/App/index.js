import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Top';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <GithubCorner />
    <main>
      <Filter />
      <Shelf />
      <FloatCart />
    </main>
  </React.Fragment>
);

export default App;
