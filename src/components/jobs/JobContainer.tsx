import Image from 'next/image';

import { Description } from './Description';
import { JobFilter } from './JobFilter';

import { Job } from '@/types/main';

export const JobContainer = ({ job }: { job: Job }) => {
  return (
    <div className='job-container'>
      <div className='flex items-center'>
        <Image
          className='w-24 mr-10'
          src={job.logo}
          width={500}
          height={500}
          alt='job-icon'
        />
        <Description {...job} />
      </div>
      <JobFilter {...job} />
    </div>
  );
};
