exports.getAlbrechtshof = () => {
  return ["Albrechtshof Bhf", 1];
};

exports.getAltstadtSpandau = () => {
  return ["U Altstadt Spandau", 1];
};

exports.getHaselhorst = () => {
  return ["U Haselhorst", 1];
};

exports.getPaulsternstr = () => {
  return ["U Paulsternstr.", 1];
};

exports.getRathausSpandau = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["S Spandau", 1];
    case "suburban":
      return ["S Spandau", 2];
    case "subway":
      return ["U Rathaus Spandau", 3];
    default:
      return ["S+U Rathaus Spandau", 4];
  }
};

exports.getRohrdamm = () => {
  return ["U Rohrdamm", 1];
};

exports.getSiemensdamm = () => {
  return ["U Siemensdamm", 1];
};

exports.getStaaken = () => {
  return ["Staaken Bhf", 1];
};

exports.getStresow = () => {
  return ["S Stresow", 1];
};

exports.getZitadelle = () => {
  return ["U Zitadelle", 1];
};
