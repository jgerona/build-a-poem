const sequelize = require('../config/connection');
const { User, Poem } = require('../models');

const userData = require('./userData.json');
const poemData = require('./poemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const poem of poemData) {
    await Poem.create({
      ...poem,
      user_id: user[Math.floor(Math.random() * user.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
