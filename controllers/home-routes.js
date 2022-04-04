const router = require("express").Router();
const sequelize = require("../config/connection");
const { Pet, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

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
      res.render("single-post", {
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

// router.get("/all-pets", (req, res) => {

//     // Pets.findAll()

//   res.render("all-pets", {
//       pets: [
//           {
//               id: 1,
//               bio: "Male reverse brindle/black boxer born 2/12/22",
//                 pet_name: "Bolt",
//                 species: "Canine",
//                 breed: "Boxer",
//                 size: "Large",
//                 age: 2,
//                 owner_id: 1,
//                 pic_filename: "IMG_7355.jpg"
//           },
//           {
//             id: 2,
//             bio: "Female reverse brindle/black boxer born 2/12/22",
//               pet_name: "Ruth",
//               species: "Canine",
//               breed: "Boxer",
//               size: "Large",
//               age: 1,
//               owner_id: 1,
//               pic_filename: "IMG_7268.jpg"
//         }
//       ]
//   });
// });

module.exports = router;