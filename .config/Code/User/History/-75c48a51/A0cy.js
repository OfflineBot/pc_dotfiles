
function off() {
    Utils.exec('wlogout');
}

function power_off() {
    return Widget.Button({
        class_name: "power",
        onClicked: () => off(),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }