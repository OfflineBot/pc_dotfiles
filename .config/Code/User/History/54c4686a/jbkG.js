const NAME = "stats";

const stat = (stat_name, stat_value, class_name, hex_color) => {
    return Widget.Box({
        class_name: "stat-box",
        children: [
            Widget.Label({label: stat_name, class_name: class_name}),
            Widget.Label({label: stat_value, class_name: class_name})
        ]
    });
}

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

