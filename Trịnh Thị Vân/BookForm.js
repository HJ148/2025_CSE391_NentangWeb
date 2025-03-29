import React, { useState, useEffect } from 'react';

function BookForm({ onAdd, onUpdate, editingBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  // Load dữ liệu khi chỉnh sửa
  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
    } else {
      setTitle('');
      setAuthor('');
      setYear('');
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !year) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    const newBook = { id: editingBook ? editingBook.id : Date.now(), title, author, year };
    
    if (editingBook) {
      onUpdate(newBook);
    } else {
      onAdd(newBook);
    }

    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div className="card shadow p-3 mb-3">
      <h2 className="text-center">{editingBook ? '✏ Sửa Sách' : '📕 Thêm Sách'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input type="text" className="form-control" placeholder="Tiêu đề sách" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-2">
          <input type="text" className="form-control" placeholder="Tác giả" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="mb-2">
          <input type="number" className="form-control" placeholder="Năm xuất bản" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        <button type="submit" className={`btn ${editingBook ? 'btn-warning' : 'btn-primary'} w-100`}>
          {editingBook ? 'Cập Nhật' : 'Thêm'}
        </button>
      </form>
    </div>
  );
}

export default BookForm;
