import styles from "./styles";
import {

  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  CTA,
  Footer,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden ">


    <div className={`bg-primary ${styles.flexStart} xl:pl-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business />
        <Billing />
        <CardDeal />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);
}

export default App;
