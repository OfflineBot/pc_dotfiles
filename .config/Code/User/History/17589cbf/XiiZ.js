
import { applauncher } from "./applauncher/applauncher.js";
import  { Bar } from "./bar/bar.js"
import { logout } from "./logout/logout.js"
import { quick_menu } from "./quick_menu/quick_menu.js";

App.config({
    style: "./style/style.css",

    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        applauncher,
        logout,
        quick_menu
    ],
})


export { }
