import Footer from "@/components/Footer";
import Header from "@/components/Header/index";
import LastPage from "@/components/LastPage";
import OnePage from "@/components/OnePage";
import TwoPage from "@/components/TwoPage";
import Welcome from "@/components/Welcome/index";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <OnePage />
      <TwoPage />
      <LastPage />
      <Footer />
    </>
  );
}
