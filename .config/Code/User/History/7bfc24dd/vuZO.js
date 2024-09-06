
const ram = Variable("", {
    poll: [1000, "free -m | awk '/Mem:/ {printf "%.2f GB\n", $3/1024}'
"]
});