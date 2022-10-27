import "./form.scss";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";

const FormBlock = () => {
  const basket = useSelector((state) => state.basket);

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
          deliveryAddress: "",
          phone: "",
        }}
      >
        <Form>
          <h3 className="form__header">
            Заполните данные для совершения заказа
          </h3>
          <div>
            <label className="firstNname" htmlFor="firstNname">
              <p className="label-text">Ваше Имя</p>
              <Field id="firstName" name="firstName" placeholder="Your Name" />
            </label>
          </div>

          <div>
            <label className="lastName" htmlFor="lastName">
              <p className="label-text">Ваша Фамилия</p>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Your last Name"
              />
            </label>
          </div>

          <div>
            <label className="lastName" htmlFor="age">
              <p className="label-text">Ваш возраст</p>
              <Field id="age" name="age" placeholder="Your last Age" />
            </label>
          </div>

          <div>
            <label className="lastName" htmlFor="deliveryAddress">
              <p className="label-text">Введите адрес доставки</p>
              <Field
                id="deliveryAddress"
                name="deliveryAddress"
                placeholder="Your last delivery address"
              />
            </label>
          </div>

          <div>
            <label className="lastName" htmlFor="phone">
              <p className="label-text">Ваш номер телефона</p>
              <Field
                id="phone"
                name="phone"
                placeholder="Your last phone number"
              />
            </label>
          </div>

          <button type="submit" className="form-btn">
            Оформить заказ
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormBlock;
