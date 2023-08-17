document.addEventListener("DOMContentLoaded", function() {
    const fullCalendarEl = document.getElementById("full-calendar");
    const calendarTimezoneSelect = document.getElementById("calendar-timezone");
    const contactTimezoneSelect = document.getElementById("contact-timezone");
    
    // Initialize FullCalendar
    const calendar = new FullCalendar.Calendar(fullCalendarEl, {
      initialView: "timeGridWeek",
      height: "auto",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay"
      },
      events: [
        // Add your events here
        // { title: "Event 1", start: "2023-08-15T10:00:00", end: "2023-08-15T12:00:00" },
        // { title: "Event 2", start: "2023-08-16T14:00:00", end: "2023-08-16T16:00:00" }
      ],
      timeZone: "local" // Use "local" for browser's time zone
    });
  
    calendar.render();
  
    const contactForm = document.getElementById("contact-form");
  
    // Handle contact form submission
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
  
      // Get selected time zone for contact form
      const selectedContactTimezone = contactTimezoneSelect.value;
      const contactFormTime = new Date().toLocaleString("en-US", { timeZone: selectedContactTimezone });
  
      // Replace this with your actual email sending logic
      console.log("Sending email...");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Contact Form Time:", contactFormTime);
    });
  
    // Update FullCalendar time zone when selected time zone changes
    calendarTimezoneSelect.addEventListener("change", function() {
      const selectedCalendarTimezone = calendarTimezoneSelect.value;
      calendar.setOption("timeZone", selectedCalendarTimezone);
      calendar.refetchEvents();
    });
  });
  