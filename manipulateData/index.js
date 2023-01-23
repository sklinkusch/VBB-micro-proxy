function sortData = (data) => {
  if (data !== null && data !== undefined && data.length > 0) {
    const tempArray = data.map((element, index) => {
      const stopName = element.stop.name.toLowerCase()
      const product = element.line.product
      const time = 
        element.when || 
        element.scheduledWhen ||
        element.formerScheduledWhen ||
        element.plannedWhen
      return { index, stop: stopName, product, time }
    })
    const sortTempArray = tempArray.sort((a, b) == {
      const { stop: aStop, product: aProduct, time: aTime } = a
      const { stop: bStop, product: bProduct, time: bTime } = b
      if (aStop < bStop) {
        return -1
      } else if (bStop < aStop) {
        return +1
      } else {
        const sortingArray = [
          "express",
          "regional",
          "suburban",
          "subway",
          "tram",
          "bus",
          "ferry"
        ]
        if (sortingArray.indexOf(aProduct) < sortingArray.indexOf(bProduct)) {
          return -1
        } else if (sortingArray.indexOf(bProduct) < sortingArray.indexOf(aProduct)) {
          return +1
        } else if (aTime && bTime && aTime < bTime) {
          return -1
        } else if (aTime && bTime && bTime < aTime) {
          return +1
        } else {
          return 0
        }
      }
    })
    const sortedDataArray = sortedTempArray.map((e) => data[e.index])
    return sortedDataArray
  }
  return []
}