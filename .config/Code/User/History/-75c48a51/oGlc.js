
function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: Utils.execAsync('wlogout'),
        child: Widget.Label({ label: "P" })
    })
}