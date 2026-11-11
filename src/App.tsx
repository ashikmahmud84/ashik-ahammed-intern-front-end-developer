
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import PopularLinks from './components/sections/PopularLinks'
import PremiumTools from './components/sections/PremiumTools'
import Statistics from './components/sections/Statistics'

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="min-h-screen">
        {/* Homepage sections will be added here */}
        <Hero/>

        <Statistics />

        <PopularLinks/>

        <PremiumTools />


      </main>
    </>
  )
}

export default App
