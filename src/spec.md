# Specification

## Summary
**Goal:** Build a cute, baby-pink themed, 4-page client-side routed birthday/proposal React experience for Saniya with playful Yes/No interactions and simple animations.

**Planned changes:**
- Add 4 client-side routes/pages (Page 1 → Page 2 → Page 3 → Page 4) that render correctly on direct navigation/refresh.
- Implement Page 1: birthday-themed landing showing “Saniya”, the question “Will you marry me?”, and “Yes”/“No” buttons; make “No” cycle through at least 5 escalating messages; make “Yes” trigger a celebration effect then auto-navigate to Page 2.
- Implement Page 2: show the question “In your point of view, your boyfriend is really hot and cute and sexy.” (polished grammar, same meaning) with “Yes” and “Obviously” buttons; clicking either triggers a kiss/love animation then auto-navigates to Page 3.
- Implement Page 3: show a birthday wish message addressed to Saniya ending with the exact last line “I love you so much, my ardhangani!”; then auto-navigate to Page 4 after a short delay.
- Implement Page 4: show “Do you really like this??” and “Never leave me” followed by an emotional emoji (English text).
- Apply a cohesive baby pink & white romantic theme across all pages with consistent typography, spacing, and button styles (no blue/purple as primary).
- Add generated static images under `frontend/public/assets/generated` and render at least one in the UI (no backend image serving).

**User-visible outcome:** Users can follow an adorable, animated multi-page proposal flow: interact with a playful “No” loop on Page 1, trigger celebration/kiss effects, read a birthday wish, and reach an emotional final message—within a consistent baby pink & white design.
