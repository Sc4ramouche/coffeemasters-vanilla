import { loadData } from "./services/Menu.js";
import Store from "./services/Store.js";

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
