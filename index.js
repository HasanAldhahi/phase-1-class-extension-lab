// Your code here


class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length;
    }

    get perimeter() {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        return sum;
    }
}


class Triangle extends Polygon {
    constructor(arr) {
        super(arr);
    }

    get isValid() {
        if (this.arr[0] + this.arr[1] > this.arr[2] && this.arr[0] + this.arr[2] > this.arr[1] && this.arr[1] + this.arr[2] > this.arr[0]) {
            return true;
        }
        return false;
    }

    get area() {
        let p = this.perimeter / 2;
        return Math.sqrt(p * (p - this.arr[0]) * (p - this.arr[1]) * (p - this.arr[2]));
    }
}

class Square extends Polygon {
    constructor(arr) {
        super(arr);
    }

    get isValid() {
        if (this.arr[0] === this.arr[1] && this.arr[0] === this.arr[2] && this.arr[0] === this.arr[3]) {
            return true;
        }
        return false;
    }

    get area() {
        let s = this.perimeter / 4;
        return s * s;
    }
}
