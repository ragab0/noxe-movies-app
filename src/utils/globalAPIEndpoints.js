module.exports.singleItemEdnpoint = function (type, id) {
  return `https://api.themoviedb.org/3/${type}/${id}`;
};

module.exports.manyItemEdnpoint = function (cat = "all", page = 1) {
  return `https://api.themoviedb.org/3/trending/${cat}/day?page=${page}`;
};
