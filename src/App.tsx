
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Statistics from './components/sections/Statistics'

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="min-h-screen">
        {/* Homepage sections will be added here */}
        <Hero/>

        <Statistics />


      </main>
    </>
  )
}

export default App
