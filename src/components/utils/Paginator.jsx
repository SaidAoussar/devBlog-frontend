// i worked with pagination of antD . but this pagination is my implementaion before antD
import { Pagination } from "react-bootstrap";

const Paginator = ({ currentPage, totalPage, handlePagination }) => {
  let pgItems = [];

  //first button page
  if (currentPage - 4 >= 1) {
    pgItems.push(
      <Pagination.Item onClick={() => handlePagination(1)}>{1}</Pagination.Item>
    );
  }

  if (currentPage - 4 > 1) {
    pgItems.push(<Pagination.Ellipsis />);
  }

  //button left side
  for (let i = 3; i >= 1; i--) {
    if (currentPage - i >= 1) {
      pgItems.push(
        <Pagination.Item onClick={() => handlePagination(currentPage - i)}>
          {currentPage - i}
        </Pagination.Item>
      );
    }
  }
  // curent page
  pgItems.push(
    <Pagination.Item active onClick={() => handlePagination(currentPage)}>
      {currentPage}
    </Pagination.Item>
  );
  // button right side
  for (let i = 1; i <= 3; i++) {
    if (currentPage + i <= totalPage) {
      pgItems.push(
        <Pagination.Item onClick={() => handlePagination(currentPage + i)}>
          {currentPage + i}
        </Pagination.Item>
      );
    }
  }

  //button Ellipsis
  if (currentPage + 3 < totalPage - 1) {
    pgItems.push(<Pagination.Ellipsis />);
  }

  // button of last page
  if (currentPage + 3 <= totalPage - 1) {
    pgItems.push(
      <Pagination.Item onClick={() => handlePagination(totalPage)}>
        {totalPage}
      </Pagination.Item>
    );
  }

  return <Pagination>{pgItems}</Pagination>;
};

export default Paginator;
