const commonElement = (ar)=>{
    mapObjects = new Object;
    ar[0].forEach(ele =>{
        mapObjects[ele] = 0
    })
    var makeNote = new Set()
    for (var i =1; i<ar.length; i++){
        
        for (var j=0; j<ar[i].length; j++){
            var copy = Object.keys(mapObjects);
        
            copy.forEach((ele) =>{
            
                if (ele == ar[i][j] && !makeNote.has(ele)){
                   
                    mapObjects[ele]+=1
                    makeNote.add(ele)
                }
            })
        }
       var makeNote = new Set()
    }
    console.log(mapObjects) 
}

commonElement( [[1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9],
   ])