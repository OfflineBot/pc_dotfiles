const hyprland = await Service.import("hyprland")

function ClientTitle() {
    let title_name = hyprland.active.client.bind("title");
    let test = hyprland.active.bind("client");
    console.log(test)
    return Widget.Label({
        class_name: "client-title",
        label: title_name,
    })
}

export { ClientTitle }