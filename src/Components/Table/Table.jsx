import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import BootstrapTable from "react-bootstrap-table-next";

function Table(props) {
  const posts = useSelector((state) => state.posts);
  const preloader = useSelector((state) => state.postsPreload);
  const error = useSelector((state) => state.error);

  const columns = [
    {
      dataField: "id",
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
      {!error &&
      <div className={"table"}>
        {preloader? (
          <Loading />
        ) : (
          <BootstrapTable keyField="id" data={posts} columns={columns} />
        )}
      </div>}
    </div>
  );
}

export default Table;
