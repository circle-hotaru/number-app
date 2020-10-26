<template>
  <div>
    <h2>{{ storeState.numbers }}</h2>
    <p>{{ storeState.text }} </p>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "number-display",
  data() {
    return {
      storeState: store.state
    };
  }
};
</script>