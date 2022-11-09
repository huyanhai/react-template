import { useState } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { setLang } from "@/store/modules/global/action";

const Home = (props: any) => {
  const { lang, setLang } = props;
  const { t } = useTranslation();

  const toggleLang = () => {
    setLang(lang === "zh" ? "en" : "zh");
  };
  return (
    <>
      <div>语言是:{t("lang")},home</div>
      <button onClick={() => toggleLang()}>切换语言</button>
    </>
  );
};

export default connect((state: any) => state.global, {
  setLang,
})(Home);
