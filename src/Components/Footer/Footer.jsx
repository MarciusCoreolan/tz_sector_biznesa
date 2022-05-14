import React from "react";
import {useSelector } from "react-redux";

import { useCreatePages } from "../../Hooks/useCreatePages";
import Button from "../Button/Button";
import {useLocation, useNavigate} from "react-router-dom";

function Footer(props) {
  const navigate = useNavigate()
  const local = useLocation().pathname[1]
  const posts = useSelector((state) => state.posts.length);

  const pages = [];
  useCreatePages(pages, posts, +local);

  const handleSelect = (currentPage) => {
    navigate(`/${+currentPage}`)
  };

  const handleNext = () => {
    if (local < posts) {
      navigate(`/${+local + 1}`)
    }
  };

  const handlePrev = () => {
    if (local > 1) {
      navigate(`/${+local - 1}`)
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
              page === +local && "active_page"
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
