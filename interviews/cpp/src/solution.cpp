#include "solution.hpp"
#include <algorithm>
#include <iostream>
#include <regex>
#include <stdexcept>
#include <vector>

static const std::vector<std::string> units = {
    "",        "one",     "two",       "three",    "four",
    "five",    "six",     "seven",     "eight",    "nine",
    "ten",     "eleven",  "twelve",    "thirteen", "fourteen",
    "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};

static const std::vector<std::string> tens = {
    "",      "",      "twenty",  "thirty", "forty",
    "fifty", "sixty", "seventy", "eighty", "ninety"};

static const std::vector<std::string> thousands = {"", "thousand", "million",
                                                   "billion"};

static std::string convertChunk(int n) {
  std::string chunkStr = "";
  if (n >= 100) {
    chunkStr += units[n / 100] + " hundred";
    n %= 100;
    if (n > 0)
      chunkStr += " ";
  }

  if (n >= 20) {
    chunkStr += tens[n / 10];
    n %= 10;
    if (n > 0)
      chunkStr += " ";
  }

  if (n > 0) {
    chunkStr += units[n];
  }
  return chunkStr;
}

std::string count(std::string price) {
  if (price.empty()) { // Basic check, though regex below handles empty string
                       // if we didn't add the next check
    throw std::invalid_argument("Input cannot be empty");
  }

  std::string cleaned;
  for (char c : price) {
    if (!isspace(c) && c != ',' && c != '_' && c != '.') {
      cleaned += c;
    }
  }

  if (cleaned.empty()) {
    throw std::invalid_argument("Input cannot be empty");
  }

  long long num;
  try {
    size_t processed = 0;
    num = std::stoll(cleaned, &processed);
    if (processed != cleaned.length()) {
      throw std::invalid_argument("Input is not a valid number");
    }
  } catch (...) {
    throw std::invalid_argument("Input is not a valid number");
  }

  if (num < 0) {
    throw std::invalid_argument("Price cannot be negative");
  }

  if (num == 0) {
    return "zero";
  }

  std::vector<std::string> parts;
  int i = 0;
  long long n = num;

  while (n > 0) {
    if (n % 1000 != 0) {
      std::string chunkStr = convertChunk(n % 1000);
      if (!thousands[i].empty()) {
        chunkStr += " " + thousands[i];
      }
      parts.insert(parts.begin(), chunkStr);
    }
    n /= 1000;
    i++;
  }

  std::string result = "";
  for (size_t k = 0; k < parts.size(); ++k) {
    result += parts[k];
    if (k < parts.size() - 1) {
      result += " ";
    }
  }

  return result;
}
