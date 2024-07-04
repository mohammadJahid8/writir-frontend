import React, { useState } from 'react';

const SearchPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handlePrevious} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
              <button
                className={`page-link ${currentPage === page ? 'btn-primary' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={handleNext} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SearchPagination;
