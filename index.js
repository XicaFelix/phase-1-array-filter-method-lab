// Code your solution here
function findMatching(array, string){
   let match =  array.filter(string => string);
   if (typeof match === 'undefined'){
       match = array.filter(string => string.toLowerCase());
       if (typeof match === 'undefined'){
           return [];
       } 
   }
   return match;
   
}
// function findMatching(array, string){
 //   check if filtering for the string returns false:
//   if the function returns false:
 //       filter using string.toLowerCase 
//           if filtering using string.toLowerCase returns false:
//              return empty array
//       if filtering for the string returns true:
//            return the solution array
//           