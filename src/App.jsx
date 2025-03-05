import Button from './Component/Button'

function App() {
  const handleClick = () => {
    alert('Hello Chaitanya 🥳🔥')
  }

  return (
    <>
   <div className="h-screen flex items-center justify-center bg-gray-100">
      <Button name="Click Me" onClick={handleClick} />
    </div>
  
    </>
  )
}

export default App
