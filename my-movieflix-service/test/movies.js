
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');


chai.use(chaiHttp);

/*
 * Test the /GET all movies
 */
describe('/GET all movies', () => {
    it('it should GET all the movies', (done) => {
        chai.request("http://localhost:9001")
            .get('/api/movies/all')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(11);
                done();
            });
    });
});


/*
  * Test the /POST 
  */
 describe('/POST fetch movies by title word', () => {
    it('it should not POST without payload', (done) => {
        let movie = {"title":"king"}
          chai.request("http://localhost:9001")
          .post('/api/movies/title')
          .send(movie)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(2);
                done();
          });
    });
   
});

/*
  * Test the /POST 
  */
 describe('/POST fetch movies by genres', () => {
   
    it('it should not POST without payload', (done) => {
        let movie = {"genres" :["action", "horror","drama"] }
          chai.request("http://localhost:9001")
          .post('/api/movies/genres')
          .send(movie)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(8);
                done();
          });
    });
});

/*
 * Test the /GET all movies
 */
describe('/GET all movies', () => {
    it('it should GET all action movies', (done) => {
        chai.request("http://localhost:9001")
            .get('/api/movies/action')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(6);
                done();
            });
    });
});
