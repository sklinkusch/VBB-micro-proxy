const filterProducts = (data, products) => {
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
};

module.exports = filterProducts;
