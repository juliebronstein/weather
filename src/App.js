
import { useState } from 'react';
import SearchCity from './Components/SearchCity';
import Weather from './Components/Weather';

import { useLocation } from 'react-router-dom';


function App() {


  const location = useLocation();
  return (
      <>
        {/* App d-flex justify-content-center align-items-center m-0 h-vh-100 overflow-hidden */}
        {/* style={{ backgroundImage: `url(${background})` }}  */}
        <div className='App'>
        <SearchCity />
       
        </div>
    
      </>
  );
}

export default App;
