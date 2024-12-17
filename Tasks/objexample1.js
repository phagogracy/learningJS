// Create a object for person with name[Alex],
//  bio[I am student], weight[80] and height[6],
//  then change name[John], bio[Teacher], 
// weight[120], and also add dob[2002-07-04], then delete height
const person={
    fname:"Alex",
    bio:"I am student",
    weight: 80,
    height:6
}
person.fname="John";
person.bio="Teacher";
person.weight=120;
person.dob="2002-07-04";
console.log(person);
delete person.height;
console.log(person);