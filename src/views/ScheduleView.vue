<script setup>
import SmallHeroHeader from '../components/SmallHeroHeader.vue';
import Schedule from '../components/Schedule.vue';

</script>

<template>
  <stream>
    <SmallHeroHeader msg="Horaire des Matchs" />
    <div class="content">
      <Schedule />
    </div>
  </stream>
</template>

<style>

</style>
