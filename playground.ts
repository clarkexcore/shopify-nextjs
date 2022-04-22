// interface Person {
// 	name: string;
// 	age: number;
// }

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

// interface PersonLoggerFn {
// 	(person: Person): string;
// }

type PersonLoggerFn = (person: Person) => string;

export default function play() {
	const person: Person = {
		name: "Alex",
		age: 31,
	};

	const logPersonInfo: PersonLoggerFn = (person: Person): string => {
		const info = `Name: ${person.name}, Age: ${person.age}`;
		console.log(info);
		return info;
	};

	const log: string = logPersonInfo(person);

	const log2: string = logPersonInfo(new Person("Edward", 20));
}
