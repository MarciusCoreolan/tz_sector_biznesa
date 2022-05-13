import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { getPosts } from "../Redux/actions";

import Header from "./Header/Header";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";

function App(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getPosts(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div>
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
