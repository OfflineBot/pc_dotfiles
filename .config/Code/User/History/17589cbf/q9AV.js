
import { applauncher } from "./windows/applauncher/applauncher.js";
import  { Bar } from "./windows/bar/bar.js"
import { logout } from "./windows/logout/logout.js"
import { quick_menu } from "./windows/quick_menu/quick_menu.js";

App.config({
    //style: "./style/style.css",

    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        applauncher,
        logout,
        quick_menu
    ],
})

App.applyCss(App.configDir + "/style/bar.css");
App.applyCss(App.configDir + "/style/logout.css");
App.applyCss(App.configDir + "/style/colors.css");
App.applyCss(App.configDir + "/style/app.css");


export { }
