#!/bin/bash
set -euo pipefail

echo "========================================"
echo "RUNNING ALL INTERVIEW TESTS"
echo "========================================"

# Python
if [ -f "python/pyproject.toml" ]; then
    if command -v pytest &> /dev/null; then
        echo -e "\n[PYTHON] Running pytest..."
        (cd python && pytest)
    else
        echo -e "\n[PYTHON] Skipping (pytest not found)"
    fi
else
    echo -e "\n[PYTHON] Skipping (no project)"
fi

# Java
if [ -f "java/pom.xml" ]; then
    if command -v mvn &> /dev/null; then
        echo -e "\n[JAVA] Running Maven tests..."
        (cd java && mvn test -q)
    else
        echo -e "\n[JAVA] Skipping (mvn not found)"
    fi
else
    echo -e "\n[JAVA] Skipping (no project)"
fi

# JS / TS
if [ -f "package.json" ]; then
    if command -v npm &> /dev/null; then
        echo -e "\n[JS/TS] Running Vitest..."
        npm test
    else
        echo -e "\n[JS/TS] Skipping (npm not found)"
    fi
else
    echo -e "\n[JS/TS] Skipping (no project)"
fi

# C
if [ -d "c" ]; then
    if command -v cmake &> /dev/null; then
        echo -e "\n[C] Building & Running C tests..."
        mkdir -p c/build
        (cd c/build && cmake .. -DCMAKE_BUILD_TYPE=Debug && make && ctest --output-on-failure)
    else
        echo -e "\n[C] Skipping (cmake not found)"
    fi
else
    echo -e "\n[C] Skipping (no directory)"
fi

# C++
if [ -d "cpp" ]; then
    if command -v cmake &> /dev/null; then
        echo -e "\n[CPP] Building & Running C++ tests..."
        mkdir -p cpp/build
        (cd cpp/build && cmake .. -DCMAKE_BUILD_TYPE=Debug && make && ctest --output-on-failure)
    else
        echo -e "\n[CPP] Skipping (cmake not found)"
    fi
else
    echo -e "\n[CPP] Skipping (no directory)"
fi

echo -e "\n========================================"
echo "DONE"
echo "========================================"
