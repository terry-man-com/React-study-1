import './App.css'
import Button from './Button.jsx'

function App() {

      const handleClick =() => {
      alert('Button clicked.');
    }

  return (
    <>
      <h1>Hello World</h1>
      <Button type="submit" disabled={false} onClick={handleClick}>
        <span>ボタン</span>
      </Button>
    </>
  )
}

export default App
