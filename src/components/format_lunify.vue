<template>
  <span> {{ value }} LFI </span>
</template>

<script>
export default {
  name: "FormatLunify",
  props: {
    amount: {
      type: Number,
      required: true
    },
    round: {
      type: Boolean,
      required: false,
      default: false
    },
    rawValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    value() {
      let value = this.amount / 1e8;
      return value.toFixed(8);
    }
  }
};
</script>

<style></style>
