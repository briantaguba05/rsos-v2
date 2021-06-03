const router = require("express").Router();

let rsosmod = require("../models/rsos.model");

router.route("/").get((req, res) => {
  rsosmod
    .find()
    .then((mod1) => res.json(mod1))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;

  const newModDeclaration = new rsosmod({ fullname, email, phonenumber });

  newModDeclaration
    .save()
    .then((rsosmod) => res.json("New Record Added!"))
    .catch((err) => res.status(400).json("Error :" + err));
});

// details
router.route("/:id").get((req, res) => {
  rsosmod
    .findById(req.params.id)
    .then((rsosmod) => res.json(rsosmod))
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete
router.route("/:id").delete((req, res) => {
  rsosmod
    .findByIdAndDelete(req.params.id)
    .then((rsosmod) => res.json("Record was deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update

router.route("/update/:id").post((req, res) => {
  rsosmod
    .findById(req.params.id)
    .then((mod1) => {
      mod1.fullname = req.body.fullname;
      mod1.email = req.body.email;
      mod1.phonenumber = req.body.phonenumber;

      mod1
        .save()
        .then(() => res.json("Record was updated!"))
        .catch((err) => res.status(400).json("Error :" + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
