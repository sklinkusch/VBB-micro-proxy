exports.getAdenauerplatz = () => {
	return ["U Adenauerplatz", 1]
}

exports.getBerlinerStr = (lineName) => {
	switch (lineName) {
		case "U7":
			return ["U Berliner Str. ⬇️", 2]
		case "U9":
			return ["U Berliner Str. ⬆️", 1]
		default:
			return ["U Berliner Str.", 3]
	}
}

exports.getBismarckstr = (lineName) => {
	switch (lineName) {
		case "U2":
		case "U12":
			return ["U Bismarckstr. ⬆️", 1]
		case "U7":
			return ["U Bismarckstr. ⬇️", 2]
		default:
			return ["U Bismarckstr.", 3]
	}
}

exports.getBlissestr = () => {
	return ["U Blissestr.", 1]
}

exports.getBundesplatz = (product) => {
	switch (product) {
		case "suburban":
			return ["S Bundesplatz", 1]
		case "subway":
			return ["U Bundesplatz", 2]
		default:
			return ["S+U Bundesplatz", 3]
	}
}

exports.getCharlottenburg = (product) => {
	switch (product) {
		case "express":
		case "regional":
			return ["S Charlottenburg", 1]
		case "suburban":
			return ["S Charlottenburg", 2]
		case "subway":
			return ["U Wilmersdorfer Str.", 3]
		default:
			return ["S Charlottenburg/U Wilmersdorfer Str.", 4]
	}
}

exports.getFehrbellinerPlatz = (lineName: string) => {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Fehrbelliner Platz ⬆️", 1]
		case "U7":
			return ["U Fehrbelliner Platz ⬇️", 2]
		default:
			return ["U Fehrbelliner Platz", 3]
	}
}

exports.getGrunewald = () => {
  return ["S Grunewald", 1]
}

exports.getGüntzelstr = () => {
	return ["U Güntzelstr.", 1]
}

exports.getHalemweg = () => {
	return ["U Halemweg", 1]
}

exports.getHalensee = () => {
  return ["S Halensee", 1]
}

exports.getHeerstr = () => {
  return ["S Heerstr.", 1]
}

exports.getHeidelbergerPlatz = (product) => {
	switch (product) {
		case "suburban":
			return ["S Heidelberger Platz", 1]
		case "subway":
			return ["U Heidelberger Platz", 2]
		default:
			return ["S+U Heidelberger Platz", 3]
	}
}

exports.getHohenzollerndamm = () => {
  return ["S Hohenzollerndamm", 1]
}

exports.getJakobKaiserPlatz = () => {
	return ["U Jakob-Kaiser-Platz", 1]
}

exports.getJungfernheide = (product) => {
	switch (product) {
		case "express":
		case "regional":
			return ["Bhf Jungfernheide", 1]
		case "suburban":
			return ["S Jungfernheide", 2]
		case "subway":
			return ["U Jungfernheide", 3]
		default:
			return ["S+U Jungfernheide", 4]
	}
}

exports.getKonstanzerStr = () => {
	return ["U Konstanzer Str.", 1]
}

exports.getKurfürstendamm = (lineName) => {
	switch (lineName) {
		case "U1":
			return ["U Kurfürstendamm ⬆️", 1]
		case "U9":
			return ["U Kurfürstendamm ⬇️", 2]
		default:
			return ["U Kurfürstendamm", 3]
	}
}

exports.getMesseNord = (product) => {
  switch (product) {
    case "suburban":
      return ["S Messe Nord/ICC", 1]
    case "subway":
      return ["U Kaiserdamm", 2]
    default:
      return ["S Messe Nord/U Kaiserdamm", 3]
  }
}

exports.getMesseSüd = () => {
  return ["S Messe Süd", 1]
}

exports.getMierendorffplatz = () => {
	return ["U Mierendorffplatz", 1]
}

exports.getOlympiastadion = () => {
  return ["S Olympiastadion", 1]
}

exports.getPichelsberg = () => {
  return ["S Pichelsberg", 1]
}

exports.getRichardWagnerPlatz = () => {
	return ["U Richard-Wagner-Platz", 1]
}

exports.getSpichernstr = (lineName) => {
	switch (lineName) {
		case "U1":
		case "U2":
		case "U3":
		case "U12":
			return ["U Spichernstr. ⬆️", 1]
		case "U9":
			return ["U Spichernstr. ⬇️", 2]
		default:
			return ["U Spichernstr.", 3]
	}
}

exports.getWestend = () => {
  return ["S Westend", 1]
}

exports.getWestkreuz = (lineName) => {
  switch (lineName) {
    case "S41":
    case "S42":
    case "S45":
    case "S46":
      return ["S Westkreuz ⬆️", 1]
    case "S3":
    case "S5":
    case "S7":
    case "S75":
    case "S9":
      return ["S Westkreuz ⬇️", 2]
    default:
      return ["S Westkreuz", 3]
  }
}

exports.getZoologischerGarten = (product, lineName) => {
	switch (product) {
		case "express":
		case "regional":
			return ["Bhf Zoologischer Garten", 1]
		case "suburban":
			return ["S Zoologischer Garten", 2]
		case "subway":
			switch (lineName) {
				case "U2":
				case "U12":
					return ["U Zoologischer Garten ⬆️", 3]
				case "U9":
					return ["U Zoologischer Garten ⬇️", 4]
				default:
					return ["U Zoologischer Garten", 5]
			}
		default:
			return ["S+U Zoologischer Garten", 6]
	}
}
