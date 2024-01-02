import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.scss';

// eslint-disable-next-line react/prop-types
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`pagination-item ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </div>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-container">
      <div
        className={`pagination-item pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <ChevronLeftIcon/>
      </div>
      {renderPageNumbers()}
      <div
        className={`pagination-item pagination-next ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <ChevronRightIcon/>
      </div>
    </div>
  );
};

export default Pagination;
