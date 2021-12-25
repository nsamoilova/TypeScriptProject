// import  {sum, divideArr, currCon} from "./helpers/math";
// import ReactDOM from 'react-dom';
// import React from 'react'
// import App from './components/App';
// import './styles/default.scss';
// import { BrowserRouter } from 'react-router-dom';
// import store from "./redux";
// import { Provider } from 'react-redux';


// const element = document.querySelector('#root');

// ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>
// , element);

const a1: number = 5;
const a2: string = 'ddd';
const a3: boolean = true;
const a4: undefined = undefined;
const a5: null = null;
const a6: bigint = BigInt(2);
const a7: object = {};
const a8: symbol = Symbol('fff');

interface ISum {
    (a: number, b: number): number
}

const sum: ISum = (a, b) => {
    return a + b;
}

// function sum(a: number, b: number): number {
//     return a + b;
// }

// type ISum = (a: number, b:number) => number;

// const a = +prompt('a');
// const b = +prompt('b');

// console.log(sum(a, b));

const numbers: number[] = [1, 2, 3, 4];
const numbers2: Array<number> = [1, 2, 3];

const c = numbers.reduce(function(a, b) {
    return a + b
})

const touple: [string, number] = ['fff', 4];

const str = numbers.reduce(function(a, b) {
    return a + b;
}, '')

enum Colors {
    Red = 5,
    Green,
    Blue
}

console.log(Colors);

let anytype: any;

anytype = 5;
anytype = 'ddd';

function aaa(): void {
    console.log('work')
}

interface User {
    name: string,
    age: number
}

interface Engine {
    readonly name: string,
    power: number
}

interface Owner {
    name: string,
    age: number
}

interface Dog {
    name: string,
    age: number,
    hobbiens: string[],
    friends: Friends []
}

interface Friends {
    name: string,
   
}

interface Car {
    title?: string,
    engine: Engine,
    owner: Owner
}

const bmw: Car = {
    // title: 'i8',
    engine: {
        name: 'ff',
        power: 250
    },
    owner: {
        name: 'maria',
        age: 21
    }
}

// bmw.engine.name = 'ee';
console.log(bmw);

interface A {
    name: string
}

interface B extends A{
    age: number
}

const bb: B = {
    name: 'ddd',
    age: 21
}


function getName(name: string): string
function getName(name: number): number 
function getName(name: any): any {
    if(typeof name == 'string') {
        return name
    }
    return name 
}

const namee = getName('maria');
const nameee = getName(5);
// getName('maria', 'kovalenko');

interface ITeamMembers {
    name: string,
    age: number,
    number: number,
    
}

interface IFootbalTeam {
    name: string,
    age: number,
    number: number,
}


 class Team <T extends ITeamMembers> {
    name: string;
    rate: number;
    protected teamMembers: T[] = [];
    

    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
        
    }

    addTeamMember(member: T): void {
        this.teamMembers.push(member);
    }

    removeTeamMember(name: string): T[] {
       return this.teamMembers = this.teamMembers.filter(item => item.name !== name )
        
    }

    getMembers():T[] {
        return this.teamMembers
    }
    
   

}

  class FootballTeam extends Team<IFootbalTeam>{
      
    showMembers (): void {
       console.log(this.teamMembers)
    }

  }
 
   const newTeam = new Team('Nasty',22);
   const teamFootbal = new FootballTeam('Nasty',22);
   
  

   const member1 = {
       name: 'Nasty',
       age: 22,
       number: 15
   }

   const member2 = {
    name: 'Veronika',
    age: 30,
    number: 21
}


   

   newTeam.addTeamMember(member1)
   newTeam.addTeamMember(member2)

   newTeam.removeTeamMember('member2')
   teamFootbal.showMembers()

console.log(newTeam)
console.log(teamFootbal)
console.log(newTeam.getMembers())

   interface User {
       name: string
   }

   interface AdminUser {
       right: true
   }

   type SuperUser = User & AdminUser;

//  let user: User = {
//      name: 'vas'
//  }

//  user = another

