class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius; // Radius of the circle
        this.color = color; // Color of the circle
    }
    Circle() {
        console.log('This is a circle');
    }
    Circle(radius) {
        this.radius = radius;
        console.log(`The radius of the circle ${this.radius}`);
    }
    Circle(radius, color) {
        this.radius = radius;
        this.color = color;
        console.log(`Circle[radius=${this.radius},color=${color}]`);
    }
    getRadius() {
        this.radius = radius;
        return this.radius
    }
    setRadius(radius) {
        this.radius = radius;
        console.log(`The radius of the circle ${this.radius}`);
    }
    getColor(color) {
        this.color = color;
        return this.color;
    }
    setColor(color) {
        color = 'blue';
        this.color = color;
        return this.color;
    }
    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle();
const circle2 = new Circle(2.5);
const circle3 = new Circle(3.0, "blue");