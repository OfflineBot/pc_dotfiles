
const ram = Variable("", {
    poll: [5000, '/home/offlinebot/.config/ags/scripts/ram.sh']
});

const cpu = Variable("", {
    poll: [5000, '/home/offlinebot/.config/ags/scripts/cpu.sh']
});

function RAM() {
    return Widget.Label({
        class_name: "ram",
        label: ram.bind()
        })
}

function CPU() {
    return Widget.Label({
        class_name: "cpu",
        label: cpu.bind()
    })
}

export { RAM, CPU }