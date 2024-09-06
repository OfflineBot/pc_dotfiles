
function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: Utils.subprocess(
            ['bash', '-c', '/home/offlinebot/.config/ags/scripts/logout.sh'],
        ),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }