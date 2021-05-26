const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');
const app = express();

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);
  if (!author) return res.status(400).json({ message: 'Author not found' });
  res.status(200).json(author);
})

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);
  if (!book) return res.status(400).json({ message: "Book not found" });
  res.status(200).json(book);
})

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}`));