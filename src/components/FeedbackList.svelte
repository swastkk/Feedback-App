<script>
    import { each } from "svelte/internal";
    import FeedbackItem from "./FeedbackItem.svelte"
    import {fade, scale} from "svelte/transition"
    import {FeedbackStore} from "../store"
    let feedback= []
  console.log(feedback)
</script>
{#each $FeedbackStore as fb (fb.id) }
<div in:scale out:fade>
  <FeedbackItem item= {fb}/>
</div>
{/each}

