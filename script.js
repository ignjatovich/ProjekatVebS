//$(document).ready(function() {
    //loadEvents();

    //$('#reservation-form').on('submit', function(e) {
        //e.preventDefault();
        //reserveTicket();
    //});
//});

//function loadEvents() {
    //$.ajax({
        //url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/events',
        //method: 'GET',
        //data: {
            //apitoken: 'API TOKEN'
        //},
        //success: function(response) {
            //displayEvents(response.events);
        //},
        //error: function(jqXHR, textStatus, errorThrown) {
            //console.error("Error details:", textStatus, errorThrown, jqXHR.responseText);
            //alert('Error loading events: ' + jqXHR.responseText);
        //}
    //});
//}


//function displayEvents(events) {
    //const eventsDiv = $('#events');
    //eventsDiv.empty();
    //events.forEach(event => {
        //ventsDiv.append(`
            //<div class="event">
                //<h3>${event.name}</h3>
                //<p>${event.description}</p>
                //<button onclick="showReservationForm(${event.id})">Reserve</button>
            //</div>
        //`);
    //});
//}

//function showReservationForm(eventId) {
    //$('#event-id').val(eventId);
    //$('#reservation').show();
//}

//function reserveTicket() {
    //const data = {
        //apitoken: 'API TOKEN',
        //event_id: $('#event-id').val(),
        //name: $('#name').val(),
        //email: $('#email').val()
    //};

    //$.ajax({
        //url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/korisnik',
        //method: 'POST',
        //data: data,
        //success: function(response) {
            //console.log(response); // Log the response to the console
            //alert('Reservation successful');
            //$('#reservation').hide();
            //$('#reservation-form')[0].reset();
        //},
        //error: function() {
            //alert('Error making reservation');
        //}
    //});
//}

