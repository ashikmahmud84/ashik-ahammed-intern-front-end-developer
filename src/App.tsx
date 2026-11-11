
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import PopularLinks from './components/sections/PopularLinks'
import PremiumTools from './components/sections/PremiumTools'
import Pricing from './components/sections/Pricing'
import Statistics from './components/sections/Statistics'
import Testimonials from './components/sections/Testimonials'
import WhyChoose from './components/sections/WhyChoose'

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

        <Pricing/>

        <Testimonials />

        <WhyChoose/>

      
      </main>

       <Footer/>
    </>
  )
}

export default App
