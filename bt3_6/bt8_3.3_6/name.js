class Pet {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Toi ten la ${this.name}.`);
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
        console.log(`Toi la dong vat ${this.animalType}.`);
    }

    talk() {
        super.talk("meo meo!"); // Tieng keu cua meo
    }
}

// su dung lop cat
const myDog = new Dog("name", "meo");
myDog.introduce(); // In ra: "Toi ten la Buddy."
myDog.talk(); // In ra: "meo meo!"