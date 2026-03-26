<script>
export default { 
  name: 'coldFront' , 
  props: ['product']
  };
</script>

<template>
  <div class="coldfront-wrapper">
    <h1>Cold Front</h1>
    <p><a href="http://go.fiu.edu/pavilion-lease">Go to Cold Front</a></p>
    <div class="external-frame-container">
        <iframe src="https://mercury.cs.fiu.edu:30005" class="external-frame" frameborder="0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .coldfront-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Adjust if you want it to be 100% of the parent instead */
    width: 100%;
  }

  .external-frame-container {
    flex-grow: 1; /* Fills all remaining vertical space below the header */
    width: 100%;
    position: relative;
  }

  .external-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>