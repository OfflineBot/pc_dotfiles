const hyprland = await Service.import("hyprland")

function ClientTitle() {
    let title_name = hyprland.active.client.bind("title");
    let test = hyprland.active.client.title;
    console.log(test)
    return Widget.Label({
        class_name: "client-title",
        label: test,
    })
}

export { ClientTitle }