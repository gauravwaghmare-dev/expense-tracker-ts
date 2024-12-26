import React from "react";
import "./styles.css";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formdata } from "./types";
import { useDispatch } from "react-redux";
import { AddIncome } from "../../../redux/features/incomeSlice";

const FormComponent: React.FC = () => {
  const dispatch = useDispatch();
  const schema = yup
    .object({
      incomeSource: yup
        .string()
        .required()
        .typeError("Income Source is a required field"),
      date: yup.string().required().typeError("Date is a required field"),
      cost: yup.number().required().typeError("Enter Cost Value Number"),
      description: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data: Formdata) => {
    // console.log(data);
    dispatch(AddIncome(data));
    reset();
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Income Source"
            {...register("incomeSource")}
          />
          {errors.incomeSource && <p>{errors.incomeSource.message}</p>}
        </div>
        <div className="input-container">
          <input type="date" placeholder="Date" {...register("date")} />
          {errors.date && <p>{errors.date.message}</p>}
        </div>

        <div className="input-container">
          <input type="number" placeholder="Cost" {...register("cost")} />
          {errors.cost && <p>{errors.cost.message}</p>}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Description"
            {...register("description")}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className="input-container">
          <Button />
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
