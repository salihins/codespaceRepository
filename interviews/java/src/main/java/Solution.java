import java.util.ArrayList;
import java.util.List;

public class Solution {
    private static final String[] units = {
            "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
            "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
            "seventeen", "eighteen", "nineteen"
    };

    private static final String[] tens = {
            "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    };

    private static final String[] thousands = {
            "", "thousand", "million", "billion"
    };

    /**
     * Converts a number string to its English word representation.
     * 
     * @param price The number string to convert.
     * @return The English word representation.
     */
    public static String count(String price) {
        if (price == null) {
            throw new IllegalArgumentException("Input cannot be null");
        }

        // Trim and remove separators
        String cleaned = price.replaceAll("[\\s,_.]", "");

        if (cleaned.isEmpty()) {
            throw new IllegalArgumentException("Input cannot be empty");
        }

        int num;
        try {
            num = Integer.parseInt(cleaned);
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException("Input is not a valid number");
        }

        if (num < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }

        if (num == 0) {
            return "zero";
        }

        List<String> parts = new ArrayList<>();
        int i = 0;
        int n = num;

        while (n > 0) {
            if (n % 1000 != 0) {
                String chunkStr = convertChunk(n % 1000);
                if (!thousands[i].isEmpty()) {
                    chunkStr += " " + thousands[i];
                }
                parts.add(0, chunkStr);
            }
            n /= 1000;
            i++;
        }

        return String.join(" ", parts);
    }

    private static String convertChunk(int n) {
        List<String> parts = new ArrayList<>();

        if (n >= 100) {
            parts.add(units[n / 100]);
            parts.add("hundred");
            n %= 100;
        }

        if (n >= 20) {
            parts.add(tens[n / 10]);
            n %= 10;
        }

        if (n > 0) {
            parts.add(units[n]);
        }

        return String.join(" ", parts);
    }
}
