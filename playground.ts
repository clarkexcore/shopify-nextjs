interface Person {
	name: string;
	age: number;
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
}
