
const ram = Variable("", {
    poll: [1000, '/home/offlinebot/.config/ags/scripts/ram.sh']
});

const cpu = Variable("", {
    poll: [1000, '/home/offlinebot/.config/ags/scripts/cpu.sh']
});

function RAM() {
    return Widget.Label({
        class_name: "ram",
        label: ram.bind()
        })
}

export { RAM }