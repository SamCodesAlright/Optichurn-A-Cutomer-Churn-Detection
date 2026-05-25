// import styles from "./style";
// import {
//   Navbar,
//   CustomerJourney,
//   Features,
//   WhyChooseUs,
//   Clients,
//   CTA,
//   Footer,
//   Hero,
//   Stats,
//   Testimonials,
//   ChurnPredict,
//   DataVisuals,
// } from "./components";


// const App = () => (
//   <div className="bg-primary w-full overflow-hidden">
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Navbar />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Hero />
//       </div>
//     </div>

//     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
//       <div className={`${styles.boxWidth}`}>
//         <Stats />
//         <ChurnPredict />
//         <Features />
//         <DataVisuals />
//         <CustomerJourney />
//         <WhyChooseUs />
//         <Testimonials />
//         <Clients />
//         <CTA />
//         <Footer />
//       </div>
//     </div>
//   </div>
// );

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, About, Predictions, Visualization } from "./Pages";


function App () {

  return(
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/visualization" element={<Visualization />} />
          <Route exact path="/predictions" element={<Predictions />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;