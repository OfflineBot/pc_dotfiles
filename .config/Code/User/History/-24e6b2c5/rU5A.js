
function logout() {
    //Utils.exec('ags -t logout')
    Utils.exec('wlogout')
}

function power_off() {
    return Widget.Button({
        class_name: "power",
        on_clicked: () => logout,
        child: Widget.Label({ label: "\uf011" })
    })
}

export { power_off }
