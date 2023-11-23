import { useSelector } from 'react-redux'

import TicketCard from '../TicketCard'

import s from './TicketList.module.scss'

const TicketList = ({ ticketsData }) => {
  const { stopFetching } = useSelector((state) => state.fetchData)

  if (!ticketsData.length && !stopFetching) {
    return <div className={s['loader']}></div>
  }

  if (!ticketsData.length) {
    return <div className={s['nothing-found']}>Рейсов, подходящих под заданные фильтры, не найдено</div>
  }

  let id = 10
  const tickets = ticketsData.map((props) => (
    <li key={id++} className={s['ticket-card']}>
      <TicketCard {...props} />
    </li>
  ))
  return <ul className={s['ticket-list']}>{tickets}</ul>
}

export default TicketList
