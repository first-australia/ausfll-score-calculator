import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { GIsCategoricalScore } from "../src/extras";
import { CategoricalScore, NumericScore, Score } from "../src/types";
import TextField from "@material-ui/core/TextField";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { ScoreAnswer } from "../../../../api/api.types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FaText } from "../../../atomic/FaTexts";
import Tooltip from "@material-ui/core/Tooltip";

type BaseProps = {
  question: Score;
  value?: ScoreAnswer["answer"];
  unanswered: boolean;
  onChange?: (v: ScoreAnswer["answer"]) => void;
  errors?: string[];
  compact?: boolean;
};

export const Question = ({ question, value, errors, ...rest }: BaseProps) => {
  return GIsCategoricalScore(question) ? (
    <CategoricalQuestion
      question={question}
      value={value as string}
      errors={errors?.filter((x, i, a) => a.indexOf(x) === i)}
      {...rest}
    />
  ) : (
    <NumericQuestion
      question={question}
      value={value}
      errors={errors?.filter((x, i, a) => a.indexOf(x) === i)}
      {...rest}
    />
  );
};

type NumericProps = BaseProps & {
  question: NumericScore;
};

const NumericQuestion = ({
  question,
  value,
  errors,
  onChange,
  compact,
}: NumericProps) => {
  const classes = useStyles();
  return compact ? (
    onChange ? (
      <Tooltip
        title={
          question.label + (errors?.length ? ` ${errors?.join("; ")}` : "")
        }
        className={classes.numq}
      >
        <TextField
          type="number"
          label={question.labelShort}
          value={Number(value) ?? question.defaultValue}
          InputProps={{
            inputProps: { max: question.max, min: question.min },
          }}
          onChange={(e) => onChange(e.target.value)}
          error={!!errors && !!errors.length}
        />
      </Tooltip>
    ) : (
      <div className="d-flex">
        <span className="pr-1">{question.labelShort}</span>

        <FaText>{value ?? "?"}</FaText>
      </div>
    )
  ) : (
    <TableRow className={classes.questions}>
      <TableCell
        className={[
          classes.noborder,
          classes.label,
          errors?.length ? classes.errorLabel : "",
        ].join(" ")}
      >
        <div className={classes.col}>
          <span>{question.label}</span>
          {errors?.map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
      </TableCell>
      <TableCell className={[classes.noborder, classes.options].join(" ")}>
        {onChange ? (
          <TextField
            type="number"
            value={Number(value) ?? question.defaultValue}
            InputProps={{
              inputProps: { max: question.max, min: question.min },
            }}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <FaText>{value ?? "?"}</FaText>
        )}
      </TableCell>
    </TableRow>
  );
};

type CategoricalProps = BaseProps & {
  question: CategoricalScore;
};

const CategoricalQuestion = ({
  question,
  value,
  onChange,
  errors,
  compact,
}: CategoricalProps) => {
  const [val, setVal] = useState<string | undefined>(value);

  const handleChange = (s: string) => {
    if (!onChange) return;
    setVal(s);
    onChange(s);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  const classes = useStyles();
  return compact ? (
    <Tooltip
      title={question.label + (errors?.length ? ` ${errors?.join("; ")}` : "")}
    >
      <div className={errors?.length ? classes.labelerror : classes.labelflex}>
        <span className="pr-1">{question.labelShort}</span>
        <RadioGroup
          row
          value={val ?? null}
          onChange={(e) => (onChange ? handleChange(e.target.value) : {})}
        >
          {question.options.map((opt, key) => (
            <FormControlLabel
              key={key}
              value={opt}
              control={<Radio />}
              label={String(opt).replace(/_/g, " ")}
            />
          ))}
        </RadioGroup>
      </div>
    </Tooltip>
  ) : (
    <TableRow className={classes.questions}>
      <TableCell
        className={[
          classes.noborder,
          classes.label,
          errors?.length ? classes.errorLabel : "",
        ].join(" ")}
      >
        <div className={classes.col}>
          <span>{question.label}</span>
        </div>
      </TableCell>
      <TableCell className={[classes.noborder, classes.options].join(" ")}>
        <RadioGroup
          row
          value={val ?? null}
          onChange={(e) => (onChange ? handleChange(e.target.value) : {})}
        >
          {question.options.map((opt, key) => (
            <FormControlLabel
              key={key}
              value={opt}
              control={<Radio />}
              label={String(opt).replace(/_/g, " ")}
            />
          ))}
        </RadioGroup>
      </TableCell>
    </TableRow>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    questions: {},
    noborder: {
      border: "none",
    },
    options: {
      display: "flex",
      flexWrap: "wrap",
    },
    label: {},
    labelflex: {
      alignItems: "center",
      display: "flex",
    },
    labelerror: {
      alignItems: "center",
      display: "flex",
      color: "red",
    },
    errorLabel: {
      fontWeight: "bold",
      color: theme.palette.error.main,
    },
    numq: {
      minWidth: 80,
      marginRight: 8,
    },
    col: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    selectedOption: {
      backgroundColor: theme.palette.success.light,
      borderBottom: "2px solid " + theme.palette.success.dark,
      cursor: "pointer",
      padding: 16,
      borderRadius: 32,
      margin: 4,
      textTransform: "capitalize",
      fontWeight: "bold",
    },
    option: {
      backgroundColor: theme.palette.grey[200],
      cursor: "pointer",
      borderBottom: "2px solid " + theme.palette.primary.main,
      // paddingBottom: 1,
      padding: 16,
      borderRadius: 32,
      margin: 4,
      textTransform: "capitalize",
    },
  })
);
