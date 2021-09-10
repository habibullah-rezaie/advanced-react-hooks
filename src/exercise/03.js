// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const countContext = React.createContext()

function CountProvider({children}) {
  const [count, setCount] = React.useState()
  return (
    <countContext.Provider value={[count, setCount]}>
      {children}
    </countContext.Provider>
  )
}

function CountDisplay() {
  const [count] = React.useContext(countContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = React.useContext(countContext)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
