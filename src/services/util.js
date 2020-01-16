export const formatPrice = (x, currency) => {
  switch (currency) {
    case 'BRL':
      return x.toFixed(2).replace('.', ',');
    default:
      return x.toFixed(2);
  }
};

export const productsAPI =
  'https://api.myjson.com/bins/qzuzi.json';
// export const productsAPI = "http://localhost:8001/api/products";
