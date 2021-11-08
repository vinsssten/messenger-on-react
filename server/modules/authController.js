const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const {validationResult} = require('express-validator');

const {secret} = require('../modules/config');

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }

    return jwt.sign(payload, secret, {expiresIn: "24h"});
}

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
            const {username, password} = req.body;
            const user = await User.findOne({username});
            if (!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`});
            }

            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`});
            }

            const token = generateAccessToken(user._id, user.role)
            return res.json({token})

        } catch (err) {
            console.log(err);
            res.status(400).json({message: `Login error ${err}`});
        }
    }

    async getUsers (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            
        }
    }
}

module.exports = new authController();