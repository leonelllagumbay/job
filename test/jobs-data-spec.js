var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require('../models/Job');
var Promise = require("bluebird");

function resetJobs() {
    return new Promise(function(resolve, reject) {
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

describe("gets jobs", function() {
    it("should never be empty since jobs are seeded", function(done) {
        mongoose.connect('mongodb://leonell:leonell@ds031965.mlab.com:31965/jobseeker', function() {
            
            resetJobs()
            .then(jobModel.seedJobs)
            .then(function() {
                mongoose.model('Job').find({}).exec(function(error, jobsList) {
                    expect(jobsList.length).to.be.at.least(1);
                    done();
                });
            })
        })
    });
});