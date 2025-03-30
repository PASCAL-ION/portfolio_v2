import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fdxhwrf",
        "template_gntu9wd",
        form.current,
        "MHurXq6A-5Tlg1kEG"
      )
      .then(
        () => {
          toast.success("📩 Votre message a été envoyé avec succès !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          form.current.reset();

          emailjs
            .send(
              "service_fdxhwrf",
              "template_9flafxq",
              {
                user_name: form.current.user_name.value,
                user_email: form.current.user_email.value,
              },
              "MHurXq6A-5Tlg1kEG"
            )
            .then(
              () => {
                console.log("Confirmation envoyée !");
              },
              (error) => {
                console.error("Erreur d'envoi de la confirmation", error.text);
              }
            );
        },
        (error) => {
          console.error("Erreur lors de l'envoi de l'email", error.text);
          toast.error("❌ Une erreur est survenue, veuillez réessayer.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-12">
      <ToastContainer />
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-12 md:mr-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contactez-moi
      </motion.h1>
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-2xl flex flex-col gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Votre nom"
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="w-full text-2xl p-2 border-b border-white focus:outline-none focus:border-gray-400 transition-all bg-transparent"
          required
          rows="5"
        ></textarea>
        <motion.button
          type="submit"
          className="text-2xl font-semibold px-6 py-3 border border-white hover:bg-white hover:text-stone-900 transition-all cursor"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Envoyer
        </motion.button>
      </motion.form>

      <p className="mt-8 text-lg text-gray-400">
        Me contacter directement : <a href="mailto:ionpascal26@gmail.com" className="text-white underline">ionpascal26@gmail.com</a>
      </p>
    </div>
  );
}
