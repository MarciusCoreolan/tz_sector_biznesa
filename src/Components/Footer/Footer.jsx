import React from "react";
import {useSelector } from "react-redux";

import Button from "../Button/Button";
import {useLocation, useNavigate} from "react-router-dom"; //те импорты которые делаются из библиотек они выше в приоритете чем остальные, 
import { useCreatePages } from "../../Hooks";              //подключи еслинт и найстрой его он будет тебе подсказывать, также будет плюсом

function Footer() {
  const navigate = useNavigate();
  const local = useLocation().pathname[1];
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

  return ( //везде где пишешь классы оборачиваешь в {} скобки нет смысла если и так и так ты пишешь в кавычках
    <div className={"footer"}> 
      <Button text={"Назад"} onClick={handlePrev} />

      <div className={"pagination_numbers"}>
        {pages.map((page) => (
          <div //это все-таки кнопки и я бы стал использовать button, к диву применять onClick, не по феншую, как по мне
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
