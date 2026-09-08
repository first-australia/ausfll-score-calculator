# 2026-2027 BIOGLOW™ scoresheets

A one-page cross-check of the questions, scoring and validation for both
2026 editions, for reconciling the implementation against the rulebooks.

**Maintained by hand.** The point values below were originally measured from
each game's own `score` function, but nothing keeps them in step now: if you
change scoring or validation in `src/games/2026-BIOGLOW-*.ts`, update this
file in the same commit.

A plain **Points** value is what that question contributes on its own, with
every other answer left at its default. `(conditional)` marks a question
that scores nothing by itself because it gates, or is gated by, another;
the number is what it is worth once its dependencies are met, so for a gate
like M06's ant that is the whole mission riding on it. `(lost if not met)`
marks a question that starts satisfied, where points are forfeited rather
than earned. The Scoring notes under each mission explain each case.

The **Answers** range is the input bound a referee can enter, which is not
always a scoring cap - where the rulebook states no maximum, every entered
item scores. The Scoring notes call out the rulebook maxima that are real.

## BIOGLOW Founders Edition

`FLL_CHALLENGE_FOUNDERS` · season 20262027 · **maximum 530 points**

### M00 - Equipment Inspection Bonus

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m00a` | All team equipment fits in one launch area and under 12 in. (305 mm)? | Yes / No (default No) | 20 |

### M01 - Drone Survey 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m01a` | Is the drone no longer touching the mat? | Yes / No (default No) | 20 |
| `m01b` | Is the LiDAR map completely flipped over, with the scan marker at least partly in the survey area? | Yes / No (default No) | 10 _(conditional)_ |

- **Scoring:** The LiDAR bonus (10) only scores if the drone is flown (m01a).
- **Validation error:** m01b set without m01a.

### M02 - Exploding Seeds

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m02a` | Seeds no longer touching the stalk? | 0-3 (default 0) | 30 |

### M03 - Flip the Rock

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m03a` | Is the research flag down? | Yes / No (default No) | 20 |
| `m03b` | Has the rock been returned to its original starting position? | Yes / No (default No) | 10 _(conditional)_ |

- **Scoring:** The rock-return bonus (10) only scores if the flag is down (m03a).
- **Validation error:** m03b set without m03a.

### M04 - Lucky Leaves 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m04a` | Leaves completely removed, no longer touching the nest? | 0-2 (default 0) | 30 |
| `m04b` | Is the katydid in its original starting position, having never been completely removed from the nest during the match? | Yes / No (default Yes) | 20 _(conditional)_ |
| `m04c` | Is the katydid inside the leaf habitat, not even partly outside it? (the leaf habitat is the nest and the marked area on the mat around it) | Yes / No (default Yes) | 30 _(conditional)_ |

- **Scoring:** A katydid outside the leaf habitat (m04c = No) zeroes the whole mission.
- **Scoring:** First leaf 10; the second leaf adds 20 only if the katydid is in its starting position (m04b).
- **Validation error:** Two leaves removed but m04b = No (bonus lost).
- **Validation error:** m04c = No while any leaf is removed (mission zeroed).

### M05 - Reaching Roots 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m05a` | How far is the plant root extended? | `Not extended`, `Partially extended`, `Completely extended` | 20 |

- **Scoring:** Only one condition scores: partial 10, complete 20.

### M06 - Leafcutter Frenzy

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m06a` | Is the ant touching the nest? | Yes / No (default No) | 40 _(conditional)_ |
| `m06b` | Leaf fragments contained within the nest? | 0-4 (default 0) | 40 _(conditional)_ |

- **Scoring:** Fragments score 10 each only while the ant touches the nest (m06a); otherwise the mission scores 0.
- **Scoring:** The nest holds four fragments (white, yellow, orange, green), so 40 is the mission maximum.
- **Validation error:** Fragments counted with m06a = No.

### M07 - Humongous Fungus 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m07a` | Is the mycelium completely extended? | Yes / No (default No) | 20 |
| `m07b` | Connections formed between an extended mycelium and the opposing team's fully extended plant root? (not possible in remote competitions or with no opposing team) | 0-2 (default 0) | 20 _(conditional)_ |

- **Scoring:** Connection bonuses are 10 each and require your mycelium fully extended (m07a). Two are possible, per the official scoresheet.
- **Scoring:** The mycelium and plant root do not need to touch. Not earnable in remote competitions or where there is no opposing team.
- **Validation error:** Connections recorded without m07a.

### M08 - Tangled

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m08a` | Is the vine touching the mat? | Yes / No (default No) | 30 |

### M09 - Research Platform 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m09a` | Is the research platform raised? | Yes / No (default No) | 10 |
| `m09b` | Is the camera trap deployed? | Yes / No (default No) | 10 |
| `m09c` | Is the seed no longer touching the tree? | Yes / No (default No) | 10 |

### M10 - Fragile Microhabitats 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m10a` | Is the spider habitat in its original starting position? | Yes / No (default Yes) | 10 _(lost if not met)_ |
| `m10b` | Is the snail habitat in its original starting position? | Yes / No (default Yes) | 10 _(lost if not met)_ |

- **Scoring:** Both habitats start undisturbed and score 10 each; points are lost by knocking them, not gained.

### M11 - Window to the Past

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m11a` | Is the root cover down, touching the mat? | Yes / No (default No) | 20 |

### M12 - Forest Elder 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m12a` | Is the cane completely raised, touching the tree? | Yes / No (default No) | 20 |
| `m12b` | Is the support tie around the post? | Yes / No (default No) | 10 |

### M13 - Keystone Species

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m13a` | Is your team's keystone species on the restoration platform with the young trees raised? | Yes / No (default No) | 30 |

### M14 - Seeds of Renewal

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m14a` | Seeds contained within the replantation station? | 0-4 (default 0) | 20 |
| `m14b` | Of those, how many are also touching the mat (bonus)? | 0-4 (default 0) | 20 _(conditional)_ |

- **Scoring:** 5 per seed in the station, plus 5 more for each of those also touching the mat.
- **Scoring:** Only 4 seeds exist: 3 from M02 and 1 from M09.
- **Validation error:** More seeds planted than were released (m02a + m09c).
- **Validation error:** More seeds touching the mat (m14b) than are in the station (m14a).

### M15 - Biocentric Architecture 🚳

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m15a` | Is the nesting canopy raised? | Yes / No (default No) | 10 |
| `m15b` | Is the garden skylight completely in? | Yes / No (default No) | 10 |
| `m15c` | Is the compost hatch completely opened, touching the mat? | Yes / No (default No) | 10 |
| `m15d` | Which dock is the biocentric architecture model located on? (environmental bonus is scored if the matching feature is complete) | `Not placed`, `Mine dock`, `City dock`, `Farm dock` | 10 _(conditional)_ |

- **Scoring:** 10 per completed feature.
- **Scoring:** Environmental bonus 10 if the dock (m15d) matches a completed feature: Mine/canopy, City/skylight, Farm/hatch. Only one bonus is possible.

### Precision Tokens

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m16a` | Number of precision tokens remaining? | 0-6 (default 6) | 50 _(lost if not met)_ |

- **Scoring:** Tokens remaining: 6 or 5 = 50, 4 = 35, 3 = 25, 2 = 15, 1 = 10, 0 = 0.

### Gracious Professionalism®

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `gp` | Gracious Professionalism® displayed at the robot game table? | `2 - Developing`, `3 - Accomplished`, `4 - Exceeds` | 0 _(no points)_ |

## BIOGLOW Future Edition

`FLL_CHALLENGE_FUTURE` · season 20262027 · **maximum 1080 points**

### M01 - Mighty Microbiomes

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m01a` | Keystone species resting loose in the young forest microbiome (not touching equipment)? | 0-3 (default 0) | 60 |
| `m01b` | Keystone species resting loose in the grand tree microbiome (not touching equipment)? | 0-3 (default 0) | 60 |
| `m01c` | Keystone species resting loose in the hollow tree microbiome (not touching equipment)? | 0-3 (default 0) | 60 |
| `m01d` | Is the invasive queen on the opposite side of the field knocked down? (the opposing team knocks it down with their fourth keystone species) | Yes / No (default No) | 40 _(conditional)_ |

- **Scoring:** 20 per keystone species, max 3 scoring per microbiome.
- **Scoring:** A fourth keystone in the young forest scores nothing for placement; it is what knocks down the queen on the *opposing* side of the field.
- **Scoring:** Bonus 40 for 3 in the young forest (m01a) AND the opposing queen down (m01d). m01d is set by the opposing team's fourth keystone, so it is independent of this team's own count.

### M02 - Roots of Renewal

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m02a` | Resources in the grand tree base? | 0-15 (default 0) | 75 |
| `m02b` | Resources in the canopy chamber (must have been cycled up)? | 0-15 (default 0) | 150 |

- **Scoring:** 5 per resource in the tree base (no stated maximum), 10 per resource in the canopy chamber (maximum 15).
- **Scoring:** Resources must be cycled up the tree; placing them directly into the canopy chamber does not count.

### M03 - Cave Waterfall

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m03a` | Number shown on the cave waterfall counter at the end of the match (keystone species cycled through)? | 0-50 (default 0) | 250 |

- **Scoring:** 5 per keystone species shown on the counter, capped at 50.

### M04 - Rainforest Awakening

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m04a` | Are all keystone species released from the nest? | Yes / No (default No) | 30 |
| `m04b` | Are all resources released from the hollow tree? | Yes / No (default No) | 20 |

### M05 - Central Haven (Cooperative)

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m05a` | Keystone species or resources resting completely in the central haven (shared - both teams score)? | 0-50 (default 0) | 250 |

- **Scoring:** Cooperative: both teams receive the full value. 5 per item, no stated maximum.

### Level Up Challenge - Invasive Attack

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `m06a` | Invasive species added during pre-match setup (optional, excludes the required queen)? | 0-5 (default 0) | 100 |
| `m06b` | Invasive species in the containment zone (may include the invasive queen)? | 0-6 (default 0) | 60 |

- **Scoring:** 20 per invasive added pre-match (max 5), 10 per invasive in the containment zone.
- **Validation error:** More contained than exist on the field (added + the required queen).

### Gracious Professionalism®

| ID | Question | Answers | Points |
| --- | --- | --- | --- |
| `gp` | Gracious Professionalism® displayed at the robot game table? | `2 - Developing`, `3 - Accomplished`, `4 - Exceeds` | 0 _(no points)_ |
