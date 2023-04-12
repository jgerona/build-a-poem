const User = require('./User');
const Poem = require('./Poem');

User.hasMany(Poem, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Poem.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Poem};