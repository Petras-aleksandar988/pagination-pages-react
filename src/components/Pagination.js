import React from 'react'

export default function Pagination({ postPerPage, totalPages, paginate }) {
  // creating an array of pages with 10 posts per  page with for loop. Pushing numbers in pageNumbers variable.
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a href="!#" className="page-link" onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
