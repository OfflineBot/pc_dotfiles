
import { applauncher } from "./applauncher/applauncher.js";
import  { Bar } from "./bar/bar.js"
import { logout } from "./logout/logout.js"

App.config({
    style: "./style.css",
    //style: "./applauncher.css",
    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        applauncher,
        logout
    ],
})

export { }
