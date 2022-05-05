import React from "react";
import { useSelector } from "react-redux";
import TableCell from "../TableCell/TableCell";
import Loading from "../Loading/Loading";

function Main(props) {
  const posts = useSelector((state) => state.posts);
  const postsPreload = useSelector((state) => state.postsPreload);

  return (
    <div className={"main"}>
      <div className={"table"}>
        {/*/////////////////////////////////////////////////////////// header*/}
        <div className={"table_header"}>
          <div className={"id"}>
            Id <i className="fa fa-chevron-down" aria-hidden="true" />
          </div>
          <div className={"title"}>
            Заголовок <i className="fa fa-chevron-down" aria-hidden="true" />
          </div>
          <div className={"description"}>
            Описание <i className="fa fa-chevron-down" aria-hidden="true" />
          </div>
        </div>
        {/*/////////////////////////////////////////////////////////////// body*/}
        {postsPreload ? (
          <Loading />
        ) : (
          <>
            {posts.map((post) => {
              return (
                <div className={"table_body"} key={post.id}>
                  <div className={"id"}>
                    <TableCell text={post.id} />
                  </div>
                  <div className={"title"}>
                    <TableCell text={post.title} />
                  </div>
                  <div className={"description"}>
                    <TableCell text={post.body} />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Main;
