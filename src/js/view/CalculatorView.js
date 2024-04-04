export default class CalculatorView {
    constructor(calculatorModel) {
        this.calculatorModel = calculatorModel;
    }

    draw_data() {
        document.getElementById("cur-form").value = this.calculatorModel.formula;
        document.getElementById("dec-form").value = this.calculatorModel.result.toString(10);
        document.getElementById("hex-form").value = this.calculatorModel.result.toString(16);
        document.getElementById("oct-form").value = this.calculatorModel.result.toString(4);
        document.getElementById("bin-form").value = this.calculatorModel.result.toString(2);
    }

    update_pass() {
        alert("Status: " + this.calculatorModel.status);
    }
}