// ViewListings.jsx

import React, { useState } from "react";
import "./style/ViewListings.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const ViewListings = () => {
  const dummyBookData = [
    {
      id: 1,
      name: "OL Physics Book IG",
      image:
        "https://atlasbookshop.net/wp-content/uploads/2021/03/OL-Notes-Michel-Samir-2024.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "OL Chemistry Book",
      image:
        "https://atlasbookshop.net/wp-content/uploads/2023/10/Notes-Cover-3.jpg",
      details:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "OL Chemistry Book",
      image:
        "https://atlasbookshop.net/wp-content/uploads/2023/10/Notes-Cover-3.jpg",
      details:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      name: "OL Chemistry Book",
      image:
        "https://atlasbookshop.net/wp-content/uploads/2023/10/Notes-Cover-3.jpg",
      details:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      name: "OL Chemistry Book",
      image:
        "https://atlasbookshop.net/wp-content/uploads/2023/10/Notes-Cover-3.jpg",
      details:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    // Add more books
  ];

  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const booksPerPage = 20;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  // Filter books based on search term
  const filteredBooks = dummyBookData.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const handleShowDetails = (bookId) => {
    console.log(`Show details for book with ID: ${bookId}`);
  };

  const handleAddToCart = (bookId) => {
    console.log(`Add book with ID ${bookId} to cart`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderBooks = currentBooks.map((book) => (
    <div key={book.id} className="book-card">
      <img src={book.image} alt={`Book ${book.id}`} className="book-image" />
      <div className="book-info">
        <h3>{book.name}</h3>
        <p>{book.details.substring(0, 50)}...</p>
        <button
          className="show-details"
          onClick={() => handleShowDetails(book.id)}
        >
          Show Details
        </button>
        <button
          className="add-to-cart"
          onClick={() => handleAddToCart(book.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <div className="ViewListings">
      {/* Sell Your Books button */}
      <Link to="/newListing" className="sell-button">
      Click here to add your book to sell 📚💰
      </Link>
      <h1 className="header">Listed Books</h1>
      {/* Search box */}
      <input
        type="text"
        placeholder="Search by book name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-box"
      />
      <div className="books-container">{renderBooks}</div>
    </div>
  );
};

export default ViewListings;
