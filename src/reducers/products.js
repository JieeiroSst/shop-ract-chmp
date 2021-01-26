const initalSate = [
  {
    id: 1,
    name: "Iphone 7 plus",
    image: "https://i.ibb.co/ncn8GhL/iphone-12-pro-gold-hero.jpg",
    description: "dien thoai iphone",
    price: 500,
    inventory: 10,
    raiting: 4,
  },
];

const products = (state = initalSate, action) => {
  switch (action) {
    default:
      return [...state];
  }
};

export default products;
