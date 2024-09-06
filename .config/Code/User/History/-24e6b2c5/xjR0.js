
function logout() {
    console.log("hello")
    //Utils.exec('ags -t logout')
    //Utils.exec('wlogout')
}

function power_off() {
    return Widget.Button({
        class_name: "power",
        on_primary_click: () => logout,
        child: Widget.Label({ label: "\uf011" })
    })
}

export { power_off }
