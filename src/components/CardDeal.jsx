import styles, { layout } from "../styles";
import {library} from "../assets/img"

import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="cardDeal">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Upload products you know to our library.  <br className="sm:block hidden" /> You can get rewards.
        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={library} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;