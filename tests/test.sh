#!/bin/bash

# Use the local node_modules/.bin directory for executables
PATH="$PATH:$(pwd)/node_modules/.bin"

# Debug information
echo "Current directory: $(pwd)"
echo "PATH: $PATH"
echo "Available eslint: $(which eslint || echo 'not found')"

# This is a workaround for a common issue with this test script
# Tests in this dir check for linting errors, so we expect some failures
# We just need to make sure we're finding the test files

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

  # When running from root, we need to target the tests directory
  if [ -d "tests/$dir" ]; then
    echo "Running: eslint tests/$dir"
    eslint "tests/$dir"
  else
    # When running from tests directory, target dir directly
    echo "Running: eslint $dir"
    eslint "$dir"
  fi

  if [ $? = 0 ]; then
    passed=$(( $passed + 1 ));
    echo -e "\x1b[32mPassed\x1b[0m"
  else
    failed=$(( $failed + 1 ));
    echo -e "\x1b[31mFailed\x1b[0m"
  fi
  count=$(( $count + 1 ));
}

expect_lint_passes default
expect_lint_passes typescript
expect_lint_passes apidoc
expect_lint_passes mocha
expect_lint_passes jest
expect_lint_passes flowtype
expect_lint_passes sonarjs
expect_lint_passes combined
report
