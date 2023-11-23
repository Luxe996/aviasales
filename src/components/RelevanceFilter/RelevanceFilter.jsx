import { useDispatch, useSelector } from 'react-redux'

import { updateRelevanceFilter } from '../../actions/actionCreators'

import s from './RelevanceFilter.module.scss'

const RelevanceFilter = () => {
  const filter = useSelector((state) => state.relevanceFilter)
  const dispatch = useDispatch()

  const handleUpdateFilter = (filter) => {
    dispatch(updateRelevanceFilter(filter))
  }
  return (
    <form>
      <ul className={s['relevance-filter']}>
        <li>
          <label className={`${s['relevance-filter__item']} ${filter === 'cheapest' ? s['active'] : null}`}>
            <input type="radio" name="sort" value={'cheapest'} onClick={() => handleUpdateFilter('cheapest')} />
            Самый дешевый
          </label>
        </li>
        <li>
          <label className={`${s['relevance-filter__item']} ${filter === 'fastest' ? s['active'] : null}`}>
            <input type="radio" name="sort" value={'fastest'} onClick={() => handleUpdateFilter('fastest')} />
            Самый быстрый
          </label>
        </li>
        <li>
          <label className={`${s['relevance-filter__item']} ${filter === 'optimal' ? s['active'] : null}`}>
            <input type="radio" name="sort" value={'optimal'} onClick={() => handleUpdateFilter('optimal')} />
            Оптимальный
          </label>
        </li>
      </ul>
    </form>
  )
}
export default RelevanceFilter
