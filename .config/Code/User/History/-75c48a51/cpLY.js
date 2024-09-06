
function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: Utils.exec('wlogout'),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }