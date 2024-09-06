
function power_off() {
    return Widget.Button({
        class_name: "power",
        onClicked: () => Util.exec('wlogout'),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }