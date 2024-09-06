function CPU() {
    return Widget.Label({
        class_name: "cpu",
        //label: cpu.bind()
        })
}

function RAM() {
    return Widget.Label({
        class_name: "ram",
        //label: ram.bind()
        })
}


export { CPU, RAM }