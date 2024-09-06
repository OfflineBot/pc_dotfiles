
const ram = Variable("", {
    poll: [1000, 'bash', '-c', 'free -m | awk "/Mem:/ {printf \"%.2f GB\n\", \$3/1024}"']
});


function Date() {
    return Widget.Label({
        class_name: "date",
        label: date.bind()
        })
}

