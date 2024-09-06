import { time_widget } from "./modules/time.js";
import { power_widget } from "./modules/logout.js";
import { app_widget } from "./modules/apps.js";
import { extra_widget } from "./modules/extra.js";
import { folders_widget } from "./modules/folders.js";
import { pcinfo_widget } from "./modules/pc_info.js";

const NAME = "menu";

const time_power_connector = Widget.Box({
    class_name: "time-power-connector",
    vertical: false,
    children: [
        time_widget,
        power_widget(20)
    ]
});

const main_menu = Widget.Box({
    vertical: true,
    class_name: "menu-box",
    children: [
        time_power_connector,
        pcinfo_widget,
        app_widget(NAME),
        extra_widget,
        folders_widget,
    ]
});

export const menu = Widget.Window({
    name: NAME,
    class_name: "menu-window",
    //monitor: 2,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(NAME)
    }),
    visible: false,
    margins: [15, 15, 0, 15],
    class_name: "quick_menu",
    anchor: ["top", "left"],
    keymode: "exclusive",
    child: Widget.Box({
        class_name: "menu-background",
        child: main_menu
    })
})
