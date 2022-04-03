const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pet, User, Comment, Fave } = require("../models");
const withAuth = require("../utils/auth");

// get all pets for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  Pet.findAll({
    where: {
      owner_id: req.session.id,
    },
    attributes: [
      "id",
      "pet_name",
      "bio",
      "species",
      "breed",
      "size",
      "age",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)"
        ),
        "fave_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "pet_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPetData) => {
      const pets = dbPetData.map((pet) => pet.get({ plain: true }));
      res.render("dashboard", { pets, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Pet.findByPk(req.params.id, {
    attributes: [
      "id",
      "pet_name",
      "bio",
      "species",
      "breed",
      "size",
      "age",
      "created_at",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)"
        ),
        "fave_count",
      ],
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "pet_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPetData) => {
      if (dbPetData) {
        const pet = dbPetData.get({ plain: true });

        res.render("edit-pet", {
          pet,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
