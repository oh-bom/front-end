function solution(price, money, count) {
    var answer = -1;
    var pay=0;

    for(var i=1;i<count+1;i++){

        price2=price*i;
        pay+=price2;
        console.log(price2+"!"+pay);
    }

    result=money-pay;

    return result>0?0:result*=(-1);
    // if(result>0) answer=0;
    // else{result*=(-1);
    // answer=result;}
    //return answer;
}

//같은 방식인데 더 간단한 코드
function solution2(price,money,count){
    let answer=0;

    for(var i=1;i<count+1;i++){
        answer+=price*i;
    }
    return answer>money?answer-money:0;
}

console.log(solution(3,20,4,10));