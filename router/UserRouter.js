const userController = require('../Controller/UserController')
const router = require('express').Router()
const passport = require('../middlewares/AuthMiddleware')

// регистрация, создания нового пользователя
router.post('/auth', userController.Auth)

// Войти
router.post('/auth/login', userController.Login)

// Получить всех пользователей
router.get('/auth/getAll', userController.GetAll)
    // Получение одого пользователя
router.get('/auth/get/:id', userController.GetById)
    //изменение юзернейм пользователя
router.put('/auth/update/:id', userController.UpdateUser)
    // изменение пароля
router.put('/auth/update', passport.authenticate('jwt', { session: false }), userController.ChangePassword)

module.exports = router