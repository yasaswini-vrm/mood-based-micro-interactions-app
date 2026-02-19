<template>
  <section class="panel">
    <header class="head">
      <button class="back" @click="$emit('back')">← Back</button>
      <span class="badge">Soft 🌙</span>
    </header>

    <h2 class="title2">Soft Me</h2>
    <p class="subtitle">Comfort mode: cuddles and gentle check-ins.</p>

    <div class="grid">
      <button class="cardBtn" @click="select(ACTIONS.HUG)">🤗 Send a hug</button>
      <button class="cardBtn" @click="select(ACTIONS.LUNCH)">🍱 Did you eat?</button>
    </div>

    <ActionCard
      v-if="activeAction"
      :title="activeTitle"
      :message="activeMessage"
      button-label="Another one"
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
