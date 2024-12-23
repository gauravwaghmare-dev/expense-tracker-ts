import React, { FormEvent } from "react";
import "./styles.css";
import Button from "../../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Formdata } from "./types";
import { useDispatch } from "react-redux";
import { AddIncome } from "../../../redux/features/expenseSlice";

const FormComponent: React.FC = () => {

  const dispatch  = useDispatch();
  const schema = yup
    .object({
      incomeSource: yup.string().required(),
      date: yup.string().required(),
      cost: yup.number().required().typeError("Enter Valid Number"),
      description: yup.string().required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data: Formdata) => {
    console.log(data);
    dispatch(AddIncome(data))
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
