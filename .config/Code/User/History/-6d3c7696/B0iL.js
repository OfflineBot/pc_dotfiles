
function icon(path_to_icon) {
    return Widget.Icon({
        icon: path_to_icon,
        size: 42,
    })
}

function btn_container(name, command, path_to_icon) {
    return Widget.Box({
        class_name: "logout-btn-container",
        child: Widget.Button({
            class_name: "logout-btn",
            label: name,
            onClicked: () => Utils.exec(command),
            child: icon(path_to_icon)
        })
    })
}

const row = Widget.CenterBox({
    class_name: "logout-boxes",
    start_widget: btn_container("Logout", "hyprctl dispatch exit"),
    center_widget: btn_container("Power Off", "systemctl poweroff"),
    end_widget: Widget.Icon({
        icon: "/home/offlinebot/.config/ags/icons/logout.png",
        size: 20,
    })
})

const container = Widget.Box({
    spacing: 8,
    vertical: true,
    children: [
        row,
    ]
})

export const logout = Widget.Window({
    name: "logout",
    monitor: 2,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow("logout")
    }),
    visible: false,
    class_name: "logout",
    css: "border-radius: 8px;",
    keymode: "exclusive",
    child: container
})


