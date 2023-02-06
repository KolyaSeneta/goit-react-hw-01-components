import PropTypes from "prop-types"
import css from './Statisticitem.module.css';

export const Statistics = ({ title, stats}) => {
    return (<section className={css.statistics}>
  {title ? <h2 className={css.title}>{title}</h2> : null}
        <ul className={css.statList}>{stats.map((item) =>(<li key={item.id} className={item} >
      <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>%{item.percentage}</span>
    </li>))}
  </ul>
</section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}