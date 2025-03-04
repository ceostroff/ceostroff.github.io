document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule');
    const searchInput = document.getElementById('search');
    let scheduleData = [];
    let pinnedEvents = {}; // Stores pinned events by time slot

    // Fetch and process schedule data
    fetch("https://raw.githubusercontent.com/ceostroff/ceostroff.github.io/main/schedule.json")
        .then(response => response.json())
        .then(data => {
            console.log("Loaded Schedule:", data); // Debugging log
            scheduleData = processScheduleData(data);
            renderSchedule();
        })
        .catch(error => console.error("Error fetching schedule:", error));

    // Convert raw JSON into grouped schedule data by time slots
    function processScheduleData(data) {
        let groupedData = {};

        data.forEach(event => {
            let time = event.start_time; // Adjust this based on JSON structure
            if (!groupedData[time]) {
                groupedData[time] = { time, events: [] };
            }
            groupedData[time].events.push(event);
        });

        console.log("Processed Schedule Data:", groupedData); // Debugging log
        return Object.values(groupedData).sort((a, b) => new Date(a.time) - new Date(b.time));
    }

    // Render the full schedule
    function renderSchedule() {
        scheduleContainer.innerHTML = '';
        scheduleData.forEach(timeSlot => {
            const pinnedEvent = pinnedEvents[timeSlot.time]; // Get pinned event if any
            const timeSlotDiv = document.createElement('div');
            timeSlotDiv.classList.add('time-slot');
            timeSlotDiv.innerHTML = `
                <h2>${new Date(timeSlot.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
                <div class="events">
                    ${pinnedEvent ? `
                        <div class="event pinned" data-event-id="${pinnedEvent.id}">
                            <strong>${pinnedEvent.title}</strong> 
                            <button class="unpin">Unpin</button>
                        </div>
                    ` : ''}
                    ${timeSlot.events
                        .filter(event => !pinnedEvent || event.session_id !== pinnedEvent.id)
                        .map(event => `
                            <div class="event" data-event-id="${event.session_id}">
                                <span>${event.session_title || "Untitled Event"}</span>
                                <button class="pin">Pin</button>
                            </div>
                        `).join('')}
                </div>
            `;
            scheduleContainer.appendChild(timeSlotDiv);
        });
        addEventListeners();
    }

    // Add event listeners to pin/unpin buttons
    function addEventListeners() {
        document.querySelectorAll('.pin').forEach(button => {
            button.addEventListener('click', (e) => {
                const eventElement = e.target.closest('.event');
                const eventId = eventElement.getAttribute('data-event-id');
                const timeSlot = eventElement.closest('.time-slot').querySelector('h2').textContent;
                
                const eventTitle = scheduleData
                    .flatMap(slot => slot.events)
                    .find(e => e.session_id.toString() === eventId)?.session_title || "Unknown Event";

                pinnedEvents[timeSlot] = { id: eventId, title: eventTitle };
                renderSchedule();
            });
        });

        document.querySelectorAll('.unpin').forEach(button => {
            button.addEventListener('click', (e) => {
                const timeSlot = e.target.closest('.time-slot').querySelector('h2').textContent;
                delete pinnedEvents[timeSlot];
                renderSchedule();
            });
        });
    }

    // Filter schedule based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        scheduleContainer.innerHTML = '';

        scheduleData.forEach(timeSlot => {
            const matchingEvents = timeSlot.events.filter(event => event.session_title.toLowerCase().includes(query));
            if (matchingEvents.length > 0 || pinnedEvents[timeSlot.time]) {
                const pinnedEvent = pinnedEvents[timeSlot.time];
                const timeSlotDiv = document.createElement('div');
                timeSlotDiv.classList.add('time-slot');
                timeSlotDiv.innerHTML = `
                    <h2>${new Date(timeSlot.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
                    <div class="events">
                        ${pinnedEvent ? `
                            <div class="event pinned" data-event-id="${pinnedEvent.id}">
                                <strong>${pinnedEvent.title}</strong> 
                                <button class="unpin">Unpin</button>
                            </div>
                        ` : ''}
                        ${matchingEvents
                            .filter(event => !pinnedEvent || event.session_id !== pinnedEvent.id)
                            .map(event => `
                                <div class="event" data-event-id="${event.session_id}">
                                    <span>${event.session_title || "Untitled Event"}</span>
                                    <button class="pin">Pin</button>
                                </div>
                            `).join('')}
                    </div>
                `;
                scheduleContainer.appendChild(timeSlotDiv);
            }
        });
        addEventListeners();
    });
});
