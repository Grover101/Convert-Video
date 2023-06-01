import { Router } from 'restify-router'
import {
    mp4ToWebm,
    removeAudio,
    webmToMp4
} from '../controller/transform.controller'
const videoRoute = new Router()

videoRoute.post('/webmtomp4', webmToMp4)

videoRoute.post('/mp4towebm', mp4ToWebm)

videoRoute.post('/mutevideos', removeAudio)

export default videoRoute
