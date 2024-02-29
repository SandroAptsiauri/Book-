import React from "react";
import "./book.css";

export default function Book({
  bookTitle,
  bookImg,
  description,
  plot,
  action,
}) {
  return (
    <div className="book">
      <h1>Title:{bookTitle}</h1>
      <img src={bookImg} alt={bookTitle} />
      <h3>Description:{description}</h3>
      <p>Plot:{plot}</p>
      <button onClick={() => action(bookTitle, plot)}>Click me</button>
    </div>
  );
}
