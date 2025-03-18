import React from 'react';

function BookList({ books, onEdit, onDelete }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Danh sách sách</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {books.map(book => (
          <li
            key={book.id}
            style={{
              background: 'white',
              margin: '10px auto',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              maxWidth: '400px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <strong>{book.title}</strong> - {book.author} ({book.year})
            </div>
            <div>
              <button
                onClick={() => onEdit(book)}
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '5px',
                }}
              >
                Sửa
              </button>
              <button
                onClick={() => onDelete(book.id)}
                style={{
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
