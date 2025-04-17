funciton skillsMember() {
    return {
        name: "skillsMember",
        description: "This function returns a member object with skills and experience",
        execute: function () {
            return {
                name: "John Doe",
                age: 30,
                skills: ["JavaScript", "Python", "Java"],
                experience: 5
            };
        }
    };
    }
// Usage
const member = skillsMember();
console.log(member.execute());
// Output: { name: 'John Doe', age: 30, skills: [ 'JavaScript', 'Python', 'Java' ], experience: 5 }
