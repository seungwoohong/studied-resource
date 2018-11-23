module.exports = (baseNumbers, winningNumbers) => {
    if (!validationCheck(baseNumbers) || !validationCheck(winningNumbers)) {
        return;
    }

    let count = 0;
    let winningGrade = {
        3: '5등입니다',
        4: '4등입니다',
        5: '3등입니다',
        6: '1등입니다',
    };

    baseNumbers.forEach(num => {
        if (winningNumbers.indexOf(num)) {
            count += 1;
        }
    });
    
    return winningGrade[count];
}

/**
 * Array validation check
 * @param {Array<number>} numbers Number type array
 * @return {boolean}
 */
function validationCheck(numbers) {
    return Array.isArray(numbers) &&
        numbers.every(elem => typeof elem === 'number') &&
        numbers.length === 6;
}
