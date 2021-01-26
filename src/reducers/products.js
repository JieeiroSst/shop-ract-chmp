import data from "../data/data.json";

const initalSate = data;

const products = (state = initalSate, action) => {
  switch (action) {
    default:
      return [...state];
  }
};

export default products;
