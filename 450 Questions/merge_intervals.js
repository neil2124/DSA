const mergeIntervals = (intervals) => {
    var n = intervals.length
    var result=[]
    var curretInterval = intervals[0]
    result.push(curretInterval)
    for (var i =1; i<n; i++){
        curr_beg = curretInterval[0]
        curr_end = curretInterval[1]
        next_beg = intervals[i][0]
        next_end = intervals[i][1]
        // If there is a merge simply change the last element to the maximum between curr and next
        // else increment curr and push it in output
        if (curr_end> next_beg){
            curretInterval[1] = Math.max(curr_end,next_end) // This will update the output array   **VVVIMP**
        }else{
            curretInterval = intervals[i]
            result.push(curretInterval)
        }
       

    }
    
    return result
}

const mer = mergeIntervals([[1,3],[2,6],[8,10],[9,18]])
console.log(mer)