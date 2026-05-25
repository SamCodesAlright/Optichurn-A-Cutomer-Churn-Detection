import styles from "../style";
import { computerGraphic, robot, shield} from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flx-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center  py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={shield} alt="discount" className="w-[20px] h-[20px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> Predict Today, Thrive Tomorrow </span> - Your Churn Shield.
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Gateway for <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Churn-Free </span>
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Business.
      </h1>
      <p className={`${styles.paragraph} max-w-[476px] mt-5`}>
      Our website is a game-changer for businesses seeking sustainable growth and enhanced customer retention. We empower your business to anticipate customer behavior shifts before they occur. 
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={computerGraphic}
        alt="robot"
        className="w-[100%] h-[100%] relative z-[5] sm:block hidden md:block hidden"
      />

      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>

  </section>
);

export default Hero;
