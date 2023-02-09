exports.getBetriebsbfRummelsburg = () => {
  return ["S Betriebsbahnhof Rummelsburg", 1]
}

exports.getFriedrichsfelde = () => {
  return ["U Friedrichsfelde", 1]
}

exports.getGehrenseestr = () => {
  return ["S Gehrenseestr.", 1]
}

exports.getHohenschönhausen = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Hohenschönhausen", 1]
    case "suburban":
      return ["S Hohenschönhausen", 2]
    default:
      return ["S Hohenschönhausen", 3]
  }
}

exports.getKarlshorst = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Karlshorst", 1]
    case "suburban":
      return ["S Karlshorst", 2]
    default:
      return ["S Karlshorst", 3]
  }
}

exports.getLichtenberg = (product) => {
	switch (product) {
		case "express":
		case "regional":
			return ["Bhf Lichtenberg", 1]
		case "suburban":
			return ["S Lichtenberg", 2]
		case "subway":
			return ["U Lichtenberg", 3]
		default:
			return ["S+U Lichtenberg", 4]
	}
}

exports.getMagdalenenstr = () => {
  return ["U Magdalenenstr.", 1]
}

exports.getNöldnerplatz = () => {
  return ["S Nöldnerplatz", 1]
}

exports.getRummelsburg = () => {
  return ["S Rummelsburg", 1]
}

exports.getTierpark = () => {
  return ["U Tierpark", 1]
}

exports.getWartenberg = () => {
  return ["S Wartenberg", 1]
}