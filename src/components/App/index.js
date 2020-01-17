import React from 'react';
import Shelf from '../Shelf';
import GithubCorner from '../github/Top';
import FloatCart from '../FloatCart';

const App = () => (
  <React.Fragment>
    <GithubCorner />
    <main>
      <Shelf />
      <FloatCart />
    </main>
  </React.Fragment>
);

export default App;
