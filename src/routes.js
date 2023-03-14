const UserController = require('./controllers/UserController');

module.exports = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: UserController.listenUsers,
    },
    {
        endpoint: '/products',
        method: 'GET',
        handler: UserController.listenUsers,
    },
];