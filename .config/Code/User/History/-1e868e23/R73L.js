const mpris = await Service.import("mpris")

const player = Widget.Box({
    class_name: "player-box",
    vertical: false,
    children: [
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.previous(),
            child: Widget.Label({label: "back"})
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.playPuase(),
            child: Widget.Label({label: "play"})
        }),
        Widget.Button({
            on_primary_click: () => mpris.getPlayer("")?.next(),
            child: Widget.Label({label: "skip"})
        })
    ]
})

export const extra_widget = Widget.Box({
    class_name: "extra-widget",
    child: player,
});


