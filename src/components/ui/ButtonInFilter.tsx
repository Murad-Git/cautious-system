import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/components/ui/Button';

import { removeFilterJobs } from '@/store/jobsSlice';

import { useAppDispatch } from '@/types/hooks';
export const ButtonInFilter = ({ filterKey }: { filterKey: string }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='flex items-center mr-4'>
      <Button className='rounded-l-sm bg-neutral-filter-table px-1 py-1 hover:bg-primary text-primary text-sm font-bold hover:text-neutral-filter-table duration-150 '>
        {filterKey}
      </Button>
      <FontAwesomeIcon
        onClick={() => dispatch(removeFilterJobs(filterKey))}
        className='bg-primary text-white h-5 px-2 py-1 rounded-r-sm hover:bg-black cursor-pointer'
        icon={faXmark}
      />
    </div>
  );
};
