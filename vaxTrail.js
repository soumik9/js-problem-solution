function vaxTrail(people) {
    const A = [];
    const B = [];
    const C = [];
    const D = [];

    for (const person of people) {
        const { name, age, temperature } = person;
        if (temperature >= 100) {
            D.push(person);
        } else if (age >= 20 && age <= 30) {
            A.push(person);
        } else if (age >= 31 && age <= 40) {
            B.push(person);
        } else if (age >= 41 && age <= 50) {
            C.push(person);
        }
    }

    A.sort((a, b) => a.age - b.age);
    B.sort((a, b) => a.age - b.age);
    C.sort((a, b) => a.age - b.age);
    D.sort((a, b) => a.age - b.age);

    return { A, B, C, D };
}

console.log(vaxTrail([
    { name: 'Paul', age: 42, temperature: 98 },
    { name: 'Kabir', age: 36, temperature: 99 }, 
    { name: 'Sabnaj', age: 51, temperature: 101 },
    { name: 'Rahul', age: 37, temperature: 99 },
    { name: 'Kat', age: 41, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    { name: 'Nayem', age: 50, temperature: 100 }, 
    { name: 'sunil', age: 21, temperature: 98 },
]))
