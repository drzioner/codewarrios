const { asClass, asFunction, asValue, createContainer } = require('awilix')

/**
 * Config
 */
const config = require('../config')
const app = require('.')

/**
 * Services
 */
const {
    HomeService,
    CommentService,
    IdeaService,
    UserService,
    AuthService,
} = require('../services')

/**
 * Controllers
 */
const {
    HomeController,
    CommentController,
    IdeaController,
    UserController,
    AuthController,
} = require('../controllers')

/**
 * Routes
 */
const {
    HomeRoutes,
    CommentRoutes,
    IdeaRoutes,
    UserRoutes,
    AuthRoutes,
} = require('../routes/index.routes')
const Routes = require('../routes')

/**
 * Models
 */
const { Comment, Idea, User } = require('../models')

/**
 * Repositories
 */
const {
    CommentRepository,
    IdeaRepository,
    UserRepository,
} = require('../repositories')

const contanier = createContainer()

contanier
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config),
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        CommentService: asClass(CommentService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        UserService: asClass(UserService).singleton(),
        AuthService: asClass(AuthService).singleton(),
    })
    .register({
        HomeController: asClass(
            HomeController.bind(HomeController)
        ).singleton(),
        CommentController: asClass(
            CommentController.bind(CommentController)
        ).singleton(),
        IdeaController: asClass(
            IdeaController.bind(IdeaController)
        ).singleton(),
        UserController: asClass(
            UserController.bind(UserController)
        ).singleton(),
        AuthController: asClass(
            AuthController.bind(AuthController)
        ).singleton(),
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        CommentRoutes: asFunction(CommentRoutes).singleton(),
        IdeaRoutes: asFunction(IdeaRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton(),
    })
    .register({
        Comment: asValue(Comment),
        Idea: asValue(Idea),
        User: asValue(User),
    })
    .register({
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
    })

module.exports = contanier
