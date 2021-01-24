import React, { useContext } from "react";
import StartRatings from "react-star-ratings";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FaUserAlt, FaArrowUp, FaCartPlus } from "react-icons/fa";

import { SelectedBooksContext } from "../Context/SelectedBooksContext";

import Rectangle1 from "../Assets/Rectangle -1.png";
import Rectangle2 from "../Assets/Rectangle -2.png";
import Rectangle3 from "../Assets/Rectangle -3.png";
import Rectangle4 from "../Assets/Rectangle -4.png";
import Rectangle5 from "../Assets/Rectangle -5.png";

import "./styleSheet.css";
import { ADD } from "../Context/actions.type";

const Book = ({ booksDetails }) => {
  
  const { dispatch } = useContext(SelectedBooksContext);
  const CoverImages = [
    Rectangle1,
    Rectangle2,
    Rectangle3,
    Rectangle4,
    Rectangle5,
  ];

  const onClickAddToCartBtn = (bookId ) => {
    dispatch({
      type: ADD,
      payload: bookId
    })
  };

  return (
    <div>
      {
        booksDetails.map(bookDetails => 
          {
          var  randomNum = Math.floor(Math.random() * 5);
          return <ListGroup className="listRm">
          <ListGroupItem>
            <Row>
              <Col className="col-3">
                <div className="coverImgCon">
                  <img className="coverImg" src={CoverImages[randomNum]} />
                  <div className="coverTitle">{bookDetails["title"]}</div>
                  <div className="coverAuthorName">-{bookDetails["authors"]}</div>
                </div>
              </Col>
  
              <Col>
                <div className="titleText">{bookDetails["title"]}</div>
  
                <Row>
                  <Col className="authorText">
                    <FaUserAlt className="mr-3" color="#EF5354" />
                    {bookDetails["authors"]}
                    <Row>
                      <Col className="col-2 ml-2 mt-1 colPaddingRm">
                        <StartRatings
                          rating={bookDetails["average_rating"]}
                          starRatedColor="#E07C24"
                          numberOfStars={5}
                          starDimension="18px"
                          starSpacing="2px"
                          name="rating"
                        />
                      </Col>
                      <Col className="colPaddingRm ratingCountText">
                        <FaArrowUp className="mt-0 mr-1" />
                        {bookDetails["ratings_count"]}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col className="priceText">₹{bookDetails["price"]}</Col>
                </Row>
  
                <Row>
                  <Col>
                    <button
                      className="addToCartBtn"
                      onClick={() => onClickAddToCartBtn(bookDetails["bookID"])}
                    >
                      Add to Cart <FaCartPlus />{" "}
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
          }
        )
      }
 
    </div>
  );
};

export default Book;
