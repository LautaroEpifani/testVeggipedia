import styles from "../styles";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {

  const navigate = useNavigate()

  return (
  <div className={`${styles.flexCenter} w-[180px] h-[50px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:bg-pink-900`}>
      <button onClick={() => navigate("/graphic")} className={`${styles.flexStart} flex-row gap-2`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get Started</span>
        </p>
      </button>
    </div>
  </div>
);
} 
export default GetStarted;