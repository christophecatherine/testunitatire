/*
 * Import Module
 ****************/
const Article = require('../database/Article')

/*
 * Controller
 *************/
module.exports = {
    // Method Get
    get: async (req, res) => {
        // Variable de récupération de tout les Articles
        const dbArticle = await Article.find({})
        // Petit log pour checker
        // console.log(dbArticle);
        // Et on renvoit la page article avec notre objet de tout nos article pour agrémenté la liste
        res.render('article', {
            dbArticle: dbArticle
        })

    },
    // Method Post
    post: async (req, res) => {

        // Condition pour verifier si aucun fichier est envoyer dans le formulaire
        if (!req.file) res.redirect('/')
        // Si Le fichier est bien présent alors on execute ça
        else {
          // On récupère le modele (constructor) de mongoose
          Article.create({
            // On stock toute les infos de notre req.body
            ...req.body,
            // Ici on viens formater le chemin de notre image qui sera stocker dans notre DB
            imgArticle: `/assets/images/${req.file.originalname}`,
            // On stock aussi le nom de l'image
            name: req.file.originalname
          // Le callback d'error
          }, (err, post) => {
            if (err) console.log(err)
            res.redirect('/article')
          })
        }
    
      },
    // Method Delete One
    deleteOne: (req, res) => {
        // Fonction de suppression de un Articles rechercher par son _id
        Article.deleteOne({
            // On va venir chercher parmis tout les _id celui égale à notre req.params (id recupéré dans l'URL)
            _id: req.params.id
            // ici nous avons un callback err
        }, (err) => {
            // Si nous avons pas d'erreur alors on redirige
            if (!err) return res.redirect('/article')
            // Sinon on renvoit l'err
            else res.send(err)
        })
    },
    // Method Delete All
    deleteAll: (req, res) => {
        // Fonction de suppression de tout les Articles
        Article.deleteMany((err) => {
            if (!err) return res.redirect('/article')
            else res.send(err)
        })
    }
}