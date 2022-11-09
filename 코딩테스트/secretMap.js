function solution(n,arr1,arr2){
    const answer=[];
    for(let i=0;i<n;i++){
        let row=(arr1[i]|arr2[i]).toString(2);
        row="0".repeat(n-row.length)+row;
        row=row.replace(/[01]/g,(x)=>(+x?"#":" "));
        answer.push(row);
    }
    return answer;
}

arr1= [9, 20, 28, 18, 11];
arr2= [30, 1, 21, 17, 28];

console.log(solution(5,arr1,arr2))