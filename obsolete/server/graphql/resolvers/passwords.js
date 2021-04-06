const {AuthenticationError} = require('apollo-server');
const Password = require('../../models/Password');

const Pasword = require('../../models/Password');
const checkAuth = require('../../util/check_auth')
module.exports = {
  Query: {
    async getPasswords() {
      try {
        const passwords = await Password.find().sort({ createdAt: -1 });
        return passwords;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getPassword(_, { passwordId }) {
      try {
        const password = await Password.findById(passwordId);
        if (password) {
          return password;
        } else {
          throw new Error('Password not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createPassword(_, {websiteName, websitePassword}, context){
      const user = checkAuth(context);
      
      // console.log(user)
      const newPassword = new Password({
        websiteName,
        websitePassword,
        user: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
      });
      const password = await newPassword.save();

      return password;
    },
    async deletePassword(_, {passwordId}, context){

      const user = checkAuth(context);
      // console.log("All ok")

      try{
        const password = await Password.findById(passwordId);
        if(user.username === password.username){
          await password.delete()
          return 'Password deleted'
        }else{
          throw new AuthenticationError('Action not allowed')
        }
      }
      catch(err){
        throw new Error(err)
      }
    }
  }
};