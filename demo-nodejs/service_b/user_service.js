exports.getByUser = async (req, res) => {
  res.json({
    user: {
      name: req.params.name
    }
  })
};
