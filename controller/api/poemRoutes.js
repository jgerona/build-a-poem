// to access use: /api/poem
const router = require('express').Router();
const {Poem, User} = require('../../models')
const withAuth = require ('../../utils/auth');

router.post('/', withAuth, async (req,res) => {
    console.log(req.body);
    console.log(req.session.user_id);
    console.log("helo")
    try {
      const newPoem = await Poem.create({
        //title: "this is a title",
          ...req.body,
          user_id: req.session.user_id,
      });
      res.status(200).json(newPoem);
  } catch (err) {
      res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req,res) => {
    try {
        const poemData = await Poem.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!poemData) {
            res.status(404).json({message: "Poem not found"});
            return;
        }

    } catch (err) {
        res.status(500).json(err);
    }

});
module.exports = router;
