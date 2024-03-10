class Pet {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Tôi tên là ${this.name}.`);
    }

    talk(sound) {
        console.log(sound);
    }
}

class Dog extends Pet {
    constructor(name, animalType) {
        super(name);
        this.animalType = animalType;
    }

    introduce() {
        super.introduce();
        console.log(`Tôi là động vật ${this.animalType}.`);
    }

    talk() {
        super.talk("Gâu gâu!"); // Tiếng kêu của chó
    }
}

// Sử dụng lớp Dog
const myDog = new Dog("name", "chó");
myDog.introduce(); // In ra: "Tôi tên là Buddy."
myDog.talk(); // In ra: "Gâu gâu!"