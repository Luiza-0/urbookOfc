import axios from "axios";

export const getBookList = async ({ query }: { query: string }) => {
  console.log("🚀 ~ file: book.ts:5 ~ getBookList ~ params:", query);
  try {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      { params: { q: query } }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros populares:", error);
  }
};
