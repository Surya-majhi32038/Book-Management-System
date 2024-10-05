import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     books:[
//         {
//             // provied all details of the book 
//             id:1,
//             title:"x",
//             author:"author x",
//             price:"299 Rs",
//             quantity:12
//         },
//         {
//             // provied all details of the book 
//             id:2,
//             title:"y",
//             author:"author y",
//             price:"399 Rs",
//             quantity:15
//         },
//     ] // empty list or array 
// }

const loadFromLocalStorage = () => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
}

const initialState = {
    books: loadFromLocalStorage() // load books from localStorage if available 
}


const bookSlice = createSlice(
    {
        name:'books',
        initialState:initialState,
        reducers:{
            deleteBook:(state,action) =>{
                const id = action.payload;
                state.books = state.books.filter((book) => book.id != id);
                localStorage.setItem('books',JSON.stringify(state.books));
            },
            addBook:(state,action) => {
                state.books.push(action.payload);
                localStorage.setItem('books',JSON.stringify(state.books));
            },
            updateBook:(state,action)=>{
                // recive all the data through action parameter 
                console.log(typeof(action.payload))
               const {id,title,author,price,quantity} = action.payload;
               const existingBook = state.books.find(
                (book) => book.id === id
               );
               if(existingBook){
                existingBook.title = title;
                existingBook.author = author;
                existingBook.price = price;
                existingBook.quantity = quantity;
                localStorage.setItem('books',JSON.stringify(state.books));
               }
               
            },

        },
    }
);
export const { deleteBook,addBook,updateBook } = bookSlice.actions;
export default bookSlice.reducer;