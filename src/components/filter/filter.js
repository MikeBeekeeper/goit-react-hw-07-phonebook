import { changeFilter } from 'redux/slice';
import css from '../filter/filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const inputValue = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <div className={css.filterWrapper}>
        <label>
          <b>Find contacts by name</b>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            className={css.filterInput}
          />
        </label>
      </div>
    </>
  );
};

export default Filter;
