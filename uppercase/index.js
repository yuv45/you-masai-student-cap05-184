 
let arr =["MA","SA","I","SCH","OOL"];
  
let  check_lowercase=()=>
{
let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower ="abcdefghijklmnopqrstuvwxyz";
result=[];
  for(i=0;i<arr.length;i++){
    let str =arr[i];
    let bag="";
      for(j=0;j<str.length;j++){
      for(k=0;k<upper.length;k++){
        if(str[j]==upper[k]){
          bag+=lower[k]
        }
   
    }
    

  }
   result.push(bag)
 }
console.log(result)
}
 console.log (check_lowercase())
 