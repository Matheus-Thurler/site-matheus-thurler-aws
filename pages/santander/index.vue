<template>
  <div class="mt-20">
    <div class="flex flex-wrap justify-center p-2 pb-20">
      <h1>Santander</h1>
      <button @click="handleClick" type="button" aria-label="Clique para ação">Click me</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Santander',
  methods: {
    handleClick() {
      this.$emit('clicked');
    }
  }
}
</script>
