import styles from "../styles";
import GetStarted from "./GetStarted";
import Navbar from "./NavBar";
import {rightArrow, colors} from "../assets/img"


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mb-10 `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        
        <Navbar/>
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-6 mt-10">
          <img src={rightArrow} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-yellow-600">All</span> <span className="text-blue-600">Information{" "}</span> 
            <span className="text-teal-600">About Your</span> <span className="text-yellow-600">Vegan Favourites</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The<br className="sm:block hidden" />{" "}
            <span className="text-gradient"> Ultimate Guide </span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          of Vegan Food.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team will help you find all the information you need to find your ideal vegan food.
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0 mt-10">
            <GetStarted />
          </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={colors} alt="billing" className="w-[100%] h-[108%] relative z-[5] " />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;