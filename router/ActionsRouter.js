const express = require('express');
const router = express.Router();
const ActionController = require('../Controller/ActionsController');

// Создание действия
router.post('/add', async(req, res) => {
    const { UserId, actionType } = req.body;
    try {
        const action = await ActionController.createAction(UserId, actionType);
        res.json(action);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Получение истории действий с фильтрами
router.get('/history', async(req, res) => {
    const { userId, page = 1, pageSize = 10 } = req.query;
    const offset = (page - 1) * pageSize;

    try {
        const actions = await ActionController.getActionsByUserId(userId, page, pageSize);
        res.json(actions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;