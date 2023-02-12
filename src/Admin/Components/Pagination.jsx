import React from "react";

const Pagination = ({
  limit,
  total,
  paginate,
  previous,
  next,
  preNo,
  nextNo,
}) => {
  const pageNo = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    pageNo.push(i);
  }
  return (
    <>
      <ul className="pagination pt-4 justify-content-center">
        {preNo > 1 ? (
          <li className="page-item">
            <button onClick={() => previous()} className="page-link">
              &laquo;
            </button>
          </li>
        ) : null}
        {pageNo.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                data-page
                className="page-link"
              >
                {number}
              </button>
            </li>
          );
        })}
        {nextNo < Math.ceil(total / limit) ? (
          <li className="page-item">
            <button onClick={() => next()} className="page-link">
              &raquo;
            </button>
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default Pagination;
