
function Icon(path_to_icon) {
    return Widget.Icon({
        icon: path_to_icon,
        size: 120,
    })
}

function btn_container(name, command, path_to_icon) {
    return Widget.Button({
        class_name: "logout-btn",
        on_clicked: () => Utils.exec(command),
        //tooltip_text: name,
        child: Widget.Box({
            vertical: true,
            children: [
                Icon(path_to_icon),
                Widget.Label({ label: name })
            ]
        })
    })
}

const row = Widget.CenterBox({
    class_name: "logout-boxes",
    start_widget: btn_container("Logout", "hyprctl dispatch exit", "/home/offlinebot/.config/ags/icons/logout.png"),
    center_widget: btn_container("Power Off", "systemctl poweroff", "/home/offlinebot/.config/ags/icons/shutdown.png"),
    end_widget: btn_container("Reboot", "reboot", "/home/offlinebot/.config/ags/icons/reboot.png")
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


