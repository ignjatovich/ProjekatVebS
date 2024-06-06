$(document).ready(function() {
    loadEvents();

    $('#reservation-form').on('submit', function(e) {
        e.preventDefault();
        reserveTicket();
    });
});

function loadEvents() {
    $.ajax({
        url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/events',
        method: 'GET',
        data: {
            apitoken: 'WbSR4URLbqIzgplzuUoQvJbQxh7bj6xDzxnRuOiZgQNQzAft5wmXqqwytvINM3OtRxnf8nchqeGgT5ZbtWtOqQqb8K'
        },
        success: function(response) {
            displayEvents(response.events);
        },
        error: function() {
            alert('Error loading events');
        }
    });
}

function displayEvents(events) {
    const eventsDiv = $('#events');
    eventsDiv.empty();
    events.forEach(event => {
        eventsDiv.append(`
            <div class="event">
                <h3>${event.name}</h3>
                <p>${event.description}</p>
                <button onclick="showReservationForm(${event.id})">Reserve</button>
            </div>
        `);
    });
}

function showReservationForm(eventId) {
    $('#event-id').val(eventId);
    $('#reservation').show();
}

function reserveTicket() {
    const data = {
        apitoken: 'YOUR_API_TOKEN_HERE',
        event_id: $('#event-id').val(),
        name: $('#name').val(),
        email: $('#email').val()
    };

    $.ajax({
        url: 'https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/reserve',
        method: 'POST',
        data: data,
        success: function(response) {
            console.log(response); // Log the response to the console
            alert('Reservation successful');
            $('#reservation').hide();
            $('#reservation-form')[0].reset();
        },
        error: function() {
            alert('Error making reservation');
        }
    });
}

