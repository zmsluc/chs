function showTime(){
    var date = new Date();
    var m = date.getMinutes();
    var h = date.getHours();
    var period
    var realM = (h*60 + m);// this combines hours and minutes, so 7:55 becomes 475, 8:40 becomes 520, etc.
  
//section below's abt period timing
  
    if (realM > 475 & realM < 520){
      var timeLeft = (520 - realM);
      var period = "Period 1";
    }//period 1^
    if (realM > 524 & realM < 567){
      var timeLeft = (567 - realM);
      var period = "Period 2";
    }//period 2^
    if (realM > 571 & realM < 614){
      var timeLeft = (614 - realM)
      var period = "Period 3";
    }//period 3^
    if (realM > 618 & realM < 661){
      var timeLeft = (661 - realM)
      var period = "Period 4";
    }//period 4^
    if (realM > 665 & realM < 710){
      var timeLeft = (710 - realM)
      var period = "Period 5";
    }//period 5^
    if (realM > 714 & realM < 759){
      var timeLeft = (759 - realM)
      var period = "Period 6"
    }//period 6^
    if (realM > 763 & realM < 808){
      var timeLeft = (808 - realM)
      var period = "Period 7"
    }//period 7^
    if (realM > 812 & realM < 855){
      var timeLeft = (855 - realM)
      var period = "Period 8"
    }//period 8^
  
    if (period === undefined){
      var time = "No periods are active."
    }
//section below is just for displaying it properly
  
    if (time === undefined){
       var time = period + " ends in " + timeLeft + " minutes.";// this is what it will show for the display.
    }
    document.getElementById("TimeLeft").innerText = time; document.getElementById("TimeLeft").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
