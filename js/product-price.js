window.formatProductPrice = function (product) {
  if (!product?.price) {
    return { main: "Price on request", isRequest: true };
  }
  const currency = product.currency || "EUR";
  const symbol = currency === "EUR" ? "€" : "¥";
  return {
    main: `Wholesale ${symbol}${product.price}`,
    isRequest: false,
  };
};
