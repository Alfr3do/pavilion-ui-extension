<script>
export default { name: 'MyCustomPage' , meta: {product: {type:String, required: true}}};
</script>

<template>
  <div>
    <h1>Top Level Product</h1>
    <p>This is a custom VueJS page. You can render anything you want "{{ meta.product }}"</p>
  </div>
</template>

<style lang="scss" scoped>

</style>