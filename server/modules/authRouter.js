const Router = require('express')
const {check} = require('express-validator');
const router = new Router();

const authController = require('./authController');

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль не может быть короче 4 символов и длиннее 16 символов").isLength({min: 4, max: 16})
], (req, res) => { authController.registration(req, res)} );
router.post('/login', authController.login);
router.get('/users', authController.getUsers);

module.exports = router;