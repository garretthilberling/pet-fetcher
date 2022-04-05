const router = require('express').Router();
const { Reply } = require('../../models');

router.get('/', (req, res) => {
    Reply.findAll()
      .then(dbReplyData => res.json(dbReplyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', (req, res) => {
if (req.session) {
    Reply.create({
    reply_text: req.body.reply_text,
    comment_id: req.body.comment_id,
    user_id: req.session.user_id
    })
    .then(dbReplyData => res.json(dbReplyData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
}
});

router.delete('/:id', (req, res) => {
    Reply.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbReplyData => {
        if(!dbReplyData) {
            res.status(404).json({ message: 'No reply found with that id!' })
            return;
        }
        res.json(dbReplyData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
    
});

module.exports = router;