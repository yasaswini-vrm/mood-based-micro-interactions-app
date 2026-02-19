<template>
  <section class="panel landing-panel">
    <h1 class="title">Missing Me?</h1>
    <p class="subtitle">Choose a version that you're in the mood for</p>

    <div class="btnRow">
      <button class="pill" @click="$emit('select', VIEWS.SOFT)">Soft 🌙</button>
      <button class="pill alt" @click="$emit('select', VIEWS.PLAYFUL)">Playful ✨</button>
    </div>

    <p class="hint">Built as a mood-based micro-interaction UI.</p>
  </section>
</template>

<script setup>
import { VIEWS } from "../../constants/page-views";
defineEmits(["select"]);
</script>

<style scoped>
.landing-panel {
  background: linear-gradient(135deg, #fdfbff, #f2f0ff);
  border: 1px solid #e3defc;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
