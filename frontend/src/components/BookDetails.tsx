import { FC } from 'react';
import { Book as BookModel } from '../models/library';

interface BookProps {
  book: BookModel;
}

const BookDetails: FC<BookProps> = ({ book }) => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
      <p className="text-xl mb-2">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-xl mb-2">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="text-xl mb-2">
        <strong>Published Date:</strong> {book.published_date}
      </p>
      <p className="text-lg mb-4">
        <strong>Description:</strong> {book.description}
      </p>
    </>
  );
};

export default BookDetails;
