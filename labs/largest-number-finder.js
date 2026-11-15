function largestOfAll(arr){
const res=[];
for(let i=0; i<arr.length;i++){
  // Initialize with first element to handle negative numbers correctly
  let largest=arr[i][0];
  for(let j=1; j<arr[i].length;j++){
    if(arr[i][j]>largest){largest=arr[i][j];}
  }
  res.push(largest);
}
return res;

}
