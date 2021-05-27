const bunyan = require('bunyan')

const LOG = bunyan.createLogger({name: 'PostApi'})

const {PostServices} = require("../services");
const postApi = require('express').Router()

postApi.post('/', async (req, res, next) => {
    const {nickname, text, isActive} = req.body
    LOG.debug(`post(nickname=${nickname}, text=${text}, isActive=${isActive}`)
    try {
        let r = await PostServices.create(nickname, text, isActive)
        res.json(r)
    } catch (err) {
        res.status(200).send(`Unexcepted error ${err.msg}`)
    }
})

module.exports = postApi