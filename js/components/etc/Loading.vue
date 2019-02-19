<template>
  <div v-if="mode == 'card'" class="overlay">
    <i class="fa fa-sync-alt fa-spin" />
  </div>
  <div v-else-if="mode == 'modal'" class="modal-overlay">
    <i class="fa fa-sync-alt fa-spin" />
  </div>
</template>

<script>
  export default {
   props: {
    mode: {
      type: String,
      default: 'card'
   }
 }
}
</script>
