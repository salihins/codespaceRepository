#include "../src/solution.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

void test(const char *input, const char *expected) {
  char buffer[1024];
  count(input, buffer);
  if (strcmp(buffer, expected) != 0) {
    printf("FAILED: input='%s', expected='%s', got='%s'\n", input, expected,
           buffer);
    assert(0);
  }
}

void test_error(const char *input) {
  char buffer[1024];
  count(input, buffer);
  if (strncmp(buffer, "ERROR:", 6) != 0) {
    printf("FAILED: input='%s', expected ERROR, got='%s'\n", input, buffer);
    assert(0);
  }
}

int main() {
  test("0", "zero");
  test("7", "seven");
  test("11", "eleven");
  test("19", "nineteen");
  test("20", "twenty");
  test("21", "twenty one");
  test("90", "ninety");
  test("99", "ninety nine");

  test("100", "one hundred");
  test("101", "one hundred one");
  test("115", "one hundred fifteen");
  test("200", "two hundred");
  test("342", "three hundred forty two");

  test("1000", "one thousand");
  test("1000000", "one million");
  test("1000005", "one million five");
  test("1234567",
       "one million two hundred thirty four thousand five hundred sixty seven");

  test("   3000000   ", "three million");
  test("3,000", "three thousand");
  test("3_000_000", "three million");

  test_error("");
  test_error("   ");
  test_error("-5");
  test_error("abc");

  printf("All C tests passed!\n");
  return 0;
}
