
const ram = Variable("", {
    poll: [1000, `free -m | awk '/Mem:/ {printf "%.2fGB\n", $3/1024}'`]
});

const cpu = Variable("", {
    poll: [1000, ``]
})