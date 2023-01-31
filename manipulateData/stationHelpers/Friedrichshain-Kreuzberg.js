exports.getAnhalterBahnhof = () => {
  return ["S Anhalter Bahnhof", 1]
}

exports.getFrankfurterAllee = (product) => {
	switch (product) {
		case "suburban":
			return ["S Frankfurter Allee", 1]
		case "subway":
			return ["U Frankfurter Allee", 2]
		default:
			return ["S+U Frankfurter Allee", 3]
	}
}

exports.getFrankfurterTor = () => {
	return ["U Frankfurter Tor", 1]
}

exports.getGleisdreieck(lineName) => {
	switch (lineName) {
		case "U2":
			return ["U Gleisdreieck ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Gleisdreieck ⬆️", 1]
		default:
			return ["U Gleisdreieck", 3]
	}
}

exports.getGneisenaustr = () => {
	return ["U Gneisenaustr.", 1]
}

exports.getGörlitzerBf = () => {
	return ["U Görlitzer Bahnhof", 1]
}

exports.getHalleschesTor = (lineName) => {
	switch (lineName) {
		case "U6":
			return ["U Hallesches Tor ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Hallesches Tor ⬆️", 1]
		default:
			return ["U Hallesches Tor", 3]
	}
}

exports.getKochstr = () => {
	return ["U Kochstr. (Checkpoint Charlie)", 1]
}

exports.getKottbusserTor = (lineName) => {
	switch (lineName) {
		case "U8":
			return ["U Kottbusser Tor ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Kottbusser Tor ⬆️", 1]
		default:
			return ["U Kottbusser Tor", 3]
	}
}

exports.getLandsbergerAllee = () => {
  return ["S Landsberger Allee", 1]
}

exports.getMehringdamm = () => {
	return ["U Mehringdamm", 1]
}

exports.getMendelssohnBartholdyPark = () => {
	return ["U Mendelssohn-Bartholdy-Park", 1]
}

exports.getMöckernbrücke = (lineName) => {
	switch (lineName) {
		case "U7":
			return ["U Möckernbrücke ⬇️", 2]
		case "U1":
		case "U12":
		case "U3":
			return ["U Möckernbrücke ⬆️", 1]
		default:
			return ["U Möckernbrücke", 3]
	}
}

exports.getMoritzplatz = () => {
	return ["U Moritzplatz", 1]
}

exports.getOstbahnhof = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Ostbahnhof", 1]
    case "suburban":
      return ["S Ostbahnhof", 2]
    default:
      return ["S Ostbahnhof", 3]
  }
}

exports.getOstkreuz = (track) => {
	switch (track) {
		case 1:
		case 2:
			return ["Bhf Ostkreuz [Ru]", 2]
		case 3:
		case 4:
		case 5:
		case 6:
			return ["S Ostkreuz [D/E]", 5]
		case 7:
		case 8:
			return ["Bhf Ostkreuz [Rn1/Rn2]", 3]
		case 11:
		case 12:
			return ["S Ostkreuz [F]", 4]
		case 13:
		case 14:
			return ["Bhf Ostkreuz [Ro]", 1]
		default:
			return ["S Ostkreuz", 6]
	}
}

exports.getPlatzDerLuftbrücke = () => {
	return ["U Platz der Luftbrücke", 1]
}

exports.getPrinzenstr = () => {
	return ["U Prinzenstr.", 1]
}

exports.getSamariterstr = () => {
	return ["U Samariterstr.", 1]
}

exports.getSchlesischesTor = () => {
	return ["U Schlesisches Tor", 1]
}

exports.getSchönleinstr = () => {
	return ["U Schönleinstr.", 1]
}

exports.getStorkowerStr = () => {
	return ["S Storkower Str.", 1]
}

exports.getStrausbergerPlatz = () => {
	return ["U Strausberger Platz", 1]
}

exports.getSüdstern = () => {
	return ["U Südstern", 1]
}

exports.getWarschauerStr = (product) => {
	switch (product) {
		case "suburban":
			return ["S Warschauer Str.", 1]
		case "subway":
			return ["U Warschauer Str.", 2]
		default:
			return ["S+U Warschauer Str.", 3]
	}
}

exports.getWeberwiese = () => {
	return ["U Weberwiese", 1]
}