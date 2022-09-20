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
