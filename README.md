# ausfll-score-calculator

FIRST LEGO League score calculator by the Australian Head Referee

To install:

```
    npm install --save ausfll-score-calculator

    # or

    yarn add ausfll-score-calculator
```

## Usage

I haven't had time to sort out imports properly yet, so they're a little clunky.

The main things to import are the games themselves:

```ts
import Games from "ausfll-score-calculator";

const Game = Games.SuperPowered;

Game.validate(/*...*/);
Game.score(/*...*/);
```

`validate` and `score` require a complete list of `ScoreAnswer`. The best way to make sure this is complete is to convert `Game.scores: Score[]` to `ScoreAnswer` by adding an answer.

See examples/ScoreCalculator.tsx for an example of this.

### Revisions and saved scoresheets

When a rule update changes what a question means or how it scores, the game gets a new revision (`Game.revision`) and the earlier one is kept, unchanged. Store the revision with each saved scoresheet, then look the game up with the sheet to show and score it as it was recorded:

```ts
import { answersCarriedOver, findGame } from "ausfll-score-calculator";

// Saving: record the revision the sheet was scored with
const current = findGame(season, program);
save({ answers, revision: current.revision });

// Showing or scoring a saved sheet
const game = findGame(season, program, { revision: sheet.revision, answers: sheet.answers });
game.score(sheet.answers);

// Re-scoring an old sheet under the current revision: pre-fill only the answers that still apply
const prefill = answersCarriedOver(game, current, sheet.answers);
```

Sheets saved before revisions were recorded can omit `revision`; they are matched to the newest revision that asks every question they answer.

## Development

Remember to `yarn build` before you `npm publish`!