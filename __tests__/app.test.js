const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('tests red GET route', async() =>{

    const res = await request(app)
      .get('/red');

    expect(res.text).toEqual('<h1>red</h1>');

  });

});
