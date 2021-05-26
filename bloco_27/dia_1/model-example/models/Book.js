const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title FROM model_example.books'
  )
  return books;
}

const getById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT title FROM model_example.books WHERE id =?',
    [id]
  );
  if (bookData.length === 0) return null;
  return bookData;
};

module.exports = {
  getAll,
  getById
}