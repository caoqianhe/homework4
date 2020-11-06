let name;
name = 'hello world';
console.log(name);
// 第一种
let word = 'hello world'
console.log(word);
 // 第二种
let s1 = 'hello', s2 = ' world'
console.log(s1+s2);
// 第三种
  var arr = [1,3,5,7,9];
 var sum = 0;
function getSum(arr) {
   for (i = 0 ; i <=4; i++) {
    sum = sum + arr[i]
}
  return sum   }
  getSum(arr)
    console.log(sum);
       //  -----------------------------------------L0

let str = "can-enter-volunteer-organization";
function change(str) {
    var arr = str.split('-');
    console.log(arr[1].charAt(0).toUpperCase()+arr[1].substr(1));
    for(var i = 1;i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substr(1)}
   console.log(arr.join('')); 
    }
    change(str);

              //--------------------------------------L1
      var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ];
      var res = [];
        function transform(arr){
            for(var i = 0;i<arr.length;i++){
                 if(arr[i] instanceof Array){
                   transform(arr[i]);
                      }else  {
                  res.push(arr[i]);
                      }  
                  } 
              }
              transform(arr);
              console.log(res);

 var arr = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}];
  arr.sort(function (a,b) {
      return a.id - b.id
      })
  console.log(arr);
              // -----------------------------------L2

          

    