const mpris = await Service.import("mpris")

const player = Widget.Box({
    class_name: "player-box",
    vertical: false,
    children: [
        Widget.Button({
            child: Widget.Label({label: "back"})
        }),
        Widget.Button({
            child: Widget.Label({label: "play"})
        }),
        Widget.Button({
            child: Widget.Label({label: "skip"})
        })
    ]
})

export const extra_widget = Widget.Box({
    class_name: "extra-widget",
    child: player,
});


