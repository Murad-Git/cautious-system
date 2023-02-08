import { addFilterJobs } from '@/store/jobsSlice';

import { Button } from '../ui/Button';

import { useAppDispatch } from '@/types/hooks';
import { Job } from '@/types/main';

export const JobFilter = ({ role, level, languages }: Job) => {
  // const tagList = [
  //   { type: 'contract', tag: role },
  //   { type: 'level', tag: level },
  //   { type: 'languages', tag: languages },
  // ];
  const tagList = [role, level, ...languages];
  const dispatch = useAppDispatch();

  return (
    <div className='mt-8 md:mt-auto'>
      {tagList.map((tagItem, index) => (
        <Button
          onClick={() => dispatch(addFilterJobs(tagItem))}
          variant='primary'
          key={index}
          className='mr-3'
        >
          {tagItem}
        </Button>
      ))}
    </div>
  );
};
