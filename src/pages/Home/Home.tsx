import { CardContainer } from "../../components/Card/CardContainer";
import { Footer } from "../../components/commons/Footer";
import { Header } from "../../components/commons/Header";
import { HomeDisplay } from "../../components/Home/HomeDisplay";
import { handleDocument } from "../../helpers/prismic/home";

export function Home() {
  const homeData = handleDocument();

  return (
    <>
      <Header />
      <HomeDisplay
        title={homeData?.title}
        description={homeData?.description}
      />
      {homeData?.cardsContainer && (
        <CardContainer data={homeData.cardsContainer} />
      )}
      <Footer />
    </>
  );
}
