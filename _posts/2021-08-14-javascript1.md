---
title: "javascrip basic grammer"
excerpt: "자바스크립트"

categories:
   - Javascript
tags:
   - Javascript
last_modified_at: 2021-08-14
---

# 브라우저의 동작원리
자바스크립트는 이상한 언어이다.

이러한 자바스크립트의 동작을 담당하는 브라우저의 동작원리를 한번 알아보자. 

<img src="/assets/webBrowser.png">
Stack : 하나밖에 없다(single threaded) 코드를 실행해주는 곳 입니다. 한 번에 한가지 일을 한다.

Heap : 변수를 담는 공간 

대기실 : setTimeout, Ajax, 이벤트 리스너 같은 코드들이 잠시 대기하는 곳

Queue : 대기실과 Stack을 연결 시키는 통로 stack이 비어있을 때만 올려보내 줄 수 있다.

자바스크립트에 시간 오래걸리는 작업같은 거 시키지 마라. 

> 교훈 stack과 queue를 바쁘게 하는 것은 하지마세요!

# 자바스크립트 기본문법

## 변수 : 어떤 정보에 일므을 붙여서 사용하고 싶을 때 사용한다.
변수명은 "identifiler" 라고 한다.

* 변수명으로 사용 할 수 없는 단어들이 있다 이를 예약어(Reserved word)라고 부른다.

* 변수의 앞에 var,let,const를 붙일 수 있는데 let과 const를 가장 많이 쓴다 var는 전역변수를 쓸때, let과 const는 지역변수를 정의 할 떄 사용하는데 전역변수 보다는 지역변수를 더 많이 사용하기 떄문이다.

* let은 선언후 값을 바꿀 수 있다. const는 바꿀 수 없다.

* 변수 tip
   1. 변수는 문자와 숫자, $와 _만 사용가능
   2. 첫글자는 숫자가 될 수 없습니다.
   3. 사용할 수 없는 단어들이 있습니다.
   4. 상수는 대문자로 알려주세요

## DataType(자료형)

1. string
  1.1 string methods
  
  * ``은 여러줄을 표현하는 것이 가능합니다.

  * ID와  []를 통해 특정위치에 접근하는 것이 가능합니다.

  * length : 문자열 길이

  * toUpperCase() : 대문자전환

  * toLowerCase() : 소문자전환

  * str.indexOf() : 문자열의 위치 인덱스 첫 번째 글짜의 위치 반환 조건문 조심

  * str.slice(n, m) : n부터 m까지의 문자열 반환

  * str.substr(n,m) : n부터 시작 m개를 가져온다

  * sub.trim() : 앞 뒤 공백 제거

  * str.repeat(n) : 문자열을 n번 반복

  * 아스키 코드표에 따라 문자열도 크기 비교 가능

  * str.concat() : 문자열 합침
  > const str1 = 'Hello';
    const str2 = 'World';

    console.log(str1.concat(' ', str2));
    // expected output: "Hello World"

    console.log(str2.concat(', ', str1));
    // expected output: "World, Hello"


  * "a".codePointAt() : 아스키 코드표를 통해 숫자 받기

  * String.fromCharCode() : 숫자를 아스키 코드로 변환



2. Number : 숫자형, 사칙연산이 가능하다, Nan은(not a number)라는 뜻이다.

  2.1 mathmethods
  * toString(2 or 16) : 10진수를 2진수나 16진수로 바꾼다.
  
  * Math.PI : 원주율을 보여줍니다.
 
  * Math.floor() : 내림
  
  * Math.round() : 반올림
 
  * ToFixed() : 소수점 자릿수, 문자열을 반환함으로 주의해야한다.
  
  * isNaN() : NAN인지 아닌지 반환해 준다.
  
  * Parseint() : 문자열을 정수로 바꿔줍니다.
 
  * Math.random() : 0에서 1사이 랜덤숫자
 
  * Math.floor(Math.random()*100)+1 : 1에서 100사이의 숫자를 뽑습니다.
 
  * Math.max() : 괄호안에 있는 숫자들 중 최댓값을 고릅니다, arr를 넣고 싶을 떄는 Math.max(...arr);
 
  * Math.min() : 괄호안에 있는 숫자들 중 최솟값을 고릅니다.
 
  * Math.abs() : 절댓값을 구해줍니다.
 
  * Math.pow(n,m) : n의 m제곱
 
  * Math.squart() : 제곱근



3. boolean : true or false

4. undefined or null

5. Type of : 데이터 타입을 알아 내고 싶을 떄 사용한다(보통 협업시에 많이 사용한다)

* TIP 
 1. 문자형도 더하기가 가능합니다.
 2. 숫자형과 문자형도 더할 수 있는데 이 경우 문자형으로 변합니다.

 
 ## 자주쓰이는 기본함수

 1. alert : 알려줄 떄 
 2. promt : 입력 받을 떄
 3. confirm : 확인 받을 떄

 * Tip prompt는 default 값을 설정 하는 것이 가능합니다.

 
 ## 자료형 변환
 1. String() : 문자형으로 변환
 2. Numeber() : 숫자형으로 변환
 3. Boolean() : boolean형으로 변환


 ## 연산자 
 +,+,*,%
 변수앞에 -
 assignmentd var를 decleration형태로 쓴다면 
 += or -=는 계산후 숫자를 반환
 -- or ++는 1을 빼거나 더함
 

 > let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let num1 = Number(input[0]);  // Hour
let num2 = Number(input[1]);  // Minute

num2 -= 45;

if (num2 < 0) {
    num2 += 60;
    num1--;

    if (num1 === -1) {
        num1 = 23;
    }
}

console.log(num1 + ' ' + num2);
 
 ## 비교연산자

 <, >, =>, =<, ===, !=, ++, --

 <img src="/assets/calculator.png">
 


 8.논리연산자
 ||(or), &&(and), !(not)


 ## 조건문
 * IF문
 * else if
 * Else는 if문의 조건이 false일때 실행된다.
 * 조건부 삼항연산자 : 조건문 ? 선택문1 : 선택문2 
   조건이 맞을 떄 ? 조건을 충족하지 못했을 때 :
 <img src="/assets/if.png">


 ## 반복문 
 for, while, do while, switch

 break(조건을 만족하면 반복문을 빠져나온다), continue(현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가 다음코드를 실행한다 특정 조건에 대한 처리를 제외하고자 할 때 사용한다.)

 label : 반복문에 아이디 값을 주는 존재 let을 줄 수 없음 continue와 label을 같이 쓸경우 break label, continue label등으로 써줘야 함

 > let i, j;

 loop1:
 for (i = 0; i < 3; i++) {
   loop2:
   for (j = 0; j < 3; j++) {
     if (i === 1 && j === 1) {
       continue loop1;
     }
    console.log('i =' + i + ',j =' + j );
   }
 }
// 0,0
   0,1
   0,2
   1,0
   2,0
   2,1
   2,2

> const a = [3]
  switch (3) {
  case 3:
    console.log("hi")
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}

 
! 반복문을 중첩해서 쓸 경우 바깥 쪽 것이 한번 돌 때 안에 있는 것은 지정된 반복문을 다 돌고 나서야 바깥족 반복문의 다음진행이 시작된다는 사실을 명심할 것

* 조건문의 조건으로 --도 줄 수 있다. 
 <img src="/assets/loop.png">
 <img src="/assets/switch.png">  

 ## 함수 
 Declearation, Indicator of function, parameter

 어디서나 접근 가능한 변수 = global var
 범위 안에서만 접근가능한 변수 = local var

* 함수선언문(function declearation : 어디서든 호출 가능 hoisting 덕분 표현식 보다 자유로워요
 
  > // 예시
function funcDeclarations() {
  return 'A function declaration';
}
funcDeclarations(); // 'A function declaration

* 함수표현식(function expresiion) : 코드에 도달했을 때 사용가능함
> // 예시
var funcExpression = function () {
    return 'A function expression';
}
funcExpression(); // 'A function expression'
* 화살표 함수 : 함수를 보다 간결하게 작성할 수 있다.
  return문이 한줄이라면 괄호 생략가능,  parameter가 하나라면 괄호 생략 가능, parameter가 없는 
  함수라면 괄호 생략불가능

  <img src="/assets/fu1.png">
  <img src="/assets/fu.png">

  재귀용법(recursive) : 자신을 정의할 때 자기자신을 재참조하는 경우

  > const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let paraMeter = input[1].split(" ").map(x => Number(x));
let max = paraMeter[0];
let min = paraMeter[0];

for(let i = 0; i < +input[0]; i++) {
  if(max < paraMeter[i]){
       max = paraMeter[i]
  }
  if(min > paraMeter[i]){
       min = paraMeter[i]
  }
}
console.log(`${min} ${max}`); 

  ## OBJECT
  > 책이 종이와 잉크로 구성되듯 자동차가 엔진,유리,알류미늄 등으로 구성되듯

  * 객체에 접근할땐 .또는 []
  * 삭제는 delete
  
  * for in 반복문 : 객체의 열거 속성을 통해 지정된 변수를 반복합니다. 모든 객체에서 사용가능합니다.
  key값에는 접근할 수 있지만 value 값에 접근하는 방법은 제공하지 않습니다. 자바스크립트에서 객체 속성들은 내부적으로 사용하는 숨겨진 속성들을 가지고 있습니다. 그 중 하나가 [Enumerable]이며 for in 구문은 이 값이 true로 셋팅되어 속성들만 반복할 수 있습니다. 이러한 속성을 열거형 속성이라고 부르며 ,객체의 모든 내장 메서드를 비롯해 각종 내장 프로퍼티 같은 비열거형 속성은 반복되지 않습니다.

  > var ace = {
    a: 1,
    b: 2,
    c: 3
  };

  for (var prop in ace) {
        console.log(prop, ace[prop]);
  }


 * for of : 각각의 고유한 특성의 값을 실행할 명령과 함께 사용자 지정 반복 후크를  호출하여 반복 가능한 객체(배열,map,set,인수)를 통해 반복하는 루트를 만듭니다.
    
  > const array1 = ['a', 'b', 'c'];

    for (const element of array1) {
      console.log(element);
    }

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"


  * for in 반복문과 for of 반복문의 차이 :
  for in : 객체의 모든 열거 가능한 속성에 대해서 반복
  for of : [symbol.iterator] 속성을 가지는 컬렉션 전용

 > var a = [3,5,7];

  * key : value = property

  1. object나 function 안에 function이 있으면 이걸 method라고 부른다.
  2. 화살표 함수는 내부의 this를 가지지 않습니다. 화살표 함수에서 this를 써버리면 전역변수를
  찾음 그래서 object에는 화살표 함수를 사용하지 않는게 좋다.

  <img src="/assets/object.png">
  <img src="/assets/objectch.png">

  ## object에서 사용 될 수 있는 methods computer property

  object.assign({}) : 객체 복제
  object.keys() : 키 배열 반환
  object.values() : 값 배열 반환
  object.entries() : 키/값 배열 반환
  object.fromEntries : 키/값 배열을 객체로 변환

  ## Array 
  
  * 순서가 있는 리스트
  * 배열은 대괄호[]로 묶고 쉼표로 구분한다.
  * index를 통해 읽을 수 있다.
  * 배열은 문자열 뿐만 아니라, 숫자, 객체, 함수등을 포함 할 수 있다.

  ## method of array 

  * .push(): 배열 끝에 추가한다.
  * .pop() : 배열 끝 요소 제거
  * .shift : 배열 앞에 추가 제거
  * .push, unshift() : 여러개를 추가 할 수 있다.
  * .splice(n,m) : n부터 m개의 특정 요소 지움
  * .splice() : 삭제된 요소 반환
  * .concat(arr,arr) : 합쳐서 새배열 반환
  * indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
  * .forEach(fn) : 배열 반복
  > let input = [1,2,3,4,5,6,7,8,9,10];
    let arr = []

    input.forEach(x => {
        let num = x % 42;

    if(arr.indexOf(num) === -1) {  // indexOf는 없으면 -1을 반환한다.
        arr.push(num);
    }
    });

  

console.log(arr.length);
  * .includes() : 포함하는지 찾기
  * .find(fn) : 찾기 
  * .findindex(fn) : 찾기 object
  * .filter : find와 유사하나 배열로 반환
  * .reverse
  * .map(fn) : fn을 받아 특정기능을 시행하고 새로운 배열 반환
  * join : 배열 합치기
  * .sort() 배열을 정렬한다 단 문자열로 배열하므로 숫자는 원하는 결과 값을 얻지 못할 수 있는데 그럴때는 코드를 이렇게 작성해보자
  > const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b}); 
  이함수는 배열의 모든 element를 비교한다 

    * .split : string을 나눠서 배열로
    separator Optional
    원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다. 실제 문자열이나 정규표현식을 받을 수 있습니다. 문자열 유형의 separator가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어집니다. separator가 생략되거나 str에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가집니다. separator가 빈 문자열일 경우 str의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다.
    limit Optional
    끊어진 문자열의 최대 개수를 나타내는 정수입니다. 이 매개변수를 전달하면 split() 메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만 배열의 원소가 limit개가 되면 멈춥니다. 지정된 한계에 도달하기 전에 문자열의 끝까지 탐색했을 경우 limit개 미만의 원소가 있을 수도 있습니다. 남은 문자열은 새로운 배열에 포함되지 않습니다.
     
     >var myString = 'Hello World. How are you doing?';
      var splits = myString.split(' ', 3);

      console.log(splits);
  
  * .reduce() : 리듀서 함수는 네개의 인자를 가집니다.   
                - 누산기(acc);
                - 현재 값(cur);
                - 현재 인덱스(idx);
                - 원본 배열(src);
     reducer()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback 함수를 행
     하는데, 콜백 함수는 다음의 네 인수를 받습니다.

     * accumulator : 콜백의 반환 값을 누적합니다. 콜백의 첫 번쨰 호출이면서 initialValue를 제공한 경우 intailValue의 값
     * currentValue : 처리할 현재 요소.
     * currentIndex (optional) 처리할 현재 요소의 인덱스 initialValue를 제공한 경우 0 아니면 1부터
     * array   (optional)
     * intialValue (optional)  : 이것을 제공하지 않으면 인덱스 1부터 시작해 콜백 함수를 실행합니다.  

     콜백의 최초 호출 떄 accumulator와 currentValue는 다음 두 가지 값중 하나를 가집니다.
     만약 reduce()함수 호출에서 initialValue를 제공한 경우, accumlator는 initialValue와 같고
     currentValue는 배열의 첫 번째 값과 같습니다. 

     

  ## this
  자바스크립트에서 모든 함수는 실행될 때마다 함수 내부에 this라는 객체가 추가된다. arguments라는 유사 배열 객체와 함께 함수 내부로 암묵적으로 전달되는 것이다. 그렇기 때문에 자바스크립트에서의 this는 함수가 호출된 상황에 따라 그 모습을 달리한다.

  <img src="/assets/this.png">

 ## Hoisting

 scope 내부 어디서든 변수 선언은 최상위에 선언 된 것 처럼 행동한다.
 변수의 정의가 그 범위에 따라 "선언" 과 "할당" 으로 분리 되는 것을 의미한다. 즉 변수가 함수 내에서 정의 됐을 경우 선언이 함수의 최상위로 함수 바깥에서 정의 됐을 경우 전역 컨텐츠의 최상위로 변경이 된다. 

 우선 "선언(Declaration)" 과 "할당(Assignment)" 을 이해해야 한다 끌어올려지는 것은 선언이다.
 
 ```
 function getX() {
    console.log(x); // undefinded
    var x = 100;
    console.log(x); // 100
 }
 getX();
 ```
 다른 언어의 경우엔 변수 X를 선언하지 않고 출력하려 한다면 오류를 발생할 것이다 하지만 자바스크립트는 "undefinded"하고 넘어간다 var x= 100; 이 구문에서 var x를 호이스트 하기 떄문이다.
 
 선언문은 항시 자바스크립트 엔진 구동시 가장 최우선으로 해석하므로 호이스팅 되고 할당 구문은 런타임 과정에서 이루어지기 떄문에 호이스팅 되지 않는다. 

 ```
 foo();
 function foo() {
    console.log('hello');
 };
 ```
 foo 함수에 대한 선언을 호이스팅 하여 global 객체에 등록시키기 떄문에 hello가 제대로 출력이 된다.

```
foo();
var foo = function() {
   console.log('hello');
};

```
 이 두번쨰 예쩨의 함수 표현은 함수 리터럴을 할당하는 구조 이기때문에 호이스팅 되지 않으며 그렇기 떄문에 런타임 환경에서 type error를 발생시킨다.


# 선언과 할당의 차이

선언은 변수없이 코드를 작성하여 블록에 그 코드를 선언 하는 것
할당은 변수에 특정 값을 넣어 주는 것

# New 함수
object를 여러 개 만들어야 하는 상황에서 사용된다

* 생성자 함수는 첫글자를 대문자로 하는 것이 관례이다.

```
function Item(title,name) {
   this = {} // 이 코드는 자바스크립트가 알아서 생성해주는 코드
   this title = title;
   this name = name;
   this showPrice = function() {
      console.log(`이 가격은 ${price}입니다.`)
   }
}

const item1 = new Item("인형", 3000);
const item2 = new Item("쌀", 2000);
const item3 = new Item("과자", 1500);

console.log(item1, item2, item3)

item3.shoePrice(); 메소드 실행 
```

## symbol
* 유일한 식별자를 만들때 사용 
* 설명을 위해 괄호에 문자열로 설명을 붙일 수 있습니다.
* 예측 가능한 코드를 작성하기 위해 사용합니다.

symbol.for : 전역 심볼


## Rest parameter(나머지 인수)

<img src="/assets/reamain.png">

arguments : 함수로 넘어온 모든 인수에 접근
            함수내에서 사용 가능한 지역 변수
            length / index
            array 형태의 객체 
            배열의 내장 메서도 없음

ES6의 환경이라면 가급적 나머지 매개변수 사용

전개구문 : 쉽게 배열을 합치게 만들어주는 배열과 오브젝트 둘다가능


## CLOSURE
내부 LEXICAL에서 찾고 외부로

## setTimeout / setInterval
둘의 차이는 반복

<img src="/assets/setTimeout.png">

ClearTimeout() : Timeout없애는 메소드


## call, apply, bind

call : 모든 함수에서 사용 할 수 있으며 this를 특정 값으로 지정가능

apply : call과 유사하지만 배열로 파라미터를 받는다.

bind : 함수의 this값을 영구히 바꿀 수 있다.

<img src="/assets/call.png">


## 상속과 prototype 
자바스크립트는 객체에서 우선 찾고 없으면 원형반환

prototypechain

for in 

<img src="/assets/proto.png">

## Class

Es6에 추가된 스펙

내부에 constructor가 있음 parameter를 받을 수 있다.

클래스가 탄생한 이유 : 코드의 예측 가능성을 위해서

extend를 사용하여 상속한다.

method overriding : 동일한 이름으로 덮어쓰기
                    super키워드 사용시 부모생성자의 프로퍼ㅣ 사용


<img src="/assets/class.png">

## promise

New Promise로 생성합니다.

callback함수

then : 해결과 거부
catch : 에러가 발생했을 때 사용합니다. 코드의 가독성을 높여줍니다.
finally : 이행이든 거부든 사용

```
function makeRequest() {
    return getData()
        .then(data => {
            if(data && data.needMoreRequest) {
                return makeMoreRequest(data)
                  .then(moreData => {
                      console.log(moreData);
                      return moreData;
                  }).catch((error) => {
                      console.log('Error while makeMoreRequest', error);
                  });
            } else {
                console.log(data);
                return data;
            }
        }).catch((error) => {
          console.log('Error while getData', error);
        });
}
```


## async await
promise then보다 가독성이 좋습니다.

try catch

```
async function makeRequest() { 
    try {
      const data = await getData();
      if(data && data.needMoreRequest) {
          const moreData = await makeMoreRequest(data);
          console.log(moreData);
          return moreData;
      } else {
          console.log(data);
          return data;
      }
    } catch (error) {
        console.log('Error while getData', error);
    }
}
```

## generator

함수를 잠시 멈췄다가 다시 실행하는 메소드

literable : 반복가능
lterator : next 메소드를 가집니다.

