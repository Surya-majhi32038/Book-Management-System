import React, { useState } from "react";
import { useSelector } from "react-redux";
import { deleteBook } from "../features/booksSlice";
import { useDispatch } from "react-redux";

const BookList = ({ onHandleUpdate }) => {
  const books = useSelector((state) => state.booksR.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleUpdate = (books) => {
    onHandleUpdate(books);
  };

  return (
    <div className="flex flex-col items-center   mt-16">
      <div className="text-4xl font-bold mb-7  ">List of Books</div>
      <ul className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-2 px-10 ">
        {/* min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-4
        
        gird gird-cols-1  items-center md:grid-cols-5 gap-5*/}
        {books && books.length > 0 ? (
          books.map((book) => {
            return (
              <li
                className="flex flex-col justify-between shadow-lg mb-5 rounded-md p-3 min-w-[250px] bg-slate-300"
                key={book.id}
              >
                {/* flex flex-col justify-between max-w-xs rounded-lg shadow-md bg-gray-200 dark:text-gray-800 p-4 */}

                <div className="flex flex-col gap-4 ">
                  {/* main div  */}
                  <div className=" bg-green-800 rounded-lg  text-white font-bold p-3 mb-3">
                    <div className="m-2  flex justify-center text-center ">
                      <p className=" md:text-4xl  text-3xl ">{book.title} </p>
                    </div>
                    <p className="text-right mt-7"> by {book.author} </p>
                  </div>

                  {/* price section  */}
                  <div className=" text-2xl font-bold bg-white p-[7px] rounded-full mb-3 flex justify-center">
                    ₹{book.price} only
                  </div>

                  {/* Delete and Updata  */}
                  <div className="min-w-full duration-700 text-white grid grid-cols-2 mb-5 gap-3 font-mono  justify-center ">
                    <button
                      className="transition hover:ease-out  hover:text-amber-700 font-bold bg-red-600 hover:bg-slate-200 p-2 rounded-full flex justify-center"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                    <button
                      className=" hover:text-amber-700 font-bold hover:bg-slate-200 p-2 rounded-full flex justify-center bg-green-600"
                      onClick={() => handleUpdate(book)}
                    >
                      Update
                    </button>
                  </div>
                </div>
                {/* quantity section  */}
                <div className="text-right bottom-0">
                  {book.quantity} piece's are available
                </div>
              </li>
            );
          })
        ) : (
          <div className="w-full lg:w-[1400px] lg:mt-10  flex  md:justify-center overflow-hidden">
            <img
              src="src/img/empty_logo.png"
              className="md:w-1/4 w-full max-w-full m-2"
              alt="Empty Sign"
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default BookList;
