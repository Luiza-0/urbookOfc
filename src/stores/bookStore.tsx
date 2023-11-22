import { create } from 'zustand'

type Book = {
    id: string,
    volumeInfo: {
        [x: string]: any;
        imageLinks: any ;
        title: string;
    }
}

type BookStore = {
    books: Book[];
    readedBooks: Book[];
    setBookList: (books: Book[]) => void;
    setReadBook: (book: Book) => void;
    removeReadedBook: (book: Book) => void;

};

export const useBookStore = create<BookStore>((set) => {
    return {
        books: [],
        readedBooks: [],
        setBookList: (books) => set(() => ({ books: books })),
        setReadBook: (book) => set((state) => ({ readedBooks: [...state.readedBooks, book] })),
        removeReadedBook: (book) => set((state) => ({ readedBooks: state.readedBooks.filter((b) => b.id !== book.id) })),
    }
})
