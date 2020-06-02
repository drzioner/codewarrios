const BaseService = require('./base.service')
let _userRepository = null

class UserService extends BaseService {
    constructor({ UserRepository }) {
        super(UserRepository)
        _userRepository = UserRepository
    }

    async getUserByUsername(username) {
        if (!username) {
            const error = new Error()
            error.status = 400
            error.status = 'is must be sent'
            throw error
        }
        return await this.repository.getUserByUsername(username)
    }
}

module.exports = UserService
