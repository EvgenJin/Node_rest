const request = require("supertest");
const should = require("should");
const app = require("../server");
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0htVFY2ZnJZWkt4REgvTHZDbjk3dUNnOHJTRjhncXZmTkJsanBlSVhUQTloNnptLjUwT0siLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oifSwiaWF0IjoxNTc5MzM2ODUyfQ.WjK8QlYO4FDoxY7HEWWNH4ry2k_n9AKHTRa94dFsVsA'

jest.mock('../models/customer', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('Customer', {
        id: 1,
        fio: 'Asec Masel Vafel',
        email: 'DataTypes.STRING@mail.ru',
        phone: '99999999999',
        category: '3'
    })
});
describe('Test order endpoints', () => {

    it("get /api/customer/all status 200 with token", (done) => { 
        request(app)
        .get("/api/customer/all")
        .set('Authorization', jwt)
        .expect(200,done)
        // .end(function(err,res) {
        //     console.log(res.body[0].category);
        // //     if (err) { throw (err)}                  
        //     done();
        // })
    });

    it("register", (done) => {
        request(app)
        .post("/api/customer")
        .send({'fio':'Fasd', 'phone':'33333', 'email':'asdad@mail.ru'})
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200,done)
      });

    it("delete", (done) => {
        request(app)
        .delete('/api/customer/1')
        .expect(200,done)
    })   
});