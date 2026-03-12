<script>
export default { 
  name: 'MyCustomPage' , 
  props: ['product']
  };
</script>

<template>
  <div>
    <h1>Top Level Product</h1>
    <p>This is a custom VueJS page. You can render anything you want "{{ product }}"</p>
  </div>
</template>

<style lang="scss" scoped>

</style>