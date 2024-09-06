import { cpu, ram } from "../bar/hardware.js";
import { time, date } from "../bar/clock.js";


const NAME = "menu"

function Icon(path_to_icon, icon_size) {
    return Widget.Icon({
        icon: path_to_icon,
        size: icon_size,
    })
}

function btn_container(name, command, path_to_icon, icon_size) {
    return Widget.Button({
        class_name: "quick-logout-btn",
        on_clicked: () => Utils.exec(command),
        //tooltip_text: name,
        child: Widget.Box({
            vertical: true,
            children: [
                Icon(path_to_icon, icon_size),
                //Widget.Label({ label: name })
            ]
        })
    })
}

const row = (icon_size) => {
    return Widget.CenterBox({
        class_name: "quick-logout-boxes",
        start_widget: btn_container("Logout", "hyprctl dispatch exit", "/home/offlinebot/.config/ags/icons/logout.png", icon_size),
        center_widget: btn_container("Power Off", "systemctl poweroff", "/home/offlinebot/.config/ags/icons/shutdown.png", icon_size),
        end_widget: btn_container("Reboot", "reboot", "/home/offlinebot/.config/ags/icons/reboot.png", icon_size)
    })
}

const logout = Widget.Box({
    child: row(60),
})

const time_label = Widget.Label({
    label: time.bind()
})

const date_label = Widget.Label({
    label: date.bind()
})

const time_info = Widget.Box({
    vertical: true,
    children: [
        time_label,
        date_label,
    ]
});

const system_info = Widget.Box({
    vertical: false,
    class_name: "quick-system",
    children: [
        Widget.Label({
            class_name: "quick-cpu",
            label: cpu.bind(),
        }),
        Widget.Label({
            class_name: "quick-ram",
            label: ram.bind(),
        })
    ]
})

const app = (name, execute) => {
    return Widget.Button({
        class_name: "quick-app-btn",
        on_clicked: () => {
            Utils.execAsync(execute);
            App.closeWindow(NAME);
        },
        child: Widget.Label({ label: name })
    })
}

const apps = Widget.Box({
    vertical: false,
    class_name: "quick-apps",
    children: [
        app("Terminal", "/home/offlinebot/.config/ags/scripts/app1.sh"),
        app("Discord", "/home/offlinebot/.config/ags/scripts/app2.sh"),
        app("Firefox", "/home/offlinebot/.config/ags/scripts/app3.sh")
    ]
});

const container = Widget.Box({
    vertical: true,
    class_name: "quick-main",
    children: [
        apps,
        time_info, 
        system_info,
        logout,
    ]
});

export const quick_menu = Widget.Window({
    name: NAME,
    //monitor: 2,
    setup: self => self.keybind("Escape", () => {
        App.closeWindow(NAME)
    }),
    visible: false,
    css: "border: 1px solid white;",
    margins: [50, 0, 0, 50],
    class_name: "quick_menu",
    anchor: ["top", "left"],
    keymode: "exclusive",
    child: container,
});