import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api').then((response) =>
      console.log(response)
    );
    // .then((data) => {
    //   console.log(data);
    //   setQuestions(data);
    // });
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}

export default App;
