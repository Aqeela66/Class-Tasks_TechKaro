//const months = ['March', 'Jan', 'Feb', 'Dec'];
//months.sort();
//console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

//const array1 = [1, 30, 4, 21, 100000];
//array1.sort();
//console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]



//var numbers = [4, 2, 5, 1, 3];
//numbers.sort(function(a, b) {
   // console.log(a,b);
   // console.log(a-b);
  //return a - b;
//});
//console.log(numbers);

// [1, 2, 3, 4, 5]

var numbers=[3,4,5,2,1,6,8,7];
numbers.sort(function(a,b){
    console.log(a,b)
    console.log(a-b);
    return b-a;
});
console.log(numbers);