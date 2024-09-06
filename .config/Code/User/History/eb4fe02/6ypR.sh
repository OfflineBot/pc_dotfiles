#!/bin/bash

free -m | awk "/Mem:/ {printf \"%.2f GB\n\", \$3/1024}"
