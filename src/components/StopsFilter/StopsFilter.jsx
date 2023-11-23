import { useDispatch, useSelector } from 'react-redux'

import { updateStopsFilter } from '../../actions/actionCreators'

import s from './StopsFilter.module.scss'

const StopsFilter = () => {
  const filters = useSelector((state) => state.stopsFilter)
  const dispatch = useDispatch()

  const handleUpdateFilter = (filter) => {
    dispatch(updateStopsFilter(filter))
  }

  return (
    <div className={s['stops-filter']}>
      <h3 className={s['stops-filter__title']}>Количество пересадок</h3>
      <ul className={s['stops-filter__list']}>
        <li className={s['stops-filter__list-item']}>
          <label>
            <input type="checkbox" onChange={() => handleUpdateFilter('all')} checked={filters.all} />
            Все
          </label>
        </li>
        <li className={s['stops-filter__list-item']}>
          <label>
            <input type="checkbox" onChange={() => handleUpdateFilter('zero')} checked={filters.zero} />
            Без пересадок
          </label>
        </li>
        <li className={s['stops-filter__list-item']}>
          <label>
            <input type="checkbox" onChange={() => handleUpdateFilter('one')} checked={filters.one} />1 пересадка
          </label>
        </li>
        <li className={s['stops-filter__list-item']}>
          <label>
            <input type="checkbox" onChange={() => handleUpdateFilter('two')} checked={filters.two} />2 пересадки
          </label>
        </li>
        <li className={s['stops-filter__list-item']}>
          <label>
            <input type="checkbox" onChange={() => handleUpdateFilter('two')} checked={filters.three} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default StopsFilter
