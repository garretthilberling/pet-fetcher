const router = require('express').Router();
const { User, Pet, Comment } = require('../../models');

router.get('/', (req, res) => {
    Pet.findAll({
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'owner_id', 'created_at'],
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
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'owner_id', 'created_at'],
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

router.post('/', (req, res) => {
    Pet.create({
        pet_name: req.body.pet_name,
        bio: req.body.bio,
        species: req.session.user_id,
        breed: req.body.breed,
        size: req.body.size,
        age: req.body.age,
        owner_id: req.body.owner_id
    })
    .then(dbPetData => res.json(dbPetData))
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
            owner_id: req.body.owner_id
        },
        {
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