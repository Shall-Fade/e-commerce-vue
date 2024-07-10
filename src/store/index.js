import { createStore } from "vuex";

const store = createStore({
  state: {
    articles: [
      {
        title: "Mauris at orci non vulputate diam tincidunt nec.",
        author: "Surf Auxion",
        date: "Aug 09 2020",
        smallDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
        categories: ["Hobbies", "Women"],
      },
      {
        title: "2 Mauris at orci non vulputate diam tincidunt nec.",
        author: "Surf Auxion",
        date: "Aug 09 2020",
        smallDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, ",
        categories: ["Hobbies", "Work"],
      },
    ],
    categories: ['Hobbies', 'Women', 'Men', 'Work', 'Study', 'Relax', 'Books', 'Travel'],
    openedArticle: "",
    openedCategory: "",
  },
  mutations: {
    OPEN_ARTICLE(state, openedArticle) {
      state.openedArticle = openedArticle;
    },
    OPEN_CATEGORY(state, openedCategory) {
      state.openedCategory = openedCategory;
    },
  },
});

export default store;
