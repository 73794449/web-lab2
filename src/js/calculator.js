import ControllerCalc from './controller/ControllerCalc.js';
import CalculatorModel from './model/CalculatorModel.js';
import CalculatorView from './view/CalculatorView.js';


let calculatorModel = new CalculatorModel();
let calculatorView = new CalculatorView(calculatorModel);

let controller = new ControllerCalc(calculatorModel, calculatorView);


const calculateButton = document.getElementById('calculate-button');

const digitsButtons = [document.getElementById('zero-button'),
                        document.getElementById('one-button'),
                        document.getElementById('two-button'),
                        document.getElementById('three-button'),
                        document.getElementById('four-button'),
                        document.getElementById('five-button'),
                        document.getElementById('six-button'),
                        document.getElementById('seven-button'),
                        document.getElementById('eight-button'),
                        document.getElementById('nine-button')];

const lettersButtons = [document.getElementById('a-button'),
                        document.getElementById('b-button'),
                        document.getElementById('c-button'),
                        document.getElementById('d-button'),
                        document.getElementById('e-button'),
                        document.getElementById('f-button')];

const selectedMode = document.getElementById('format-select');

const clearButtons = [document.getElementById('ce-button'),document.getElementById('c-button')];

const operButtons = [document.getElementById('and-button'),
                    document.getElementById('or-button'),
                    document.getElementById('xor-button'),                    
                    document.getElementById('not-button')];
                
const basicOperButtons = [document.getElementById('pow-button'),
                            document.getElementById('mul-button'),
                            document.getElementById('div-button'),
                            document.getElementById('plus-button'),
                            document.getElementById('minus-button')]

const roundsqButtons = [document.getElementById('roundsqbeg'),
                        document.getElementById('roundsqend')];

const forms = [document.getElementById('cur-form'),
                document.getElementById('dec-form'),
                document.getElementById('hex-form'),
                document.getElementById('oct-form'),
                document.getElementById('bin-form')];

calculateButton.addEventListener('click', function () { controller.calculateMe(); });

digitsButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.digitButtonPressed(index);})
});

lettersButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.letterButtonPressed(index);})
});

selectedMode.addEventListener('click',function() {controller.selectedModeChanged(selectedMode);})

clearButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.clearButtonPressed(index);})
});

operButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.operButtonPressed(index);})
});

basicOperButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.basicOperButtonPressed(index);})
});

roundsqButtons.forEach((element,index) => {
    element.addEventListener('click',function() {controller.roundsqButtonPressed(index);})
});