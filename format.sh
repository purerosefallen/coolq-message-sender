#!/bin/bash
grep -oP '\d{5,}' tmp  | sed -e 's/^/  /g' -e 's/$/:/g' > output
