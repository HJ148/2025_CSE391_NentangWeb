import React, { useState, useEffect } from 'react';

function BookForm({ onAdd, onUpdate, editingBook }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');

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

        if (editingBook) {
            onUpdate({
                ...editingBook,
                title,
                author,
                year: parseInt(year, 10),
            });
        } else {
            const newBook = {
                id: Date.now(),
                title,
                author,
                year: parseInt(year, 10),
            };
            onAdd(newBook);
        }

        setTitle('');
        setAuthor('');
        setYear('');
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                background: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                maxWidth: '400px',
                margin: 'auto',
                textAlign: 'left',
            }}
        >
            <h2 style={{ textAlign: 'center', color: '#333' }}>
                {editingBook ? 'Sửa Sách' : 'Thêm Sách'}
            </h2>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold', display: 'block' }}>Tiêu đề:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        width: 'calc(100% - 20px)',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold', display: 'block' }}>Tác giả:</label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    style={{
                        width: 'calc(100% - 20px)',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ fontWeight: 'bold', display: 'block' }}>Năm XB:</label>
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    style={{
                        width: 'calc(100% - 20px)',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                    }}
                />
            </div>
            <button
                type="submit"
                style={{
                    width: '50%',
                    background: 'rgba(24, 190, 21, 0.63)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    margin: 'auto',
                    display: 'block',
                }}
            >
                {editingBook ? 'Cập nhật' : 'Thêm'}
            </button>
        </form>
    );
}

export default BookForm;
