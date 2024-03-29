const {
  getAdenauerplatz,
  getAugsburgerStr,
  getBerlinerStr,
  getBismarckstr,
  getBlissestr,
  getBundesplatz,
  getCharlottenburg,
  getDeutscheOper,
  getErnstReuterPlatz,
  getFehrbellinerPlatz,
  getGrunewald,
  getGüntzelstr,
  getHalemweg,
  getHalensee,
  getHeerstr,
  getHeidelbergerPlatz,
  getHohenzollerndamm,
  getHohenzollernplatz,
  getJakobKaiserPlatz,
  getJungfernheide,
  getKonstanzerStr,
  getKurfürstendamm,
  getMesseNord,
  getMesseSüd,
  getMierendorffplatz,
  getNeuWestend,
  getOlympiastadion,
  getOlympiaStadion,
  getPichelsberg,
  getRichardWagnerPlatz,
  getRüdesheimerPlatz,
  getRuhleben,
  getSophieCharlottePlatz,
  getSpichernstr,
  getTheodorHeussPlatz,
  getUhlandstr,
  getWestend,
  getWestkreuz,
  getZoologischerGarten
} = require("./Charlottenburg-Wilmersdorf");
const {
  getAnhalterBahnhof,
  getFrankfurterAllee,
  getFrankfurterTor,
  getGleisdreieck,
  getGneisenaustr,
  getGörlitzerBf,
  getHalleschesTor,
  getKochstr,
  getKottbusserTor,
  getLandsbergerAllee,
  getMehringdamm,
  getMendelssohnBartholdyPark,
  getMoritzplatz,
  getMöckernbrücke,
  getOstbahnhof,
  getOstkreuz,
  getPlatzDerLuftbrücke,
  getPrinzenstr,
  getSamariterstr,
  getSchlesischesTor,
  getSchönleinstr,
  getStorkowerStr,
  getStrausbergerPlatz,
  getSüdstern,
  getWarschauerStr,
  getWeberwiese
} = require("./Friedrichshain-Kreuzberg");
const {
  getBetriebsbfRummelsburg,
  getFriedrichsfelde,
  getGehrenseestr,
  getHohenschönhausen,
  getKarlshorst,
  getLichtenberg,
  getMagdalenenstr,
  getNöldnerplatz,
  getRummelsburg,
  getTierpark,
  getWartenberg
} = require("./Lichtenberg");
const {
  getAhrensfelde,
  getBiesdorf,
  getBiesdorfSüd,
  getCottbusserPlatz,
  getElsterwerdaerPlatz,
  getFriedrichsfeldeOst,
  getHellersdorf,
  getHönow,
  getKaulsdorf,
  getKaulsdorfNord,
  getKienberg,
  getLouisLewinStr,
  getMahlsdorf,
  getMarzahn,
  getMehrowerAllee,
  getPoelchaustr,
  getRaoulWallenbergStr,
  getSpringpfuhl,
  getWuhletal
} = require("./Marzahn-Hellersdorf");
const {
  getAfrikanischeStr,
  getAlex,
  getAmrumerStr,
  getBellevue,
  getBernauerStr,
  getBeusselstr,
  getBirkenstr,
  getBrandenburgerTor,
  getBundestag,
  getFriedrichstr,
  getGesundbrunnen,
  getHackescherMarkt,
  getHansaplatz,
  getHauptbahnhof,
  getHausvogteiplatz,
  getHeinrichHeineStr,
  getHumboldthain,
  getJannowitzbrücke,
  getKlosterstr,
  getKurfürstenstr,
  getLeopoldplatz,
  getMärkischesMuseum,
  getMohrenstr,
  getMuseumsinsel,
  getNaturkundemuseum,
  getNauenerPlatz,
  getNordbahnhof,
  getOranienburgerStr,
  getOranienburgerTor,
  getOsloerStr,
  getPankstr,
  getPotsdamerPlatz,
  getRehberge,
  getReinickendorferStr,
  getRosenthalerPlatz,
  getRotesRathaus,
  getSchillingstr,
  getSchwartzkopffstr,
  getSeestr,
  getSpittelmarkt,
  getStadtmitte,
  getTiergarten,
  getTurmstr,
  getUnterDenLinden,
  getVoltastr,
  getWedding,
  getWeinmeisterstr,
  getWesthafen
} = require("./Mitte");
const {
  getBlaschkoallee,
  getBoddinstr,
  getBritzSüd,
  getGrenzallee,
  getHermannplatz,
  getHermannstr,
  getJohannisthalerChaussee,
  getKarlMarxStr,
  getKöllnischeHeide,
  getLeinestr,
  getLipschitzallee,
  getNeukölln,
  getParchimerAllee,
  getRathausNeukölln,
  getRudow,
  getSonnenallee,
  getWutzkyallee,
  getZwickauerDamm
} = require("./Neukölln");
const {
  getBlankenburg,
  getBornholmerStr,
  getBuch,
  getEberswalderStr,
  getGreifswalderStr,
  getKarow,
  getPankow,
  getPankowHeinersdorf,
  getPrenzlauerAllee,
  getSchönhauserAllee,
  getSenefelderplatz,
  getVinetastr,
  getWollankstr
} = require("./Pankow");
const {
  getAltReinickendorf,
  getAltTegel,
  getBorsigwerke,
  getEichborndamm,
  getFranzNeumannPlatz,
  getFrohnau,
  getHeiligensee,
  getHermsdorf,
  getHolzhauserStr,
  getKarlBonhoefferNervenklinik,
  getKurtSchumacherPlatz,
  getLindauerAllee,
  getOtisstr,
  getParacelsusBad,
  getRathausReinickendorf,
  getResidenzstr,
  getScharnweberstr,
  getSchönholz,
  getSchulzendorf,
  getTegel,
  getWaidmannslust,
  getWilhelmsruh,
  getWittenau
} = require("./Reinickendorf");
const {
  getAlbrechtshof,
  getAltstadtSpandau,
  getHaselhorst,
  getPaulsternstr,
  getRathausSpandau,
  getRohrdamm,
  getSiemensdamm,
  getStaaken,
  getStresow,
  getZitadelle
} = require("./Spandau");
const { getRathausSteglitz, getSchloßstr } = require("./Steglitz-Zehlendorf");
const {
  getAltMariendorf,
  getAltTempelhof,
  getBayerischerPlatz,
  getEisenacherStr,
  getFriedrichWilhelmPlatz,
  getInnsbruckerPlatz,
  getKaiserinAugustaStr,
  getKleistpark,
  getNollendorfplatz,
  getParadestr,
  getTempelhof,
  getUllsteinstr,
  getWaltherSchreiberPlatz,
  getWestphalweg,
  getYorckstr
} = require("./Tempelhof-Schöneberg");

const changeStationObject = (mode, oldStopObject) => {
  let newStopName, newStop, order;
  const {
    stop,
    line,
    direction,
    provenance,
    platform: oldTrack
  } = oldStopObject;
  const { id } = stop;
  const { product, name: lineName } = line;
  if (["express", "regional", "suburban", "subway"].includes(product)) {
    switch (id) {
      case "900000023302":
        [newStopName, order] = getAdenauerplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000011102":
        [newStopName, order] = getAfrikanischeStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000170004":
        [newStopName, order] = getAhrensfelde();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000037168":
        [newStopName, order] = getAlbrechtshof();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100003":
      case "900000100703":
      case "900000100704":
      case "900000100705":
        [newStopName, order] = getAlex(id, product, lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000070301":
        [newStopName, order] = getAltMariendorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000085105":
        [newStopName, order] = getAltReinickendorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000029301":
        [newStopName, order] = getAltstadtSpandau();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000099301":
        [newStopName, order] = getAltTegel();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000068202":
        [newStopName, order] = getAltTempelhof();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009101":
        [newStopName, order] = getAmrumerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000012101":
        [newStopName, order] = getAnhalterBahnhof();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000023202":
        [newStopName, order] = getAugsburgerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000055102":
        [newStopName, order] = getBayerischerPlatz(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003102":
        [newStopName, order] = getBellevue();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop, newStop, order };
      case "900000044201":
        [newStopName, order] = getBerlinerStr(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000007110":
        [newStopName, order] = getBernauerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000160002":
        [newStopName, order] = getBetriebsbfRummelsburg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000020202":
        [newStopName, order] = getBeusselstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000171001":
        [newStopName, order] = getBiesdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000171005":
        [newStopName, order] = getBiesdorfSüd();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000002201":
        [newStopName, order] = getBirkenstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000024201":
        [newStopName, order] = getBismarckstr(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000142001":
        [newStopName, order] = getBlankenburg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000080201":
        [newStopName, order] = getBlaschkoallee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000041102":
        [newStopName, order] = getBlissestr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000079202":
        [newStopName, order] = getBoddinstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110011":
        [newStopName, order] = getBornholmerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000088202":
        [newStopName, order] = getBorsigwerke();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100025":
        [newStopName, order] = getBrandenburgerTor(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000080402":
        [newStopName, order] = getBritzSüd();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000135001":
        [newStopName, order] = getBuch();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000044202":
        [newStopName, order] = getBundesplatz(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003254":
        [newStopName, order] = getBundestag();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000024101":
      case "900000024103":
      case "900000024202":
      case "900000024205":
        [newStopName, order] = getCharlottenburg(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175006":
        [newStopName, order] = getCottbusserPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000022201":
        [newStopName, order] = getDeutscheOper();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110006":
        [newStopName, order] = getEberswalderStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000096405":
        [newStopName, order] = getEichborndamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000054103":
        [newStopName, order] = getEisenacherStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000171006":
        [newStopName, order] = getElsterwerdaerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000023101":
        [newStopName, order] = getErnstReuterPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000041101":
        [newStopName, order] = getFehrbellinerPlatz(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120001":
        [newStopName, order] = getFrankfurterAllee(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120008":
        [newStopName, order] = getFrankfurterTor();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000085202":
        [newStopName, order] = getFranzNeumannPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000161512":
        [newStopName, order] = getFriedrichsfelde();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000171002":
        [newStopName, order] = getFriedrichsfeldeOst();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100001":
        [newStopName, order] = getFriedrichstr(product, lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000061102":
        [newStopName, order] = getFriedrichWilhelmPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000092201":
        [newStopName, order] = getFrohnau();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000152002":
        [newStopName, order] = getGehrenseestr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000007102":
        [newStopName, order] = getGesundbrunnen(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000017103":
        [newStopName, order] = getGleisdreieck(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000016101":
        [newStopName, order] = getGneisenaustr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000014101":
        [newStopName, order] = getGörlitzerBf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110003":
        [newStopName, order] = getGreifswalderStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000080202":
        [newStopName, order] = getGrenzallee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000048101":
        [newStopName, order] = getGrunewald();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, name: newStop, order };
      case "900000043201":
        [newStopName, order] = getGüntzelstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100002":
        [newStopName, order] = getHackescherMarkt();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000018102":
        [newStopName, order] = getHalemweg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000040101":
        [newStopName, order] = getHalensee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000012103":
        [newStopName, order] = getHalleschesTor(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003101":
        [newStopName, order] = getHansaplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000034102":
        [newStopName, order] = getHaselhorst();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003200":
      case "900000003201":
        [newStopName, order] = getHauptbahnhof(id, product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100012":
        [newStopName, order] = getHausvogteiplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000026105":
        [newStopName, order] = getHeerstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000045102":
        [newStopName, order] = getHeidelbergerPlatz(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000091203":
        [newStopName, order] = getHeiligensee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100008":
        [newStopName, order] = getHeinrichHeineStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175007":
        [newStopName, order] = getHellersdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000078101":
        [newStopName, order] = getHermannplatz(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000079221":
        [newStopName, order] = getHermannstr(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000093201":
        [newStopName, order] = getHermsdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000152001":
        [newStopName, order] = getHohenschönhausen(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000044101":
        [newStopName, order] = getHohenzollerndamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000043101":
        [newStopName, order] = getHohenzollernplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000088201":
        [newStopName, order] = getHolzhauserStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175010":
        [newStopName, order] = getHönow();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000008101":
        [newStopName, order] = getHumboldthain();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000054105":
        [newStopName, order] = getInnsbruckerPlatz(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000018101":
        [newStopName, order] = getJakobKaiserPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100004":
        [newStopName, order] = getJannowitzbrücke(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000082202":
        [newStopName, order] = getJohannisthalerChaussee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000020201":
        [newStopName, order] = getJungfernheide(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000068302":
        [newStopName, order] = getKaiserinAugustaStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000096458":
        [newStopName, order] = getKarlBonhoefferNervenklinik(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000162001":
        [newStopName, order] = getKarlshorst(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000078103":
        [newStopName, order] = getKarlMarxStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000143001":
        [newStopName, order] = getKarow(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175002":
        [newStopName, order] = getKaulsdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175004":
        [newStopName, order] = getKaulsdorfNord();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175005":
        [newStopName, order] = getKienberg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000054102":
        [newStopName, order] = getKleistpark();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100015":
        [newStopName, order] = getKlosterstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000012102":
        [newStopName, order] = getKochstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000077155":
        [newStopName, order] = getKöllnischeHeide();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000041201":
        [newStopName, order] = getKonstanzerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000023203":
        [newStopName, order] = getKurfürstendamm(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000005201":
        [newStopName, order] = getKurfürstenstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000086102":
        [newStopName, order] = getKurtSchumacherPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000013102":
        [newStopName, order] = getKottbusserTor(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110004":
        [newStopName, order] = getLandsbergerAllee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000079201":
        [newStopName, order] = getLeinestr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009102":
        [newStopName, order] = getLeopoldplatz(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000160004":
      case "900000160701":
        [newStopName, order] = getLichtenberg(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000086160":
        [newStopName, order] = getLindauerAllee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000082201":
        [newStopName, order] = getLipschitzallee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175015":
        [newStopName, order] = getLouisLewinStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000160005":
        [newStopName, order] = getMagdalenenstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000176001":
        [newStopName, order] = getMahlsdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100014":
        [newStopName, order] = getMärkischesMuseum();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000170001":
        [newStopName, order] = getMarzahn();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000017101":
        [newStopName, order] = getMehringdamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000170003":
        [newStopName, order] = getMehrowerAllee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000005252":
        [newStopName, order] = getMendelssohnBartholdyPark();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000024106":
      case "900000026202":
        [newStopName, order] = getMesseNord(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000025423":
        [newStopName, order] = getMesseSüd();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000019204":
        [newStopName, order] = getMierendorffplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000017104":
        [newStopName, order] = getMöckernbrücke(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100010":
        [newStopName, order] = getMohrenstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000013101":
        [newStopName, order] = getMoritzplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100537":
        [newStopName, order] = getMuseumsinsel();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100009":
        [newStopName, order] = getNaturkundemuseum();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009201":
        [newStopName, order] = getNauenerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000078201":
        [newStopName, order] = getNeukölln(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000026101":
        [newStopName, order] = getNeuWestend();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000160003":
        [newStopName, order] = getNöldnerplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000056102":
        [newStopName, order] = getNollendorfplatz(
          mode,
          lineName,
          direction,
          provenance
        );
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000007104":
        [newStopName, order] = getNordbahnhof();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000025321":
        [newStopName, order] = getOlympiastadion();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000025203":
        [newStopName, order] = getOlympiaStadion();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100007":
        [newStopName, order] = getOranienburgerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100019":
        [newStopName, order] = getOranienburgerTor();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009202":
        [newStopName, order] = getOsloerStr(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120005":
        [newStopName, order] = getOstbahnhof(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120003":
        [newStopName, order] = getOstkreuz(oldTrack);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000086161":
        [newStopName, order] = getOtisstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000130002":
        [newStopName, order] = getPankow(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000130001":
        [newStopName, order] = getPankowHeinersdorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009203":
        [newStopName, order] = getPankstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000085104":
        [newStopName, order] = getParacelsusBad();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000068101":
        [newStopName, order] = getParadestr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000080401":
        [newStopName, order] = getParchimerAllee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000034101":
        [newStopName, order] = getPaulsternstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000025424":
        [newStopName, order] = getPichelsberg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000017102":
        [newStopName, order] = getPlatzDerLuftbrücke();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000170005":
        [newStopName, order] = getPoelchaustr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100020":
      case "900000100720":
        [newStopName, order] = getPotsdamerPlatz(id, product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110002":
        [newStopName, order] = getPrenzlauerAllee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000013103":
        [newStopName, order] = getPrinzenstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000170002":
        [newStopName, order] = getRaoulWallenbergStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000078102":
        [newStopName, order] = getRathausNeukölln();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000096410":
      case "900000096710":
      case "900000096711":
        [newStopName, order] = getRathausReinickendorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000029101":
      case "900000029302":
      case "900000029371":
        [newStopName, order] = getRathausSpandau(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000062202":
      case "900000062781":
        [newStopName, order] = getRathausSteglitz(id);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000011101":
        [newStopName, order] = getRehberge();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000008102":
        [newStopName, order] = getReinickendorferStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000085203":
        [newStopName, order] = getResidenzstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000022202":
        [newStopName, order] = getRichardWagnerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000036101":
        [newStopName, order] = getRohrdamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100023":
        [newStopName, order] = getRosenthalerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100045":
        [newStopName, order] = getRotesRathaus();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000045101":
        [newStopName, order] = getRüdesheimerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000083201":
        [newStopName, order] = getRudow();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000025202":
        [newStopName, order] = getRuhleben();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000160001":
        [newStopName, order] = getRummelsburg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120009":
        [newStopName, order] = getSamariterstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000087101":
        [newStopName, order] = getScharnweberstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100017":
        [newStopName, order] = getSchillingstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000014102":
        [newStopName, order] = getSchlesischesTor();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000062203":
        [newStopName, order] = getSchloßstr(mode, direction, provenance);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110001":
        [newStopName, order] = getSchönhauserAllee(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000085201":
        [newStopName, order] = getSchönholz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000016201":
        [newStopName, order] = getSchönleinstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000091205":
        [newStopName, order] = getSchulzendorf();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100501":
        [newStopName, order] = getSchwartzkopffstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009103":
        [newStopName, order] = getSeestr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110005":
        [newStopName, order] = getSenefelderplatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000035101":
        [newStopName, order] = getSiemensdamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000077106":
        [newStopName, order] = getSonnenallee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000022101":
        [newStopName, order] = getSophieCharlottePlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000042101":
        [newStopName, order] = getSpichernstr(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100013":
        [newStopName, order] = getSpittelmarkt();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000171003":
        [newStopName, order] = getSpringpfuhl();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000029305":
        [newStopName, order] = getStaaken();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStopName, order };
      case "900000100011":
        [newStopName, order] = getStadtmitte(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000110012":
        [newStopName, order] = getStorkowerStr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120006":
        [newStopName, order] = getStrausbergerPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000030202":
        [newStopName, order] = getStresow();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000016202":
        [newStopName, order] = getSüdstern();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000089303":
        [newStopName, order] = getTegel();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000068201":
        [newStopName, order] = getTempelhof(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000026201":
        [newStopName, order] = getTheodorHeussPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003103":
        [newStopName, order] = getTiergarten();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000161002":
        [newStopName, order] = getTierpark();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000003104":
        [newStopName, order] = getTurmstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000023301":
        [newStopName, order] = getUhlandstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000069271":
        [newStopName, order] = getUllsteinstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100513":
        [newStopName, order] = getUnterDenLinden(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000130011":
        [newStopName, order] = getVinetastr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000007103":
        [newStopName, order] = getVoltastr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000094101":
        [newStopName, order] = getWaidmannslust();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000061101":
        [newStopName, order] = getWaltherSchreiberPlatz();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120004":
        [newStopName, order] = getWarschauerStr(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000151001":
        [newStopName, order] = getWartenberg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000120025":
        [newStopName, order] = getWeberwiese();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000009104":
        [newStopName, order] = getWedding(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000100051":
        [newStopName, order] = getWeinmeisterstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000026207":
        [newStopName, order] = getWestend();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000001201":
        [newStopName, order] = getWesthafen(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000024102":
        [newStopName, order] = getWestkreuz(lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000070101":
        [newStopName, order] = getWestphalweg();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000084101":
        [newStopName, order] = getWilhelmsruh();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000096101":
      case "900000096197":
        [newStopName, order] = getWittenau(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000130003":
        [newStopName, order] = getWollankstr();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000175001":
        [newStopName, order] = getWuhletal(product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000083102":
        [newStopName, order] = getWutzkyallee();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000057102":
      case "900000058103":
        [newStopName, order] = getYorckstr(id, product);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000033101":
        [newStopName, order] = getZitadelle();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000023201":
        [newStopName, order] = getZoologischerGarten(product, lineName);
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      case "900000083101":
        [newStopName, order] = getZwickauerDamm();
        newStop = { ...stop, name: newStopName };
        return { ...oldStopObject, stop: newStop, order };
      default:
        return oldStopObject;
    }
  }
  return oldStopObject;
};

module.exports = changeStationObject;
