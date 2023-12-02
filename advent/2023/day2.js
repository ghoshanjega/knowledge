const readline = require('readline');
const fs = require('fs');

const A = () => {
    const filePath = './inputs/input2A.txt';

    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        // output: process.stdout,
        console: false
    });

    const given = {
        'blue': 14,
        'red': 12,
        'green': 13,
    }

    const goodSets = []

    readInterface.on('line', function (line) {
        // Find index of : and remove everything before it
        const index = line.indexOf(':');
        const gameNumber = parseInt(line.substring(0, index).split(' ')[1])
        line = line.substring(index + 1);


        // Split line by ;
        const sets = line.split(';');
        let isgoodSet = true;

        for (const set of sets) {
            const got = {
                'blue': 0,
                'red': 0,
                'green': 0,
            }
            // Split sets by , and remove spaces
            const cubes = set.split(',').map((item) => item.trim());
            for (const cube of cubes) {
                // Split cubes by space
                const [size, color] = cube.split(' ');
                got[color] += parseInt(size);
            }
            console.log(got)
            // Check if got matches given
            for (const color in given) {
                if (given[color] < got[color]) {
                    isgoodSet = false;
                    break;
                }
            }



        }


        if (isgoodSet) {
            goodSets.push(gameNumber);
        }




    });

    readInterface.on('close', function (line) {
        console.log(goodSets);
        // console log sum of good sets
        console.log(goodSets.reduce((a, b) => a + b, 0));
    });


}

const B = () => {
    const filePath = './inputs/input2A.txt';

    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        // output: process.stdout,
        console: false
    });

    const given = {
        'blue': 14,
        'red': 12,
        'green': 13,
    }

    const powers = []

    readInterface.on('line', function (line) {
        // Find index of : and remove everything before it
        const index = line.indexOf(':');
        const gameNumber = parseInt(line.substring(0, index).split(' ')[1])
        line = line.substring(index + 1);


        // Split line by ;
        const sets = line.split(';');

        const max = {
            'blue': 0,
            'red': 0,
            'green': 0,
        }

        for (const set of sets) {

            // Split sets by , and remove spaces
            const cubes = set.split(',').map((item) => item.trim());
            for (const cube of cubes) {
                // Split cubes by space
                const [size, color] = cube.split(' ');
                max[color] = Math.max(parseInt(size), max[color]);
            }






        }
        const power = max['blue'] * max['red'] * max['green'];
        powers.push(power);





    });

    readInterface.on('close', function (line) {
        console.log(powers)
        // console log sum of powers
        console.log(powers.reduce((a, b) => a + b, 0));
    });


}

// A();
B();

