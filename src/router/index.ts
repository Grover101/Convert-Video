import { Router } from 'restify-router'
import transformRoute from './transform.router'

const PrincipalRouter = new Router()

const ThreeRouter = new Router()

ThreeRouter.add('/transform', transformRoute)

PrincipalRouter.add('/api/v1', ThreeRouter)

export default PrincipalRouter
