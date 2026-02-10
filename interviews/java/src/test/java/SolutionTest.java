import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SolutionTest {

    @Test
    public void testHandlesZero() {
        assertEquals("zero", Solution.count("0"));
    }

    @Test
    public void testHandlesBasicNumbers() {
        assertEquals("seven", Solution.count("7"));
        assertEquals("eleven", Solution.count("11"));
        assertEquals("nineteen", Solution.count("19"));
        assertEquals("twenty", Solution.count("20"));
        assertEquals("twenty one", Solution.count("21"));
        assertEquals("ninety", Solution.count("90"));
        assertEquals("ninety nine", Solution.count("99"));
    }

    @Test
    public void testHandlesHundreds() {
        assertEquals("one hundred", Solution.count("100"));
        assertEquals("one hundred one", Solution.count("101"));
        assertEquals("one hundred fifteen", Solution.count("115"));
        assertEquals("two hundred", Solution.count("200"));
        assertEquals("three hundred forty two", Solution.count("342"));
    }

    @Test
    public void testHandlesThousands() {
        assertEquals("one thousand", Solution.count("1000"));
        assertEquals("one thousand one", Solution.count("1001"));
        assertEquals("one thousand fifteen", Solution.count("1015"));
        assertEquals("one thousand one hundred", Solution.count("1100"));
        assertEquals("two thousand", Solution.count("2000"));
        assertEquals("two thousand five", Solution.count("2005"));
        assertEquals("two thousand three hundred forty five", Solution.count("2345"));
    }

    @Test
    public void testHandlesMillions() {
        assertEquals("one million", Solution.count("1000000"));
        assertEquals("one million five", Solution.count("1000005"));
        assertEquals("one million one thousand", Solution.count("1001000"));
        assertEquals("one million two hundred thirty four thousand five hundred sixty seven",
                Solution.count("1234567"));
        assertEquals("two million", Solution.count("2000000"));
        assertEquals("three million", Solution.count("3000000"));
    }

    @Test
    public void testHandlesLargeNumbers() {
        assertEquals("nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine",
                Solution.count("999999999"));
    }

    @Test
    public void testHandlesFormattingLogic() {
        assertEquals("three million", Solution.count("   3000000   "));
        assertEquals("three thousand", Solution.count("3,000"));
        assertEquals("three million", Solution.count("3,000,000"));
        assertEquals("three million", Solution.count("3 000 000"));
        assertEquals("three million", Solution.count("3_000_000"));
        assertEquals("one million five", Solution.count("1_000_005"));
    }

    @Test
    public void testThrowsOnInvalidInput() {
        assertThrows(IllegalArgumentException.class, () -> Solution.count(""));
        assertThrows(IllegalArgumentException.class, () -> Solution.count("   "));
        assertThrows(IllegalArgumentException.class, () -> Solution.count("-5"));
        assertThrows(IllegalArgumentException.class, () -> Solution.count("abc"));
    }
}
