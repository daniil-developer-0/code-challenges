function bouncingBall(h,  bounce,  window) {
  let result = 1;
  
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    h *= bounce;
    while(h > window) {
      h *= bounce;
      result += 2;
    } 
  } else return -1;
  return result;
}
