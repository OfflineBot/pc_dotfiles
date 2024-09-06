const systemtray = await Service.import("systemtray")

function SysTray() {
    const items = systemtray.bind("items")
        .as(items => items.map(item => Widget.Button({
            class_name: "tray-btn",
            child: Widget.Icon({ icon: item.bind("icon") }),
            on_primary_click: (_, event) => item.activate(event),
            on_secondary_click: (_, event) => item.openMenu(event),
            tooltip_markup: item.bind("tooltip_markup"),
        })))

    return Widget.Box({
        children: items,
    })
}

export { SysTray }