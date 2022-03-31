const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/all-pets", (req, res) => {

    // Pets.findAll()


  res.render("all-pets", {
      pets: [
          {
              id: 1,
              bio: "Male reverse brindle/black boxer born 2/12/22",
                pet_name: "Bolt",
                species: "Canine",
                breed: "Boxer",
                size: "Large",
                age: 2,
                owner_id: 1,
                pic_filename: "IMG_7355.jpg"
          },
          {
            id: 2,
            bio: "Female reverse brindle/black boxer born 2/12/22",
              pet_name: "Ruth",
              species: "Canine",
              breed: "Boxer",
              size: "Large",
              age: 1,
              owner_id: 1,
              pic_filename: "IMG_7268.jpg"
        }
      ]
  });
});

module.exports = router;
