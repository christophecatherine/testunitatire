/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router(),
    upload = require('./config/multer')

/*
 * Controller
 *************/
const homeController = require('./controllers/homeController'),

    articleController = require('./controllers/articleController'),

    contactController = require('./controllers/contactController'),

    fevArticleController = require('./controllers/fevArticleController')

/*
 * Router
 ***********/

// Home
router.route('/')
    .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)
    .post(upload.single('imgArticle'), articleController.post)
    .delete(articleController.deleteAll)

// Article ID
router.route('/article/:id')
    .delete(articleController.deleteOne)

// Coka
router.route('/coka')
    .get(fevArticleController.get)
    .post(fevArticleController.create)

router.route('/coka/:id')
    .get(fevArticleController.getId)
    .put(fevArticleController.editOne)
    .delete(fevArticleController.deleteOne)

router.route('/cokaq/:title')
    .get(fevArticleController.getTitle)

// Contact
router.route('/contact')
    .get(contactController.get)


//    
/***********
 * / Router
 */


// on export router pour le récupérer dans ../server.js
module.exports = router;