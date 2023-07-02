import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"

import { submitAPI } from "../../utils/api";

const ReservationForm = (props) =>{
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            date: null,
            time: props.times[0],
            guests: 1,
            occasion: "none"
        },
        onSubmit: (values) => {
            let res = submitAPI(values);
            if (res){
                navigate("/confirmed");
            }
        },
        validationSchema: Yup.object({
            date: Yup.date().required("Select a Date"),
            time: Yup.string().required("Select a Time"),
            guests: Yup.number().min(1, "At least 1").max(10, "At most 10").required("Select number of guests"),
            occasion: Yup.string().oneOf(["none", "birthday", "engagement", "anniversary"]).required("Select and occasion"),
        })
    })


    useEffect(() => {
        props.dispatch({ type: "date", date: new Date(formik.values.date) });
    }, [formik.values.date]);

    return(
        <form className="grid row" onSubmit={formik.handleSubmit} noValidate>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name="date" {...formik.getFieldProps("date")} required/>
                <span className="formik-error">{formik.touched.date && formik.errors.date}</span>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" {...formik.getFieldProps("time")} required>

                    {props.times.map((time)=>{
                        return(
                            <option key={time}>{time}</option>
                        )
                    })}

                </select>
                <span className="formik-error">{formik.touched.time && formik.errors.time}</span>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="" min="1" max="10" id="guests" name="guests" {...formik.getFieldProps("guests")} required/>
                <span className="formik-error">{formik.touched.guests && formik.errors.guests}</span>

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" name="occasion" {...formik.getFieldProps("occasion")} required>
                    <option value="none">Nothing in Particular</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                </select>
                <span className="formik-error">{formik.touched.occasion && formik.errors.occasion}</span>

                <input type="submit" value="Make Your reservation" />

        </form>
    )
}

export default ReservationForm;