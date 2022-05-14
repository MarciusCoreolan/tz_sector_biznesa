import React from "react";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { SEARCH_ON_TABLE } from "../../Redux/actions";
import { selectSearch } from "../../Redux/rootReducer";

function Header() {
  const dispatch = useDispatch();
  // const search = useSelector((state) => state.search);
  const search = useSelector(selectSearch); //так писать более выгоднее

  const handleSearching = (text) => { //это как я понимаю тоже экшен-крейтор, и было бы логично его переместить в экшены а тут вызывать с передачей валью
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
