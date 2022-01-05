function sortBySize(products) {
  let sizesSM = []
  let sizesLXL = []
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].length; j++) {
      if (products[i][j].size === 'S'|| products[i][j].size === 'M') {
        sizesSM.push(products[i][j]);
      } else {
        sizesLXL.push(products[i][j]);
      }
    }
  } return { sizesSM: sizesSM, sizesLXL: sizesLXL}
}