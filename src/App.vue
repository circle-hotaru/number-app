<template>
  <div id="app">
    <number-display />
    <number-submit />
  </div>
</template>

<script>
import NumberDisplay from './components/NumberDisplay.vue'
import NumberSubmit from './components/NumberSubmit.vue'


export default {
  name: 'App',
  components: {
    NumberDisplay,
    NumberSubmit
  }
}
</script>

