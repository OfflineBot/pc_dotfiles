
const hyprland = await Service.import("hyprland")

function Workspaces() {
    const activeId = hyprland.active.workspace.bind("id")
    const workspaces = hyprland.bind("workspaces")
        .as(ws => ws
            .sort((a, b) => a.id - b.id)
            .map(({ id }) => Widget.Button({
            on_clicked: () => hyprland.messageAsync(`dispatch workspace ${id}`),
            child: Widget.Label(`${id}`),
            class_name: activeId.as(i => `${i === id ? "workspace-btn focused" : "workspace-btn"}`),
        })))

    return Widget.Box({
        class_name: "workspaces",
        children: workspaces,
    })
}

export { Workspaces }