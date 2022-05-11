import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState (1);
  const [answer, setAnswer] = useState();
  const [phrase, setPhrase] = useState('')

  useEffect(()=>{
    if (number % 3 === 0 && number % 5 === 0) {
      setAnswer("fizzbuzz")
    } else if (number % 3 === 0) {
      setAnswer("fizz")
    } else if (number % 5 === 0) {
      setAnswer("buzz")
    } else {
      setAnswer(number);
    }
},[number])

  useEffect(()=>{
    if (number ===19)
    setPhrase ("fuck!!")
      else{
        setPhrase("")

      }
  }, [number])


  const handleClick = () =>{
    setNumber(number+1)
  }

  const handleChange=(event)=>{
    setPhrase(event.target.value)
  }


  return (
    <>
    <button value={number} onClick={handleClick}>FizzyBuzzyButton</button>
    <h2>The results are: {answer} </h2>
    <h2>!!!!{phrase}!!!</h2>
    {/* <form>
    <input type="text" value={setPhrase} onChange={handleChange}>Test</input>
    </form> */}
    </>
    
  );
}

export default App;


