import {useState} from 'react';

//Pages Import
import GuestPage from './pages/GuestPage';
import PrivatePage from './pages/PrivatePage';

function App(){
  const [isLoggedIn] = useState(true)
  return(
    <div>
      {
        isLoggedIn ? < PrivatePage/> : <GuestPage />
      }
    </div>
  )
}

export default App