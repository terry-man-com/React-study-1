import './App.css'
import Button from './components/Button/Button.jsx'
import Display from './components/Display/Display.jsx'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('count:', count);
        if (count > 15) {
          setCount(0)
          alert('カウントが15を超えました');
        }
    }, [count])

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
