const thing = require("common/thing");

module.exports = async (req, res) => {
    res.end(thing.sayThing());
}