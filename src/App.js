import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";

function App() {
  return (
    <>
      Personal Digital Assitants
      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </>
  );
}

export default App;
