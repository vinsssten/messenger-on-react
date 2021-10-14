const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({message: "Ошибка регистрации", errors})
            }
            const {username, password} = req.body;
            const candidate = await User.findOne ({username});

            if (candidate) {
                return res.status(400).json({message: `Пользователь с таким именем уже существует`});
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: "USER"});
            const user = new User({username, password: hashPassword, roles: [userRole.value]});
            await user.save()
            console.log(`Регистрация пользователя: ${username}, пароль: ${password}`);
            return res.json({message: 'Пользователь супешно зарегистрирован'});
        } catch (err) {
            console.log(err);
            res.status(400).json({message:`Registration error ${err}`});
        }
    }

    async login (req, res) {
        try {

        } catch (err) {
            console.log(err);
            res.status(400).json({message: `Login error ${err}`});
        }
    }

    async getUsers (req, res) {
        try {
            res.json('server work!')
        } catch (err) {
            
        }
    }
}

module.exports = new authController();