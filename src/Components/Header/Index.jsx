import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searching } from '../../Redux/actions';
import { selectSearch } from '../../Redux/rootReducer';

import Input from '../Ui/Input/Index';

function Header() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearching = (text) => {
    dispatch(searching(text));
  };

  return (
    <div>
      <Input placeholder="Поиск" value={search} onChange={handleSearching} />
    </div>
  );
}

export default Header;
