const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('Tests GET /', async() =>{

    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');

  });

  it('Tests POST /', async() =>{

    const res = await request(app)
      .post('/echo')
      .send('{hello world}')
      .expect(200);
    expect(res.text).toEqual('{hello world}');

  });

  it('Tests GET /red', async() =>{

    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');

  });

  it('Tests GET /green', async() =>{

    const res = await request(app)
      .get('/green');

    expect(res.text).toEqual('<h1>green</h1>');

  });

  it('Tests GET /blue', async() =>{

    const res = await request(app)
      .get('/blue');

    expect(res.text).toEqual('<h1>blue</h1>');

  });

});
