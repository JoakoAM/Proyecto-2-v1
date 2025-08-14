const signOn = document.getElementById("signOn");
const signOff = document.getElementById("signOff")
const signState = document.getElementById("signState");
const switchState = document.querySelector('.switch input[type="checkbox"]');
const screenOff = document.getElementById("screenOff");

quitarScreenOff = () => {
    let op = 1
    let intervalID = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(intervalID);
            screenOff.style.display = "none";
        } else {
            screenOff.style.opacity = op;
            op -= 0.1;
        }
    }, 62)
}

activarScreenOff = () => {
    screenOff.style.display = "block";
    let op = 0.1
    let intervalID = setInterval(function () {
        if (op >= 1) {
            clearInterval(intervalID);
        } else {
            screenOff.style.opacity = op;
            op += 0.1;
        }
    }, 50)
}


presionarOn = () => {
    quitarScreenOff();
    screenOff.style
    signOff.disabled = false;
    signState.disabled = false;
    signState.click();
    signState.disabled = false;
    if (switchState.checked) {
        signOn.disabled = true;
        setTimeout(() => {
            signOn.style.display = "none";
            signOff.style.display = "block";
        }, 500)
    }
}

signOn.addEventListener("click", () => {
    presionarOn()
});

presionarOff = () => {
    activarScreenOff()
    signOn.disabled = false;
    signState.disabled = false;
    signState.click();
    signState.disabled = false;
    if (!switchState.checked) {
        signOff.disabled = true;
        setTimeout(() => {
            signOn.style.display = "block";
            signOff.style.display = "none";
        }, 500)
    }
}
signOff.addEventListener("click", () => {
    presionarOff();
});

presionarNumber = () => {
    const numberZero = document.getElementById("numberZero");
    numberZero.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "0");
        estado = false;
    });
    const numberOne = document.getElementById("numberOne");
    numberOne.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "1");
        estado = false;
    });
    const numberTwo = document.getElementById("numberTwo");
    numberTwo.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "2");
        estado = false;
    });
    const numberThree = document.getElementById("numberThree");
    numberThree.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "3");
        estado = false;
    });
    const numberFour = document.getElementById("numberFour");
    numberFour.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "4");
        estado = false;
    });
    const numberFive = document.getElementById("numberFive");
    numberFive.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "5");
        estado = false;
    });
    const numberSix = document.getElementById("numberSix");
    numberSix.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "6");
        estado = false;
    });
    const numberSeven = document.getElementById("numberSeven");
    numberSeven.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "7");
        estado = false;
    });
    const numberEight = document.getElementById("numberEight");
    numberEight.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "8");
        estado = false;
    });
    const numberNine = document.getElementById("numberNine");
    numberNine.addEventListener("click", () => {
        valor.insertAdjacentText("beforeend", "9");
        estado = false;
    });
};

let valor = document.getElementById("value");
presionarNumber();
separarNumbers = () => {
    const separadores = /\s+/;
    // no hacer nada si [] esta vacio
    if (valor.textContent === "") {
        // console.log("calculadora vacia.")
    } else {
        let valorString = valor.textContent.toString().trim().split(separadores);
        let valorFilter = valorString.filter(function (str) {
            return str !== "";
        });
        return valorFilter;
    }
}

let estado = false;
verificarEstado = (estado, sign) => {
    if (estado === false) {
        // console.log("Operacion");
        estado = true;
        separarNumbers();
        valor.insertAdjacentText("beforeend", " " + sign + " ");
    } else if (estado === true) {
        // console.log("Ya esta realizando operacion");
    }
}

presionarSignsPlus = () => {
    const singPlus = document.getElementById("signPlus");
    singPlus.addEventListener("click", () => {
        if (valor.textContent === "") {
            // console.log("calculadora vacia.");
        } else {
            verificarEstado(estado, "+");
            estado = true;
        }
    });
}
presionarSignsMinus = () => {
    const singMinus = document.getElementById("signMinus");
    singMinus.addEventListener("click", () => {
        if (valor.textContent === "") {
            // console.log("calculadora vacia.");
        } else {
            verificarEstado(estado, "-");
            estado = true;
        }
    });
}
presionarSignsTimes = () => {
    const singTimes = document.getElementById("signTimes");
    singTimes.addEventListener("click", () => {
        if (valor.textContent === "") {
            // console.log("calculadora vacia.");
        } else {
            verificarEstado(estado, "*");
            estado = true;
        }
    });
}
presionarSignsAc = () => {
    const signAc = document.getElementById("signAc");
    signAc.addEventListener("click", () => {
        valor.textContent = " ";
    });
}
presionarSignsEqual = () => {
    let i = 0;
    const signEqual = document.getElementById("signEqual");
    signEqual.addEventListener("click", () => {
        if (valor.textContent === "" || /[a,z,A,Z]/i.test(valor.textContent)) {
            //console.log("calculadora vacia o con letras.");
            // console.log(valor.textContent);
            valor.Textcontent = " ";
        } else {
            if (estado === false) {
                let numbers = separarNumbers();
                valor.textContent = "Realizando calculo...";
                // console.log(numbers);
                realizarOperacion = (sign) => {
                    if (sign === "+") {
                        resultado = parseFloat(numbers[0]) + parseFloat(numbers[2]);
                        // console.log("suma: ", resultado);
                    } else if (sign === "-") {
                        resultado = parseFloat(numbers[0]) - parseFloat(numbers[2]);
                        // console.log("resta: ", resultado);
                    } else if (sign === "*") {
                        resultado = parseFloat(numbers[0]) * parseFloat(numbers[2]);
                        // console.log("multiplicacion: ", resultado);
                    }
                }
                realizarOperacionFinal = (sign) => {
                    if (sign === "+") {
                        resultado = resultado + parseFloat(numbers[numberAfter]);
                        // console.log("suma: ", resultado);
                        valor.textContent = resultado;
                    } else if (sign === "-") {
                        resultado = resultado - parseFloat(numbers[numberAfter]);
                        // console.log("resta: ", resultado);
                        valor.textContent = resultado;
                    } else if (sign === "*") {
                        resultado = resultado * parseFloat(numbers[numberAfter]);
                        // console.log("multiplicacion: ", resultado);
                    }
                }
                let signo;
                let resultado;
                let a = 0;
                while (a <= numbers.length - 1) {
                    if (resultado === undefined) {
                        // console.log(a);
                        i = 1
                        // console.log("signo:", numbers[i])
                        signo = numbers[i];
                        // console.log("Primer signo = ", signo);
                        realizarOperacion(signo);
                    } else {
                        // console.log(a);
                        i = i + 2;
                        signo = numbers[i];
                        // console.log("otro signo: ", signo)
                        if (signo === undefined) {
                            valor.textContent = resultado;
                            break
                        } else {
                            numberAfter = i + 1;
                            realizarOperacionFinal(signo);
                        };
                    }
                    a++
                }
            } else {
                alert("Realizando operacion");
            }
        }
    });
}
presionarSigns = () => {
    presionarSignsPlus();
    presionarSignsMinus();
    presionarSignsTimes();
    presionarSignsEqual();
    presionarSignsAc();
}

presionarSigns();

// orden de calculo
