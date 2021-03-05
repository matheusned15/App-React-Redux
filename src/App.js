import React from 'react';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';

export default function App() {
 return (
   <div>
     <BrowserRouter>
      <Header/>
      <Routes/>
     </BrowserRouter>
   </div>
 );
}