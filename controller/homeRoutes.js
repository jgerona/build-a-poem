const router = require("express").Router();
const { Poem, User } = require("../models");
const withAuth = require("../utils/auth");

//build, login, profile

//get all poems
router.get("/", async (req, res) => {
  try {
    const poemData = await Poem.findAll({
      include: [{ model: User }],
    });

    const poems = poemData.map((poem) => poem.get({ plain: true }));

    res.render("homepage", {
      poems,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get poem by ID
// for future developments
router.get("/poem/:id", async (req, res) => {
  try {
    const poemData = await Poem.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const poem = poemData.get({ plain: true });
    res.render("poem", {
      ...poem,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/build", async (req, res) => {
  try {
    res.render("build", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user by ID
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Poem }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
