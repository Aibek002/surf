
<script>
export default {
  name: '',
  data() {
    return {
       message: 'Страница загружена ' + new Date()
    };
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>

<template>
<div id="bind-attribute">
  <span :title="message">
    Наведи на меня курсор на пару секунд, чтобы
    увидеть динамически связанное значение title!
  </span>
</div>
</template>


<style scoped>

</style>