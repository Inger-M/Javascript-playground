function getDiscount(status){
  switch (status){
    case "silver":
      return 5;
       break;
    case "gold":
      return 10;
       break;
    case "platinum":
      return 30;
       break;
    default:
      return 0;
       break;    
  }

}

let a = getDiscount("CEO"); 