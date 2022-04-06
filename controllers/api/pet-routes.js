const router = require('express').Router();
const { User, Pet, Comment, Fave } = require('../../models');
const withAuth = require('../../utils/auth');
const crypto = require('crypto');



router.get('/', (req, res) => {
    Pet.findAll({
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'user_id', 'created_at'],
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
        attributes: ['id', 'pet_name', 'bio', 'species', 'breed', 'size', 'age', 'user_id', 'created_at'],
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
    // const algorithm = 'aes-128-cbc';
    // const key = crypto.randomBytes(32);
    // const iv = crypto.randomBytes(16);
    // const encrypt = (input) => {
    //     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    //     let encrypted = cipher.update(input);
    //     encrypted = Buffer.concat([encrypted, cipher.final()]);

    //     return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    // } 

    function encrypt(text) {
        var cipher = crypto.createCipher('aes-128-cbc', req.body.pic_filename);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    var img = encrypt(req.body.pic_filename);
    console.log('');
    console.log('');
    console.log('');
    console.log('=============================================================================================');
    console.log('');
    console.log('');
    console.log('');
    console.log(img);
    console.log('');
    console.log('');
    console.log('');
    console.log('=============================================================================================');
    console.log('');
    console.log('');
    console.log('');

    Pet.create({
        pet_name: req.body.pet_name,
        bio: req.body.bio,
        species: req.body.species,
        breed: req.body.breed,
        size: req.body.size,
        age: req.body.age,
        user_id: req.session.user_id,
        pic_filename: img
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
            user_id: req.body.user_id
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

router.put('/fave', withAuth, (req, res) => {
    if (req.session) {
      // custom static method created in models/Post.js
      Pet.fave({ ...req.body, user_id: req.session.user_id }, { Fave, Comment, User })
        .then(updatedFaveData => res.json(updatedFaveData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    }
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