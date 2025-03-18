import React, { useState } from 'react';
//import './App.css';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  // Dữ liệu mẫu ban đầu
  const [books, setBooks] = useState([
    { id: 1, title: 'React Cơ Bản', author: 'Nguyễn Văn A', year: 2023 },
    { id: 2, title: 'JavaScript Nâng Cao', author: 'Trần Thị B', year: 2022 },
  ]);
  const [editingBook, setEditingBook] = useState(null);

// Hàm thêm sách
const handleAddBook = (newBook) => {
  setBooks([...books, newBook]);
};

// Hàm cập nhật
const handleUpdateBook = (updatedBook) => {
  const newList = books.map(b =>
    b.id === updatedBook.id ? updatedBook : b
  );
  setBooks(newList);
  setEditingBook(null); // Thoát chế độ sửa
};

  // Khi bấm nút "Sửa" trong BookList
  const handleEditClick = (book) => {
    setEditingBook(book);
};

const handleDeleteBook = (id) => {
  const newList = books.filter(b => b.id !== id);
  setBooks(newList);
};

return (
  <div style={{ margin: '20px' }}>
    <h1>Quản Lý Sách</h1>
    <BookForm 
      onAdd={handleAddBook}
      onUpdate={handleUpdateBook}
      editingBook={editingBook}
    />
    {/* Truyền books xuống BookList qua props */}
    <BookList 
      books={books}
      onEdit={handleEditClick}
      onDelete={handleDeleteBook}
    />
  </div>
);
}

export default App;
