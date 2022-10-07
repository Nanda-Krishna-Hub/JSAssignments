class Cylinder{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        return 3.1415*this.radius*this.radius*this.height;
    }
}
class Sphere{
    constructor(radius){
        this.radius = radius;
    }

    getVolume(){
        return 3.1415*(4/3)*this.radius*this.radius*this.radius;
    }
}

class Cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        return 3.1415*this.radius*this.radius*(this.height/3);
    }
}


let obj = new Cone(2,10);
let volume = obj.getVolume();
volume = volume.toFixed(4);
console.log(volume);