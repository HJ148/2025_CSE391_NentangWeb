import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Header from './components/Header';

function App() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) setBooks(JSON.parse(storedBooks));
  }, []);


  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (updatedBook) => {
    const updatedList = books.map(book => book.id === updatedBook.id ? updatedBook : book);
    setBooks(updatedList);
    setEditingBook(null);
  };


  const handleDeleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Header />
      {}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="🔍 Tìm kiếm sách..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookForm onAdd={handleAddBook} onUpdate={handleUpdateBook} editingBook={editingBook} />
      <BookList books={filteredBooks} onEdit={setEditingBook} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;
