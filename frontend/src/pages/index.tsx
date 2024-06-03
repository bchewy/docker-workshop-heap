import { Book as BookType } from '../models/library';
import Book from '@/components/BookSummary';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useEffect, useState } from 'react';
import { createBook, readBooks } from '@/services/library';

const BookList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    id: 0,
    title: '',
    author: '',
    genre: '',
    published_date: '',
    description: '',
  });
  const [books, setBooks] = useState<BookType[]>([]);

  const handleAddBookClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleAddBook = async () => {
    const { id } = await createBook(newBook);
    const temp = { ...newBook, id };
    setBooks((prevBooks) => [...prevBooks, temp]);
    handleCloseModal();
  };

  useEffect(() => {
    const retrieveBooks = async () => {
      const books = await readBooks();
      setBooks(books);
    };
    retrieveBooks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Book List</h1>
        <Button
          color="primary"
          onClick={handleAddBookClick}
          title="Add New Book"
        />
      </div>
      <ul className="space-y-4">
        {books.map((book: BookType) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        title="Add New Book"
        onClose={handleCloseModal}
        newBook={newBook}
        handleChange={handleChange}
        handleAddBook={handleAddBook}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default BookList;
