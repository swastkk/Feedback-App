<script>
    import { each } from "svelte/internal";
    import FeedbackItem from "./FeedbackItem.svelte"
    import {fade, scale} from "svelte/transition"

  export let feedback= []
  console.log(feedback)
</script>
{#each feedback as fb (fb.id) }
<div in:scale out:fade>
  <FeedbackItem item= {fb} on:delete-feedback />
</div>
{/each}

