import React from "react";
import { Button } from "react-bootstrap";

function Paginado({
  productsPerPage,
  allProducts,
  settingCurrentPage,
  currentPage,
}) {
  const pageNumber = [];

  for (let i = 0; i < Math.ceil(allProducts / productsPerPage); i++) {
    pageNumber.push(i + 1);
  }
  return (
    <nav>
      {pageNumber &&
        pageNumber.map((number, pos) => (
          // <button
          //   key={pos}
          //   className={
          //     currentPage === number
          //       ? "currentPage cursorPointer"
          //       : "page cursorPointer"
          //   }
          //   onClick={() => settingCurrentPage(number)}
          // >
          //   {number}
          // </button>
          <Button
            size="sm"
            key={pos}
            variant={currentPage === number ? "dark" : "outline-dark"}
            onClick={() => settingCurrentPage(number)}
            className="ms-1"
          >
            {number}
          </Button>
        ))}
    </nav>
  );
}

export default Paginado;
