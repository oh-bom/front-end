function solution(absolutes, signs) {
    var answer=0;
    for(var i=0;i<absolutes.length;i++){
       
        if(signs[i]==false) 
        {answer+=(absolutes[i]*(-1));
        }
        else answer+=absolutes[i];
    }
    return answer;
}

solution2=(absolutes,signs)=>{
    var answer=0;
    for(var i=0;i<absolutes.length;i++)
    signs[i]==false?answer+=(absolutes[i]*(-1)):answer+=absolutes[i];
    
    return answer;
    
}

console.log(solution2([4,7,12],[true,false,true]));