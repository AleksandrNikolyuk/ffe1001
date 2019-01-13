let persons = [
    {name: 'Игорь', birthday: '2017'},
    {name: 'Виталик', birthday: '2013'},
    {name: 'Коля', birthday: '1987'},
    {name: 'Сергей', birthday: '1993'},
    {name: 'Паша', birthday: '1979'},
    {name: 'Миша', birthday: '1981'},
    {name: 'Петя', birthday: '1973'},
];

const Human = function (data) {
    this.name = data.name;
    this.birthday = data.birthday;
    this.getAge = () => {
        let today = new Date();
        return today.getFullYear() - this.birthday;
    }
    this.getInfo = () => {
        if (this.getAge() % 10 >= 5 && this.getAge() % 10 <= 9 || this.getAge() % 10 == 0 ) {
            return `${this.name}  ${this.getAge()} лет `;
        } else {
            return `${this.name}  ${this.getAge()} года `;
        }      
    }
}
for(load of persons) {
const Obj = new Human (load);
console.log( Obj );
console.log( Obj.getInfo() );
}