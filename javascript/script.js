// const person = {
//     name: 'Ashraff',
//     age: 24,

//     nameOfperson: function(){
//         // console.log('Hello ' + this.name + ', Your age is ' + this.age)
//         // document.write('Hello ' + this.name + ', Your age is ' + this.age)
//         document.getElementById('show').innerHTML = 'Hello ' + this.name + ', Your age is ' + this.age;

//     }
// }
// person.nameOfperson()

const jambStudent = [
    { name: "Idris", score: 289},
    { name: "Mrs Oke", score: 200},
    { name: "Mrs Ib", score: 300},
    
];

document.getElementById('show').innerHTML = 'Name: ' + jambStudent[0].name + ' ' + 'Score: ' +  jambStudent[0].score;
document.getElementById('name2').innerHTML = 'Name: ' + jambStudent[1].name + ' ' + 'Score: ' +  jambStudent[1].score;
document.getElementById('name3').innerHTML = 'Name: ' + jambStudent[2].name + ' ' + 'Score: ' +  jambStudent[2].score;