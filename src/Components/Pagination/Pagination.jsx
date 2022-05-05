import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NEXT_PAGE, PREV_PAGE, SELECT_PAGE } from "../../Redux/actions";

import { useCreatePages } from "../../Hooks/useCreatePages";
import Button from "../Button/Button";

function Pagination(props) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  const totalCount = useSelector((state) => state.totalCount);

  const pages = [];
  useCreatePages(pages, totalCount, currentPage);

  const handleSelect = (page) => {
    dispatch({ type: SELECT_PAGE, page: page });
  };

  const handleNext = () => {
    if (currentPage < totalCount / 10 ) {
      dispatch({type: NEXT_PAGE})
    }
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch({type: PREV_PAGE})
    }
  }

  return (
    <div className={"pagination"}>
      <Button text={'Назад'} onClick={handlePrev}/>

      <div className={'pagination_numbers'}>
        {pages.map((page) => (
            (<div
                onClick={() => handleSelect(page)}
                key={page}
                className={`page_button_styles ${
                    page === +currentPage && "active_page"
                }`}
            >
              {page}
            </div>)
        ))}
      </div>

      <Button text={'Далее'} onClick={handleNext}/>
    </div>
  );
}

export default Pagination;
