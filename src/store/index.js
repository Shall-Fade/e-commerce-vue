import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [
      {
        title: "Vel elit euismod",
        code: "Y523201",
        brand: "Coaster Furniture",
        categories: ["watches", "Accessories", "Chair"],
        color: "Grey",
        newPrice: 26.00,
        oldPrice: 42.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 3,
        isFavorite: false,
      },
      {
        title: "Iphone XS Max",
        code: "C534223",
        brand: "Apple",
        categories: ["Accessories", "Phone"],
        color: "Black",
        newPrice: 499.00,
        oldPrice: 599.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 5,
        isFavorite: false,
      },
      {
        title: "Apple Watch",
        code: "A323101",
        brand: "Apple",
        categories: ["Accessories", "Watches"],
        color: "Grey",
        newPrice: 126.00,
        oldPrice: 342.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 4,
        isFavorite: false,
      },
      {
        title: "Macbook",
        code: "A144123",
        brand: "Apple",
        categories: ["Notebooks"],
        color: "Gold",
        newPrice: 999.00,
        oldPrice: 1200.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 4,
        isFavorite: false,
      },
      {
        title: "Iphone Case",
        code: "G159302",
        brand: "My case",
        categories: ["Accessories"],
        color: "Brown",
        newPrice: 9.00,
        oldPrice: 15.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 2,
        isFavorite: false,
      },
    ],
    articles: [
      {
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        author: "Surf Auxion",
        date: "Aug 09 2020",
        smallDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
        categories: ["Hobbies", "Women"],
      },
      {
        title: "2 Mauris at orci non vulputate diam tincidunt nec.",
        author: "Surf Auxion",
        date: "Aug 09 2020",
        smallDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
        categories: ["Hobbies", "Work"],
      },
    ],
    cart: [
      {
        title: "Iphone XS Max",
        code: "C534223",
        brand: "Apple",
        categories: ["Accessories", "Phone"],
        color: "Black",
        newPrice: 499.00,
        oldPrice: 599.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 5,
        isFavorite: false,
        quantity: 1,
      },
      {
        title: "Apple Watch",
        code: "A323101",
        brand: "Apple",
        categories: ["Accessories", "Watches"],
        color: "Grey",
        newPrice: 126.00,
        oldPrice: 342.00,
        img: "/images/product-img.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
        score: 5,
        isFavorite: false,
        quantity: 4,
      },
    ],
    wishlist: [],
    categories: [
      "Hobbies",
      "Women",
      "Men",
      "Work",
      "Study",
      "Relax",
      "Books",
      "Travel",
    ],
    openedArticle: "",
    openedCategory: "",
    openedProduct: "",
    productView: 'grid',
    productName: '',
    isVisibleModal: false,
  },
  mutations: {
    OPEN_ARTICLE(state, openedArticle) {
      state.openedArticle = openedArticle;
    },
    OPEN_CATEGORY(state, openedCategory) {
      state.openedCategory = openedCategory;
    },
    OPEN_PRODUCT(state, openedProduct) {
      state.openedProduct = openedProduct;
    },
    TOGGLE_PRODUCT_VIEW(state, productView) {
      state.productView = productView;
    },
    TOGGLE_MODAL(state, isVisibleModal) {
      state.isVisibleModal = isVisibleModal;
    },
    ADD_PRODUCT_NAME(state, productName) {
      state.productName = productName;
    },
  },
});

export default store;
