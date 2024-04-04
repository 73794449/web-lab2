export default class ControllerCalc {
    constructor(calculatorModel, calculatorView) {
        this.calculatorModel = calculatorModel;
        this.calculatorView = calculatorView;
    }
    calculateMe()
    {
        this.calculatorModel.calculateMe();
        this.calculatorView.draw_data();
    }

    digitButtonPressed(index)
    {
        this.calculatorModel.digitButtonPressed(index);
        this.calculatorView.draw_data();
    }

    letterButtonPressed(index)
    {
        this.calculatorModel.letterButtonPressed(index);
        this.calculatorView.draw_data();
    }

    selectedModeChanged(index)
    {
        this.calculatorModel.selectedModeChanged(index);
        this.calculatorView.draw_data();
    }

    clearButtonPressed(index)
    {
        this.calculatorModel.clearButtonPressed(index);
        this.calculatorView.draw_data();
    }

    operButtonPressed(index)
    {
        this.calculatorModel.operButtonPressed(index);
        this.calculatorView.draw_data();
    }

    basicOperButtonPressed(index)
    {
        this.calculatorModel.basicOperButtonPressed(index);
        this.calculatorView.draw_data();
    }

    roundsqButtonPressed(index)
    {
        this.calculatorModel.roundsqButtonPressed(index);
        this.calculatorView.draw_data();
    }
}