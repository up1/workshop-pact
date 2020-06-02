const UserRepository = require("./user_repository")
const user_repository = new UserRepository()

exports.getByUser = async (req, res) => {
  const user = await user_repository.getByName(req.params.name)
  if(user) {
    res.json({
      user: {
        name: user
      }
    })
  } else {
    res.status(404).send({message: "User not found"})
  }

}

exports.user_repository = user_repository
