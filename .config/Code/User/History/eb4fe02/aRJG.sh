#!/bin/bash

free -m | awk "/Mem:/ {printf \"%.2fGB\n\", \$3/1024}"
