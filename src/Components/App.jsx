import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../Styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { getPosts } from "../Redux/actions";

import Header from "./Header/Header";
import Table from "./Table/Table";
import Footer from "./Footer/Footer";
import {Navigate, Route, Routes, useLocation} from "react-router-dom"; //исправь по приоритету

function App() {
  const dispatch = useDispatch();
  const local = useLocation().pathname[1];

  useEffect(() => {
    dispatch(getPosts(local));
  }, [dispatch, local]);

  return (
    <div>
      <Header />
        <Routes>
            <Route path={`/${local}`} element={<Table />}/>
            <Route path={"*"} element={<Navigate to={"/1"} replace />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
