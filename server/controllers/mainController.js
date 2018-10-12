function getMonsters(req, res, next) {
  req.app
    .get("db")
    .get_monsters()
    .then(monsters => {
      res.status(200).send(monsters);
    })
    .catch(error => {
      console.log(error);
    });
}
function addMonster(req, res, next) {
  req.app
    .get("db")
    .add_monsters(req.query.name)
    .then(response => {
      getMonsters(req, res, next).then(monsters =>
        res.status(200).send(monsters)
      );
    })
    .catch(monErr => console.log("monErr", monErr))
    .catch(error => {
      console.log(error);
    });
}
module.exports = {
  getMonsters,
  addMonster
};
