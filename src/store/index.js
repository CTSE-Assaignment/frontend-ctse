import { proxy } from "valtio";

const state = proxy({
  currentUser: null,
  activeIndex: 1,
});

export default state;
