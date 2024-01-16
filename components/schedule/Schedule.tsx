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
    title: 'Set up',
    start: dayStr + 'T07:15:00',
    end: dayStr + 'T08:00:00',
    color: 'pink',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Check In',
    start: dayStr + 'T07:30:00',
    end: dayStr + 'T08:15:00',
    color: 'cyan',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Opening Ceremony',
    start: dayStr + 'T08:00:00',
    end: dayStr + 'T09:00:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Speaker for OC',
    start: dayStr + 'T08:30:00',
    end: dayStr + 'T09:00:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Begin Hacking',
    start: dayStr + 'T09:00:00',
    end: dayStr + 'T20:15:00',
    color: 'purple',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Lunch',
    start: dayStr + 'T12:00:00',
    end: dayStr + 'T12:45:00',
    color: '#ffcf80',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dinner',
    start: dayStr + 'T21:30:00',
    end: dayStr + 'T22:15:00',
    color: '#ffcf80',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Presentations',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:45:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Judging',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T22:15:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Award Ceremony',
    start: dayStr + 'T22:00:00',
    end: dayStr + 'T22:45:00',
    color: 'white',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Web Dev Workshop',
    start: dayStr + 'T09:30:00',
    end: dayStr + 'T10:15:00',
    color: '#a1ffeb',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Dodgeball',
    start: dayStr + 'T16:00:00',
    end: dayStr + 'T17:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Women in Tech Panel',
    start: dayStr + 'T11:00:00',
    end: dayStr + 'T12:15:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Office Hours',
    start: dayStr + 'T18:30:00',
    end: dayStr + 'T19:45:00',
    color: '#caffa1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Escape Room',
    start: dayStr + 'T12:30:00',
    end: dayStr + 'T15:15:00',
    color: '#ffada1',
    textColor: 'black',
    borderColor: 'black',
  },
  {
    id: createEventId(),
    title: 'Jeopardy!',
    start: dayStr + 'T20:30:00',
    end: dayStr + 'T21:30:00',
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
          slotMinTime="07:15:00"
          slotMaxTime="22:45:00"
          height={1650}
          initialDate={dayStr}
          allDaySlot={false}
        />
      </div>
    </section>
  )
}