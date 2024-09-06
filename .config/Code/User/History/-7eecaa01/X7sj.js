
const date = Variable("", {
    poll: [1000, 'date "+%H:%M:%S %b %e."'],
})

function Clock() {
    return Widget.Label({
        class_name: "clock",
        label: date.bind(),
    })
}
