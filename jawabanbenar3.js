function solution(relation) {
    var answer = 0;
    let counter = 0;
    let ununique = false
    let slip = 0
    
    while (counter < 4) {
      // console.log(relation.length);
      let check = true;
      for (let i = 0; i < relation.length; i++) {
        for (let j = 0; j < relation.length; j++) {
          if (i !== j) {
            if (ununique) {
              console.log(ununique)
              let temp1 = '';
              let temp2 = '';
              for (let h = counter; h <= counter + slip; h++) {
                temp1 += relation[i][h]
                temp2 += relation[j][h]
              }
              if (temp1 === temp2) {
                check = false
              }
            } else {
              if (relation[i][counter] === relation[j][counter]) {
                check = false;
              }
            }
          }
        }
      }
    
      if (check) {
        if (ununique) {
          ununique = false;
          answer++;
          counter = counter + slip
          slip = 0;
        } else {
          ununique = false;
          slip = 0
          answer++;
          counter++;
        }
      } else {
        ununique = true;
        slip++
      }
  
      if (counter + slip >= 4) {
        counter = 4
      }
    }
  
    return answer;
  }
  
  console.log(solution([
    ["100", "ironman", "music", "2"], 
    ["100", "ironman", "math", "2"], 
    ["300", "superman", "computer", "3"], 
    ["300", "superman", "computer", "4"], 
    ["500", "hulk", "music", "3"], 
    ["600", "ironman", "music", "2"]]))