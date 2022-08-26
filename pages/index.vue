<template>
  <div>
    <HeroHead />
    after
  </div>
</template>

<script>
export default {
  head: {
    title: 'Hairy Ghost!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Hairy Ghost is the Twin Cities Guide to Halloween, Haunted Houses, Movies and Attractions.',
        name: 'Hairy Ghost',
        content: 'Hairy Ghost is the Twin Cities Guide to Halloween, Haunted Houses, Movies and Attractions.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}

</script>
<style lang="scss">
  .red {
    color: red;
  }
</style>
