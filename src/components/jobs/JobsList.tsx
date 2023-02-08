import { JobContainer } from './JobContainer';

import { useAppSelector } from '@/types/hooks';

export const JobsList = () => {
  const jobs = useAppSelector((state) => state.filteredJob);
  console.log('jobs', jobs);
  return (
    <div className='mx-auto space-y-4 pt-14 pb-10'>
      {jobs.map((job) => (
        <JobContainer key={job.id} job={job} />
      ))}
    </div>
  );
};
