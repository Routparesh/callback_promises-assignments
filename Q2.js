function manipulateString(value) {

    const newValue = value.toUpperCase();

    return function logString(value) {
        console.log(`The manipulated string is: ${newValue}`);
    }

}

const logBack = manipulateString('password');

logBack()



