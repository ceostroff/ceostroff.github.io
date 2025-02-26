document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('search');
    let scheduleData = [];
    let pinnedEvents = {};

    // Fetch and parse the JSON data
    fetch('schedule.json')
        .then(response => response.json())
        .then(data => {
            scheduleData = data;
            renderSchedule();
        })
        .catch(error => console.error('Error loading schedule data:', error));

    // Render the schedule
    function renderSchedule() {
        scheduleContainer.innerHTML = '';
        scheduleData.forEach(timeSlot => {
            const timeSlotDiv = document.createElement('div');
            timeSlotDiv.classList.add('time-slot');
            timeSlotDiv.innerHTML = `
                <h2>${timeSlot.time}</h2>
                <div class="events">
                    ${timeSlot.events.map(event => `
                        <div class="event ${pinnedEvents[event.id] ? 'pinned' : ''}">
                            <span>${event.title}</span>
                            <button data-event-id="${event.id}">
                                ${pinnedEvents[event.id] ? 'Unpin' : 'Pin'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
            scheduleContainer.appendChild(timeSlotDiv);
        });
        addEventListeners();
    }

    // Add event listeners to buttons
    function addEventListeners() {
        const buttons = document.querySelectorAll('.event button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const eventId = e.target.getAttribute('data-event-id');
                if (pinnedEvents[eventId]) {
                    unpinEvent(eventId);
                } else {
                    pinEvent(eventId);
                }
            });
        });
    }

    // Pin an event
    function pinEvent(eventId) {
        pinnedEvents[eventId] = true;
        renderSchedule();
    }

    // Unpin an event
    function unpinEvent(eventId) {
        delete pinnedEvents[eventId];
        renderSchedule();
    }

    // Filter events based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredSchedule = scheduleData.map(timeSlot => ({
            ...timeSlot,
            events: timeSlot.events.filter(event => event.title.toLowerCase().includes(query))
        })).filter(timeSlot => timeSlot.events.length > 0);
        scheduleData = filteredSchedule;
        renderSchedule();
    });
});
