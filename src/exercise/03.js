// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const countContext = React.createContext()

function CountProvider({children}) {
  const [count, setCount] = React.useState(0)
  return (
    <countContext.Provider value={[count, setCount]}>
      {children}
    </countContext.Provider>
  )
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
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

function useCount() {
  const context = React.useContext(countContext)

  if (!context) {
    throw new Error('useCount must be used within CountContext.Provider')
  }

  return context
}
