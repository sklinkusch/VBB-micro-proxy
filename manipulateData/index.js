const sortData = (data) => {
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

const splitArray = async (data) => {
  if (data !== undefined && data.length > 0) {
    const dataModified = data.map((e) => {
      const newStopObject = changeStopObject(mode, e)
      return newStopObject
    })
    const stopsRaw = await dataModified.map((e) => ({
			name: e.stop.name,
			order: e.order,
		}))
    const intermediateArray = await stopsRaw.reduce(
			(acc, item) => {
				const arr = acc.slice()
				const i = arr.findIndex(
					(x) => x.name === item.name && x.order === item.order
				)
				if (i <= -1) arr.push(item)
					return arr
			},
			[]
		)
    const stopsContracted = await intermediateArray.sort((a, b) => {
			const { name: aName, order: aOrder } = a
			const { name: bName, order: bOrder } = b
			if (
				typeof aOrder === "number" &&
				typeof bOrder === "number" &&
				aOrder < bOrder
			)
				return -1
			if (
				typeof aOrder === "number" &&
				typeof bOrder === "number" &&
				bOrder < aOrder
			)
				return +1
			if (
				typeof aName === "string" &&
				typeof bName === "string" &&
				aName.toLowerCase() < bName.toLowerCase()
			)
				return -1
			if (
				typeof bName === "string" &&
				typeof aName === "string" &&
				bName.toLowerCase() < aName.toLowerCase()
			)
				return +1
			return 0
		})
    const resultArray = await dataModified.reduce(
			(acc, curr) => {
				const arr = [...acc]
				const index = stopsContracted.findIndex(
					(x) => x.name === curr.stop.name && x.order === curr.order
			  )
				if (Array.isArray(arr[index])) {
					arr[index].push(curr)
				} else {
					arr[index] = [curr]
				}
				return arr
			},
			[]
		)
		if ((await resultArray.length) > 0) {
			return await resultArray
		}
  }
}

const sortCompressedArray = (compressedData) => {
		return compressedData.sort((a, b) => {
			const aOrder = a[0].order || undefined
			const bOrder = b[0].order || undefined
			const aStop =
				typeof a[0].stop.name === "string" ? a[0].stop.name.toLowerCase() : ""
			const bStop =
				typeof b[0].stop.name === "string" ? b[0].stop.name.toLowerCase() : ""
			if (typeof aOrder === "number" && typeof bOrder === "undefined") {
				return -1
			} else if (typeof aOrder === "undefined" && typeof bOrder === "number") {
				return +1
			} else if (typeof aOrder === "number" && typeof bOrder === "number") {
				return aOrder - bOrder
			} else if (aStop < bStop) {
				return -1
			} else if (bStop < aStop) {
				return +1
			} else {
				return 0
			}
		})
	}

	exports.fetchData = async () => {
			const sortedData = await sortData(data)
			const compressedData =
				sortedData && typeof sortedData === "object"
					? await splitArray(await sortedData)
					: []
			const sortedCompressedData =
				typeof compressedData === "object" &&
				Array.isArray(compressedData) &&
				(await compressedData.length) >= 1
					? await sortCompressedArray(await compressedData)
					: []
			return await sortedCompressedData
		}