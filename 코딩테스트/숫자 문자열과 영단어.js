function solution(s){

    const stringToNum=[
        "zero","one","two","three","four","five","six","seven","eight","nine"
    ];
    
    for(var i=0;i<10;i++){
    
    s=s.split(stringToNum[i]).join(i);
    }
    return parseInt(s);
}

console.log("answer: "+solution("one4seveneight"));