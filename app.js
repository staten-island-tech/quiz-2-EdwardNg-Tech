let xMike, yMike, zMike, xJohn, yJohn, zJohn, averageMike, averageJohn;
xMike = 116;
yMike = 94;
zMike = 123;
xJohn = 89;
yJohn = 120;
zJohn = 103;
averageMike = (xMike + yMike + zMike) / 3;
averageJohn = (xJohn + yJohn + zJohn) / 3;
if (averageMike > averageJohn) {
    console.log(`Mike wins the basketball game with an average of ${averageMike} points.`);
} else if (averageMike < averageJohn) {
    console.log(`John wins the basketball game with an average of ${averageJohn} points.`);
} else {
    console.log(`No one won the basketball game. Both John and Mike scored an average of ${averageMike}`);
}