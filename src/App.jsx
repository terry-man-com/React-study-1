import './App.css'
import Button from './components/Button/Button.jsx'
import Display from './components/Display/Display.jsx'
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="submit" disabled={false} onClick={handleClick}>
        ボタン
      </Button>
      <Display count={count} />
    </>
  )
}

export default App
