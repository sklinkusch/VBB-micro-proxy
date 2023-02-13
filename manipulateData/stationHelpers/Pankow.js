exports.getBlankenburg = () => {
  return ["S Blankenburg", 1];
};

exports.getBornholmerStr = () => {
  return ["S Bornholmer Str.", 1];
};

exports.getBuch = () => {
  return ["S Buch", 1];
};

exports.getEberswalderStr = () => {
  return ["U Eberswalder Str.", 1];
};

exports.getGreifswalderStr = () => {
  return ["S Greifswalder Str.", 1];
};

exports.getKarow = (product) => {
  switch (product) {
    case "regional":
      return ["Bhf Karow", 1];
    case "suburban":
      return ["S Karow", 2];
    default:
      return ["S Karow", 3];
  }
};

exports.getPankow = (product) => {
  switch (product) {
    case "suburban":
      return ["S Pankow", 1];
    case "subway":
      return ["U Pankow", 2];
    default:
      return ["S+U Pankow", 3];
  }
};

exports.getPankowHeinersdorf = () => {
  return ["S Pankow-Heinersdorf", 1];
};

exports.getPrenzlauerAllee = () => {
  return ["S Prenzlauer Allee", 1];
};

exports.getSchönhauserAllee = (product) => {
  switch (product) {
    case "suburban":
      return ["S Schönhauser Allee", 1];
    case "subway":
      return ["U Schönhauser Allee", 2];
    default:
      return ["S+U Schönhauser Allee", 3];
  }
};

exports.getSenefelderplatz = () => {
  return ["U Senefelderplatz", 1];
};

exports.getVinetastr = () => {
  return ["U Vinetastr.", 1];
};

exports.getWollankstr = () => {
  return ["S Wollankstr.", 1];
};
