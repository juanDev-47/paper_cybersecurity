import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useContextProvider } from "../context/contextProvider";
import i18n from "../i18n";
import Informacion from "../components/informacion";
import Separador from "../components/separador";
import Toggle from "../components/toggle";
// import Nombres from "../components/nombres";

const Home = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("es");
    }
  }, [traslate]);

  return (
    <div>
      <div>
        <Toggle />
      </div>
      <div>
        <Separador titulo={t("info1")} />
        <div>
          {/* <Nombres /> */}
        </div>
        <Informacion value={t("info1")} />
      </div>
    </div>
  );
};

export default Home;
