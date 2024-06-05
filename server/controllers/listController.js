const List = require("../models/List");

const fetchLists = async (req, res) => {
  try {
    const lists = await List.find({});
    res.json(lists);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
};

module.exports = { fetchLists };
