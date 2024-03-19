class uber {
    constructor(basePrice, perKilometer, peakhorse) {
        this.basePrice = basePrice;
        this.perKilometer = perKilometer;
        this.peakhorse = peakhorse;
    }
    pricecalculation(kilometer, period) {
        let fare = kilometer * this.perKilometer;
        if (period == "AM") {
            fare += 0; //no aditional charge
        } else {
            fare += 30; //aditional charge
        }
        if (this.peakhorse) {
            fare += 40;
        }
        let totalfare = this.basePrice + fare;
        return totalfare;
    }
}
let obj11 = new uber(30, 40, false);
console.log(obj11.pricecalculation(12, 'AM'));
console.log(obj11.pricecalculation(12, 'PM'));