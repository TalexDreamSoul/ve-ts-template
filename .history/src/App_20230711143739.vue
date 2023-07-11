<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Hello VVTE Template" />
    <span>Color1</span>
    <br />
    <span>Color2</span>
    <br />
    <span>Color3</span>
  </div>   
</template>

<style lang="scss" scoped>
$color: #ff0000;
span {
  color: $color;
}

span + span {
  color: #00ff00;
}
</style>
