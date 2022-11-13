function solution(phone_number) {
    var l=phone_number.length;
    var answer='';
    
    var lastNum=phone_number.slice(l-4,l);
        
    for(var i=0;i<l-4;i++){
        answer+="*"
    }
    answer+=lastNum;
    return answer;
}

function solution2(phone_number){
    return "*".repeat(phone_number.length-4)+phone_number.slice(-4);

}

console.log(solution("01071259052"));
console.log(solution2("01071259052"));