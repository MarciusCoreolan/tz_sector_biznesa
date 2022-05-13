import React from "react";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_ON_TABLE } from "../../Redux/actions";

function Header(props) {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const handleSearching = (text) => {
    dispatch({
      type: SEARCH_ON_TABLE,
      text: text.target.value,
    });
  };

  return (
    <div>
      <Input placeholder={"Поиск"} value={search} onChange={handleSearching} />
    </div>
  );
}

export default Header;
