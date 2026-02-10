# Multi-Language Interview Workspace

This workspace is designed for solving interview problems in Python, Java, C, C++, JavaScript, and TypeScript with a unified testing structure.

## Structure

- **python/**: `src/` for code, `tests/` for pytest.
- **java/**: Standard Maven structure (`src/main/java`, `src/test/java`).
- **c/**: CMake project. `src/` for code, `tests/` for simple assert-based tests.
- **cpp/**: CMake project with Catch2 (automatically downloaded). `src/` for code, `tests/` for tests.
- **js/**: `src/` and `tests/`. Runs with Vitest.
- **ts/**: `src/` and `tests/`. Runs with Vitest.

## Prerequisites

- Node.js (for JS/TS)
- Python 3 & pip (pytest)
- Java & Maven
- CMake & Make, GCC/Clang (for C/C++)

## Setup

First time setup:

1. **JavaScript / TypeScript**:

   ```bash
   npm install
   ```

2. **Python**:
   It is recommended to use a virtual environment:

   ```bash
   cd python
   python3 -m venv .venv
   source .venv/bin/activate
   pip install pytest
   cd ..
   ```

3. **Scripts**:
   ```bash
   chmod +x scripts/test_all.sh
   ```

## Running Tests

### Run EVERYTHING

```bash
# Ensure you have activated your python venv if needed
# source python/.venv/bin/activate
./scripts/test_all.sh
```

### Run Specific Languages

**JavaScript / TypeScript:**

```bash
npm test        # All JS/TS
npm run test:js # Only JS
npm run test:ts # Only TS
```

**Python:**

```bash
cd python
# source .venv/bin/activate
pytest
```

**Java:**

```bash
cd java
mvn test
```

**C:**

```bash
cd c
mkdir -p build && cd build
cmake .. && make
ctest
```

**C++:**

```bash
cd cpp
mkdir -p build && cd build
cmake .. && make
ctest
```

## Troubleshooting

### Java Version Issue (Codespaces)

`mvn` might default to Java 11. To fix this:

1.  Set `JAVA_HOME` to the Java 17 path:
    ```bash
    export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
    ```
2.  Add it to PATH:
    ```bash
    export PATH=$JAVA_HOME/bin:$PATH
    ```
3.  Verify:
    ```bash
    mvn -version
    ```
    (It should now say "Java version: 17...")
