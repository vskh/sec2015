import java.util.*;
import java.util.stream.Stream;

/**
 * Java8StreamsOptionalsLambdas <Description>
 *
 * @author vadya
 */
public class Java8StreamsOptionalsLambdas {

    public static void oldPrintYellowFruits(List<String> fruits) {
        List<String> yellowFruits = new LinkedList<>();
        for (String fruit : fruits) {
            if (fruit.toLowerCase().contains("yellow")) {
                yellowFruits.add(fruit);
            }
        }

        Collections.sort(yellowFruits);

        for (String fruit : yellowFruits) {
            System.out.println(fruit);
        }
    }

    public static void newPrintYellowFruits(List<String> fruits) {
        fruits.stream()
                .filter(f -> f.toLowerCase().contains("yellow"))
                .sorted()
                .forEach(System.out::println);
    }

    public static void optionals() {
        Optional<Double> amount = Optional.of(1.0);
        int roundedAmount = amount.orElse(2.0).intValue();
    }

    public static void streams() {
        Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15).filter(i -> i % 2 == 0).skip(1).limit(2).forEachOrdered(System.out::println);
    }

    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("yellow apple", "red strawberry", "yellow banana", "orange orange", "blue blueberry");

        oldPrintYellowFruits(fruits);
        System.out.println("=====");
        newPrintYellowFruits(fruits);

        System.out.println("-----");
        streams();
    }
}
