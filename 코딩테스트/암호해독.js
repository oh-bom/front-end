function solution(cipher, code) {
    var answer="";
    
    for(x in cipher){
       var x2=parseInt(x);
       if((x2+1)%code==0) {
       
        answer+=cipher[x2];
    //console.log(`${x} and  ${answer}`);
    }
    }
    return answer;
}


console.log(solution("pfqallllabwaoclk",2));