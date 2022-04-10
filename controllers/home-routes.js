const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pet, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Pet.findAll({
    attributes: [
      "id",
      "pet_name",
      "bio",
      "species",
      "breed",
      "size",
      "age",
      "pic_filename",
      [sequelize.literal('(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)'), 'fave_count'],
      "created_at"
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPetData) => {
      const pets = dbPetData.map((pet) => pet.get({ plain: true }));

      res.render("homepage", {
        user: req.session.username,
        pets,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/pet/:id", (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "pet_name",
      "bio",
      "species",
      "breed",
      "size",
      "age",
      "pic_filename",
      [sequelize.literal('(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)'), 'fave_count'],
      "created_at",
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'pet_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPetData) => {
      if (!dbPetData) {
        res.status(404).json({ message: "No pet found with this id" });
        return;
      }

      //serialize the data
      const pet = dbPetData.get({ plain: true });

      //pass data to template
      res.render("single-pet", {
        user: req.session.username,
        pet,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;