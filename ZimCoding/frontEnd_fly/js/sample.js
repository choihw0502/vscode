class Student {
    constructor( name, koreanLanguage, english, mathematics ){
        this.name = name;
        this.koreanLanguage = koreanLanguage;
        this.english = english;
        this.mathematics = mathematics;
    }
}
const student1 = new Student("홍길동", 95, 86, 97);
const student2 = new Student("홍길동", 85, 96, 87);
const student3 = new Student("홍길동", 75, 56, 67);
const student4 = new Student("홍길동", 65, 66, 77);

export const students = [ student1, student2, student3, student4 ];
export const numbers = [1,2,3,4,5,6,7];
export const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];

export const perfectScore = 100;

export const sum = (num1, num2) => {
 return num1 + num2;
};

export const avg = (num1, num2) => {
    return (num1 + num2) /2
}

