const request = require("supertest");
const should = require("should");
const app = require("../server");
let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJsb2dpbiI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmIkMTAkQ0htVFY2ZnJZWkt4REgvTHZDbjk3dUNnOHJTRjhncXZmTkJsanBlSVhUQTloNnptLjUwT0siLCJyb2xlIjoiYWRtaW4iLCJuYW1lIjpudWxsLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTAyVDIxOjQ5OjI1Ljc5M1oifSwiaWF0IjoxNTc5MzM2ODUyfQ.WjK8QlYO4FDoxY7HEWWNH4ry2k_n9AKHTRa94dFsVsA'
jest.mock('../models/stores', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('Stores', {
        id: 1,
        name:"Луначарского",
        address:"Екатеринбург, ул. Луначарского 134 В",
        chief_name:"Кочегаров Михаил",
        telephone:"343",
        email:"mail.ru"
    })
});

describe('Test stores endpoints', () => {
    it("get /api/stores/all status 200 with token", (done) => {
        request(app)
            .get("/api/stores/all")
            .set('Authorization', jwt)
            .expect(200,done)
    });
});