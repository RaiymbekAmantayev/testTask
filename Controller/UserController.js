const db = require('../models')
const Users = db.users
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')
const ActionController = require('../Controller/ActionsController')


const Auth = async(req, res) => {
    const { username, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await Users.create({
            username: username,
            password: hash,
        });
        const userId = newUser.id;
        await ActionController.createAction(userId, 'create');
        res.json({ message: "Success", userId });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
}


const Login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findOne({ where: { username: username } });

        if (!user) {
            return res.json({ error: "User doesn't exist" });
        }

        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                return res.json({ error: "Wrong username and password combination" });
            }
            const accessToken = sign({ username: user.username, id: user.id },
                "importantsecret")
            return res.json(accessToken);
        })


        .catch((error) => {
            console.error(error);
            return res.json({ error: "Error comparing passwords" });
        });
    } catch (error) {
        console.error(error);
        return res.json({ error: "Internal server error" });
    }
}
const GetAll = async(req, res) => {
    const users = await Users.findAll()
    res.send(users)
}

const ChangePassword = async(req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await Users.findOne({ where: { username: req.user.username }, });

    bcrypt.compare(oldPassword, user.password).then((match) => {
        if (!match) {
            return res.json({ error: "Wrong password" });
        }
        bcrypt.hash(newPassword, 10).then(async(hash) => {
            await Users.update({ password: hash }, { where: { username: req.user.username } })
            res.json("Success")
        })
    })
}



const UpdateUser = async(req, res) => {
    const id = req.params.id;
    const newUser = {
        username: req.body.username
    }
    try {
        const user = await Users.findByPk(id)
        if (!user) {
            res.send("User not found")
        }
        await Users.update(newUser, {
            where: { id: id }
        })
        await ActionController.createAction(id, 'update');
        res.send("Пользователь успешно обновлен")
    } catch (error) {
        res.status(500).send({ message: "Произошла ошибка при обновлении поста", error: error.message });
    }
}



module.exports = {
    Auth,
    Login,
    GetAll,
    UpdateUser,
    ChangePassword
}