declare module "constants" {
    export enum FIRSTProgram {
        FLL_CHALLENGE = "FLL_CHALLENGE",
        FLL_EXPLORE = "FLL_EXPLORE",
        FLL_DISCOVER = "FLL_DISCOVER",
        FTC = "FIRST_TECH_CHALLENGE",
        FRC = "FIRST_ROBOTICS_COMPETITION"
    }
    export const Programs: FIRSTProgram[];
    export enum FIRSTSeason {
        FirstLaunch = 20192020,
        PlayMakers = 20202021,
        FirstForward = 20212022,
        Energize = 20222023
    }
    export const Seasons: FIRSTSeason[];
}
declare module "types" {
    import { FIRSTSeason, FIRSTProgram } from "constants";
    export type ScoreAnswer = {
        id: string;
        answer: string;
    };
    type ScoreType = "numeric" | "categorical";
    interface IScore {
        id: string;
        label: string;
        labelShort: string;
        type: ScoreType;
        defaultValue: number | string;
    }
    export type NumericScore = IScore & {
        type: "numeric";
        min: number;
        max: number;
        defaultValue: number;
    };
    export type CategoricalScore = IScore & {
        type: "categorical";
        options: string[];
        defaultValue: string;
    };
    export type Score = NumericScore | CategoricalScore;
    export type NumericScoreResult = NumericScore & {
        answer: string;
    };
    export type CategoricalScoreResult = CategoricalScore & {
        answer: string;
    };
    export type ScoreResult = NumericScoreResult | CategoricalScoreResult;
    export type ScoreError = {
        id?: Score["id"];
        message: string;
    };
    export type ScoreSheet = {
        /** ID of "Compete" instance */
        compete: string;
        /** Which round was this match? 1, 2, or 3. */
        round: number;
        /** List of scored results */
        answers: ScoreResult[];
    };
    export type Mission = {
        /** ID Prefix of all scores in this group */
        prefix: string;
        /** Title of the mission */
        title: string;
        /** Optional URL of mission thumbnail */
        image?: string;
    };
    export type Game = {
        name: string;
        season: FIRSTSeason;
        program: FIRSTProgram.FLL_CHALLENGE;
        scores: Score[];
        missions: Mission[];
        answer: (res: ScoreAnswer[], q: string) => ScoreAnswer["answer"] | undefined;
        validate: (R: ScoreAnswer[]) => ScoreError[];
        score: (R: ScoreAnswer[]) => number;
    };
}
declare module "firebase.links" {
    const firebaseLinks: {
        cc_m00: string;
        cc_m01: string;
        cc_m02: string;
        cc_m03: string;
        cc_m04: string;
        cc_m05: string;
        cc_m06: string;
        cc_m07: string;
        cc_m08: string;
        cc_m09: string;
        cc_m10: string;
        cc_m11: string;
        cc_m12: string;
        cc_m13: string;
        cc_m14: string;
        cc_m15: string;
        cc_m16: string;
        cc_m17: string;
        sp_m00: string;
        sp_m01: string;
        sp_m02: string;
        sp_m03: string;
        sp_m04: string;
        sp_m05: string;
        sp_m06: string;
        sp_m07: string;
        sp_m08: string;
        sp_m09: string;
        sp_m10: string;
        sp_m11: string;
        sp_m12: string;
        sp_m13: string;
        sp_m14: string;
        sp_m15: string;
        sp_m16: string;
    };
    export default firebaseLinks;
}
declare module "games/CargoConnect" {
    import { Game } from "types";
    const CargoConnect: Game;
    export default CargoConnect;
}
declare module "games/CityShaper" {
    import { Game } from "types";
    const CityShaper: Game;
    export default CityShaper;
}
declare module "games/RePlay" {
    import { Game } from "types";
    const RePlay: Game;
    export default RePlay;
}
declare module "games/SuperPowered" {
    import { Game } from "types";
    const SuperPowered: Game;
    export default SuperPowered;
}
declare module "extras" {
    import { Score, NumericScore, CategoricalScore } from "types";
    export const GIsNumericScore: (m: Score) => m is NumericScore;
    export const GIsCategoricalScore: (m: Score) => m is CategoricalScore;
    export const Games: readonly [import("types").Game, import("types").Game, import("types").Game, import("types").Game];
    export type GameType = typeof Games[number];
}
declare module "index" { }
