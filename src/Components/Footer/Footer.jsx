import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NEXT_PAGE, PREV_PAGE, SELECT_PAGE } from "../../Redux/actions";

import { useCreatePages } from "../../Hooks/useCreatePages";
import Button from "../Button/Button";

function Footer(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const posts = useSelector((state) => state.posts.length);

  const pages = [];
  useCreatePages(pages, posts, currentPage);

  const handleSelect = (page) => {
    dispatch({ type: SELECT_PAGE, page: page });
  };

  const handleNext = () => {
    if (currentPage < posts) {
      dispatch({ type: NEXT_PAGE });
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({ type: PREV_PAGE });
    }
  };

  return (
    <div className={"footer"}>
      <Button text={"Назад"} onClick={handlePrev} />

      <div className={"pagination_numbers"}>
        {pages.map((page) => (
          <div
            onClick={() => handleSelect(page)}
            key={page}
            className={`page_button_styles ${
              page === +currentPage && "active_page"
            }`}
          >
            {page}
          </div>
        ))}
      </div>

      <Button text={"Далее"} onClick={handleNext} />
    </div>
  );
}

export default Footer;
