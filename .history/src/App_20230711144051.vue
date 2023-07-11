<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Hello VVTE Template" />
    <p>Color1</p>
    <p>Color2</p>
    <p>Color3</p>
  </div>   
</template>

<style lang="scss" scoped>
$color: #ff0000;
p {
  margin: 0;
  color: $color;
}

p + p {
  color: opacity($color, 0.1);
}

</style>
