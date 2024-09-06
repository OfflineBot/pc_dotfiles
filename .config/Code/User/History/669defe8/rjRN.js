const hyprland = await Service.import("hyprland")

function ClientTitle() {
    let title_name = hyprland.active.client.bind("title").emitter;
    console.log(title_name)
    return Widget.Label({
        class_name: "client-title",
        label: title_name,
    })
}

export { ClientTitle }