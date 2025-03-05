import Button from './Component/Button'
import CounterApp from './Component/Counter'

function App() {
  const handleClick = () => {
    alert('Hello Chaitanya 🥳🔥')
  }

  return (
    <>
   <div className="h-screen flex items-center justify-center bg-gray-100">
      <Button name="Click Me" onClick={handleClick} />
    </div>
    <CounterApp/>
  
    </>
  )
}

export default App
