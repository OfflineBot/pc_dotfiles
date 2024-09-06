
import { power_off, Date, Clock, ClientTitle, Media, Notification, SysTray, Volume, Workspaces } from "./modules/modules.js"

function Left() {
    return Widget.Box({
        spacing: 8,
        children: [
            Workspaces(),
            ClientTitle(),
        ],
    })
}

function Center() {
    return Widget.Box({
        spacing: 8,
        children: [
            Media(),
            Notification(),
        ],
    })
}

function Right() {
    return Widget.Box({
        hpack: "end",
        spacing: 8,
        children: [
            //Volume(),
            Clock(),
            Date(),
            power_off(),
            //SysTray(),
        ],
    })
}

const label = Widget.Label({
    label: "test"
})

function Test(monitor) {
    return Widget.Window({
        visible: false,
        name: "test",
        class_name: "test",
        monitor: 2,
        child: label
    })
}

function Bar(monitor) {
    let my_name = "bar-" + String(monitor);
    console.log(my_name);
    return Widget.Window({
        name: my_name,
        class_name: "bar",
        keymode: 'on-demand',
        monitor: monitor,
        //margins: [5, 5, 5, 5],
        anchor: ["top", "left", "right"],
        exclusivity: "exclusive",
        child: Widget.CenterBox({
            class_name: "bar-content",
            start_widget: Left(),
            center_widget: Center(),
            end_widget: Right(),
        }),
    })
}


App.config({
    style: "./style.css",
    windows: [
        Bar(0),
        Bar(1),
        Bar(2),
        Test()
    ],
})

export { }
