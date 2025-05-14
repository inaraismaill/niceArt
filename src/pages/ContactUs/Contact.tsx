import React from "react";
import styles from "./contactSection.module.css";
import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form";
import Button from "../../components/ui/Button/Button";
import { FaArrowDown } from "react-icons/fa";
type FormValues = {
  name: string;
  email: string;
  number: number;
  title: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const fields = {
    name: register("name", {
      required: "Name boş ola bilməz",
      minLength: {
        value: 3,
        message: "Ad minimum 3 simvol olmalıdır",
      },
    }),
    email: register("email", {
      required: "Email boş ola bilməz",
      pattern: {
        value: /^\S+@\S+\.\S+$/,
        message: "Email düzgün formatda deyil",
      },
    }),
    number: register("number", {
      required: "Nömrə boş ola bilməz",
      valueAsNumber: true,
      min: {
        value: 0,
        message: "Nömrə mənfi ola bilməz",
      },
    }),
    title: register("title", {
      required: "Başlıq boş ola bilməz",
    }),
    message: register("message", {
      required: "Mesaj boş ola bilməz",
      minLength: {
        value: 10,
        message: "Mesaj minimum 10 simvol olmalıdır",
      },
    }),
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert("Form göndərildi!");
    reset();
  };

  return (
    <>
      <div className={`${styles.contactSection} container`}>
        <div className={styles.discover}>
          <h3 className="text">DISCOVER US</h3>
          <p>
            Flick is here to help you;
            Our experts are available to answer any questions you might have.
            We’ve got the answers.
          </p>
          <h4>Visit Us</h4>
          <p className={styles.contactInfo}>
            Office no. G-02. Building 1, Ground  Floor. Dubai Media City –
            Dubai
          </p>
          <p>Feel free to get in touch with us through our channels:</p>
          <h4>Email US</h4>
          <p className={styles.contactInfo}>javidan.nasib@gmai.com</p>
          <h4>Call US</h4>
          <p className={styles.contactInfo}>+994 51 535 11 35</p>
        </div>
        <div className={styles.images}>
          <div className={styles.top}>
            <img src="/assets/image/contact.jpg" alt="" />
            <img src="/assets/image/contact.jpg" alt="" />
          </div>
          <div className={styles.bottom}>
            <img src="/assets/image/contact.jpg" alt="" />
            <img src="/assets/image/contact.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={`${styles.connect}`}>
        <div className={`${styles.box} container`}>
          <div>
            <h2>Have a project! Let’s diascuss</h2>
            <p className="description">
              Vehicula elit est, neque non mattis pharetra, urna lectus magnis.
              Ultricies tellus adipiscing a sem ultrices eu pulvinar. Urna
              egestas est aliquet facilisis elit sit. Massa libero turpis
              facilisi mattis sit ac consectetur malesuada et. Urna, orci arcu
              senectus mattis nam euismod cum cursus. Enim nunc quis commodo leo
              libero diam.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label>Ad Soyad</label>
              <input type="text" placeholder="ABCDEFG" {...fields.name} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
              <label>E-poçt</label>
              <input
                type="email"
                placeholder="javidan.nasib@gmail.com"
                {...fields.email}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <label>Əlaqə nömrəsi</label>
              <input
                type="number"
                placeholder="+994 00 000 00 00"
                {...fields.number}
              />
              {errors.number && <p>{errors.number.message}</p>}
            </div>

            <div>
              <label>Mövzu</label>
              <select {...fields.title}>
                <option value="" disabled selected>
                  Mövzu seçib
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
              {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div className={styles.message}>
              <label>Mesajınız</label>
              <input
                type="text"
                {...fields.message}
                placeholder="Mesajınızı daxil edin."
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <button type="submit" className="buttons">
              Submit
              <FaArrowDown
                style={{
                  transform: "rotate(-90deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3610.2288183291867!2d55.26834207415356!3d25.195504831771615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDExJzQzLjgiTiA1NcKwMTYnMTUuMyJF!5e0!3m2!1saz!2saz!4v1747165792731!5m2!1saz!2saz"
        width="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
