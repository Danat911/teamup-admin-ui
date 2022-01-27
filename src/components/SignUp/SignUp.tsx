import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFields } from "../../types";
import Input from "../Input";
import { Link, useNavigate } from "react-router-dom";
import s from "./SignUp.module.scss";
import classNames from "classnames";

const SignUp = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignUpFields>({});

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFields> = ({
    username,
    email,
    password,
    firstname,
    lastname,
    city,
    age,
    aboutUser,
  }) => {};

  return (
    <div className={s.sign_wall}>
      <form className={s.signup_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <h1 className={s.form__title}>Создание пользователя</h1>

          <p className={s.form_link}>
            Уже есть пользователь?
            <Link to="/sign-in" className={s.link}>
              Авторизуйся!
            </Link>
          </p>

          <div className={s.fio}>
            <Input
              type="short"
              placeholder="Фамилия"
              label="lastname"
              register={register}
              config={{
                required: "required field",
              }}
            />
            <Input
              type="short"
              placeholder="Имя"
              label="firstname"
              register={register}
              config={{
                required: "required field",
              }}
            />
          </div>

          <Input
            placeholder="Email Address"
            label="email"
            type="email"
            register={register}
            config={{
              required: "required field",
              minLength: {
                value: 6,
                message: "from 6 to 20 chars",
              },
              maxLength: {
                value: 20,
                message: "from 3 to 20 chars",
              },
              // выкидываем !, @, #, $, %, ^, &, *, ( ,), -, _, =, + и пробелы
              pattern: {
                value: /\w+@\w+\.\w{2,4}/i,
                message: "invalid email",
              },
            }}
          />
          {errors.email && <div>{errors.email.message}</div>}

          <Input
            label="username"
            type="name"
            placeholder="Username"
            register={register}
            config={{
              required: "required field",
              minLength: {
                value: 3,
                message: "from 3 to 20 chars",
              },
              maxLength: {
                value: 20,
                message: "from 3 to 20 chars",
              },
              // выкидываем !, @, #, $, %, ^, &, *, ( ,), -, _, =, + и пробелы
              pattern: {
                value: /[^!@#$%^&*()-_=+\s]/,
                message: "invalid username",
              },
            }}
          />
          {errors.username && <div>{errors.username.message}</div>}

          {/* Пароль */}
          <Input
            placeholder="Пароль"
            label="password"
            type="password"
            register={register}
            config={{
              required: "required field",
              minLength: {
                value: 6,
                message: "from 6 to 20 chars",
              },
              maxLength: {
                value: 20,
                message: "from 3 to 20 chars",
              },
            }}
          />
          {errors.password && <div>{errors.password.message}</div>}

          <div className={s.fio}>
            <Input
              placeholder="Город"
              label="city"
              type="short"
              register={register}
              config={{
                required: "required field",
              }}
            />

            <Input
              placeholder="Возраст"
              label="age"
              type="short"
              register={register}
              config={{
                required: "required field",
              }}
            />
          </div>

          <p className={s.about_yourself}> О себе</p>

          <Input
            placeholder="Например: Увлекаюсь настольными играми и люблю активный отдых на природе"
            label="aboutUser"
            type="textarea"
            register={register}
            config={{
              required: "required field",
            }}
            area
          />

          <div className={s.block_interest}>
            <p className={s.your_interests}>Интересы</p>

            <ul className={s.interests}>
              <li>
                <button className={s.interest} type="button">
                  Игра
                </button>
              </li>
            </ul>
          </div>

          <button className={s.signup_submit} type="submit" disabled={!isValid}>
            Sign Up
          </button>

          <div className={s.form_google}>
            <span className={s.access_with_google}>Или зайти с помощью</span>

            <button type="button" className={s.google_button} />
          </div>
        </div>

        <div className={s.signup_photo}></div>

        <div>
          <button
            type="button"
            className={s.close_signup}
            onClick={() => {
              navigate("/");
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
