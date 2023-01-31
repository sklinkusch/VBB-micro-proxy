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
	getZoologischerGarten,
} = require("./Charlottenburg-Wilmersdorf")
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
} = require("./Friedrichshain-Kreuzberg")
const { getLichtenberg } = require("./Lichtenberg")
const { getWuhletal } = require("./Marzahn-Hellersdorf")
const {
	getAlex,
	getAmrumerStr,
	getBernauerStr,
	getBirkenstr,
	getFriedrichstr,
	getGesundbrunnen,
	getHansaplatz,
	getHeinrichHeineStr,
	getJannowitzbrücke,
	getLeopoldplatz,
	getNauenerPlatz,
	getOsloerStr,
	getPankstr,
	getPotsdamerPlatz,
	getRosenthalerPlatz,
	getStadtmitte,
	getTurmstr,
	getUnterDenLinden,
	getVoltastr,
	getWedding,
	getWeinmeisterstr,
	getWesthafen,
} = require("./Mitte")
const {
	getBlaschkoallee,
	getBoddinstr,
	getBritzSüd,
	getGrenzallee,
	getHermannplatz,
	getHermannstr,
	getJohannisthalerChaussee,
	getKarlMarxStr,
	getLeinestr,
	getLipschitzallee,
	getNeukölln,
	getParchimerAllee,
	getRathausNeukölln,
	getRudow,
	getZwickauerDamm,
} = require("./Neukölln")
const { getPankow, getSchönhauserAllee } = require("./Pankow")
const {
	getFranzNeumannPlatz,
	getKarlBonhoefferNervenklinik,
	getLindauerAllee,
	getParacelsusBad,
	getRathausReinickendorf,
	getResidenzstr,
	getWittenau,
} = require("./Reinickendorf")
const {
	getAltstadtSpandau,
	getHaselhorst,
	getPaulsternstr,
	getRathausSpandau,
	getRohrdamm,
	getSiemensdamm,
	getZitadelle,
} = require("./Spandau")
const { getRathausSteglitz, getSchloßstr } = require("./Steglitz-Zehlendorf")
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
	getYorckstr,
} = require("./Tempelhof-Schöneberg")

const changeStationObject = (mode, oldStopObject) => {
	let newStopName, newStop, order
	const { stop, line, direction, provenance, platform: oldTrack } = oldStopObject
	const { id } = stop
	const { product, name: lineName } = line
	if (["express", "regional", "suburban", "subway"].includes(product)) {
		switch (id) {
			case "900000023302":
				;[newStopName, order] = getAdenauerplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100003":
			case "900000100703":
			case "900000100704":
			case "900000100705":
				;[newStopName, order] = getAlex(id, product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000070301":
				;[newStopName, order] = getAltMariendorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000029301":
				;[newStopName, order] = getAltstadtSpandau()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068202":
				;[newStopName, order] = getAltTempelhof()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009101":
				;[newStopName, order] = getAmrumerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000012101":
        ;[newStopName, order] = getAnhalterBahnhof()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
      case "900000023202":
        ;[newStopName, order] = getAugsburgerStr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000055102":
				;[newStopName, order] = getBayerischerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000044201":
				;[newStopName, order] = getBerlinerStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000007110":
				;[newStopName, order] = getBernauerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000002201":
				;[newStopName, order] = getBirkenstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024201":
				;[newStopName, order] = getBismarckstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080201":
				;[newStopName, order] = getBlaschkoallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041102":
				;[newStopName, order] = getBlissestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079202":
				;[newStopName, order] = getBoddinstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080402":
				;[newStopName, order] = getBritzSüd()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000044202":
				;[newStopName, order] = getBundesplatz(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000024101":
			case "900000024103":
			case "900000024202":
			case "900000024205":
				;[newStopName, order] = getCharlottenburg(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000022201":
        ;[newStopName, order] = getDeutscheOper()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000054103":
				;[newStopName, order] = getEisenacherStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000023101":
        ;[newStopName, order] = getErnstReuterPlatz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000041101":
				;[newStopName, order] = getFehrbellinerPlatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120001":
				;[newStopName, order] = getFrankfurterAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120008":
				;[newStopName, order] = getFrankfurterTor()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085202":
				;[newStopName, order] = getFranzNeumannPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000061102":
				;[newStopName, order] = getFriedrichWilhelmPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100001":
				;[newStopName, order] = getFriedrichstr(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000007102":
				;[newStopName, order] = getGesundbrunnen(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017103":
				;[newStopName, order] = getGleisdreieck(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000016101":
				;[newStopName, order] = getGneisenaustr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000014101":
				;[newStopName, order] = getGörlitzerBf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080202":
				;[newStopName, order] = getGrenzallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000048101":
        ;[newStopName, order] = getGrunewald()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, name: newStop, order }
			case "900000043201":
				;[newStopName, order] = getGüntzelstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000018102":
				;[newStopName, order] = getHalemweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000040101":
        ;[newStopName, order] = getHalensee()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000012103":
				;[newStopName, order] = getHalleschesTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000003101":
				;[newStopName, order] = getHansaplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000034102":
				;[newStopName, order] = getHaselhorst()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000026105":
        ;[newStopName, order] = getHeerstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000045102":
				;[newStopName, order] = getHeidelbergerPlatz(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100008":
				;[newStopName, order] = getHeinrichHeineStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078101":
				;[newStopName, order] = getHermannplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000079221":
				;[newStopName, order] = getHermannstr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000044101":
        ;[newStopName, order] = getHohenzollerndamm()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
      case "900000043101":
        ;[newStopName, order] = getHohenzollernplatz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000054105":
				;[newStopName, order] = getInnsbruckerPlatz(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000018101":
				;[newStopName, order] = getJakobKaiserPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100004":
				;[newStopName, order] = getJannowitzbrücke(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082202":
				;[newStopName, order] = getJohannisthalerChaussee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000020201":
				;[newStopName, order] = getJungfernheide(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068302":
				;[newStopName, order] = getKaiserinAugustaStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000096458":
				;[newStopName, order] = getKarlBonhoefferNervenklinik(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078103":
				;[newStopName, order] = getKarlMarxStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000054102":
				;[newStopName, order] = getKleistpark()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000012102":
				;[newStopName, order] = getKochstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000041201":
				;[newStopName, order] = getKonstanzerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023203":
				;[newStopName, order] = getKurfürstendamm(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000013102":
				;[newStopName, order] = getKottbusserTor(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000110004":
        ;[newStopName, order] = getLandsbergerAllee()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000079201":
				;[newStopName, order] = getLeinestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009102":
				;[newStopName, order] = getLeopoldplatz(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000160004":
			case "900000160701":
				;[newStopName, order] = getLichtenberg(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000086160":
				;[newStopName, order] = getLindauerAllee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000082201":
				;[newStopName, order] = getLipschitzallee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017101":
				;[newStopName, order] = getMehringdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000005252":
				;[newStopName, order] = getMendelssohnBartholdyPark()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000024106":
      case "900000026202":
        ;[newStopName, order] = getMesseNord(product)
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
      case "900000025423":
        ;[newStopName, order] = getMesseSüd()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000019204":
				;[newStopName, order] = getMierendorffplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000017104":
				;[newStopName, order] = getMöckernbrücke(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000013101":
				;[newStopName, order] = getMoritzplatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009201":
				;[newStopName, order] = getNauenerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078201":
				;[newStopName, order] = getNeukölln(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000026101":
        ;[newStopName, order] = getNeuWestend()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000056102":
				;[newStopName, order] = getNollendorfplatz(
					mode,
					lineName,
					direction,
					provenance
				)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000025321":
        ;[newStopName, order] = getOlympiastadion()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
      case "900000025203":
        ;[newStopName, order] = getOlympiaStadion()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000009202":
				;[newStopName, order] = getOsloerStr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120005":
				;[newStopName, order] = getOstbahnhof(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120003":
				;[newStopName, order] = getOstkreuz(oldTrack)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000130002":
				;[newStopName, order] = getPankow(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009203":
				;[newStopName, order] = getPankstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085104":
				;[newStopName, order] = getParacelsusBad()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068101":
				;[newStopName, order] = getParadestr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000080401":
				;[newStopName, order] = getParchimerAllee()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000034101":
				;[newStopName, order] = getPaulsternstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000025424":
        ;[newStopName, order] = getPichelsberg()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000017102":
				;[newStopName, order] = getPlatzDerLuftbrücke()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100020":
			case "900000100720":
				;[newStopName, order] = getPotsdamerPlatz(id, product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000013103":
				;[newStopName, order] = getPrinzenstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000062202":
			case "900000062781":
				;[newStopName, order] = getRathausSteglitz(id)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000022202":
				;[newStopName, order] = getRichardWagnerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000078102":
				;[newStopName, order] = getRathausNeukölln()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000096410":
			case "900000096710":
			case "900000096711":
				;[newStopName, order] = getRathausReinickendorf()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000029101":
			case "900000029302":
			case "900000029371":
				;[newStopName, order] = getRathausSpandau(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000085203":
				;[newStopName, order] = getResidenzstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000036101":
				;[newStopName, order] = getRohrdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100023":
				;[newStopName, order] = getRosenthalerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000045101":
        ;[newStopName, order] = getRüdesheimerPlatz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000083201":
				;[newStopName, order] = getRudow()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000025202":
        ;[newStopName, order] = getRuhleben()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000120009":
				;[newStopName, order] = getSamariterstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000014102":
				;[newStopName, order] = getSchlesischesTor()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000062203":
				;[newStopName, order] = getSchloßstr(mode, direction, provenance)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000110001":
				;[newStopName, order] = getSchönhauserAllee(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000016201":
				;[newStopName, order] = getSchönleinstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000035101":
				;[newStopName, order] = getSiemensdamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000022101":
        ;[newStopName, order] = getSophieCharlottePlatz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000042101":
				;[newStopName, order] = getSpichernstr(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100011":
				;[newStopName, order] = getStadtmitte(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000110012":
				;[newStopName, order] = getStorkowerStr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120006":
				;[newStopName, order] = getStrausbergerPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000016202":
				;[newStopName, order] = getSüdstern()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000068201":
				;[newStopName, order] = getTempelhof(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000026201":
        ;[newStopName, order] = getTheodorHeussPlatz()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000003104":
				;[newStopName, order] = getTurmstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000023301":
        ;[newStopName, order] = getUhlandstr()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000069271":
				;[newStopName, order] = getUllsteinstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100513":
				;[newStopName, order] = getUnterDenLinden(lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000007103":
				;[newStopName, order] = getVoltastr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000061101":
				;[newStopName, order] = getWaltherSchreiberPlatz()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120004":
				;[newStopName, order] = getWarschauerStr(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000120025":
				;[newStopName, order] = getWeberwiese()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000009104":
				;[newStopName, order] = getWedding(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000100051":
				;[newStopName, order] = getWeinmeisterstr()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000026207":
        ;[newStopName, order] = getWestend()
        newStop = { ...stop, name: newStopName }
        return { ...oldStopObject, stop: newStop, order }
			case "900000001201":
				;[newStopName, order] = getWesthafen(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
      case "900000024102":
        ;[newStopName, order] = getWestkreuz(lineName)
			case "900000070101":
				;[newStopName, order] = getWestphalweg()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000096101":
			case "900000096197":
				;[newStopName, order] = getWittenau(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000175001":
				;[newStopName, order] = getWuhletal(product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000057102":
			case "900000058103":
				;[newStopName, order] = getYorckstr(id, product)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000033101":
				;[newStopName, order] = getZitadelle()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000023201":
				;[newStopName, order] = getZoologischerGarten(product, lineName)
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			case "900000083101":
				;[newStopName, order] = getZwickauerDamm()
				newStop = { ...stop, name: newStopName }
				return { ...oldStopObject, stop: newStop, order }
			default:
				return oldStopObject
		}
	}
	return oldStopObject
}

module.exports = changeStationObject;