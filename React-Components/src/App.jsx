import ClickSpark from "./Clickspark";
import RotatingText from "./RotatingText";
import ScrollReveal from "./ScrollReveal";
import TextPressure from "./TextPressure";
// import Aurora from "./Aurora.jsx";
import Threads from "./Threads.jsx";
import Orb from "./Orb";

function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={20}
        sparkCount={10}
        duration={500}
      >
        {/* <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      /> */}
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        </div>
        <div style={{ position: "relative", height: "300px" }}>
          <TextPressure
            text="REACT"
            flex={false}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        <div style={{ width: "100%", height: "760px", position: "relative" }}>
          <Orb
            hoverIntensity={0.2}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a
          disease? No! When he ate a soup made out of a poisonous mushroom? No!
          A man dies when he is forgotten!
        </ScrollReveal>
        <RotatingText
          texts={["React", "Bits", "Is", "Cool!"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </ClickSpark>
    </>
  );
}

export default App;
