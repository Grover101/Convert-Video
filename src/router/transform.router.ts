import { Router } from 'restify-router'
import videoController from '../controller/transform.controller'
const videoRoute = new Router()

videoRoute.post('/webmtomp4', async (req, res) => {
    try {
        const result = await videoController.webmtomp4(file)
        return res.json({
            success: true,
            message: 'Estamos conectados'
        })
    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})

videoRoute.post('/mp4towebm', async (req, res) => {
    try {
        const result = await videoController.mp4towebm(file)
        return res.json({
            success: true,
            message: 'Estamos conectados'
        })
    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})

videoRoute.post('/mutevideos', async (req, res) => {
    try {
        const result = await videoController.mutevideos(file)
        return res.json({
            success: true,
            message: 'Estamos conectados'
        })
    } catch (error) {
        return res.json({ succes: false, error: true })
    }
})

export default videoRoute
