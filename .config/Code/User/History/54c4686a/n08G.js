import { cpu, ram, disk } from "../bar/hardware.js";

const NAME = "stats";

const stat = (stat_name, stat_value, class_name, hex_color) => {
    return Widget.Box({
        vertical: false,
        class_name: "stat-box",
        children: [
            Widget.Label({label: stat_name, class_name: class_name, css: `color: ${hex_color};`}),
            Widget.Label({label: stat_value, class_name: class_name, css: `color: ${hex_color};`})
        ]
    });
}

const stats = Widget.Box({
    vertical: true,
    children: [
        stat("CPU", cpu.bind(), "stat-cpu", "#00ff00"),
        stat("RAM", cpu.bind(), "stat-ram", "#ff0000"),
        stat("RAM", cpu.bind(), "stat-disk", "#0000ff"),
    ]
})

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
    anchor: ["top", "right"],
    keymode: "exclusive",
    child: main_menu,
})

