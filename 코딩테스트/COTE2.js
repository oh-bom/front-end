function solution(top_list,check){
    var answer=[];
    top_list.forEach(y=>{
        for(var x of check){
            if((y.length==1)&&(y.indexOf(x)==0)) y=null;
            else y=y.slice(y.indexOf(x)+1);
        }
        if(y!=null) answer.push("p");
        else answer.push("impo");

    })
    return answer;


}

var top_list=["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
var rule="ABD";

console.log(solution(top_list,rule));