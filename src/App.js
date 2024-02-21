import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <>
      <div>Personal Digital Assitants</div>

      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage}/>
      <ProfileCard title="Siri" handle="@siri01"image={SiriImage} />
    </>
  );
}

export default App;
