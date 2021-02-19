/*
 * Import Module
 ****************/
const Article = require('../database/Article')

/*
 * Controller
 *************/
module.exports = {

    // Get Article

    get: (req, res) => {
        Article
            .find()
            .exec((err, data) => {
                if (err) console.log(err);
                res.json(data)
                    // res.render('coka', {
                    //     dbArticle: data
                    // })
            })
    },

    // Create Article

    create: (req, res) => {
        console.log(req.body)
        Article
            .create({...req.body }, (err, data) => {
                if (err) console.log(err);
                res.json(data)
            })
    },

    // Get ID Article

    getId: async(req, res) => {
        Article
            .findById(req.params.id)
            .exec((err, data) => {
                if (err) console.log(err);
                res.json(data)
            })
    },

    // Get by "title"  Article

    getTitle: async(req, res) => {
        Article
            .find({
                title: req.params.title
            })
            .exec((err, data) => {
                if (err) console.log(err);
                res.json(data)
            })
    },

    // Edit article

    editOne: async(req, res) => {
        Article
            .findByIdAndUpdate(req.params.id, {
                title: req.body.title
            })
            .exec(async(err, data) => {
                if (err) console.log(err);
                res.json(data)
            })
    },

    // put: (req, res) => {
    //     Article
    //         .findByIdAndUpdate(req.params.id, { title: req.body.title },
    //             (err, data) => {
    //                 if (err) console.log(err);

    //                 res.json(data)
    //             })
    // },


    // Delete article

    deleteOne: async(req, res) => {
        Article
            .findByIdAndRemove(req.params.id)
            .exec(async(err, data) => {
                if (err) console.log(err);

                res.json(data)
            })

    }

}