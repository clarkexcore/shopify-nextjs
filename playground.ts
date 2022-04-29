interface Person {
    kind: "business" | "academic" | "otherType";
    name: string;
    age: number;
}

interface BusinessPerson extends Person {
    kind: "business";
    salary: number;
}

interface AcademicPerson extends Person {
    kind: "academic";
    publications: string[];
}

type Human = BusinessPerson | AcademicPerson;

type RaceCar = {
    name: string;
    // maxSpeed has to be 200.
    maxSpeed: 200;
    team: string;
};

type CityCar = {
    name: string;
    space: string;
    maxSpeed: 100;
};

type Car = RaceCar | CityCar;

export default function play() {
    const car: RaceCar = {
        name: "Jesus",
        maxSpeed: 200,
        team: "God",
    };

    function logPersonInfor(human: Human) {
        if (human.kind === "academic") {
            console.log(human);
        } else if (human.kind === "business") {
            console.log(human);
        } else {
            console.log(human);
        }
    }
    function logCarInfo(car: Car) {
        switch (car.maxSpeed) {
            case 200:
                console.log(car.team);
                break;
            case 100:
                console.log(car.space);
                break;
            default:
                console.log(car);
        }
    }
    // const car: RaceCar = {
    //     name: "Cool",
    //     type: "Honda",
    //     speed: 60,
    //     mileage: 10,
    // };
    // const person: AcademicPerson = {
    //     name: "alex",
    //     age: 32,
    //     publications: [],
    // };
    // const person2: BusinessPerson = {
    //     name: "alex",
    //     age: 32,
    //     salary: 69000,
    // };
    // function logPerson(person: Person) {}
    // logPerson(person2);
    // const names: string[] = ["alex", "matty"];
    // const numbers: Array<number> = [1, 2, 3, 4, 5, 6];
    // const random = Math.random() > 0.5 ? "Hello" : [1, 2];
    // if (typeof random === "string") {
    //     const upper = random.toUpperCase();
    // } else {
    //     console.log(random);
    // }
    // console.log(random);
}
