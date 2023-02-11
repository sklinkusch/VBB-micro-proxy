exports.getAhrensfelde = () => {
  return ["S Ahrensfelde", 1];
};

exports.getBiesdorf = () => {
  return ["S Biesdorf", 1];
};

exports.getBiesdorfSüd = () => {
  return ["U Biesdorf-Süd", 1];
};

exports.getCottbusserPlatz = () => {
  return ["U Cottbusser Platz", 1];
};

exports.getElsterwerdaerPlatz = () => {
  return ["U Elsterwerdaer Platz", 1];
};

exports.getFriedrichsfeldeOst = () => {
  return ["S Friedrichsfelde Ost", 1];
};

exports.getHellersdorf = () => {
  return ["U Hellersdorf", 1];
};

exports.getHönow = () => {
  return ["U Hönow", 1];
};

exports.getKaulsdorf = () => {
  return ["S Kaulsdorf", 1];
};

exports.getKaulsdorfNord = () => {
  return ["U Kaulsdorf-Nord", 1];
};

exports.getKienberg = () => {
  return ["U Kienberg (Gärten der Welt)", 1];
};

exports.getLouisLewinStr = () => {
  return ["U Louis-Lewin-Str.", 1];
};

exports.getMahlsdorf = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Mahlsdorf", 1];
    case "suburban":
      return ["S Mahlsdorf", 2];
    default:
      return ["S Mahlsdorf", 3];
  }
};

exports.getMarzahn = () => {
  return ["S Marzahn", 1];
};

exports.getMehrowerAllee = () => {
  return ["S Mehrower Allee", 1];
};

exports.getPoelchaustr = () => {
  return ["S Poelchaustr.", 1];
};

exports.getRaoulWallenbergStr = () => {
  return ["S Raoul-Wallenberg-Str.", 1];
};

exports.getSpringpfuhl = () => {
  return ["S Springpfuhl", 1];
};

exports.getWuhletal = (product) => {
  switch (product) {
    case "suburban":
      return ["S Wuhletal", 1];
    case "subway":
      return ["U Wuhletal", 2];
    default:
      return ["S+U Wuhletal", 3];
  }
};
