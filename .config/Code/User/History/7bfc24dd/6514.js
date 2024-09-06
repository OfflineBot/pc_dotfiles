
const ram = Variable("", {
    poll: [1000, 'bash', '-c', 'free -m | awk "/Mem:/ {printf \"%.2f GB\n\", \$3/1024}"']
});

function RAM() {
    return Widget.Label({
        class_name: "ram",
        label: ram.bind()
        })
}

export { RAM }