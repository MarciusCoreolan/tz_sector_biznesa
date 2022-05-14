import React from "react";
import { useSelector } from "react-redux";
import Status from "../Status"; //если возвращаемый файл из папки у тебя только один и у него название папки тоже самое как и файла, то файл называй index, тогда импорт сократится с import Status from "../Status/Status" на который щас есть
import BootstrapTable from "react-bootstrap-table-next";
import { selectPosts, selectError, selectSearch, selectPostsPreload } from "../../Redux";

function Table() {
  const posts = useSelector(selectPosts);
  const preloader = useSelector(selectPostsPreload);
  const error = useSelector(selectError);
  const search = useSelector(selectSearch); //импорты так делать выгоднее и читабельнее

  const filter = posts.filter((item) => {
    return item.body.toUpperCase().indexOf(search.toUpperCase()) > -1;
  });

  const columns = [
    {
      dataField: "userId",
      text: "Id",
      sort: true,
      classes: "column_id",
    },
    {
      dataField: "title",
      text: "Заголовок",
      sort: true,
    },
    {
      dataField: "body",
      text: "Описание",
      sort: true,
    },
  ];

  return (
    <div className={"main"}>
      {error ? (
        <Status text={error} />
      ) : (
        <div className={"table"}>
          {preloader ? (
            <Status text={"Загрузка..."} />
          ) : (
            <BootstrapTable keyField="id" data={filter} columns={columns} />
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
