import React from 'react';
import './App.css';
import Card from './Card';
import Cards from './Cards';

function fun(a) {return (
    <Card title={a.title} priti={a.getSource} release={a.release_date} />
)}

function App() {
  return (
    <div>
    <h1 className='heading_style'>This is Netflix Clone</h1>
        {Cards.map(fun)};
    </div>
  )
}

export default App
