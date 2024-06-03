import Link from 'next/link';
import { Book as BookModel } from '../models/library';

interface BookProps {
  book: BookModel;
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <li key={book.id} className="card bg-base-100 shadow-md p-4">
      <Link href={`/books/${book.id}`}>
        <p className="text-xl font-semibold">{book.title}</p>
      </Link>
      <span> by {book.author}</span>
    </li>
  );
};

export default Book;
