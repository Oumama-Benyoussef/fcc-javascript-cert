function titleCase(str){
  if (!str) return ""; // Handle empty string
  const wordarray = str.split(" ");
  let result = "";

  for (let i = 0; i < wordarray.length; i++){
    result += wordarray[i][0].toUpperCase();

    for (let j = 0; j < wordarray[i].length - 1; j++){
      result += (wordarray[i][j + 1]).toLowerCase();
    }

    if (i < wordarray.length - 1) {   //  no space after the last word
      result += " ";
    }
  }

  return result;
}

//Test:
console.log(titleCase("javaScript is fun"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("I'm a little tea pot"));
