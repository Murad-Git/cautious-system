import Link from 'next/link';

import { Tag } from '../ui/Tag';

import { Job } from '@/types/main';

export const Description = ({
  company,
  new: newJob,
  featured,
  position,
  postedAt,
  contract,
  location,
}: Job) => {
  return (
    <div>
      <div className='flex items-center space-x-3 mb-2'>
        <h3 className='text-primary font-bold'>{company}</h3>
        <div className='flex items-center space-x-3'>
          {!!featured && <Tag featured={featured} />}
          {!!newJob && <Tag newJob={newJob} />}
        </div>
      </div>
      <Link
        target='_blank'
        href={`https://www.google.com/search?q=${position}`}
      >
        <h2 className='text-primary text-lg font-bold mb-2 hover:text-neutral-very-dark text-start'>
          {position}
        </h2>
      </Link>
      <ul className='flex items-center space-x-1 md:space-x-4 text-neutral-dark font-bold'>
        <li>{postedAt}</li>
        <li>&#x2022;</li>
        <li>{contract}</li>
        <li>&#x2022;</li>
        <li>{location}</li>
      </ul>
    </div>
  );
};
