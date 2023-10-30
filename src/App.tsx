import Billing from "./compoents/Billing";
import Business from "./compoents/Business";
import CTA from "./compoents/CTA";
import CardDeal from "./compoents/CardDeal";
import Clients from "./compoents/Clients";
import Footer from "./compoents/Footer";
import Hero from "./compoents/Hero";
import NavBar from "./compoents/NavBar";
import Stats from "./compoents/Stats";
import Testimonials from "./compoents/Testimonials";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
