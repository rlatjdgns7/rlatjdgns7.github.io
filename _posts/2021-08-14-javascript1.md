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

<img src="/asset/webbrowser.png">
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

* let은 선언후 바꿀 수 있따. const는 바꿀 수 없다.

* 변수 tip
   1. 변수는 문자와 숫자, $와 _만 사용가능
   2. 첫글자는 숫자가 될 수 없습니다.
   3. 사용할 수 없는 단어들이 있습니다.
   4. 상수는 대문자로 알려주세요

## DataType(자료형)

1. string

2. Number : 숫자형, 사칙연산이 가능하다, Nan은(not a number)라는 뜻이다.

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
 
 
 ## 비교연산자

 <, >, =>, =<, ===, !=

 
 ## 조건문
 * IF문
 * Else는 if문의 조건이 false일때 실행된다.

 8.논리연산자
 ||(or), &&(and), !(not)


 ## 반복문 
 for, while, do while, switch

 braek, continue 
   
 ## 함수 
 Declearation, Indicator of function, parameter

 어디서나 접근 가능한 변수 = global var
 범위 안에서만 접근가능한 변수 = local var

* 함수선언문 : 어디서든 호출 가능 hoisting 덕분 표현식 보다 자유로워요

* 함수표현식 : 코드에 도달했을 때 사용가능함

* 화살표 함수 : 함수를 보다 간결하게 작성할 수 있다.
  return문이 한줄이라면 괄호 생략가능,  parameter가 하나라면 괄호 생략 가능, parameter가 없는 
  함수라면 괄호 생략불가능

  ## OBJECT
  > 책이 종이와 잉크로 구성되듯 자동차가 엔진,유리,알류미늄등으로 구성되듯

  * 객체에 접근할땐 .또는 []
  * 삭제는 delete
  * for in 반복문으로 객체 순회가능 
  * key : value = property

  1. object나 function 안에 function이 있으면 이걸 method라고 부른다.
  2. 화살표 함수는 내부의 this를 가지지 않습니다. 화살표 함수에서 this를 써버리면 전역변수를
  찾음 그래서 object에는 화살표 함수를 사용하지 않는게 좋다.

  ## Array 
  
  * 순서가 있는 리스트
  * 배열은 대괄호[]로 묶고 쉼표로 구분한다.
  * index를 통해 읽을 수 있다.
  * 배열은 문자열 뿐만 아니라, 숫자, 객체, 함수등을 포함 할 수 있다.

  ## method of array 

  * push(): 배열 끝에 추가한다.
  * pop() : 배열 끝 요소 제거
  * 