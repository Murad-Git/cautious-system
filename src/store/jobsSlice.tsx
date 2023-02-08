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
        const skills = [job.role, job.level, ...job.languages, ...job.tools];

        return state.filterKeys.every((filter) => skills.includes(filter));
      });
    },
    removeFilterJobs(state: State, { payload }: PayloadAction<string>) {
      state.filterKeys = state.filterKeys.filter((keys) => keys !== payload);
      state.filteredJob = state.initial.filter((job) => {
        const skills = [job.role, job.level, ...job.languages, ...job.tools];

        return state.filterKeys.every((filter) => skills.includes(filter));
      });

      state.filteredJob.length === 0 ? (state.filteredJob = state.initial) : '';
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
