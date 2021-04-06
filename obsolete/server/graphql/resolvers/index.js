const passwordResolvers = require('./passwords');
const userResolvers = require('./users');

module.exports = {
    Query:{
        ...passwordResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...passwordResolvers.Mutation
    }
}