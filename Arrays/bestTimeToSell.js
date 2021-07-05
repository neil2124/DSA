var maxProfit = function(prices) {
    if(prices.length<=1) return 0;
    var leftP=0; //Buy
    var rightP = 1; // Sell
    var maxProfit=0;
    while(rightP<prices.length){
        // Profitable???
        if(prices[leftP]<prices[rightP]){
            var profit = prices[rightP] - prices[leftP];
            // maxProfit = Math.max(maxProfit, profit);
            maxProfit = maxProfit + profit;
        }
        else{
            leftP = rightP;
        }
        rightP = rightP+1
    }
    return maxProfit;
}


console.log(maxProfit([7,1,5,3,6,4]));