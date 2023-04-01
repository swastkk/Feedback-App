import {writable} from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'This will be the third Feedback',
  },
  {
    id: 2,
    rating: 9,
    text: 'This will be the second Feedback',
  },
  {
    id: 3,
    rating: 8,
    text: 'This will be the first Feedback',
  },

])
