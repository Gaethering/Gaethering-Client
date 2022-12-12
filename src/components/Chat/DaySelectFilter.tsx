import { PointerEventHandler, useState } from 'react';
import styled from 'styled-components';

const Days = {
  mon: '월',
  tue: '화',
  wed: '수',
  thu: '목',
  fri: '금',
  sat: '토',
  sun: '일',
} as const;

const daysArray = Object.entries(Days);

type DaysType = keyof typeof Days | 'all';

type ClickHandler = PointerEventHandler<HTMLButtonElement>;

// type Props = {};

function DaySelectFilter() {
  const [filter, setFilter] = useState<DaysType[]>(['all']);
  console.log(filter);

  const handleFilterClick: ClickHandler = ({ currentTarget: target }) => {
    const day = target.name as DaysType;

    if (filter.includes(day)) {
      removeFilter(day, target);
    } else {
      addFilter(day, target);
    }
  };

  const addFilter = (day: DaysType, target: HTMLButtonElement) => {
    if (day === 'all') {
      setFilter(['all']);

      let dayFilter = target.previousElementSibling;

      while (dayFilter) {
        dayFilter.classList.remove('active');
        dayFilter = dayFilter.previousElementSibling;
      }
      target.classList.add('active');
    } else {
      const filterArray = filter.filter((value) => value !== 'all');
      target.parentElement
        ?.querySelector('.filter-all')
        ?.classList.remove('active');

      setFilter([...filterArray, day]);
      target.classList.add('active');
    }
  };

  const removeFilter = (day: DaysType, target: HTMLButtonElement) => {
    if (day === 'all') {
      return;
    }

    const filterArray = filter.filter((value) => value !== day);

    setFilter([...filterArray]);
    target.classList.remove('active');
  };

  return (
    <StyledDaySelect>
      {daysArray.map(([id, day]) => (
        <DaySelectButton
          type="button"
          name={id}
          key={id}
          onClick={handleFilterClick}
        >
          {day}
        </DaySelectButton>
      ))}
      <DaySelectButton
        type="button"
        className="filter-all active"
        name={'all'}
        key={'all'}
        onClick={handleFilterClick}
      >
        전체
      </DaySelectButton>
    </StyledDaySelect>
  );
}

export default DaySelectFilter;

const StyledDaySelect = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: 1.4rem;
`;

const DaySelectButton = styled.button`
  width: 14rem;
  height: 4.4rem;

  margin: 0.6rem;

  border: 0.1rem solid ${({ theme: { color } }) => color.gray2};
  border-radius: 1.6rem;

  color: ${({ theme: { color } }) => color.gray2};
  font-size: 1.6rem;
  font-weight: 600;

  &.active {
    color: ${({ theme: { color } }) => color.main};
    border-color: ${({ theme: { color } }) => color.main};
    border-width: 0.2rem;
  }
`;
