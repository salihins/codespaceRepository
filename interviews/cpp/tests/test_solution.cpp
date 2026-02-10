#include "../src/solution.hpp"
#include <catch2/catch_test_macros.hpp>

TEST_CASE("count() handles zero", "[count]") { REQUIRE(count("0") == "zero"); }

TEST_CASE("count() handles basic numbers", "[count]") {
  REQUIRE(count("7") == "seven");
  REQUIRE(count("11") == "eleven");
  REQUIRE(count("19") == "nineteen");
  REQUIRE(count("20") == "twenty");
  REQUIRE(count("21") == "twenty one");
  REQUIRE(count("90") == "ninety");
  REQUIRE(count("99") == "ninety nine");
}

TEST_CASE("count() handles hundreds", "[count]") {
  REQUIRE(count("100") == "one hundred");
  REQUIRE(count("101") == "one hundred one");
  REQUIRE(count("115") == "one hundred fifteen");
  REQUIRE(count("200") == "two hundred");
  REQUIRE(count("342") == "three hundred forty two");
}

TEST_CASE("count() handles thousands", "[count]") {
  REQUIRE(count("1000") == "one thousand");
  REQUIRE(count("1001") == "one thousand one");
  REQUIRE(count("1015") == "one thousand fifteen");
  REQUIRE(count("1100") == "one thousand one hundred");
  REQUIRE(count("2000") == "two thousand");
  REQUIRE(count("2005") == "two thousand five");
  REQUIRE(count("2345") == "two thousand three hundred forty five");
}

TEST_CASE("count() handles millions and formatting", "[count]") {
  REQUIRE(count("1000000") == "one million");
  REQUIRE(count("   3000000   ") == "three million");
  REQUIRE(count("3,000") == "three thousand");
  REQUIRE(count("3_000_000") == "three million");
  REQUIRE(count("1_000_005") == "one million five");
}

TEST_CASE("count() throws on invalid input", "[count]") {
  REQUIRE_THROWS(count(""));
  REQUIRE_THROWS(count("   "));
  REQUIRE_THROWS(count("-5"));
  REQUIRE_THROWS(count("abc"));
}
