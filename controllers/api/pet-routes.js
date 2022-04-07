const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Pet, Comment, Fave } = require('../../models');
const withAuth = require('../../utils/auth');



router.get('/', (req, res) => {
    console.log('======================');
    Pet.findAll({
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'user_id', 'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)'), 'fave_count']
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
                attributes: ['username']
            }
        ]
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'user_id', 'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM fave WHERE pet.id = fave.pet_id)'), 'fave_count']
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
                attributes: ['username']
            }
        ]
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet found with that id' });
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {

    Pet.create({
        pet_name: req.body.pet_name,
        bio: req.body.bio,
        species: req.body.species,
        breed: req.body.breed,
        size: req.body.size,
        age: req.body.age,
        user_id: req.session.user_id,
        pic_filename: req.body.pic_filename
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/addFave', withAuth, (req, res) => {
    // custom static method created in models/Post.js
    Pet.addFave({ ...req.body, user_id: req.session.user_id }, { Pet, Comment, User })
      .then(updatedFaveData => res.json(updatedFaveData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.put('/:id', (req, res) => {
    Pet.update(
        {
            pet_name: req.body.pet_name,
            bio: req.body.bio,
            species: req.session.user_id,
            breed: req.body.breed,
            size: req.body.size,
            age: req.body.age,
            user_id: req.body.user_id,
            pic_filename: req.body.pic_filename
        },
        {
            individualHooks: true,
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet found with that id' });
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Pet.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPetData => {
        if (!dbPetData) {
            res.status(404).json({ message: 'No pet found with this id.' });
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;