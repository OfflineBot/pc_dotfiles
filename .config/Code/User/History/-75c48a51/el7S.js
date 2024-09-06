
function off() {
    Utils.exec('wlogout');
}

function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: off(),
        child: Widget.Label({ label: "P" })
    })
}

export { power_off }