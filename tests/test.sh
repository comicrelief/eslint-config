#!/bin/bash
PATH="$PATH:$(pwd)/node_modules/bin"

count=0
passed=0
failed=0

report () {
  echo
  echo
  echo "---------- finished running $count tests ----------"
  echo
  if [ $failed = 0 ]; then
    echo -e "\x1b[1;32mAll tests passed\x1b[0m"
    echo
    exit 0
  else
    echo -e "\x1b[1;32m$passed passed\x1b[0m"
    echo -e "\x1b[1;31m$failed failed\x1b[0m"
    echo
    exit 1
  fi
}

expect_lint_passes () {
  dir=$1

  echo
  echo "---------- $dir ----------"
  eslint $dir
  if [ $? = 0 ]; then
    passed=$(( $passed + 1 ));
    echo -e "\x1b[32mPassed\x1b[0m"
  else
    failed=$(( $failed + 1 ));
    echo -e "\x1b[31mFailed\x1b[0m"
  fi
  count=$(( $count + 1 ));
}

expect_lint_passes tests/default
expect_lint_passes tests/typescript
expect_lint_passes tests/apidoc
expect_lint_passes tests/mocha
expect_lint_passes tests/jest
report
