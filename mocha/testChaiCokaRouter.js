//Declarer les const 
// DB
const mongoose = require('mongoose');
const Article = require('../api/database/Article')

// Config Chai
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = require('chai').should();
const expect = chai.expect;
const app = require('../server');
const path = require('path')

chai.use(chaiHttp)

describe('CHAI // CONTROLLER //  fevController', () => {

    // beforeEach((done) => {
    //   Article.deleteOne({}, (err) => { 
    //     done();           
    //   });
    // });


    // Test get /fev
    it(' ChaiRouter // Get Article', (done) => {
        chai.request(app)
            //va recuperer la page via le router 
            .get('/coka')
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) return done(err)
                res.should.have.status(200);
                res.should.be.a('object');
                done();
            });
    });



    // Test Post /fev
    it(' ChaiRouter // Post Article', (done) => {
        let body = {
            title: 'test Chai Post'
        }

        chai.request(app)
            .post("/coka")
            .send(body)
            .end((err, res) => {
                if (err) return done(err)
                res.should.have.status(200);
                res.should.be.a('object');
                done();
            });

    });



    // Test Put /fev/:id
    it(' ChaiRouter // Put Article', (done) => {
        let article = new Article({}),
            body = {
                title: 'test Chai Edit 2'
            }

        article.save()

        // console.log('TEST: ', article)

        chai.request(app)
            .put('/coka/' + article._id)
            .send(body)
            .end((err, res) => {
                res.should.be.a('object');
                done();

            });

    });

    // it(' ChaiRouter // Delete Article', (done) => {
    //     // Test route Delete

    it(' ChaiRouter // Delete Article', (done) => {
        let article = new Article({
            title: 'test Chai Delete'
        })
        article.save()

        chai.request(app)
            .delete('/coka/' + article.id)
            .end((err, res) => {
                res.should.be.a('object');
                done();
            });
    });

})