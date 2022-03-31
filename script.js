let prevNumber = '';
let calculationOperator = '';
let currentNumber = '';
let result = '';

// mendefinisikan function untuk memperbarui layar tampilan
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

// mengambil elemen HTML di code javascript
const numbers = document.querySelectorAll('.number')

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        updateScreen(event.target.value);
    }); 
});

// memberikan the number yang diklik ke variable currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else if (result !== '') {
        clearAll()
        currentNumber = ''
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// mendapatkan masing-masing angka dari constant numbers
numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll('.operator')

// mendefinisikan function inputOperator
const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''

    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}

operators.forEach((operator) => {
    operator.addEventListener('click', (event) => {
        // menjalankan function inputOperator saat operator diklik
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// mendefinisikan function calculation
const calculate = () => {
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}

// mendefinisikan function clearAll
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    result = ""
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// mendefinisikan function inputDecimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// untuk mengkalkulasi angka desimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})