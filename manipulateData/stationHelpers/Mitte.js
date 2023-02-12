exports.getAfrikanischeStr = () => {
  return ["U Afrikanische Str.", 1];
};

exports.getAlex = (id, product, lineName) => {
  switch (id) {
    case "900000100003":
      switch (product) {
        case "express":
        case "regional":
          return ["Bhf Alexanderplatz", 1];
        case "suburban":
          return ["S Alexanderpöatz", 2];
        default:
          return ["S Alexanderplatz", 3];
      }
    case "900000100703":
      return ["U Alexanderplatz", 4];
    case "900000100704":
      return ["U Alexanderplatz", 5];
    case "900000100705":
      return ["U Alexanderplatz", 6];
    default:
      return ["U Alexanderplatz", 7];
  }
};

exports.getAmrumerStr = () => {
  return ["U Amrumer Str.", 1];
};

exports.getBellevue = () => {
  return ["S Bellevue", 1];
};

exports.getBernauerStr = () => {
  return ["U Bernauer Str.", 1];
};

exports.getBeusselstr = () => {
  return ["S Beusselstr.", 1];
};

exports.getBirkenstr = () => {
  return ["U Birkenstr.", 1];
};

exports.getBrandenburgerTor = (product) => {
  switch (product) {
    case "suburban":
      return ["S Brandenburger Tor", 1];
    case "subway":
      return ["U Brandenburger Tor", 2];
    default:
      return ["S+U Brandenburger Tor", 3];
  }
};

exports.getBundestag = () => {
  return ["U Bundestag", 1];
};

exports.getFriedrichstr = (product, lineName) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Friedrichstr. ⬆️", 1];
    case "suburban":
      switch (lineName) {
        case "S3":
        case "S5":
        case "S7":
        case "S75":
        case "S9":
          return ["S Friedrichstr. ⬆️", 2];
        case "S1":
        case "S2":
        case "S25":
        case "S26":
          return ["S Friedrichstr. ⬇️", 3];
        default:
          return ["S Friedrichstr.", 4];
      }
    case "subway":
      return ["U Friedrichstr. ⬇️", 5];
    default:
      return ["S+U Friedrichstr.", 6];
  }
};

exports.getGesundbrunnen = (product) => {
  switch (product) {
    case "express":
    case "regional":
      return ["Bhf Gesundbrunnen", 1];
    case "suburban":
      return ["S Gesundbrunnen", 2];
    case "subway":
      return ["U Gesundbrunnen", 3];
    default:
      return ["S+U Gesundbrunnen", 4];
  }
};

exports.getHackescherMarkt = () => {
  return ["S Hackescher Markt", 1];
};

exports.getHansaplatz = () => {
  return ["U Hansaplatz", 1];
};

exports.getHauptbahnhof = (id, product) => {
  switch (id) {
    case "900000003200":
      return ["Bhf Berlin Hauptbahnhof ⬇️", 2];
    case "900000003201":
      switch (product) {
        case "express":
        case "regional":
          return ["Bhf Berlin Hauptbahnhof ⬆️", 1];
        case "suburban":
          return ["S Berlin Hauptbahnhof ⬆️", 3];
        case "subway":
          return ["U Berlin Hauptbahnhof ⬇️", 4];
        default:
          return ["S+U Berlin Hauptbahnhof ⬆️", 5];
      }
    default:
      return ["S+U Berlin Hauptbahnhof", 6];
  }
};

exports.getHausvogteiplatz = () => {
  return ["U Hausvogteiplatz", 1];
};

exports.getHeinrichHeineStr = () => {
  return ["U Heinrich-Heine-Str.", 1];
};

exports.getHumboldthain = () => {
  return ["S Humboldthain", 1];
};

exports.getJannowitzbrücke = (product) => {
  switch (product) {
    case "suburban":
      return ["S Jannowitzbrücke", 1];
    case "subway":
      return ["U Jannowitzbrücke", 2];
    default:
      return ["S+U Jannowitzbrücke", 3];
  }
};

exports.getKlosterstr = () => {
  return ["U Klosterstr.", 1];
};

exports.getKurfürstenstr = () => {
  return ["U Kurfürstenstr.", 1];
};

exports.getLeopoldplatz = (lineName) => {
  switch (lineName) {
    case "U6":
      return ["U Leopoldplatz ⬆️", 1];
    case "U9":
      return ["U Leopoldplatz ⬇️", 2];
    default:
      return ["U Leopoldplatz", 3];
  }
};

exports.getMärkischesMuseum = () => {
  return ["U Märkisches Museum", 1];
};

exports.getMohrenstr = () => {
  return ["U Mohrenstr.", 1];
};

exports.getMuseumsinsel = () => {
  return ["U Museumsinsel", 1];
};

exports.getNaturkundemuseum = () => {
  return ["U Naturkundemuseum", 1];
};

exports.getNauenerPlatz = () => {
  return ["U Nauener Platz", 1];
};

exports.getNordbahnhof = () => {
  return ["S Nordbahnhof", 1];
};

exports.getOranienburgerStr = () => {
  return ["S Oranienburger Str.", 1];
};

exports.getOranienburgerTor = () => {
  return ["U Oranienburger Tor", 1];
};

exports.getOsloerStr = (lineName) => {
  switch (lineName) {
    case "U9":
      return ["U Osloer Str. ⬆️", 1];
    case "U8":
      return ["U Osloer Str. ⬇️", 2];
    default:
      return ["U Osloer Str.", 3];
  }
};

exports.getPankstr = () => {
  return ["U Pankstr.", 1];
};

exports.getPotsdamerPlatz = (id, product) => {
  switch (id) {
    case "900000100020":
      switch (product) {
        case "express":
        case "regional":
          return ["Bhf Potsdamer Platz", 1];
        case "suburban":
          return ["S Potsdamer Platz", 2];
        default:
          return ["S Potsdamer Platz", 3];
      }
    case "900000100720":
      return ["U Potsdamer Platz", 4];
    default:
      return ["S+U Potsdamer Platz", 5];
  }
};

exports.getRehberge = () => {
  return ["U Rehberge", 1];
};

exports.getReinickendorferStr = () => {
  return ["U Reinickendorfer Str.", 1];
};

exports.getRosaLuxemburgPlatz = () => {
  return ["U Rosa-Luxemburg-Platz", 1];
};

exports.getRosenthalerPlatz = () => {
  return ["U Rosenthaler Platz", 1];
};

exports.getRotesRathaus = () => {
  return ["U Rotes Rathaus", 1];
};

exports.getSchillingstr = () => {
  return ["U Schillingstr.", 1];
};

exports.getSchwartzkopffstr = () => {
  return ["U Schwartzkopffstr.", 1];
};

exports.getSeestr = () => {
  return ["U Seestr.", 1];
};

exports.getSpittelmarkt = () => {
  return ["U Spittelmarkt", 1];
};

exports.getStadtmitte = (lineName) => {
  switch (lineName) {
    case "U2":
      return ["U Stadtmitte ⬆️", 1];
    case "U6":
      return ["U Stadtmitte ⬇️", 2];
    default:
      return ["U Stadtmitte", 3];
  }
};

exports.getTiergarten = () => {
  return ["S Tiergarten", 1];
};

exports.getTurmstr = () => {
  return ["U Turmstr.", 1];
};

exports.getUnterDenLinden = (lineName) => {
  switch (lineName) {
    case "U5":
      return ["U Unter den Linden ⬆️", 1];
    case "U6":
      return ["U Unter den Linden ⬇️", 2];
    default:
      return ["U Unter den Linden", 3];
  }
};

exports.getVoltastr = () => {
  return ["U Voltastr.", 1];
};

exports.getWedding = (product) => {
  switch (product) {
    case "suburban":
      return ["S Wedding", 1];
    case "subway":
      return ["U Wedding", 2];
    default:
      return ["S+U Wedding", 3];
  }
};

exports.getWeinmeisterstr = () => {
  return ["U Weinmeisterstr.", 1];
};

exports.getWesthafen = (product) => {
  switch (product) {
    case "suburban":
      return ["S Westhafen", 1];
    case "subway":
      return ["U Westhafen", 2];
    default:
      return ["S+U Westhafen", 3];
  }
};
