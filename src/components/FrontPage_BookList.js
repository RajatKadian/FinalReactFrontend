import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// http://localhost:5000  for the local use this

function Showbook() {


    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch data from your API using axios
        axios.get('https://finalexambackend300351928-lmds.onrender.com/')
            .then(response => {
                setBooks(response.data);
                console.log(response.data[0]._id)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const deleteBook = async (id) => {
        try {
            const response = await axios.delete(`https://finalexambackend300351928-lmds.onrender.com/${id}`);

            if (response.status === 200) {
                console.log('Book deleted successfully');
                // Update the state to remove the deleted book
                setBooks(books.filter(book => book._id !== id));
            } else {
                console.error('Error deleting book');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <div>
            <Link to="/create-book" >
                <h1 style={{ backgroundColor: '#007bff', border: '2px solid black' , maxWidth: '700px', marginLeft: '500px', color: 'white'}}>+ Add A New Book</h1>
            </Link>

            <div className="card-container">
                {books.map(book => (
                    <div key={book.id} className="card">
                        {/* <img src="/book.png" className="book-image" alt="book"></img> */}
                        <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80" className="book-image" alt="book" />

                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <h3>{book.description}</h3>
                        <button type="button" style={{
                            fontSize: '40px', backgroundColor: 'red' , marginLeft: '70%'
                        }} onClick={() => deleteBook(book._id)}>X</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Showbook;