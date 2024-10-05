import { useState } from "react";
import BookList from "./component/BookList";
import BookForm from "./component/BookForm";
import Header from "./pages/header";
import Footer from "./pages/footer";

function Body() {
  const [bookToEdit, setBookToEdit] = useState(null);
  const handleUpdate = (books) => {
    setBookToEdit(books);
  };
  const handleCancelEdit = (book) => {
    setBookToEdit(null);
  };
  return (
    <>
      <BookForm onCancelEdit={handleCancelEdit} bookToEdit={bookToEdit} />
      <BookList onHandleUpdate={handleUpdate} />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
import React from "react";

export default App;
