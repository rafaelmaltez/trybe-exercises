const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MovieModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example movie',
    directedBy: 'Jane Doe',
    releaseYear: 1999.,
  }

  before(async () => {
    const DBserver = new MongoMemoryServer();
    const URLMock = await DBserver.getUri();
    const connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(() => {
    MongoClient.connect.restore;
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o id do novo filme inserido', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});