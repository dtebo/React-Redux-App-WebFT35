import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { fetchCatData } from './actions';

import './App.css';

import CatData from './components/CatData';

function App(props) {
  const { fetchCatData } = props;
  const [url, setUrl] = useState('https://cat-fact.herokuapp.com/facts');

  useEffect(() => {
    fetchCatData(url);
  }, [url]);

  return (
    <div className="App">
      <CatData />
    </div>
  );
}

export default connect(null, { fetchCatData })(App);
