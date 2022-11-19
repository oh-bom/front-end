function solution(n) {
    var answer = 0;

    for(var x=1;x<n+1;x++){
        var sum=x;
        for(var y=x+1;y<n+2;y++){
            if(sum==n) answer++; 
            else if(sum>n) break;
            sum+=y;
        }
    }
    return answer;
}

 solution2=(n)=>{
    var answer=0;
    for(var x=1;x<n+1;x++){
        var sum=x;
        for(var y=x+1;y<n+2;y++) {
            sum==n?(answer++):0
            sum+=y;
        }
       
    }
    return answer;
}

console.log(solution(15));
console.log(solution2(15));