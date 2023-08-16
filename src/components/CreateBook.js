import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './createbook.css';

// http://localhost:5000/

function CreateBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('book added success')

        setTitle('');
        setAuthor('');
        setDescription('');


        const newBook = {
            title: title,
            author: author,
            description: description,
        };

        try {
            const response = await axios.post('https://finalexambackend300351928-lmds.onrender.com/', newBook);

            if (response.status === 201) {
                console.log('Book added successfully');

            } else {
                console.error('Error adding book');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="CreateBook">
            
            <div className='sho'>
                <Link to="/" >
                    Show Book List
                </Link>

            </div>
            <h1>Add Book</h1>
            <h2>CreateBook</h2>
            <br></br>
            <br></br>


            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <br></br>
                    <button type="submit" style={{
                        fontSize: '20px'
                    }} >Submit</button>

                </form>
            </div>


        </div>
    )
}

export default CreateBook;
