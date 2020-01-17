// const UserDAO = require('../Dao/UserDAO');
let UserDAO = require('../Dao/UserDAO');

jest.mock('../models/user', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('User',  {
    id: 2,
    login: 'xyz@abc.com',
    password: 'good',
    createdAt: "2019-01-01 13:30:31",
  })
});

describe("Test Sequelize Mocking", () => {  
  it("Should get value from mock", async () => {
    const user = await UserDAO.getAllUser();
    // expect(typeof(user)).toEqual('object');
    expect(typeof(user)).toEqual('object');
  })
})