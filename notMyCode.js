function hexToDecimal(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);
        return((r << 16) + (g << 8) + b);//return 23,14,45 -> reformat if needed 
    } 
    return null;
  }     