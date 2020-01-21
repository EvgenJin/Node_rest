const request = require("supertest");
const should = require("should");
const app = require("../server")
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0htVFY2ZnJZWkt4REgvTHZDbjk3dUNnOHJTRjhncXZmTkJsanBlSVhUQTloNnptLjUwT0siLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oifSwiaWF0IjoxNTc5MzM2ODUyfQ.WjK8QlYO4FDoxY7HEWWNH4ry2k_n9AKHTRa94dFsVsA'

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

    it("get /api/orders/all status 200 with token", (done) => {  
        request(app)
        .get("/api/order/all")
        .set('Authorization', jwt)
        .expect(200,done)
    });
  
    it("get /api/orders/all status 401 without token", (done) => {  
        request(app)
        .get("/api/order/all")
        .expect(401,done)
    });

    it("get /api/orders/1 status 200 with token", (done) => {
      request(app)
      .get('/api/order/1')
      .set('Authorization', jwt)
      .expect(200,done)
    })

    it("get /api/order/id status 200", (done) => {
      request(app)
      .get('/api/order?customer_id=1')
      .set('Authorization', jwt)
      .end((err,res) => {
        (res.body[0].amount).should.equal(10011);
        if (err) {
          throw (err)
        }        
        done();
      })
    })

    it("add /api/order ", (done) => {
        request(app)
        .post("/api/order")
        .send({'amount' : 100, 'customer_id' : 99})
        .set('Authorization', jwt)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          console.log(res.body);
          (res.body.customer_id).should.equal(99);
          (res.body.amount).should.equal(100);
          if (err) {
            throw (err)
          }
          done();
        })
      })    
    
})