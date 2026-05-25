import styles from "../style";
import {
  Navbar,
  Footer,
  Hero,
  Stats,
  ChurnPredict,
} from "../components";

const Predictions = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <ChurnPredict />
        <Footer />
      </div>
    </div>
  </div>
);

export default Predictions;
