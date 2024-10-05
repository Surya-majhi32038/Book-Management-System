import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook } from "../features/booksSlice";
import { updateBook } from "../features/booksSlice";

// 48:58
function BookForm({ bookToEdit, onCancelEdit }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handleBook = (e) => {
    const { name, value } = e.target;
    setBook((preBook) => ({
      ...preBook,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    console.log(event.preventDefault());
    event.preventDefault();
    if (bookToEdit) {
      dispatch(updateBook({ ...book, id: bookToEdit.id }));
      // console.log(bookToEdit)
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });

    if (bookToEdit) {
      onCancelEdit();
    }
  };
  function onCancel() {
    onCancelEdit();
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  }
  return (
    <div className="flex  justify-center md:items-center  flex-col mt-6 mx-8">
      <div className="md:w-96 md:border-solid md:border-4 md:border-gray-800 md:p-8 md:rounded-lg">
        <p className="flex justify-center font-bold   text-3xl items-center">
          BookForm
        </p>
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col justify-center gap-5"
        >
          <div className="flex flex-col font-semibold gap-7">
            <div className="flex flex-col gap-2 ">
              <p className="font-bold text-xl pl-4">Title*</p>
              <input
                autoComplete="off"
                className="border-2 caret-pink-600 focus:border-pink-600 focus:outline-none rounded-full p-2 pl-4 border-gray-400"
                type="text"
                placeholder="title of the book"
                name="title"
                maxLength="20"
                pattern="[A-Za-z\s]+"
                required
                value={book.title}
                onChange={handleBook}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="font-bold text-xl  pl-4">Author Name* </p>
              <input
                maxLength="20"
                pattern="[A-Za-z\s]+"
                autoComplete="off"
                className="border-2 rounded-full caret-pink-600 focus:border-pink-600 focus:outline-none p-2 pl-4 border-gray-400"
                type="text"
                placeholder="name of the author "
                name="author"
                required
                value={book.author}
                onChange={handleBook}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <p className="font-bold text-xl pl-4">Book Price* </p>
              <input
                maxLength="8"
                pattern="[0-9]+"
                autoComplete="off"
                className="border-2 caret-pink-600 focus:border-pink-600 focus:outline-none rounded-full p-2 pl-4 border-gray-400"
                type="text"
                placeholder="price of the book"
                name="price"
                required
                value={book.price}
                onChange={handleBook}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <p className="font-bold text-xl pl-4">Quantity*</p>
              <input
                maxLength="8"
                pattern="[0-9]+"
                autoComplete="off"
                className="border-2 caret-pink-600 focus:border-pink-600 focus:outline-none rounded-full p-2 pl-4 border-gray-400"
                type="text"
                placeholder="quantity"
                name="quantity"
                required
                value={book.quantity}
                onChange={handleBook}
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="duration-500 hover:bg-green-300  hover:text-black text-white bg-gray-800 text-xl  w-full p-2 rounded-full font-semibold"
            >
              {bookToEdit ? "Update Book " : "Add Book"}
            </button>
          </div>

          {/* create a cancle button if the bookToEdit exist */}

          {bookToEdit && (
            <button
              type="button"
              onClick={onCancel}
              className="hover:bg-green-300  hover:text-black text-white bg-red-600 text-xl  w-full p-2 rounded-full font-semibold"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
export default BookForm;
