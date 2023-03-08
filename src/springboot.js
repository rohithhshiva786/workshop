
import React from 'react'
import bgImg from'./download.jpg';
import { useForm } from 'react-hook-form';
import './App.css';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="box">
        <div className="register">
            <div className="col-1">
                <h2><center>FILL FORM</center></h2>
                <span><center>Fill Details to Register</center></span>

                <form id='form' className='flex-flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("ID")} placeholder='ID' />
                    <input type="text" {...register("NAME")} placeholder='NAME' />
                    <input type="text" {...register("PH_NO", { required : true, size:10 })} placeholder='PH_NO' />
                    <input type="text" {...register("MAIL_ID")} placeholder='MAIL_ID' />
                    <input type="text" {...register("Gender")} placeholder='Gender' />
                    <input type="text" {...register("Medical_condition")} placeholder='Medical_condition' />
                    <input type="text" {...register("Blood Type")} placeholder='Blood Type' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Submit</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}
