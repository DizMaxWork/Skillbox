/* function add(leftSide: number){
    return(rightSide: number) => leftSide + rightSide
} */

//КАРРИРОВАНИЕ
const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(1)

const addOne = add(1)

addOne(5)

