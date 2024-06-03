import { Book } from '../models/library';
import http from '../utils/axios';

// Create a new book
export async function createBook(book: Book) {
  try {
    const response = await http.post(`/books`, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}

// Get a list of books
export async function readBooks(skip = 0, limit = 10) {
  try {
    const response = await http.get(`/books/`, {
      params: { skip, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error reading books:', error);
    throw error;
  }
}

// Get a single book by ID
export async function readBook(bookId: number) {
  try {
    const response = await http.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error reading book with ID ${bookId}:`, error);
    throw error;
  }
}

// Update a book by ID
export async function updateBook(bookId: number, book: Book) {
  try {
    const response = await http.put(`/books/${bookId}`, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating book with ID ${bookId}:`, error);
    throw error;
  }
}

// Delete a book by ID
export async function deleteBook(bookId: number) {
  try {
    const response = await http.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting book with ID ${bookId}:`, error);
    throw error;
  }
}
