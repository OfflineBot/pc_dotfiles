
const date = Variable("", {
    poll: [1000, 'date "+%H:%M:%S | %d. %b. %Y"'],
})

function Date() {
    return Widget.Label({
        class_name: "date",
        label: date.bind()
        })
}

function Clock() {
    return Widget.Label({
        class_name: "clock",
        label: date.bind(),
    })
}

export { Clock }
