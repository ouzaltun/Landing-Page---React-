import "./App.css";
import HeroSlider from "./components/HeroSlider";
import ServicesGrid from "./components/ServicesGrid";
import PortfolioSection from "./components/PortfolioSection";
import SplitText from "./components/SplitText";

export default function App() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <HeroSlider />
      <ServicesGrid />
      <PortfolioSection />
      <section className="section-dark portfolio-showcase" id="portfolio">
        <div className="portfolio-title-wrap">
          <SplitText
            tag="h1"
            text="Portfolyo"
            className="portfolio-title"
            splitType="chars"
            delay={35}
            duration={0.7}
            ease="power3.out"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-120px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </section>
    </>
  );
}
