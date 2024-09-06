

function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: () => Utils.exec('ags -t "logout"'),
        child: Widget.Label({ label: "\uf011" })
    })
}

export { power_off }
