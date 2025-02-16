import ImportantsLinks from "../../components/sections/ImportantsLinks";
import Team from "../../components/sections/Team";
import TheOffice from "../../components/sections/TheOffice";
import BoxCTA from "../../components/shared/BoxCTA";

const Home = () => {
  return (
    <div>
      <TheOffice />
      <ImportantsLinks />
      <Team />
      <BoxCTA />
    </div>
  );
};

export default Home;
