#!/bin/bash
count=0
passed=0
failed=0

report () {
  echo
  echo
  if [ $failed = 0 ]; then
    echo -e "\x1b[1;32mAll tests passed ($passed/$count)\x1b[0m"
  else
    echo -e "\x1b[1;32m$passed passed\x1b[0m"
    echo -e "\x1b[1;31m$failed failed\x1b[0m"
    exit 1
  fi
}

expect_lint_passes () {
  dir=$1

  echo
  echo "---------- $dir ----------"
  yarn eslint $dir
  if [ $? = 0 ]; then
    passed=$(( $passed + 1 ));
  else
    failed=$(( $failed + 1 ));
  fi
  count=$(( $count + 1 ));
}

expect_lint_passes tests/default
expect_lint_passes tests/typescript
expect_lint_passes tests/apidoc
expect_lint_passes tests/mocha
expect_lint_passes tests/jest
report
