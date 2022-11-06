<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choose a Role</option>
    <option v-for="option in options" :key="option.value" :value="option.value" @click="$emit('userSelect', option.value)">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.select {
  display: block;
  background: var(--white-color);
  color: #fff;
  min-width: 20%;
  border: 2px solid rgb(41, 151, 255);
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  min-height: 54px;
  cursor: pointer;
}
select > option {
  text-align: left;
  background: #000;
  border-radius: 20px;
}
</style>
