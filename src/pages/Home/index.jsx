import ImportantsLinks from "../../components/sections/ImportantsLinks";
import Team from "../../components/sections/Team";
import TheOffice from "../../components/sections/TheOffice";
import BoxCTA from "../../components/shared/BoxCTA";
import SEO from "../../components/shared/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Advocacia Tributária e Empresarial em Fortaleza | Mesquita Barreto"
        description="Escritório de advocacia especializado em direito tributário, holding familiar e demandas empresariais em Fortaleza-CE. Mais de 10 anos de experiência."
        canonical="/"
      />
      <div>
        <TheOffice />
        <ImportantsLinks />
        <Team />
        <BoxCTA />
      </div>
    </>
  );
};

export default Home;
