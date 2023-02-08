import { ButtonInFilter } from '@/components/ui/ButtonInFilter';
import { Container } from '@/components/ui/Container';

import { removeAllFilters } from '@/store/jobsSlice';

import { useAppDispatch, useAppSelector } from '@/types/hooks';

export const Filter = () => {
  const filterKeys = useAppSelector((state) => state.filterKeys);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <div className='filter'>
        <div className='filters flex'>
          {filterKeys.map((filterKey, index) => (
            <ButtonInFilter key={index} filterKey={filterKey} />
          ))}
        </div>
        <button
          onClick={() => dispatch(removeAllFilters())}
          className='font-semibold text-primary hover:underline underline-offset-4 cursor-pointer'
        >
          Clear
        </button>
      </div>
    </Container>
  );
};
