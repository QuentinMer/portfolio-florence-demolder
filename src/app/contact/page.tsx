"use client";
import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = formData.nom.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.message.trim().length >= 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (!isFormValid) {
      return;
    }

    // Envoi vers l'adresse email spécifiée
    const mailtoLink = `mailto:fdemolder@gmail.com?subject=Contact de ${formData.nom}&body=Message de: ${formData.nom}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = mailtoLink;
    setIsSubmitted(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:mt-12">
      <Image
        className="mx-auto"
        src="/assets/img/logo-ok.jpg"
        width={220}
        height={120}
        alt="logo"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* nom */}
        <div className="flex flex-col items-center p-6 border border-black rounded-xl hover:shadow-xl">
          <Image
            src="/assets/icons/woman.svg"
            width={100}
            height={100}
            alt="phone"
            className="mb-4"
          />
          <h2 className="text-xl font-cormorant mb-2">Florence</h2>
          <p className="font-cormorant text-xl text-center">Demolder</p>
        </div>
        {/* Téléphone */}
        <div className="flex flex-col items-center p-6 border border-black rounded-xl hover:shadow-xl">
          <Image
            src="/assets/icons/phone.svg"
            width={100}
            height={100}
            alt="phone"
            className="mb-4"
          />
          <h2 className="text-xl font-cormorant mb-2">Téléphone</h2>
          <a href="tel:+32400000000" className="font-cormorant hover:underline">
            0400/00.00.00
          </a>
        </div>
        {/* Email */}
        <div className="flex flex-col items-center p-6 border border-black rounded-xl hover:shadow-xl">
          <Image
            src="/assets/icons/mail.svg"
            width={100}
            height={100}
            alt="mail"
            className="mb-4"
          />
          <h2 className="text-xl font-cormorant mb-2">Email</h2>
          <a
            href="mailto:fdemolder@gmail.com"
            className="font-cormorant hover:underline"
          >
            fdemolder@gmail.com
          </a>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div className="mt-12 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nom" className="block font-cormorant mb-2">
                Nom
              </label>
              <input
                type="text"
                id="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full p-2 border border-black rounded-md font-cormorant"
              />
              {isSubmitted && !formData.nom.trim() && (
                <p className="text-red-500 text-sm mt-1">Le nom est obligatoire</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block font-cormorant mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-black rounded-md font-cormorant"
              />
              {isSubmitted && !formData.email.trim() && (
                <p className="text-red-500 text-sm mt-1">L&apos;email est obligatoire</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block font-cormorant mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full p-2 border border-black rounded-md font-cormorant"
              minLength={5}
            ></textarea>
            {isSubmitted && formData.message.trim().length < 5 && (
              <p className="text-red-500 text-sm mt-1">Le message doit contenir au moins 5 caractères</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full md:w-auto px-8 py-3 bg-transparent text-black border border-black rounded-md font-cormorant transition-colors ${
              isFormValid ? 'hover:bg-black hover:text-white cursor-pointer' : 'opacity-50 cursor-not-allowed'
            }`}
          >
            Envoyer
          </button>
        </form>
        <p className="mt-8 text-center font-cormorant">
          Une question ? Une demande ? Envoyez moi un mail, je vous répondrai
          avec plaisir ☻
        </p>
      </div>
    </div>
  );
};

export default Contact;
