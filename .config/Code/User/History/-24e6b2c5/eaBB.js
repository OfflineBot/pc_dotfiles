
function logout() {
    //Utils.exec('ags -t logout')
    console.log("logout")
    Utils.exec('wlogout')
}

function power_off() {
    return Widget.Button({
        class_name: "power",
        onClicked: () => logout,
        child: Widget.Label({ label: "\uf011" })
    })
}

export { power_off }
