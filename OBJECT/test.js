const person = {
  name: "John",
  surname: "Doe",
  year: "2000",
  calcAge: function () {
    return 2023 - this.year;
  },
};
console.log(person.calcAge()); // 23


