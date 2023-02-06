import Layout from '@/components/Layout'
import Lightbox from '@/components/Lightbox';
import data from '@/utils/data';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import minus from '../../public/images/icon-minus.svg'
import plus from '../../public/images/icon-plus.svg'



export default function ProductScreen() {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.products.find(x => x.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>
    }

    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState(0);
    const [slideIndex, setSlideIndex] = useState(1);
    const [showLightbox, setShowLightbox] = useState(false);
  
    const { mainImage } = product.image[1];
  
    const nextSlide = () => {
      if (slideIndex !== product.image.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === product.image.length) {
        setSlideIndex(1);
      }
    };
  
    const previousSlide = () => {
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
        setSlideIndex(product.images.length);
      }
    };
  
    const handleMinus = () => {
      setAmount(amount - 1);
      if (amount <= 0) setAmount(0);
    };

    return (
        <Layout title={product.name}>
                 {showLightbox && (
        <Lightbox
          products={product}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {product.image.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item}
                  alt=""
                  className="w-full lg:rounded-2xl cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />

                <ul className="lg:hidden">
                  <li>
                    <button
                      onClick={previousSlide}
                      className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronLeft />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={nextSlide}
                      className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <FaChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <img
              src={product.image[value]}
              alt=""
              className="w-full lg:rounded-2xl cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {product.image.map((item, index) => (
              <li
                key={item}
                onClick={() => setValue(index)}
                className={`${index === value && "border-2 border-orange-400 opacity-80"
                  } border-2 rounded-2xl overflow-hidden cursor-pointer`}
              >
                <img src={item} alt="" className="w-20" />
              </li>
            ))}
          </ul>
        </article>

        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneaker company
          </h2>
          <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div>
            <h2 className="text-slate-600 mb-10 leading-relaxed">Veuillez saisir vos informations:</h2>
            <div class="grid gap-6 mb-4 md:grid-cols-2">
                <input type="text" id="company" class="outline-orange-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nom complet" required/>
                <input type="tel" id="phone" class="outline-orange-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Numéro de téléphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> 
            </div>
                <input type="email" id="email" class="outline-orange-500 mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ville, Adresse" required/>
            </div>

          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">125.00 DH</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className="text-slate-600 text-sm">
              <s>250.00 DH</s>
            </p>
          </div>

          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <Image src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <Image src={plus} alt="" />
              </li>
            </ul>
            
            <div className="lg:flex-1">
              <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                {/* <AiOutlineShoppingCart /> */}
                Commander maintenant
              </button>
            </div>
          </div>
        </article>
      </section>
        </Layout>
    )
}

