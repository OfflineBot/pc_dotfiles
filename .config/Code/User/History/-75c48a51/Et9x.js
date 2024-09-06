
function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: Utils.execAsync('bash', '-c', 'wlogout'),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }