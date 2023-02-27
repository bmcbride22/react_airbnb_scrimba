import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
		<header>
			<Navbar />
		</header>
		<main>
			<Hero/>
		</main>
		</>
  )
}

export default App
