const readline = require('readline');
const fs = require('fs');

const A = () => {
    // Read file line by line
    const readInterface = readline.createInterface({
        input: fs.createReadStream('./inputs/input4.txt'),
        // output: process.stdout,
        console: false
    });

    let total = 0

    // on line
    readInterface.on('line', function (line) {
        let points = 0
        let firstOne = true
        // Find index of : and remove everything before it
        const index = line.indexOf(':');
        const cardNumber = parseInt(line.substring(0, index).split(' ')[1])
        line = line.substring(index + 1);


        // Split line by |
        const [winning, got] = line.split('|');

        let winningArr = winning.trim().split(' ').map((item) => parseInt(item.trim())).filter(Boolean);
        let gotArr = got.trim().split(' ').map((item) => parseInt(item.trim())).filter(Boolean);

        for (const win of winningArr) {

            if (gotArr.includes(win)) {
                if (firstOne) {
                    points += 1
                    firstOne = false
                }
                else {
                    points *= 2

                }
            }
        }
        console.log(winningArr, gotArr)
        console.log(points)
        total += points



    });

    // on close
    readInterface.on('close', function (line) {
        console.log(total)
    });
}


const B = () => {
    // Read file line by line
    const readInterface = readline.createInterface({
        input: fs.createReadStream('./inputs/input4.txt'),
        // output: process.stdout,
        console: false
    });

    let total = 0
    const gameCount = {}
    // [[winArr, gotArr]]
    const games = []

    // on line
    readInterface.on('line', function (line) {

        let wins = 0
        let firstOne = true
        // Find index of : and remove everything before it
        const index = line.indexOf(':');
        let cn = line.substring(0, index).split(' ')
        const cardNumber = parseInt(cn[cn.length - 1])
        console.log(cardNumber)
        line = line.substring(index + 1);

        if (gameCount[cardNumber]) {
            gameCount[cardNumber] = gameCount[cardNumber] + 1
        }
        else {
            gameCount[cardNumber] = 1

        }


        // Split line by |
        const [winning, got] = line.split('|');

        let winningArr = winning.trim().split(' ').map((item) => parseInt(item.trim())).filter(Boolean);
        let gotArr = got.trim().split(' ').map((item) => parseInt(item.trim())).filter(Boolean);

        for (const win of winningArr) {

            if (gotArr.includes(win)) {
                wins++;
            }
        }
        console.log(wins, gameCount[cardNumber])




        for (let y = 0; y < gameCount[cardNumber]; y++) {
            // console.log("a", y, gameCount[cardNumber])
            for (let i = 0; i < wins; i++) {
                // console.log("b", i)
                if (gameCount[cardNumber + i + 1]) {
                    gameCount[cardNumber + i + 1] = gameCount[cardNumber + i + 1] + 1
                }
                else {
                    gameCount[cardNumber + i + 1] = 1

                }
            }
        }


        games.push([winningArr, gotArr])
    });

    // on close
    readInterface.on('close', function (line) {
        console.log(gameCount)
        console.log(Object.values(gameCount).reduce((a, b) => a + b, 0))
    });


}

B()