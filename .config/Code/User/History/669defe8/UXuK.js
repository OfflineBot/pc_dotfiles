const hyprland = await Service.import("hyprland")

function ClientTitle() {
    let title_name = hyprland.active.client.bind("title");
    title_name = title_name.slice(0, 20);
    let test = hyprland.active.client.title;
    console.log(test)
    return Widget.Label({
        class_name: "client-title",
        label: title_name,
    })
}

export { ClientTitle }