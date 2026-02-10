#include "solution.h"
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static const char *units[] = {"",        "one",       "two",      "three",
                              "four",    "five",      "six",      "seven",
                              "eight",   "nine",      "ten",      "eleven",
                              "twelve",  "thirteen",  "fourteen", "fifteen",
                              "sixteen", "seventeen", "eighteen", "nineteen"};

static const char *tens[] = {"",      "",      "twenty",  "thirty", "forty",
                             "fifty", "sixty", "seventy", "eighty", "ninety"};

static const char *thousands[] = {"", "thousand", "million", "billion"};

static void convert_chunk(int n, char *buffer) {
  if (n >= 100) {
    strcat(buffer, units[n / 100]);
    strcat(buffer, " hundred");
    n %= 100;
    if (n > 0)
      strcat(buffer, " ");
  }

  if (n >= 20) {
    strcat(buffer, tens[n / 10]);
    n %= 10;
    if (n > 0)
      strcat(buffer, " ");
  }

  if (n > 0) {
    strcat(buffer, units[n]);
  }
}

void count(const char *price, char *output) {
  if (price == NULL) {
    // In C, we can't easily throw, but we should handle null safely if
    // possible. For this task, we assume the caller handles errors or checks
    // the output. Ideally we'd return an error code, but the signature is void.
    // We'll write an error message to output if possible.
    if (output)
      strcpy(output, "ERROR: Input cannot be null");
    return;
  }

  // Trim and remove separators
  char cleaned[256] = {0}; // Assumed sufficient for reasonable input
  int j = 0;
  for (int i = 0; price[i] != '\0'; i++) {
    if (!isspace(price[i]) && price[i] != ',' && price[i] != '_' &&
        price[i] != '.') {
      if (j < 255) {
        cleaned[j++] = price[i];
      }
    }
  }
  cleaned[j] = '\0';

  if (j == 0) {
    strcpy(output, "ERROR: Input cannot be empty");
    return;
  }

  char *endptr;
  long long num = strtoll(cleaned, &endptr, 10);

  if (*endptr != '\0') {
    strcpy(output, "ERROR: Input is not a valid number");
    return;
  }

  if (num < 0) {
    strcpy(output, "ERROR: Price cannot be negative");
    return;
  }

  if (num == 0) {
    strcpy(output, "zero");
    return;
  }

  output[0] = '\0';
  char temp[1024] = {0};
  char chunk_buffer[256];

  int i = 0;
  long long n = num;
  int first = 1;

  // We need to process chunks from largest to smallest for correct string
  // building OR build efficiently. Recursive or stack-based approach works, or
  // simpler: Calculate max power of 1000.

  // Alternative: iterate chunks and prepend. But prepending in C is costly.
  // Let's store chunks and join them.

  char parts[4][256]; // Max billions
  int part_count = 0;

  while (n > 0) {
    if (n % 1000 != 0) {
      chunk_buffer[0] = '\0';
      convert_chunk(n % 1000, chunk_buffer);
      if (thousands[i][0] != '\0') {
        strcat(chunk_buffer, " ");
        strcat(chunk_buffer, thousands[i]);
      }
      strcpy(parts[part_count++], chunk_buffer);
    }
    n /= 1000;
    i++;
  }

  for (int k = part_count - 1; k >= 0; k--) {
    strcat(output, parts[k]);
    if (k > 0)
      strcat(output, " ");
  }
}
