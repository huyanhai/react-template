import { useEffect } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import { asyncSet } from "@/store/modules/global/action";
import RouteTable from "./router";

const App = (props: any) => {
  const { i18n } = useTranslation();
  const { lang, asyncSet } = props;

  useEffect(() => {
    console.log("lang chang", lang);

    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      {lang}
      <button onClick={() => asyncSet()}>异步设置语言</button>
      <RouteTable />
    </>
  );
};

export default connect((state: any) => state.global, {
  asyncSet,
})(App);
