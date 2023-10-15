const db = require('../models')
const Action = db.actions

const createAction = async(UserId, actionType) => {
    try {
        const action = await Action.create({ UserId, actionType });
        return action;
    } catch (error) {
        throw new Error(error.message);
    }
};

const getActionsByUserId = async(UserId, page = 1, pageSize = 10) => {
    const offset = (page - 1) * pageSize;
    return await Action.findAll({
        where: { UserId },
        limit: parseInt(pageSize),
        offset: parseInt(offset),
    });
};

module.exports = {
    createAction,
    getActionsByUserId
};