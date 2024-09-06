const hyprland = await Service.import("hyprland")

function ClientTitle() {
    let title_name = hyprland.active.client.bind("titel");
    return Widget.Label({
        class_name: "client-title",
        label: title_name.slice((0, 20 - 3) + '...'),
    })
}

export { ClientTitle }