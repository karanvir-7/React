import React from "react";

const Pagination: React.FC<{
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: Function;
  getProducts: Function;
}> = ({ totalItems, itemsPerPage, currentPage, setCurrentPage,getProducts }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
       handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page:number) => {
    setCurrentPage(page);
    getProducts(itemsPerPage, page);
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-4 p-8">
      <button
        className={`px-4 py-2 rounded ${
          currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded ${
            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-4 py-2 rounded ${
          currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
