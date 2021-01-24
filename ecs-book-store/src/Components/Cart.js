import React, { useContext } from "react";
import { Row, Col, Container, ListGroup, ListGroupItem } from "reactstrap";
import {
  FaLanguage,
  FaBook,
  FaUser,
  FaMoneyBill,
  FaTrash,
} from "react-icons/fa";

import CartLog from "./CartLog";
import { REMOVE, CHECKOUT } from "../Context/actions.type";

import { SelectedBooksContext } from "../Context/SelectedBooksContext";
import "./styleSheet.css";

const Cart = () => {
  const { selectedBooks, dispatch } = useContext(SelectedBooksContext);
  console.log(selectedBooks);
  const data = JSON.parse(sessionStorage.getItem("booksDetails"));

  const booksDetails =
    data !== null
      ? data.filter((book) => selectedBooks.indexOf(book["bookID"]) !== -1)
      : [];

  const onClickRemoveFromCart = (bookID) => {
    console.log("enter", bookID);
    dispatch({
      type: REMOVE,
      payload: bookID,
    });
  };

  const onClickCheckoutBtn = () => {
    dispatch({
      type: CHECKOUT,
    });
  };

  return (
    <div>
      <CartLog />
      <div className="cartPosition">
        {booksDetails.length !== 0 ? (
          <Container>
            {booksDetails.map((book) => (
              <ListGroup>
                <ListGroupItem>
                  <Row>
                    <Row>
                      <Col className="cartTitle">
                        <FaBook color="brown" />
                        {book["title"]}
                      </Col>
                    </Row>

                    <Col className="cartLang">
                      <FaLanguage className="mr-1" />
                      {book["language_code"]}
                    </Col>
                  </Row>
                  <Row>
                    <Col className="cartAuthor">
                      <FaUser color="blue" />
                      {book["authors"]}
                    </Col>
                    <Row>
                      <Col>
                        <FaMoneyBill color="green" />
                        {book["price"]}
                      </Col>
                    </Row>
                  </Row>
                  <Col>
                    <button
                      className="removeBtn"
                      onClick={() => onClickRemoveFromCart(book["bookID"])}
                    >
                      <FaTrash className="pr-1 mb-1" color="white" />
                      Remove
                    </button>
                  </Col>
                </ListGroupItem>
              </ListGroup>
            ))}
          </Container>
        ) : (
          <div></div>
        )}
      </div>
      {booksDetails.length !== 0 ? (
        <button className="cartCheckOutBtn" onClick={onClickCheckoutBtn}>
          Check out
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
