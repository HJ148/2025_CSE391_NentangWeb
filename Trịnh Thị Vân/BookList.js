import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="card shadow p-3">
      <h2 className="text-center">📖 Danh Sách Sách</h2>
      {books.length === 0 ? (
        <p className="text-center text-muted">Không tìm thấy sách nào.</p>
      ) : (
        <ul className="list-group">
          {books.map(book => (
            <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{book.title}</strong> - {book.author} ({book.year})
              </div>
              <div>
                <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(book)}>✏ Sửa</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(book.id)}>🗑 Xóa</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
