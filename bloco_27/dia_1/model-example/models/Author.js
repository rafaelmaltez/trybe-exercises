const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName
  }
}

const convertFields = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.lastName
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors.map(convertFields).map(getNewAuthor);
}

const getById = async (id) => {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id =?'
  const [authorData] = await connection.execute(query, [id]);
  console.log('authorData', authorData);
  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = convertFields(authorData[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
}

module.exports = {
  getAll,
  getById
}
