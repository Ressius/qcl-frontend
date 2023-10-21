<script setup>
</script>

<template>
  <div id="twitch-embed"></div>

  <!-- Load the Twitch embed JavaScript file -->
  <component :is="'script'" src="https://embed.twitch.tv/embed/v1.js"></component>

  <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element -->
  <component :is="'script'" type="text/javascript">
    new Twitch.Embed("twitch-embed", {
      width: 854,
      height: 480,
      channel: "naniqc_"
    });
  </component>
</template>

<style scoped>

</style>
