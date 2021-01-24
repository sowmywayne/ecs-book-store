import React, { useState } from "react";
import { Row, Col } from "reactstrap";

import Book from "../Components/Book";
import Pagination from "../Components/Pagination";
import Cart from "../Components/Cart";
import CartLog from "../Components/CartLog";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    if (
      currentPage + pageNumber > 0 &&
      (currentPage + pageNumber) * 10 <= booksDetails.length
    ) {
      setCurrentPage(currentPage + pageNumber);
    }
  };

  const booksDetails = JSON.parse(sessionStorage.getItem("booksDetails"));
  return (
    <div>
      <Row>
        <Col className="col-3">
          <Cart />
        </Col>
        <Col>
          <p style={{
            marginBottom: "3rem", 
            fontSize: "3rem", 
            color: "blue",
          }}>
            Books Store
          </p>
          {booksDetails !== null ? (
            <Book
              booksDetails={booksDetails.slice(
                10 * currentPage - 10,
                currentPage * 10
              )}
            />
          ) : (
            <div></div>
          )}

          {booksDetails !== null ? (
            <Pagination
              currentPage={currentPage}
              size={booksDetails.length}
              paginate={paginate}
            />
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Home;
