// TS Recommends interfaces over types when possible

// They are very similar

// interfaces describe the data structures in a more natural way
// interface describing objects

interface Person {
    name: string,
    age: number
}


// When to use types, is when you need to create type aliases
// to describe function types


// interface PersonLoggerFn {
//     logPersonInfo(): string
// }

// type Data = string

export default function play(){
    const person = {
        name: "Alex",
        age: 31
    }

    function logPersonInfo(person: Person){
        const info = `Name: ${person.name}, Age: ${person.age}`;
        console.log(info);
        return info;
    }

    logPersonInfo(person)
}