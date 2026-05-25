import { infoBanner } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const WhyChooseUs = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Why Choose Us?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our user-friendly platform, customizable alerts, and actionable insights empower your business to stay ahead in real-time. 
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Seamless integration, scalability, and top-tier security will help you elevate your business with confidence - choose us for precision, performance, and lasting success.
      </p>


      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={infoBanner} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default WhyChooseUs;