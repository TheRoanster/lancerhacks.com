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
    start: dayStr + 'T07:45:00',
    end: dayStr + 'T08:00:00',
    color: 'cyan',
    textColor: 'black',
    borderColor: 'black',
  },
  
  {
    id: createEventId(),
    title: 'Opening Ceremony',
    start: dayStr + 'T08:00:00',
    end: dayStr + 'T08:30:00',
    color: 'red',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Opening Speaker',
    start: dayStr + 'T08:30:00',
    end: dayStr + 'T08:45:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Declare your Category',
    start: dayStr + 'T08:45:00',
    end: dayStr + 'T09:45:00',
    color: '#FF00C1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Beginner\'s Workshop',
    start: dayStr + 'T09:00:00',
    end: dayStr + 'T09:30:00',
    color: 'cyan',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Women in Tech Panel',
    start: dayStr + 'T11:00:00',
    end: dayStr + 'T12:00:00',
    color: '#CDFF00',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Lunch Break',
    start: dayStr + 'T12:15:00',
    end: dayStr + 'T01:00:00',
    color: '#ffcf80',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Escape Room',
    start: dayStr + 'T13:30:00',
    end: dayStr + 'T15:00:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Carnival Games',
    start: dayStr + 'T13:00:00',
    end: dayStr + 'T15:00:00',
    color: '#2EFF00',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dodgeball',
    start: dayStr + 'T16:00:00',
    end: dayStr + 'T17:00:00',
    color: 'cyan',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Office Hours',
    start: dayStr + 'T18:00:00',
    end: dayStr + 'T19:00:00',
    color: '#caffa1',
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
    title: 'Presentations',
    start: dayStr + 'T19:30:00',
    end: dayStr + 'T20:30:00',
    color: 'red',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Judging',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: 'cyan',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Jeopardy',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Karaoke',
    start: dayStr + 'T19:30:00',
    end: dayStr + 'T21:15:00',
    color: '#F200D5',
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
    title: 'Hacking',
    start: dayStr + 'T08:45:00',
    end: dayStr + 'T20:00:00',
    color: 'white',
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
          slotMinTime="07:45:00"
          slotMaxTime="21:45:00"
          height={600}
          initialDate={dayStr}
          allDaySlot={false}
        />
      </div>
    </section>
  )
}