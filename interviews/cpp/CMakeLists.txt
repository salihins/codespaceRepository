cmake_minimum_required(VERSION 3.14)
project(InterviewCPP CXX)

include(FetchContent)

FetchContent_Declare(
  Catch2
  GIT_REPOSITORY https://github.com/catchorg/Catch2.git
  GIT_TAG        v3.4.0
)

FetchContent_MakeAvailable(Catch2)

enable_testing()

include_directories(src)

add_library(solution_cpp src/solution.cpp)

add_executable(test_solution_cpp tests/test_solution.cpp)
target_link_libraries(test_solution_cpp solution_cpp Catch2::Catch2WithMain)

include(CTest)
include(Catch)
catch_discover_tests(test_solution_cpp)
