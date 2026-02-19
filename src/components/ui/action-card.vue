<template>
  <div class="card">
    <div class="top">
      <h3 class="cardTitle">{{ title }}</h3>
      <button class="small ghost" @click="$emit('clear')">Clear</button>
    </div>

    <p class="cardText">{{ message }}</p>

    <button class="small" @click="$emit('shuffle')">
      {{ buttonLabel }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  message: { type: String, required: true },
  buttonLabel: { type: String, default: "Again" },
});
defineEmits(["shuffle", "clear"]);
</script>

<style scoped>
.card {
  border: 1px solid var(--stroke);
  background: #fff;
  border-radius: var(--r);
  padding: 16px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 6px;
}
.cardTitle { margin: 0; font-size: 16px; }
.cardText { margin: 0 0 12px; line-height: 1.55; }

.small {
  border: 1px solid var(--stroke);
  background: #f7f6ff;
  border-radius: 999px;
  padding: 9px 12px;
  cursor: pointer;
  font-weight: 700;
}
.small.ghost {
  background: transparent;
}
</style>
