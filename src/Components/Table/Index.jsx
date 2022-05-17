import React from 'react';
import { useSelector } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';

import { selectError, selectPosts, selectPostsPreload, selectSearch } from '../../Redux/rootReducer';
import Status from '../Ui/Status/index';

function Table() {
  const posts = useSelector(selectPosts);
  const preloader = useSelector(selectPostsPreload);
  const error = useSelector(selectError);
  const search = useSelector(selectSearch);

  const filter = posts.filter((item) => {
    return item.body.toUpperCase().indexOf(search.toUpperCase()) > -1;
  });

  const columns = [
    {
      dataField: 'userId',
      text: 'Id',
      sort: true,
      classes: 'column_id',
    },
    {
      dataField: 'title',
      text: 'Заголовок',
      sort: true,
    },
    {
      dataField: 'body',
      text: 'Описание',
      sort: true,
    },
  ];

  return (
    <div className="main">
      {error ? (
        <Status text={error} />
      ) : (
        <div className="table">
          {preloader ? (
            <Status text={'Загрузка...'} />
          ) : (
            <BootstrapTable keyField="id" data={filter} columns={columns} />
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
