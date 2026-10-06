# Lumo reward valley assets

Everything the "Lumo's Reward Valley" closing-scene prototype uses
(artifact: https://claude.ai/artifact/UxfDQSGNPMrYZdY7s9zNu2).

## phones/
The phone is an iPhone silhouette drawn in CSS; the screens inside it are:
- `screen-rewards.png`: the "Great job! +40 XP" lesson-complete screen, cut from the Play Store screenshot `07_Mockup-7.png`.
- `screen-correct.png`: the "Let's fill the blank" screen, cut from `02_Mockup-1.png`.
- `phone-rewards-front1.png`, `phone-correct-front1.png`: their pop-out cards (+40 XP card, Correct! card), animated as a separate layer.
- The third screen (Streak) is rebuilt in HTML/CSS from `mobile/src/screens/gamification/StreakScreen.tsx` and `StreakCalendar.tsx`.

Screens and cards share one 1183 x 1586 canvas: frame at x 261.5, y 10, 660 x 1291; screen at x 278, y 27, 627 x 1257.
(Source screenshots: `Desktop/ustadapp-store-assets/7-inch/`.)

## app/  (from the mobile app: `ustadapp front/ustadapp/mobile/assets`)
lumo_read.png, lumo_kufi.png, redh.png (heart), special_done.png (gold star node), recommended_special.png (green star node),
muhammad.png, ayesha.png, orange_fire_60.png (practiced day) + blue_fire_60.png (frozen day) + blank_fire.png (missed day): streak calendar icons (the 30px versions are also included)

## scenery/
- tree1.png (palms, from `ustadapp-expo/assets`), mountains_crop.png, birds.png, grass.jpg (hill texture, recoloured in code to #05966A / #0FB989)
- grass-clump.png: cut from the app's `map/s4.png` season sign, wooden post removed
- glitch-flower-bush-1997990.png: art from the game Glitch, released into the public domain (CC0).
  Source: https://creazilla.com/media/clipart/1997990/white-flower-bush

## lottie/  (the app's own animations)
streak.json (streak-screen flame), allday.json (floating flame), listen.json (mic), wave.json (recitation wave), celebration.json (confetti)

## Already in src/assets (used as-is)
star.png (site star field), moon1.png (site moon), clouds.png, lumo_transparent.png,
hello/suspicious.png, hello/sticking out tongue.png, hello/peekaboo.png, hello/giggle.png (hidden-Lumo poses)
