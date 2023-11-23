import { useSelector } from 'react-redux'

import s from './Spiner.module.scss'
import logo from './Logo.png'

const Spinner = () => {
  const { stopFetching } = useSelector((state) => state.fetchData)
  return (
    <div className={s['spinner-container']} id="up">
      <img className={`${s['logo']} ${stopFetching ? s['is-loaded'] : s['not-loaded']}`} src={logo} alt="" />
      <div className={`${s['spinner']} ${s['sphere']} ${stopFetching ? s['loaded'] : null}`} id="sphere">
        <div className={s['inner']}>
          <div className={s['disc']}>
            <img className={s['logo']} src={logo} alt="" />
          </div>
          <div className={s['disc']}></div>
          <div className={s['disc']}></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
