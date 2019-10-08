const sourceData = require('../../data/images');
const utilities = require('../../utilities');

module.exports = (req, res) => {
  req.query.count = req.query.count || 1;
  res.send(utilities.generateRandomList(sourceData, req.query.count))
}