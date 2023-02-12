exports.getBlaschkoallee = () => {
  return ["U Blaschkoallee", 1];
};

exports.getBoddinstr = () => {
  return ["U Boddinstr.", 1];
};

exports.getBritzSüd = () => {
  return ["U Britz-Süd", 1];
};

exports.getGrenzallee = () => {
  return ["U Grenzallee", 1];
};

exports.getHermannplatz = (lineName) => {
  switch (lineName) {
    case "U7":
      return ["U Hermannplatz ⬇️", 2];
    case "U8":
      return ["U Hermannplatz ⬆️", 1];
    default:
      return ["U Hermannplatz", 3];
  }
};

exports.getHermannstr = (product) => {
  switch (product) {
    case "suburban":
      return ["S Hermannstr.", 1];
    case "subway":
      return ["U Hermannstr.", 2];
    default:
      return ["S+U Hermannstr.", 3];
  }
};

exports.getJohannisthalerChaussee = () => {
  return ["U Johannisthaler Chaussee", 1];
};

exports.getKarlMarxStr = () => {
  return ["U Karl-Marx-Str.", 1];
};

exports.getKöllnischeHeide = () => {
  return ["S Köllnische Heide", 1];
};

exports.getLeinestr = () => {
  return ["U Leinestr.", 1];
};

exports.getLipschitzallee = () => {
  return ["U Lipschitzallee", 1];
};

exports.getNeukölln = (product) => {
  switch (product) {
    case "suburban":
      return ["S Neukölln", 1];
    case "subway":
      return ["U Neukölln", 2];
    default:
      return ["S+U Neukölln", 3];
  }
};

exports.getParchimerAllee = () => {
  return ["U Parchimer Allee", 1];
};

exports.getRathausNeukölln = () => {
  return ["U Rathaus Neukölln", 1];
};

exports.getRudow = () => {
  return ["U Rudow", 1];
};

exports.getSonnenallee = () => {
  return ["S Sonnenallee", 1];
};

exports.getWutzkyallee = () => {
  return ["U Wutzkyallee", 1];
};

exports.getZwickauerDamm = () => {
  return ["U Zwickauer Damm", 1];
};
