const request = require("supertest");
const should = require("should");
// let app = require("../server").app;
const app = require("../server")
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0htVFY2ZnJZWkt4REgvTHZDbjk3dUNnOHJTRjhncXZmTkJsanBlSVhUQTloNnptLjUwT0siLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oifSwiaWF0IjoxNTc5MzM2ODUyfQ.WjK8QlYO4FDoxY7HEWWNH4ry2k_n9AKHTRa94dFsVsA'
const bodyParser = require('body-parser');
app.use(bodyParser.json());

jest.mock('../models/order', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('Order',  {
      id: 1,
      date: "2019-01-01 13:30:31",
      amount: 10011,
      customer_id: 1,
      state: '',
      createdAt: "2019-01-01 13:30:31"
    })
  });

  describe('Test order endpoints', () => {

    it("get /api/orders/all status 200 with token", async (done) => {  
      const res = await request(app)
        .get("/api/order/all")
        .set('Authorization', jwt)
          expect(res.statusCode).toEqual(200)
          done();
    });
  
    it("get /api/orders/all status 401 without token", async (done) => {  
      const res = await request(app)
        .get("/api/order/all")
          expect(res.statusCode).toEqual(401)
          done();
    });

    it("add /api/order ", (done) => {
        request(app)
        .post("/api/order")
        .send({'amount' : 100, 'customer' : 99})
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        // .expect(res.body.customer_id).toEqual(1)
        .end(function(err, res) {
          (res.body.customer_id).should.equal(1);
          (res.body.amount).should.equal(100);
          if (err) {
            throw (err)
          }
          done();
        })

      })    
    
})