import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>Сегодня {people.length} именинников</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>очистить всё</button>
      </section>
    </main>
  )
}

export default App
