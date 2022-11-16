function solution(n, words) {
    var answer = [];
    var wrong_person=0;
    var term=0;

    //같은 단어를 말해서 틀린경우
    var note=[];
    note.push(words[0]);
    for(var i=1;i<words.length+1;i++){
       for(var y of note){
         if(y == words[i]){
           wrong_person=n-(i+1)%n;
           term=Math.ceil((i+1)/n);
           answer=[wrong_person,term];
    
           return answer;
        }
    }
        note.push(words[i]);
    }

    //전 단어 마지막 알파벳 말고 딴거 말한 경우
    for(var i=0;i<words.length-1;i++){
        if(words[i].slice(-1)!=words[i+1].slice(0,1)){
            
            wrong_person=n-(i+2)%n;
            
            term=Math.ceil((i+2)/n);
            answer=[wrong_person,term];
    
            return answer;
        }
        }
    
        return [0,0];
    }

    

//console.log(solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]));

//console.log(solution(2,["hello", "one", "even", "never", "now", "world", "draw"]));

console.log(solution(5,["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]));