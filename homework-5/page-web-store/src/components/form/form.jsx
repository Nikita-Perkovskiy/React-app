import "./form.scss";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { object, string, number } from "yup";
import { cleanBasket } from "../../store/basket/actions";

const FormBlock = () => {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const FormSchema = object({
    firstName: string().required("Введите имя").min(5, "Слишком короткое имя"),
    lastName: string().required("Введите").min(5, "Слишком короткая фамилия"),
    age: number().moreThan(18, "18+"),
    deliveryAddress: string().required("Поле обязательно для заполнения"),
    phone: string().required("Поле обязательно для заполнения"),
  });

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
        onSubmit={(values) => {
          //   console.log("Buyer info:", values);
          //   console.log("Order info:", basket);
          dispatch(cleanBasket());
        }}
        validationSchema={FormSchema}
      >
        {(propsFormik) => {
          return (
            <Form>
              <h3 className="form__header">
                Заполните данные для совершения заказа
              </h3>
              <div>
                <label className="firstNname" htmlFor="firstNname">
                  <p className="label-text">Ваше Имя</p>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Your Name"
                  />
                  <ErrorMessage
                    component="p"
                    name="firstName"
                    className="error"
                  />
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
                  <ErrorMessage
                    component="p"
                    name="lastName"
                    className="error"
                  />
                </label>
              </div>

              <div>
                <label className="lastName" htmlFor="age">
                  <p className="label-text">Ваш возраст</p>
                  <Field id="age" name="age" placeholder="Your last Age" />
                  <ErrorMessage name="age" component="p" className="error" />
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
                  <ErrorMessage
                    name="deliveryAddress"
                    component="p"
                    className="error"
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
                  <ErrorMessage name="phone" component="p" className="error" />
                </label>
              </div>

              <button type="submit" className="form-btn">
                Оформить заказ
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormBlock;
