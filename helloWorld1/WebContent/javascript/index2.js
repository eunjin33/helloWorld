function sum (a, b){
    let n1 = a;
    let n2 = b;
    return n1+n2;
}

console.log(sum(11, 22));

function createObject(name, age, score){
    let obj = {
        name: name,
        age: age
    };//new Object();
    obj.score = score;
    obj.pass = (score >=60) ? 'pass' : 'fail';
    return obj;
}

let newObj = createObject('유상우', 23, 55)

console.log('이름: ' + newObj.name+ ' 나이: ' + newObj.age
+ ' 점수: ' +newObj.score+' 합격: '+newObj.pass);

//테이블에 들어가는 tr 택그 생성 연습. 

function createTr(){

}