
function power_off() {
    return Widget.Button({
        class_name: "power",
        onClicked: () => Utils.exec('wlogout'),
        child: Widget.Label({ label: "\uf011" })
    })
}

export { power_off }