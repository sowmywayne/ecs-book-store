import React from "react"
import {Row, Col} from "reactstrap"
import {FaCaretLeft, FaCaretRight} from "react-icons/fa"


import "./styleSheet.css"

const Pagination = ({currentPage, size, paginate}) => {

  const onClickBtn = (val) => paginate(val)

  return (
    <div className="paginationContainer">
      <Row>
        <Col onClick={() => onClickBtn(-1)} className="col-1 pageBox"> 
        <center>
        <FaCaretLeft />
        </center>
        </Col>
        <Col>
        <center>
        {currentPage * 10} of {size}
        </center>
        </Col>
        <Col onClick={() => onClickBtn(1)} className="col-1 pageBox">
          <center>
          <FaCaretRight/>

          </center>
        </Col>
      </Row>
    </div>
  )
}


export default Pagination
