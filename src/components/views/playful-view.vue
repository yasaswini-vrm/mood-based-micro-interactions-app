<template>
  <section class="panel">
    <header class="head">
      <button class="back" @click="$emit('back')">← Back</button>
      <span class="badge alt">Playful ✨</span>
    </header>

    <h2 class="title2">Playful Me</h2>
    <p class="subtitle">Teasing mode: annoying you (affectionately).</p>

    <div class="grid">
      <button class="cardBtn" @click="select(ACTIONS.BITE)">🍟 Give me a bite</button>
      <button class="cardBtn" @click="select(ACTIONS.CALL)">📱 Why haven’t you called?</button>
      <button class="cardBtn" @click="select(ACTIONS.MISS)">💬 Say “I miss you”</button>
    </div>

    <ActionCard
      v-if="activeAction"
      :title="activeTitle"
      :message="activeMessage"
      button-label="Again"
      @shuffle="shuffle"
      @clear="clear"
    />
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { ACTIONS } from "../../constants/actions";
import { scripts } from "../../data/scripts";
import { pickRandom } from "../../utils/random";
import ActionCard from "../ui/action-card.vue";

defineEmits(["back"]);

const activeAction = ref("");
const activeMessage = ref("");

function select(actionKey) {
  activeAction.value = actionKey;
  activeMessage.value = pickRandom(scripts[actionKey].lines);
}

function shuffle() {
  if (!activeAction.value) return;
  activeMessage.value = pickRandom(scripts[activeAction.value].lines);
}

function clear() {
  activeAction.value = "";
  activeMessage.value = "";
}

const activeTitle = computed(() =>
  activeAction.value ? scripts[activeAction.value].title : ""
);
</script>

<style scoped>
/* Uses global styles from App.vue */
</style>
