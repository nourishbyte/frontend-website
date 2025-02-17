import React from 'react'
import LandingPage from '../components/Home/LandingPage'
import Service from '../components/Home/Service'
import MakingOfJaggerySection from '../components/Home/ProductionProcess'
import ServiceSection from '../components/Home/ServiceSection'
<<<<<<< HEAD
=======
import ProductSection from '../components/Home/ProductSection'
>>>>>>> f95598c (Some Changes in the website)

const Home = () => {
  return (
    <div>
        <LandingPage />
        <section>
          <Service/>
        </section>
        <section>
<<<<<<< HEAD
          <MakingOfJaggerySection />
        </section>
        <section>
          <ServiceSection />
        </section>
=======
          {/* <MakingOfJaggerySection /> */}
          <ProductSection />
        </section>
       
>>>>>>> f95598c (Some Changes in the website)
    </div>
  )
}

export default Home
