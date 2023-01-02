import "https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js";

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('calculator', () => ({
        bool: true,
        boolResult: false,
        operation: '',
        firstNum: '',
        lastNum: '',
        result: '',

        addNumber() {
            if (this.boolResult) {
                this.clearAll();
                this.boolResult = false;
            }
            if (this.bool) {
                this.firstNum += this.$el.value;
            } else {
                this.lastNum += this.$el.value;
            }
        },

        addDot() {
            if (this.bool && this.firstNum && !this.firstNum.includes('.')) {
                this.firstNum += this.$el.value;
            } else if (!this.bool && this.lastNum && !this.lastNum.includes('.')) {
                this.lastNum += this.$el.value;
            }
        },

        getOperation() {
            this.bool = false,
            this.operation = this.$el.value;
        },

        setResult() {
            switch(this.operation) {
                case '+':
                    this.result = +this.firstNum + +this.lastNum;
                    this.boolResult = true;
                    break;
                case '-':
                    this.result = +this.firstNum - +this.lastNum;
                    this.boolResult = true;
                    break;
                case '/':
                    this.result = +this.firstNum / +this.lastNum;
                    this.boolResult = true;
                    break;
                case '*':
                    this.result = +this.firstNum * +this.lastNum;
                    this.boolResult = true;
                    break;
                default:
                    console.log('Hello')
            }
        },

        clearAll() {
            this.bool = true,
            this.firstNum = '',
            this.operation = '',
            this.lastNum = '',
            this.result = '';
        }
    }))
})