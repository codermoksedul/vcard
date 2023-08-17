(function($) {

	"use strict";

	document.addEventListener('DOMContentLoaded', function(){
    var today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        monthTag =["January","February","March","April","May","June","July","August","September","October","November","December"],
        day = today.getDate(),
        days = document.getElementsByTagName('td'),
        selectedDay,
        setDate,
        daysLen = days.length;
// options should like '2014-01-01'
    function Calendar(selector, options) {
        this.options = options;
        this.draw();
    }
    
    Calendar.prototype.draw  = function() {
        this.getCookie('selected_day');
        this.getOptions();
        this.drawDays();
        var that = this,
            reset = document.getElementById('reset'),
            pre = document.getElementsByClassName('pre-button'),
            next = document.getElementsByClassName('next-button');
            
            pre[0].addEventListener('click', function(){that.preMonth(); });
            next[0].addEventListener('click', function(){that.nextMonth(); });
            reset.addEventListener('click', function(){that.reset(); });
        while(daysLen--) {
            days[daysLen].addEventListener('click', function(){that.clickDay(this); });
        }
    };
    
    Calendar.prototype.drawHeader = function(e) {
        var headDay = document.getElementsByClassName('head-day'),
            headMonth = document.getElementsByClassName('head-month');

            e?headDay[0].innerHTML = e : headDay[0].innerHTML = day;
            headMonth[0].innerHTML = monthTag[month] +" - " + year;        
     };
    
    Calendar.prototype.drawDays = function() {
        var startDay = new Date(year, month, 1).getDay(),
//      下面表示这个月总共有几天
            nDays = new Date(year, month + 1, 0).getDate(),
    
            n = startDay;
//      清除原来的样式和日期
        for(var k = 0; k <42; k++) {
            days[k].innerHTML = '';
            days[k].id = '';
            days[k].className = '';
        }

        for(var i  = 1; i <= nDays ; i++) {
            days[n].innerHTML = i; 
            n++;
        }
        
        for(var j = 0; j < 42; j++) {
            if(days[j].innerHTML === ""){
                
                days[j].id = "disabled";
                
            }else if(j === day + startDay - 1){
                if((this.options && (month === setDate.getMonth()) && (year === setDate.getFullYear())) || (!this.options && (month === today.getMonth())&&(year===today.getFullYear()))){
                    this.drawHeader(day);
                    days[j].id = "today";
                }
            }
            if(selectedDay){
                if((j === selectedDay.getDate() + startDay - 1)&&(month === selectedDay.getMonth())&&(year === selectedDay.getFullYear())){
                days[j].className = "selected";
                this.drawHeader(selectedDay.getDate());
                }
            }
        }
    };
    
    Calendar.prototype.clickDay = function(o) {
        var selected = document.getElementsByClassName("selected"),
            len = selected.length;
        if(len !== 0){
            selected[0].className = "";
        }
        o.className = "selected";
        selectedDay = new Date(year, month, o.innerHTML);
        this.drawHeader(o.innerHTML);
        this.setCookie('selected_day', 1);
        
    };
    
    Calendar.prototype.preMonth = function() {
        if(month < 1){ 
            month = 11;
            year = year - 1; 
        }else{
            month = month - 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };
    
    Calendar.prototype.nextMonth = function() {
        if(month >= 11){
            month = 0;
            year =  year + 1; 
        }else{
            month = month + 1;
        }
        this.drawHeader(1);
        this.drawDays();
    };
    
    Calendar.prototype.getOptions = function() {
        if(this.options){
            var sets = this.options.split('-');
                setDate = new Date(sets[0], sets[1]-1, sets[2]);
                day = setDate.getDate();
                year = setDate.getFullYear();
                month = setDate.getMonth();
        }
    };
    
     Calendar.prototype.reset = function() {
         month = today.getMonth();
         year = today.getFullYear();
         day = today.getDate();
         this.options = undefined;
         this.drawDays();
     };
    
    Calendar.prototype.setCookie = function(name, expiredays){
        if(expiredays) {
            var date = new Date();
            date.setTime(date.getTime() + (expiredays*24*60*60*1000));
            var expires = "; expires=" +date.toGMTString();
        }else{
            var expires = "";
        }
        document.cookie = name + "=" + selectedDay + expires + "; path=/";
    };
    
    Calendar.prototype.getCookie = function(name) {
        if(document.cookie.length){
            var arrCookie  = document.cookie.split(';'),
                nameEQ = name + "=";
            for(var i = 0, cLen = arrCookie.length; i < cLen; i++) {
                var c = arrCookie[i];
                while (c.charAt(0)==' ') {
                    c = c.substring(1,c.length);
                    
                }
                if (c.indexOf(nameEQ) === 0) {
                    selectedDay =  new Date(c.substring(nameEQ.length, c.length));
                }
            }
        }
    };
    var calendar = new Calendar();
    
        
}, false);

})(jQuery);


$(document).ready(function () {
    // ... your existing code

    // Populate selected date input field on calendar cell click
    $("#calendar td").click(function () {
      var day = $(this).text();
      var month = $(".head-month").text();
      var year = new Date().getFullYear(); // Use current year for simplicity
      var selectedDate =day + ' ' + "-" + ' ' + month;
      $("#selected-date").val(selectedDate);
    });

  });

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  var day = new Date().getDate(); 
  var month = new Date().getUTCMonth(); 
  var year = new Date().getFullYear(); 
  var selectedDate =day + " " + "-" + " " + monthNames[new Date().getMonth()] + " " +"-"+ " " + year;
  document.getElementById("selected-date").value =selectedDate;


//   time
document.addEventListener("DOMContentLoaded", function () {
    const hourSelect = document.getElementById("hour");
    const minuteSelect = document.getElementById("minute");
    const ampmSelect = document.getElementById("ampm");
  
    // Function to format time with leading zero
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  
    // Event listener for dropdown changes
    hourSelect.addEventListener("change", updateSelectedTime);
    minuteSelect.addEventListener("change", updateSelectedTime);
    ampmSelect.addEventListener("change", updateSelectedTime);
  
    // Generate options for hours
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement("option");
      option.value = formatTime(i);
      option.textContent = formatTime(i);
      hourSelect.appendChild(option);
    }
  
    // Generate options for minutes
    for (let i = 0; i <= 59; i++) {
      const option = document.createElement("option");
      option.value = formatTime(i);
      option.textContent = formatTime(i);
      minuteSelect.appendChild(option);
    }
  
    function updateSelectedTime() {
      const selectedHour = hourSelect.value;
      const selectedMinute = minuteSelect.value;
      const selectedAMPM = ampmSelect.value;
  
      const formattedTime = `${selectedHour}:${selectedMinute} ${selectedAMPM}`;
  
      // Set the input value to the selected time
      selectedTimeInput.value = formattedTime;
    }
  });