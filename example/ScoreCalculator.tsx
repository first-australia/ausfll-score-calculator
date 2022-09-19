import { createStyles, makeStyles } from "@material-ui/core/styles";
import React, { Fragment, useEffect, useState } from "react";
import { GameType, GIsNumericScore } from "../src/extras";
import {
  CategoricalScoreResult,
  NumericScoreResult,
  Score,
  ScoreError,
  ScoreResult,
  ScoreAnswer,
} from "../src/types";
import { Question } from "./Questions";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Fab from "@material-ui/core/Fab";
import { FaButton } from "../../../atomic/FaButtons";
import TextField from "@material-ui/core/TextField";
import PrintIcon from "@material-ui/icons/Print";
import ToggleSwitch from "../../../atomic/ToggleSwitch";
import Box from "@material-ui/core/Box";

interface Props {
  game: GameType;
  /** Is a referee viewing this?  False means the team is */
  referee?: boolean;
  onSubmit?: (
    answers: ScoreAnswer[],
    privateComment: string,
    publicComment: string
  ) => void;
  /** Prefilled data, if viewing an old scoresheet */
  initData?: ScoreAnswer[];
  /** Prefilled private comment */
  initPrivComment?: string;
  /** Prefilled public comment */
  initPublComment?: string;
  onPrint?: React.MouseEventHandler<HTMLButtonElement>;
}

type Status = {
  score: number;
  validationErrors: ScoreError[];
};

const ScoreCalculator = ({
  game,
  referee = false,
  onPrint = () => {},
  onSubmit,
  initData = [],
  initPrivComment,
  initPublComment,
}: Props) => {
  const [data, setData] = useState<ScoreResult[]>([]);
  const [privateComment, setPrivateComment] = useState<string>("");
  const [publicComment, setPublicComment] = useState<string>("");
  const [status, setStatus] = useState<Status>({
    score: 0,
    validationErrors: [
      { message: `${game.missions.length} unanswered questions!` },
    ],
  });

  const [oldIdata, setOldIdata] = useState<string>("");
  useEffect(() => {
    if (JSON.stringify(initData) === oldIdata) return;
    setOldIdata(JSON.stringify(initData));
    const d = setDefaults();
    if (d && initData) {
      const d2 = d.map((score) => ({
        ...score,
        answer: initData.find((i) => i.id === score.id)?.answer ?? score.answer,
      }));
      setData(d2);
      updateScore(d2);
    }
  }, [oldIdata, initData]);

  useEffect(() => {
    if (initPrivComment) setPrivateComment(initPrivComment);
  }, [initPrivComment]);

  useEffect(() => {
    if (initPublComment) setPublicComment(initPublComment);
  }, [initPublComment]);

  const updateScore = (res: ScoreResult[]) => {
    const val = game.validate(res);
    const sc = game.score(res);
    setStatus({ ...status, score: sc, validationErrors: val });
    setBtnText(val.length ? "Invalid!" : `${sc} points`);
  };

  const setResponse = (id: Score["id"], answer: ScoreResult["answer"]) => {
    // Pre-validate?
    const d = data.map((r) => {
      if (r.id !== id) return r;
      if (GIsNumericScore(r)) {
        return { ...r, answer } as NumericScoreResult;
      } else {
        return { ...r, answer } as CategoricalScoreResult;
      }
    });
    setData(d);
    updateScore(d);
  };

  const setDefaults = (
    e?: React.MouseEvent<HTMLButtonElement>
  ): ScoreResult[] | undefined => {
    if (e) e.preventDefault();
    const d = game.scores.map((m: Score) => {
      return {
        ...m,
        answer: m.type === "numeric" ? `${m.defaultValue}` : m.defaultValue,
      };
    });

    setData(d);
    updateScore(d);
    return d;
  };

  const [btnText, setBtnText] = useState<string>(status.score + " points");

  const [compact, setCompact] = useState<boolean>(false);

  const classes = useStyles();
  return (
    <div className="pt-1">
      <ToggleSwitch
        onToggle={() => setCompact(!compact)}
        value={compact}
        name="Compact view?"
        rounded
      />
      {compact ? (
        <div className={classes.flexgrid}>
          {game.missions
            .filter((m) => m.prefix !== "gp" || referee)
            .map(({ title, prefix, image }, i) => (
              <Box className={classes.compactmission}>
                <div className="d-flex">
                  <img
                    src={
                      image ??
                      "https://www.firstlegoleague.org/sites/default/files/color/fll_theme-474df67b/fll-logo-horizontal.png"
                    }
                    className={classes.missionPic}
                  />
                  <h4>{title}</h4>
                </div>
                {game.scores
                  .filter((q) => q.id.startsWith(prefix))
                  .map((q) => (
                    <Question
                      key={q.id}
                      compact
                      question={q}
                      value={data.find((r) => r.id === q.id)?.answer}
                      unanswered={status.validationErrors
                        .map((e) => e.id)
                        .join(",")
                        .includes(q.id)}
                      onChange={(v) => setResponse(q.id, v)}
                      errors={status.validationErrors
                        .filter((v) => v.id && v.id.includes(q.id))
                        .map((v) => v.message.replace(/^Mission \d+ - /, ""))}
                    />
                  ))}
              </Box>
            ))}
        </div>
      ) : (
        <Table>
          <TableBody>
            {game.missions
              .filter((m) => m.prefix !== "gp" || referee)
              .map(({ title, prefix, image }, i) => (
                <Fragment key={prefix}>
                  <TableRow>
                    <TableCell
                      className={i > 0 ? classes.topborder : classes.noborder}
                      colSpan={2}
                      component="th"
                    >
                      <div className={classes.mission}>
                        <img
                          src={
                            image ??
                            "https://www.firstlegoleague.org/sites/default/files/color/fll_theme-474df67b/fll-logo-horizontal.png"
                          }
                          className={classes.missionPic}
                        />
                        <h4>{title}</h4>
                      </div>
                    </TableCell>
                  </TableRow>
                  {game.scores
                    .filter((q) => q.id.startsWith(prefix))
                    .map((q) => (
                      <Question
                        key={q.id}
                        question={q}
                        value={data.find((r) => r.id === q.id)?.answer}
                        unanswered={status.validationErrors
                          .map((e) => e.id)
                          .join(",")
                          .includes(q.id)}
                        onChange={(v) => setResponse(q.id, v)}
                        errors={status.validationErrors
                          .filter((v) => v.id && v.id.includes(q.id))
                          .map((v) => v.message.replace(/^Mission \d+ - /, ""))}
                      />
                    ))}
                </Fragment>
              ))}
          </TableBody>
        </Table>
      )}
      {referee ? (
        <div className={classes.comments}>
          <TextField
            label="Public comment"
            className={classes.comment}
            value={publicComment}
            onChange={(e) => setPublicComment(e.target.value)}
            placeholder="Enter a comment that the team might see - stay positive and constructive!"
            maxRows={4}
            multiline
          />
          <TextField
            label="Private comment"
            className={classes.comment}
            value={privateComment}
            onChange={(e) => setPrivateComment(e.target.value)}
            placeholder="Enter a comment for other referees - the team cannot see this one."
            maxRows={4}
            multiline
          />
        </div>
      ) : (
        <div />
      )}

      {!onSubmit || status.validationErrors.length > 0 ? (
        <div />
      ) : (
        <Fragment>
          <FaButton
            // @todo
            onClick={onPrint}
            startIcon={<PrintIcon />}
            variant="outlined"
            className={classes.comment}
          >
            Print!
          </FaButton>
          <br />
          <FaButton
            color="success"
            onClick={() =>
              onSubmit(
                data.map((d) => ({
                  id: d.id,
                  answer:
                    typeof d.answer === "string" ? d.answer : `${d.answer}`,
                })),
                privateComment,
                publicComment
              )
            }
            variant="contained"
          >
            Submit!
          </FaButton>
        </Fragment>
      )}

      <Fab
        variant="extended"
        // size="small"
        color={
          btnText === "Reset?"
            ? "secondary"
            : status.validationErrors.length
            ? "secondary"
            : "primary"
        }
        aria-label="add"
        className={classes.scoreBubble}
        onMouseEnter={() => setBtnText("Reset?")}
        onMouseLeave={() =>
          setBtnText(
            status.validationErrors.length
              ? "Invalid!"
              : `${status.score} points`
          )
        }
        onClick={() => setDefaults()}
      >
        {btnText}
      </Fab>
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    questions: {},
    topborder: {
      borderBottom: "none",
      borderTop: "1px solid " + theme.palette.grey[300],
    },
    noborder: {
      borderBottom: "none",
    },
    flexgrid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    compactmission: {
      flexGrow: 1,
      padding: 3,
      margin: 4,

      border: "1px solid #cccccc",
      display: "block",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    mission: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    missionPic: {
      marginRight: 16,
      height: 64,
      width: "auto",
    },
    scoreBubble: {
      width: 120,
      margin: theme.spacing(1),
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    comments: {
      display: "flex",
      flexDirection: "column",
    },
    comment: {
      marginBottom: 16,
    },
  })
);

export default ScoreCalculator;
