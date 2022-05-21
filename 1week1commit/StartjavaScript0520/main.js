// 산술연산자 * % 나머지연산자. 분류할때 2(0,1) 3(0,1,2)
// 할당연산자 ** =, A += B : A값에 B를 더해서 대입하라.
// 비교연산자 ** ==, ===(숫자처럼보이지만 문자), !(아니다), !=(같지않다), !==
// 논리연산자 ***** or(||)-값중하나라도 true, and(&&)-모든값이 true
/*let numOne = prompt("첫번째 숫자를 입력하세요!");
let numTwo = prompt("두번째 숫자를 입력하세요!");
if(numOne<50 && numTwo<50){
    console.log("두 숫자모두 50 이하군요");
}
else if(numOne<50 || numTwo>50){
    console.log("두 숫자중에 하나가 50 이하군요");
    console.log(`결과값 ${numOne} 이거나 ${numTwo}`);
    console.log(`처음값 +numOne "두번째값" +numTwo`);
}
else{
    console.log("무엇을 입력?");
}*/
//조건문
//반복문 for (선언 ; 조건 ; 증가값){}
for(let i=0; i<10; i++){
    document.write("<div>");
    document.write(`<h3> ${i}단 </h3>`);
    console.log(`${i}단`)
// ++증가연산자 1씩, -- 감소연산자 1씩 감소
console.log('${i}단');
for(let j=0; j<10; j++){
    if((i*j)<10){
        document.write(`${i} X ${j} = 0${i*j} <br>`)
    }
    else{
        document.write(`${i} X ${j} = ${i*j} <br>`)
    }
    
}
document.write("</div>");
}
//배열값을 불러오는 방법
let numbers = ["one","two","three","for"];
for(let k=0; k<numbers.length; k++){
    document.write("<h3>"+ numbers[k] +"</h3>");
}