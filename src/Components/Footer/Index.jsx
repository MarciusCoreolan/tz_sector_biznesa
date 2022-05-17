import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useCreatePages } from '../../Hooks/useCreatePages';
import { selectPosts } from '../../Redux/rootReducer';

import Button from '../Ui/Button/Button';

function Footer() {
  const navigate = useNavigate();
  const local = useLocation().pathname.substr(1);
  const posts = useSelector(selectPosts).length;

  const pages = [];
  useCreatePages(pages, posts, +local);

  const handleSelect = (currentPage) => {
    navigate(`/${+currentPage}`);
  };

  const handleNext = () => {
    if (local < posts) {
      navigate(`/${+local + 1}`);
    }
  };
  const handlePrev = () => {
    if (local > 1) {
      navigate(`/${+local - 1}`);
    }
  };

  return (
    <div className="footer">
      <Button text={'Назад'} onClick={handlePrev} />

      <div className="pagination_numbers">
        {pages.map((page) => (
          <Button
            text={page}
            onClick={handleSelect}
            key={page}
            className={`page_button_styles ${page === +local && 'active_page'}`}
          />
        ))}
      </div>

      <Button text={'Далее'} onClick={handleNext} />
    </div>
  );
}

export default Footer;
