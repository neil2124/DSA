//  var taxReturn = (amount) =>{
//      var tax =0;
//      var tax1 = 12500;
//      var tax2 = 112500;
//      if(amount <=250000){
//          return tax;
//      }

//          if(amount >=250000 && amount <=500000){
//              tax = tax + 0.05*(amount-250000);
//          }
//          if(amount >500000 && amount <=1000000){
//              tax = tax + 0.2*(amount-50000) + tax1;
//          }
//          if(amount>1000000){
//              tax = tax + 0.3*(amount-1000000) + tax2;
//          }
    
//      return tax;
//  }

 //Solution 2
 var taxReturn = (amount) =>{
     var tax =0;
     if(amount <=250000){
         return tax;
     }
     while(amount >250000){
         console.log(amount, tax)
         if(amount >=250000 && amount <=500000){
             tax = tax + 0.05*(amount-250000);
             return tax;
         }
         if(amount >500000 && amount <=1000000){
             tax = tax + 0.2*(amount-500000);
             var curAmount = amount - 500000;
             amount = amount - curAmount; 
         }
         if(amount>1000000){
             tax = tax + 0.3*(amount-1000000);
             var curAmount = amount - 1000000;
             amount = amount - curAmount;
         }
     }

    
     return tax;
 }

console.log(taxReturn(10000000));