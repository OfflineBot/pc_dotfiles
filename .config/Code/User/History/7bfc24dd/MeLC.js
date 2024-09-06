
const ram = Variable("", {
    poll: [1000, `free -m | awk '/Mem:/ {printf "%.2fGB\n", $3/1024}'`]
});

const cpu = Variable("", {
    poll: [1000, `top -bn1 | grep "Cpu(s)" | awk '{print 100 - $8"%"}'`]
});

function CPU() {
    return Widget.Label({
        class_name: "cpu",
        label: cpu.bind()
        })
}

function RAM() {
    return Widget.Label({
        class_name: "ram",
        label: ram.bind()
        })
}


export { CPU, RAM }