import styles from './Schedule.module.css'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

import { lancerhacksDate } from '../about/About';

let eventGuid = 0

let dayStr = lancerhacksDate.toISOString().replace(/T.*$/, '')

const EVENTS = [
  {
    id: createEventId(),
    title: 'Check In',
    start: dayStr + 'T07:30:00',
    end: dayStr + 'T08:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Opening Ceremony',
    start: dayStr + 'T08:00:00',
    end: dayStr + 'T08:35:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Speaker 1 (Ford): Muffi Ghadliali',
    start: dayStr + 'T08:20:00',
    end: dayStr + 'T08:35:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Begin Hacking',
    start: dayStr + 'T08:35:00',
    end: dayStr + 'T12:15:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Lunch',
    start: dayStr + 'T12:15:00',
    end: dayStr + 'T13:00:00',
    color: '#ffcf80',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Continue Hacking',
    start: dayStr + 'T13:00:00',
    end: dayStr + 'T17:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dinner',
    start: dayStr + 'T17:30:00',
    end: dayStr + 'T18:15:00',
    color: '#ffcf80',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Code Freeze',
    start: dayStr + 'T18:15:00',
    end: dayStr + 'T19:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },

  {
    id: createEventId(),
    title: 'Create Presentation',
    start: dayStr + 'T19:00:00',
    end: dayStr + 'T19:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Present',
    start: dayStr + 'T19:30:00',
    end: dayStr + 'T20:30:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Judges Discuss',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Award Ceremony',
    start: dayStr + 'T21:15:00',
    end: dayStr + 'T21:45:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Closing Ceremony',
    start: dayStr + 'T21:45:00',
    end: dayStr + 'T22:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Brainstorming Workshop',
    start: dayStr + 'T08:40:00',
    end: dayStr + 'T09:15:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Web Dev Workshop',
    start: dayStr + 'T09:15:00',
    end: dayStr + 'T10:15:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'App/IOS Dev Workshop',
    start: dayStr + 'T09:15:00',
    end: dayStr + 'T10:15:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'AI Dev Workshop',
    start: dayStr + 'T09:15:00',
    end: dayStr + 'T10:15:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'CookieDB',
    start: dayStr + 'T10:10:00',
    end: dayStr + 'T10:40:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Obstacle Course',
    start: dayStr + 'T10:15:00',
    end: dayStr + 'T11:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Intel Speaker Panel',
    start: dayStr + 'T11:15:00',
    end: dayStr + 'T12:15:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Collegiate Counsulting',
    start: dayStr + 'T13:30:00',
    end: dayStr + 'T14:00:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Escape Room',
    start: dayStr + 'T13:00:00',
    end: dayStr + 'T15:00:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Speaker 2 (Microsoft): Sofia Sun',
    start: dayStr + 'T16:00:00',
    end: dayStr + 'T16:45:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Jeopardy!',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
]

function createEventId() {
  return String(eventGuid++)
}


export function Schedule() {
  return (
    <section className={styles.container} id="schedule">
      <h1 className={styles.header}>Schedule</h1>
      <div style={{width: 'min(100vw, 600px)'}}>
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin ]}
          initialView="timeGridDay"
          initialEvents={EVENTS}
          headerToolbar={{
            left: '',
            center: 'title',
            right: ''
          }}
          slotDuration="00:15:00"
          slotLabelInterval={15}
          slotLabelFormat={{
            hour: 'numeric',
            minute: '2-digit',
            omitZeroMinute: false,
          }}
          slotMinTime="07:30:00"
          slotMaxTime="21:45:00"
          height={600}
          initialDate={dayStr}
          allDaySlot={false}
        />
      </div>
    </section>
  )
}