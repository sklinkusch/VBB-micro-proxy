exports.getAltReinickendorf = () => {
  return ["S Alt-Reinickendorf", 1];
};

exports.getAltTegel = () => {
  return ["U Alt-Tegel", 1];
};

exports.getBorsigwerke = () => {
  return ["U Borsigwerke", 1];
};

exports.getEichborndamm = () => {
  return ["S Eichborndamm", 1];
};

exports.getFranzNeumannPlatz = () => {
  return ["U Franz-Neumann-Platz (Am Schäfersee)", 1];
};

exports.getFrohnau = () => {
  return ["S Frohnau", 1];
};

exports.getHeiligensee = () => {
  return ["S Heiligensee", 1];
};

exports.getHermsdorf = () => {
  return ["S Hermsdorf", 1];
};

exports.getHolzhauserStr = () => {
  return ["U Holzhauser Str.", 1];
};

exports.getKarlBonhoefferNervenklinik = (product) => {
  switch (product) {
    case "suburban":
      return ["S Karl-Bonhoeffer-Nervenklinik", 1];
    case "subway":
      return ["U Karl-Bonhoeffer-Nervenklinik", 2];
    default:
      return ["S+U Karl-Bonhoeffer-Nervenklinik", 3];
  }
};

exports.getKurtSchumacherPlatz = () => {
  return ["U Kurt-Schumacher-Platz", 1];
};

exports.getLindauerAllee = () => {
  return ["U Lindauer Allee", 1];
};

exports.getOtisstr = () => {
  return ["U Otisstr.", 1];
};

exports.getParacelsusBad = () => {
  return ["U Paracelsus-Bad", 1];
};

exports.getRathausReinickendorf = () => {
  return ["U Rathaus Reinickendorf", 1];
};

exports.getResidenzstr = () => {
  return ["U Residenzstr.", 1];
};

exports.getScharnweberstr = () => {
  return ["U Scharnweberstr.", 1];
};

exports.getSchönholz = () => {
  return ["S Schönholz", 1];
};

exports.getSchulzendorf = () => {
  return ["S Schulzendorf", 1];
};

exports.getTegel = () => {
  return ["S Tegel", 1];
};

exports.getWaidmannslust = () => {
  return ["S Waidmannslust", 1];
};

exports.getWilhelmsruh = () => {
  return ["S Wilhelmsruh", 1];
};

exports.getWittenau = (product) => {
  switch (product) {
    case "suburban":
      return ["S Wittenau", 1];
    case "subway":
      return ["U Wittenau", 2];
    default:
      return ["S+U Wittenau", 3];
  }
};
