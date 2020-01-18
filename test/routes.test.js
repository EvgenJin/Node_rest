const request = require("supertest");
let should = require("should");
let app = require("../server").app;
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0htVFY2ZnJZWkt4REgvTHZDbjk3dUNnOHJTRjhncXZmTkJsanBlSVhUQTloNnptLjUwT0siLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oifSwiaWF0IjoxNTc5MzM2ODUyfQ.WjK8QlYO4FDoxY7HEWWNH4ry2k_n9AKHTRa94dFsVsA'

jest.mock('../models/user', () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  return dbMock.define('User',  {
    id: 2,
    login: 'admin',
    password: '$2b$10$CHmTV6frYZKxDH/LvCn97uCg8rSF8gqvfNBljpeIXTA9h6zm.50OK',
    createdAt: "2019-01-01 13:30:31",
  })
});

describe('Test user endpoints', () => {

  it("get /api/user/all status 200 with token", async (done) => {  
    const res = await request(app)
      .get("/api/user/all")
      .set('Authorization', jwt)
        expect(res.statusCode).toEqual(200)
        done();
  });

  it("get /api/user/all status 401 without token", async (done) => {  
    const res = await request(app)
      .get("/api/user/all")
        expect(res.statusCode).toEqual(401)
        done();
  });

  it("post /api/user/login with returning jwt", (done) => {
    request(app)
      .post("/api/user/login")
      .send({"login":"admin", "password":"admin" })
      .expect(200)
      .end(function(err, res) {
        (res.text.length).should.above(300);
        if (err) {
          throw (err)
        }
        done();
      })
  });

  it("get /api/user/logout", async (done) => {
    const res = await request(app)
    .get('/api/user/logout')
      expect(res.text).toEqual("logout")
      done();
  })

})

