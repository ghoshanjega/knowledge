const readline = require('readline');
const fs = require('fs');


const A = () => {
    const filePath = './inputs/input3.txt';

    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        // output: process.stdout,
        console: false
    });

    let nums = []
    const matrix = []
    const symbolLocations = []
    const numberMine = {}
    let row = 0;
    // List of all symbols
    const symbols = ['*', '+', '#', '$', '@', '&', '!', '%', '^', '~', '?', '(', ')', '[', ']', '{', '}', '<', '>', '|', '/', '\\', '`', '"', "'", ':', ';', ',', '-', '_', '=']

    // const symbols = ['*', '+', '#', '$']

    readInterface.on('line', function (line) {
        // Convert line to array of string and push to matrix
        const chars = line.split('')
        matrix.push(chars);


        row++;

    });

    readInterface.on('close', function (line) {
        let num = ''
        let takeThisNum = false
        // console.log(matrix)

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                const char = matrix[x][y];

                if (char >= '0' && char <= '9') {
                    num = num + char;
                    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1],
                    [1, -1], [1, 0], [1, 1]]
                    for (const dir of dirs) {
                        const [rowDir, colDir] = dir;
                        const newRow = x + rowDir;
                        const newCol = y + colDir;
                        // console.log(newRow, newCol, matrix[newRow] && matrix[newRow][newCol])
                        if (matrix[newRow] && symbols.includes(matrix[newRow][newCol])) {
                            takeThisNum = true
                        }
                    }
                }
                else {
                    if (num !== '' && takeThisNum) {
                        nums.push(parseInt(num))
                    }
                    num = ''
                    takeThisNum = false
                }
            }
        }

        console.log(nums)
        console.log(nums.reduce((a, b) => a + b, 0))


    });


}

const B = () => {
    const filePath = './inputs/input3.txt';

    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        // output: process.stdout,
        console: false
    });

    let nums = []
    const matrix = []
    const symbolLocations = []
    const numberMine = {}


    readInterface.on('line', function (line) {
        // Convert line to array of string and push to matrix
        const chars = line.split('')
        matrix.push(chars);



    });

    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]]

    const symbols = ["*"]
    const gearMap = {}

    const getAdjacentNum = (row, col) => {
        let r = row
        let c = col
        let num = ''
        // Go left side to the start of the number
        while (c >= 0 && matrix[r][c] >= '0' && matrix[r][c] <= '9') {
            c--;
        }
        c++;

        // Go right side to the end of the number, and delete that number
        while (c <= matrix[0].length && matrix[r][c] >= '0' && matrix[r][c] <= '9') {
            num += matrix[r][c];
            matrix[r][c] = ".";
            c++;
        }

        return num

    }


    readInterface.on('close', function (line) {
        let total = 0

        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix[x].length; y++) {
                const char = matrix[x][y];

                if (char === '*') {
                    const adjacentNumbers = []
                    for (const dir of dirs) {
                        const [rowDir, colDir] = dir;
                        const newRow = x + rowDir;
                        const newCol = y + colDir;

                        if (matrix[newRow] && matrix[newRow][newCol] <= '9' && matrix[newRow][newCol] >= '0') {
                            let num = getAdjacentNum(newRow, newCol)
                            if (num != '') {
                                adjacentNumbers.push(num)
                            }
                        }
                    }
                    if (adjacentNumbers.length == 2) {
                        total = total + adjacentNumbers[0] * adjacentNumbers[1]
                    }
                    console.log(adjacentNumbers)
                }
            }
        }

        console.log(total)


    });


}

// A();
B();

