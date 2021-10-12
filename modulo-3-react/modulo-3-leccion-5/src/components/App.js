import { useEffect, useState } from 'react';
import callToApi from '../services/Api';

const App = () => {

  const [api, setApi] = useState([]);

  useEffect(() => {
    callToApi()
  });

  return (
    <div className="App">

    </div>
  );
};

export default App;