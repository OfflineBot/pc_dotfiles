const mpris = await Service.import("mpris")
const SIZE = 24;

const player = Widget.Box({
    class_name: "player-box",
    vertical: false,
    children: [
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.previous(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/back.png", icon_size: SIZE })
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.playPause(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/playpause.png", icon_size: SIZE })
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.next(),
            child: Widget.Icon({ icon: App.configDir + "/icons/light/next.png", icon_size: SIZE })
        })
    ]
})

export const extra_widget = Widget.Box({
    class_name: "extra-widget",
    child: player,
});


