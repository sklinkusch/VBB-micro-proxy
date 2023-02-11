const filterProducts = (data, products) => {
  if (typeof products === "string" && String.length === 7) {
    const productsArray = products.split("");
    const modProductsArray = productsArray.map((item) => {
      return item === "1" ? true : false;
    });
    const keysArray = [
      "express",
      "regional",
      "suburban",
      "subway",
      "tram",
      "bus",
      "ferry"
    ];
    const productsObject = modProductsArray.reduce((acc, curr, index) => {
      const obj = { ...acc };
      obj[keysArray[index]] = curr;
      return obj;
    }, {});
    const trueProducts = Object.keys(productsObject).filter(
      (item) => productsObject[item]
    );
    const returnData = data.filter((dataset) => {
      const currentProduct = dataset.line.product;
      return trueProducts.includes(currentProduct);
    });
    return returnData;
  } else {
    return data;
  }
};

const lineFilter = (data, lines) => {
  const lineArray = lines.split(",");
  const smallLineArray = lineArray.map((singleLine) =>
    singleLine.toLowerCase()
  );
  if (smallLineArray.length > 0) {
    const returnData = data.filter((dataset) => {
      const currentLine = dataset.line.name.toLowerCase();
      return smallLineArray.includes(currentLine);
    });
    return returnData;
  } else {
    return data;
  }
};

module.exports = { filterProducts, lineFilter };
