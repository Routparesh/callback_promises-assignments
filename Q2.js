function manipulateString(value) {

    const t0 = performance.now();
    const newValue = value.toUpperCase();

    return function logString(value) {
        console.log(`The manipulated string is: ${newValue}`);
    }

}

const logBack = manipulateString('password');

logBack()



