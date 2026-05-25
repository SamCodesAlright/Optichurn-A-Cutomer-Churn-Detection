import { customerJourney } from "../assets";
import styles, { layout } from "../style";

const CustomerJourney = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={customerJourney}
        alt="Customer Journey"
        className="w-[100%] h-[100%] relative z-[5]"
      />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Customer Journey</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        From the moment you log in, personalized dashboards guide you through a
        seamless experience, providing a comprehensive view of predictive
        insights.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Navigate through real-time monitoring tools, empowering you to
        proactively address evolving customer behaviors.
      </p>
    </div>
  </section>
);

export default CustomerJourney;
