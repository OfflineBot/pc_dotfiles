const mpris = await Service.import("mpris")

function Icon(path_to_icon, icon_size) {
    return Widget.Icon({
        icon: path_to_icon,
        size: icon_size,
    })
}

const player = Widget.Box({
    class_name: "player-box",
    vertical: false,
    children: [
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.previous(),
            child: Icon(App.configDir + "/icons/light/back.png", 40)
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.playPause(),
            child: Icon(App.configDir + "/icons/light/playpause.png", 40)
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.next(),
            child: Icon(App.configDir + "/icons/light/next.png", 40)
        })
    ]
})

export const extra_widget = Widget.Box({
    class_name: "extra-widget",
    child: player,
});


