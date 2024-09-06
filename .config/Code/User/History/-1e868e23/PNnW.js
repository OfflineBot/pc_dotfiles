const mpris = await Service.import("mpris")

const player = Widget.Box({
    class_name: "player-box",
    vertical: false,
    children: [
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.previous(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/back.png", icon_size: 90 })
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.playPause(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/playpause.png", icon_size: 90 })
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.next(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/next.png", icon_size: 90 })
        })
    ]
})

export const extra_widget = Widget.Box({
    class_name: "extra-widget",
    child: player,
});


