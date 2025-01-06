import { useEffect, useState } from "react";
import Footer from "../components/Layouts/Footer/footer"
import Header from "../components/Layouts/Header/header"
import Proptypes from "prop-types"
import Search from "../components/SubWindow/SearchWindow/search";
import News from "../components/SubWindow/NewsWindow/news";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isNewsShow, setIsNewsShow] = useState(false);

  useEffect(()=> {
    const newsStatus = localStorage.getItem("news") ? JSON.parse(localStorage.getItem("news")) : localStorage.setItem("news", JSON.stringify(true));

    setTimeout(()=> {
      setIsNewsShow(newsStatus);
    },2000);
  }, []);

  return (
    <div className="main-layout">
      <News isNewsShow={isNewsShow} setIsNewsShow={setIsNewsShow}></News>
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}></Search>
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};