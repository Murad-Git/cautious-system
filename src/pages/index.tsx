import { useEffect } from 'react';

import { JobsList } from '@/components/jobs/JobsList';
import { Container } from '@/components/ui/Container';

import { getInitialJob } from '@/store/jobsSlice';

import { readJsonFile } from '@/helpers/readJson';

import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { Job } from '@/types/main';

interface Props {
  jobs: Job[];
}

export default function HomePage({ jobs }: Props) {
  const filteredJobs = useAppSelector((state) => state.filteredJob);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!filteredJobs) return;
    dispatch(getInitialJob(jobs));
  }, []);
  return (
    <div>
      <Container>
        <JobsList />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const objectData = await readJsonFile();
  return {
    props: {
      jobs: objectData,
    },
  };
}
