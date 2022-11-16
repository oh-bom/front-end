function solution(number) {
    var answer = 0;
    
    for(var x=0;x<number.length;x++){
        for(var y=x+1;y<number.length;y++){
            for(var z=y+1;z<number.length;z++){
                console.log("!"+number[x]+number[y]+number[z]+"!");
                var sum=0;
                sum=(number[x]+number[y]+number[z]);
                if(sum==0) answer++;
            }
        }
    }
    return answer;
}

console.log(solution([-2, 3, 0, 2, -5]));