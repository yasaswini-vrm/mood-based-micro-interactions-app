<template>
  <div class="page">
    <transition name="fade" mode="out-in">
      <LandingView
        v-if="view === VIEWS.LANDING"
        key="landing"
        @select="onSelect"
      />

      <SoftView
        v-else-if="view === VIEWS.SOFT"
        key="soft"
        @back="goHome"
      />

      <PlayfulView
        v-else
        key="playful"
        @back="goHome"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VIEWS } from "./constants/page-views";

import LandingView from "./components/views/landing-view.vue";
import SoftView from "./components/views/soft-view.vue";
import PlayfulView from "./components/views/playful-view.vue";

const view = ref(VIEWS.LANDING);

function onSelect(nextView) {
  view.value = nextView;
}

function goHome() {
  view.value = VIEWS.LANDING;
}
</script>

<style>
:root {
  --bg: #f6f5ff;
  --bg2: #fff7fb;
  --card: rgba(255, 255, 255, 0.88);
  --stroke: #e9e7f6;
  --text: #1f2430;
  --muted: #5b6170;
  --shadow: 0 14px 40px rgba(25, 18, 45, 0.09);
  --r: 18px;
}

* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; color: var(--text); }

.page {
  min-height: 100vh;
  padding: 26px 18px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(900px 450px at 20% 10%, var(--bg), transparent),
    radial-gradient(900px 450px at 80% 20%, var(--bg2), transparent),
    linear-gradient(180deg, #fff, #fafafe);
}

.panel {
  width: min(920px, 100%);
  background: var(--card);
  border: 1px solid var(--stroke);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 26px;
}

.title { font-size: 40px; margin: 0 0 8px; letter-spacing: -0.6px; }
.subtitle { margin: 0 0 18px; color: var(--muted); max-width: 52ch; }
.hint { margin: 18px 0 0; color: var(--muted); font-size: 13px; }

.btnRow { display: flex; gap: 10px; flex-wrap: wrap; }

.pill {
  border: 1px solid var(--stroke);
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  transition: transform .08s ease;
}
.pill:active { transform: scale(0.98); }
.pill.alt { background: #f0edff; }

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;
}

.back {
  border: 1px solid var(--stroke);
  background: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 650;
}

.badge {
  font-weight: 800;
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--stroke);
  background: #ffffff;
}
.badge.alt { background: #f0edff; }

.title2 { margin: 0 0 6px; font-size: 22px; }

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 14px 0 18px;
}
@media (min-width: 820px) {
  .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

.cardBtn {
  border: 1px solid var(--stroke);
  background: #fff;
  border-radius: var(--r);
  padding: 14px 12px;
  cursor: pointer;
  font-weight: 750;
  box-shadow: 0 10px 24px rgba(25, 18, 45, 0.06);
  transition: transform .08s ease;
}
.cardBtn:active { transform: scale(0.98); }

/* transitions */
.fade-enter-active, .fade-leave-active { transition: opacity .18s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
