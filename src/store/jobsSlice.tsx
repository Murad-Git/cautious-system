import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Job } from '@/types/main';

// interface addFilterProps {
//   type: string;
//   tag: string | string[];
// }

type State = {
  initial: Job[];
  filteredJob: Job[] | [];
  filterKeys: string[];
};

const initialState: State = {
  initial: [],
  filteredJob: [],
  filterKeys: [],
};

export const jobsSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    getInitialJob(state: State, { payload }: PayloadAction<Job[]>) {
      if (payload) {
        state.initial = payload;
        state.filteredJob = payload;
      }
    },
    addFilterJobs(state: State, { payload }: PayloadAction<string>) {
      if (state.filterKeys.includes(payload)) return;
      state.filterKeys = [...state.filterKeys, payload];

      state.filteredJob = state.initial.filter((job) => {
        job.languages.some((lang) => state.filterKeys.includes(lang) && job);
        if (
          state.filterKeys.includes(job.role) ||
          state.filterKeys.includes(job.level)
        )
          return job;
        else return;
      });
    },
    removeFilterJobs(state: State, { payload }: PayloadAction<string>) {
      state.filterKeys = state.filterKeys.filter((keys) => keys !== payload);
      state.filteredJob = state.filteredJob.filter((job) => {
        if (job.role == payload || job.level == payload) return;
        else return job;
      });
    },
    removeAllFilters(state) {
      state.filterKeys = [];
      state.filteredJob = state.initial;
    },
  },
});
export const {
  getInitialJob,
  addFilterJobs,
  removeFilterJobs,
  removeAllFilters,
} = jobsSlice.actions;
export default jobsSlice.reducer;

// if (typeof payload.tag === 'string') {
//   state.filterKeys = [...state.filterKeys, payload.tag];
//   state.filteredJob = state.filteredJob.filter(
//     (job) => job[payload.type] === payload
//   );
// }
// if (Array.isArray(payload.tag)) {
//   state.filterKeys = [...state.filterKeys, ...payload.tag];
//   state.filteredJob = state.filteredJob.map((job) =>
//     payload.tag.forEach((tag: string) => job.languages.includes(tag))
//   );
// } else return;
