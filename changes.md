# Changes

## 2026-10-20 — Privacy Policy: qibla compass added to the location clause

The Pray tab's qibla compass reuses the same GPS permission/coordinate as
prayer times, plus reads the device's live compass/orientation sensor
(not stored, used only in real time on-device). Extended the "Precise
location" clause and its How We Use bullet in `src/app/privacy/page.tsx`
to name qibla direction alongside prayer times, and to disclose the
live sensor read.

## 2026-10-20 — Privacy Policy: precise location disclosure

The mobile app's new Pray tab asks for the device's precise (GPS) location
to calculate accurate prayer times, and that location will also be stored
in the backend per user and per session (for prayer-time accuracy while
traveling, and for "who/where is the app used" analytics). Added a
dedicated "Precise location (prayer times)" clause to `src/app/privacy/
page.tsx`'s Information We Collect section, plus two new bullets under How
We Use Your Information (calculating prayer times, understanding where the
app is used). Bumped `EFFECTIVE_DATE` to October 20, 2026 since this is a
material change the policy's own §11 requires flagging.

No new third-party service needed in §3 (Who We Share Information With) —
the location is stored in our existing Supabase backend, already listed
there, not sent to a separate geocoding/third-party API.
