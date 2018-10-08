const router = require("express").Router();
const controller = require("../../controllers");

//finds and posts users
router
  .route("/users")
  .get(controller.UserController.findAll)
  .post(controller.UserController.create);

router
  .route("/users/find/:id")
  .get(controller.UserController.findById)
//finds and posts beers from Brewers Profile  
router
  .route("/beers")
  .get(controller.BeerController.findAll)
  .post(controller.BeerController.create);


router
  .route("/beers/:id")
  .get(controller.BeerController.findAll)
  // .post(controller.BeerController.create);

router
  .route("/brewers")
  .get(controller.BrewerController.findAll)
  .post(controller.BrewerController.create);

router
  .route("/brewers/find/:id")
  .get(controller.BrewerController.findById)
  .delete(controller.BrewerController.delete);

router.route("/brewers/login").post(controller.BrewerController.findOne);

router.route("/brewers/logout").post(controller.BrewerController.logout);

router.route("/users/login").post(controller.UserController.findOne);

router.route("/users/logout").post(controller.UserController.logout);

router
  .route("/users/favbrewery")
  .post(controller.AssociationController.addFavBrewery)
  .get(controller.AssociationController.getFavBrewery);

router
  .route("/users/favbrewery/:id")
  // .post(controller.AssociationController.addFavBrewery)
  .get(controller.AssociationController.getFavBrewery);

router
  .route("/users/favbeer")
  .post(controller.AssociationController.addFavBeer)
  .get(controller.AssociationController.getFavBeer);

router
  .route("/users/favbeer/:id")
  // .post(controller.AssociationController.addFavBeer)
  .get(controller.AssociationController.getFavBeer)
  .delete(controller.AssociationController.deleteFavBeer);


module.exports = router;
