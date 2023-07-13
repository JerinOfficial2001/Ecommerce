const { useSelector } = require("react-redux");

export function filterNavItems(type) {
  const items = useSelector((state) => state.products.items);

  const filterdProducts = items?.filter((i) => i.array === type);
  return filterdProducts;
}
