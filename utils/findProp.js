export const findProp = (data, identifier) => {
  const item = data.find((item) => item.id === identifier);
  return item;
};
