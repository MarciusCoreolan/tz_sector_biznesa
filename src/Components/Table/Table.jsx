import React from "react";
import { useSelector } from "react-redux";
import Status from "../Status/Status";
import BootstrapTable from "react-bootstrap-table-next";

function Table(props) {
  const posts = useSelector((state) => state.posts);
  const preloader = useSelector((state) => state.postsPreload);
  const error = useSelector((state) => state.error);
  const search = useSelector((state) => state.search);

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
