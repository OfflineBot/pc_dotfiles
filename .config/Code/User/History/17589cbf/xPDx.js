
import { applauncher } from "./applauncher/applauncher.js";
import  { Bar } from "./modules/bar.js"

App.config({
    style: "./style.css",
    //style: "./applauncher.css",
    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        applauncher
    ],
})

export { }
