import { Book } from '@/models/library';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  newBook: Book;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleAddBook: () => void;
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  newBook,
  handleChange,
  handleAddBook,
  handleCloseModal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="mt-4">
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                value={newBook.title}
                onChange={handleChange}
                placeholder="Book Title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                name="author"
                type="text"
                value={newBook.author}
                onChange={handleChange}
                placeholder="Author Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="genre"
              >
                Genre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="genre"
                name="genre"
                type="text"
                value={newBook.genre}
                onChange={handleChange}
                placeholder="Genre"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="published_date"
              >
                Published Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="published_date"
                name="published_date"
                type="date"
                value={newBook.published_date}
                onChange={handleChange}
                placeholder="Published Date"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={newBook.description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleAddBook}
              >
                Add Book
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
