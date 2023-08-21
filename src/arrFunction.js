function sortArray(arr){
    let sortedArray = arr.sort((a,b) =>{
        return a-b
     })
     return [... new Set(sortedArray)]
  }

  export{ sortArray}