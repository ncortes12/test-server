const router = require("express").Router();
const controller = require("../../controllers");


router.route("/users")
  .post(controller.UserController.create);

router.route("/users/login")
  .post(controller.UserController.findOne)

router.route("/users/logout")
  .post(controller.UserController.logout)

router.route("/brewers")
  .get(controller.BrewerController.findAll)
  .post(controller.BrewerController.create);

router.route("/brewers/find/:id")
  .get(controller.BrewerController.findById)
  .delete(controller.BrewerController.delete);

router.route("/brewers/login")
  .post(controller.BrewerController.findOne)

router.route("/brewers/logout")
  .post(controller.BrewerController.logout)


module.exports = router;
