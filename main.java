import java.util.Scanner;

public class main  {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int avengerssold = 0;
        int frozensold = 0;
        int spidermansold = 0;
        int purchasesold = 0;
        int[] csages = new int[70];
        double[] movieprices = new double[70];
        String[] csnames = new String[70];
        double totalSales = 0;
        boolean system = true;
        while (system) {
            System.out.println("-- Movie Ticket POS --");
            System.out.println("[1] Buy Ticket");
            System.out.println("[2] View Sales Report");
            System.out.println("[3] Exit");
            System.out.print("Choose an option: ");
            int menu = sc.nextInt();
            sc.nextLine();
            switch (menu) {
                case 1:
                    boolean option = true;
                    double Total = 0;
                    while (option) {
                        System.out.println("");
                        System.out.println("--- Select a Movie ---");
                        System.out.println("[1] Avengers: Endgame - 300 Pesos");
                        System.out.println("[2] Frozen II - 250 Pesos");
                        System.out.println("[3] Spider-Man: No Way Home - 280 Pesos");
                        System.out.println("[0] Exit");
                        System.out.print("Enter movie choice: ");
                        int movies = sc.nextInt();
                        sc.nextLine();
                        int ticketPrice = 0;
                        String movieName = "";
                        switch (movies) {
                            case 1:
                                ticketPrice = 300;
                                movieName = "Avengers: Endgame";
                                avengerssold++;
                                break;
                            case 2:
                                ticketPrice = 250;
                                movieName = "Frozen II";
                                frozensold++;
                                break;
                            case 3:
                                ticketPrice = 280;
                                movieName = "Spider-Man: No Way Home";
                                spidermansold++;
                                break;
                            case 0:
                                totalSales += Total;
                                option = false;
                                continue;
                            default:
                                System.out.println("Invalid movie choice.");
                                continue;
                        }
                        System.out.print("Enter Name: ");
                        String name = sc.nextLine();
                        System.out.print("Enter Age: ");
                        int age = sc.nextInt();
                        sc.nextLine();
                        double finalPrice = ticketPrice;
                        if (age >= 60) {
                            finalPrice *= 0.50;
                        } else if (age <= 18) {
                            finalPrice *= 0.88;
                        }
                        csnames[purchasesold] = name;
                        csages[purchasesold] = age;
                        movieprices[purchasesold] = finalPrice;
                        purchasesold++;
                        Total += finalPrice;
                        System.out.println("Ticket price " + movieName + " - " + finalPrice + " Pesos");
                        System.out.print("Do you want to buy another ticket? (yes/no): ");
                        if (!sc.nextLine().equalsIgnoreCase("y")) {
                            totalSales += Total;
                            option = false;
                        }
                    }
                    break;
                case 2:
                    System.out.println("");
                    System.out.println("--- Sales Report ---");
                    for (int i = 0; i < purchasesold; i++) {
                        System.out.println("Customer name: " + csnames[i]);
                        System.out.println("Customer age: " + csages[i]);
                        System.out.println("Price Paid: " + movieprices[i] + " Pesos");
                    }
                    System.out.println("");
                    System.out.println("Tickets Sold: " + purchasesold);
                    System.out.println("Total Sales: " + totalSales + " Pesos");
                    System.out.println("");
                    System.out.println("Tickets Sold Per Movie:");
                    System.out.println("Avengers: Endgame - " + avengerssold);
                    System.out.println("Frozen II - " + frozensold);
                    System.out.println("Spider-Man: No Way Home - " + spidermansold);
                    System.out.println("");
                    break;
                case 3:
                    system = false;
                    break;
                default:
                    System.out.println("Invalid the input!");
            }
        }
    }
}