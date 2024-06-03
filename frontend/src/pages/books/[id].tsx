import { useRouter } from 'next/router';
import Link from 'next/link';
import BookDetails from '@/components/BookDetails';
import Button from '@/components/Button';
import { Book } from '@/models/library';
import { useEffect, useState } from 'react';
import { readBook } from '@/services/library';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const retrieveBook = async () => {
      if (typeof id === 'string') {
        const resp = await readBook(parseInt(id));
        setBook(resp);
      }
    };
    if (id) {
      retrieveBook();
    }
  }, [id]);

  if (!id || Array.isArray(id)) {
    return <h2 className="text-center text-2xl">Invalid book ID</h2>;
  }

  if (!book) {
    return <h2 className="text-center text-2xl">Book not found</h2>;
  }

  const editBook = () => {
    alert('Edit book');
  };

  const deleteBook = () => {
    alert('Delete book');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-md p-4">
        <Link href="/">
          <p className="text-blue-500 hover:text-blue-700 flex items-center mb-2 text-lg">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back to Book List
          </p>
        </Link>
        <BookDetails book={book} />
        <div className="flex flex-row gap-2">
          <Button color="warning" title="Edit" onClick={editBook} />
          <Button color="error" title="Delete" onClick={deleteBook} />
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
