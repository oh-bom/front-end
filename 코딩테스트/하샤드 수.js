//더 멋진 풀이코드
function solution2(x){
    const sum=x
    .toString()
    .split("")
    .map((x)=>parseInt(x))
    .reduce((acc,curr)=>acc+curr);
    return x%sum===0;
}
//조촐한 내코드,,
function solution(x) {
    var answer = true;
    var sum=0;

    var x2=x.toString();
    for(i of x2){
        i2=parseInt(i);
        sum+=i2;
    }
    if(x%sum!=0) answer=false;
    return answer;
}

