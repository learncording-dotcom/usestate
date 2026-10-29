import { useState } from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import Table from './components/Table.jsx'

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="main-layout">
      <Counter 
        name="Tatenda"
        count={count} 
        setCount={setCount}
      />
      <Table count={count} />
    </div>
  );
}

export default App;
