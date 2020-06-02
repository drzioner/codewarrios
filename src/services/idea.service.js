const BaseService = require('./base.service')
let _ideaRepository = null

class IdeaService extends BaseService {
    constructor({ IdeaRepository }) {
        super(IdeaRepository)
        _ideaRepository = IdeaRepository
    }

    async getUserIdeas(author) {
        if (!author) {
            const error = new Error()
            error.status = 400
            error.status = 'is must be sent'
            throw error
        }

        return await this.repository.getUserIdeas(author)
    }

    async upvoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error()
            error.status = 400
            error.status = 'is must be sent'
            throw error
        }

        const idea = await this.repository.get(ideaId)

        if (!idea) {
            const error = new Error()
            error.status = 404
            error.status = 'idea does not exist'
            throw error
        }

        idea.upvotes.push(true)

        return await _ideaRepository.update(ideaId, { upvotes: idea.upvotes })
    }

    async downvoteIdea(ideaId) {
        if (!ideaId) {
            const error = new Error()
            error.status = 400
            error.status = 'is must be sent'
            throw error
        }

        const idea = await this.repository.get(ideaId)

        if (!idea) {
            const error = new Error()
            error.status = 404
            error.status = 'idea does not exist'
            throw error
        }

        idea.downvotes.push(true)

        return await _ideaRepository.update(ideaId, {
            downvotes: idea.downvotes,
        })
    }
}

module.exports = IdeaService
