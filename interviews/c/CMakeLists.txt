cmake_minimum_required(VERSION 3.10)
project(InterviewC C)

enable_testing()

include_directories(src)

# Create library from source
add_library(solution src/solution.c)

# Create test executable
add_executable(test_solution tests/test_solution.c)
target_link_libraries(test_solution solution)

# Register test
add_test(NAME TestSolution COMMAND test_solution)
