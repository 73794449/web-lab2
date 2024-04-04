const math = require('mathjs');
export default class CalculatorModel {
    constructor() {
        this.formula = '';
        this.realCalc = '';
        this.result = '';
        this.status = 'Wait';
        this.base = 10;
        this.first = true;
    }

    createResult()
    {
        if(this.formula == '')  
            this.result = 0;
        else{
            this.result = parseInt(this.formula,this.base);
            if(isNaN(this.result))
                this.result = 0;
        }
    }

    calculateMe()
    {
        try{
        this.result = math.evaluate(this.formula);
        }
        catch(error)
        {
            alert(error);
        }
        console.log(this.result);
        if (this.result === false)
            this.result = 0;
        else if (this.result === true)
            this.result = 1;
        else 
            this.result = parseInt(this.result,10);
    }

    digitButtonPressed(index)
    {
        if(this.base == 10 || this.base == 16 || (this.base == 4 && index < 4)){
        if(this.formula == '' || this.formula == '0')
            this.formula = parseInt(index);
        else
            this.formula = this.formula.toString() + index.toString();
        }
        if(this.first && (this.base == 2 && index < 2)){
            if(this.formula == '0')
                this.formula = this.formula.toString() + 'b' + index.toString();
            else
                this.formula = this.formula.toString() + '0b' + index.toString();
            this.first = false;
        }
        else if (this.base == 2 && index < 2)
        {
            this.formula = this.formula.toString() + index.toString();
        }
        this.createResult();
    }

    letterButtonPressed(index)
    {
        if(this.base === 16)
        {
            if(index == 0)
                this.formula = this.formula.toString() + 'A';
            else if (index == 1)
                this.formula = this.formula.toString() + 'B';
            else if (index == 2)
                this.formula = this.formula.toString() + 'C';
            else if (index == 3)
                this.formula = this.formula.toString() + 'D';
            else if (index == 4)
                this.formula = this.formula.toString() + 'E';
            else if (index == 5)
                this.formula = this.formula.toString() + 'F';
        }
        this.createResult();
    }

    selectedModeChanged(index)
    {
        if(index.value == 'DEC')
            this.base = 10;
        else if (index.value == 'HEX')
            this.base = 16;
        else if (index.value == 'BIN')
            this.base = 2;

        this.clearButtonPressed(1);
        this.createResult();
    }

    clearButtonPressed(index)
    {
        this.first = true;
        if(index == 0){
            if(this.formula.length > 1)
                this.formula = this.formula.substring(0,this.formula.length-1);
            else
                this.formula = '';
        }
        else
            this.formula = ''
        
        this.createResult();
    }

    operButtonPressed(index)
    {
        this.first = true;
        if(index == 0)
            this.formula = this.formula.toString() + '&';
        else if (index == 1)
            this.formula = this.formula.toString() + '|';
        else if (index == 2 && this.base == 2)
            this.formula = this.formula.toString() + '^|'
        else if (index == 3)
            this.formula = this.formula.toString() + '~';
        this.createResult();
    }

    basicOperButtonPressed(index)
    {
        this.first = true;
        if(index == 0)
            this.formula = this.formula.toString() + '^';
        else if (index == 1)
            this.formula = this.formula.toString() + '*';
        else if (index == 2)
            this.formula = this.formula.toString() + '/';
        else if (index == 3)
            this.formula = this.formula.toString() + '+';
        else if (index == 4)
            this.formula = this.formula.toString() + '-';
        this.createResult();
    }

    roundsqButtonPressed(index)
    {
        this.first = true;
        if(index == 0)
            this.formula = this.formula.toString() + '(';
        else
            this.formula = this.formula.toString() + ')';

        this.createResult();
    }
}