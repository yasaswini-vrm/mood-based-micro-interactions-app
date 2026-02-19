import { ACTIONS } from "../constants/actions";

export const scripts = {
  [ACTIONS.HUG]: {
    title: "Hug Delivery",
    lines: [
      "Okay… come here. I’m holding you.",
      "Breathe in… breathe out… I’ve got you.",
      "15 seconds of quiet. No rushing."
    ],
  },
  [ACTIONS.LUNCH]: {
    title: "Lunch Check-in",
    lines: [
      "Did you eat? Be honest 😌",
      "Drink water. Then send proof you ate.",
      "No skipping meals. I’m serious (softly).",
      "Eat something warm. You’ll feel better.",
    ],
  },
  [ACTIONS.BITE]: {
    title: "One Bite Please",
    lines: [
      "Give me one bite. Just one. Promise.",
      "Why are you eating without me?? Criminal.",
      "Okay fine… two bites. Final offer.",
      "If you don’t share, I’m stealing your hoodie.",
    ],
  },
  [ACTIONS.CALL]: {
    title: "Call Me Reminder",
    lines: [
      "Hello?? I miss you. Call me when you can.",
      "It’s been too long. Suspicious behavior.",
      "Just a quick call. I want your voice.",
      "Fine… I’ll be calm. But call me.",
    ],
  },
  [ACTIONS.MISS]: {
    title: "Say It Properly",
    lines: [
      'Type: “I miss you.” (No shortcuts.)',
      "Good. Correct answer",
      "Okay now… describe what you miss about me 😌",
      "Approved. You may proceed with your day.",
    ],
  }
};

