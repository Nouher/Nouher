import close from "../public/images/icon-close.svg";
import { FaChevronLeft, FaChevronRight, FaCloudShowersHeavy } from "react-icons/fa";
import Image from "next/image";

export default function Lightbox({
    products,
    slideIndex,
    nextSlide,
    previousSlide,
    setShowLightbox,
}) {
    return (
        <>
            <article className="bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
                <button onClick={() => setShowLightbox(false)}>
                    <Image src={close} alt="close-icon" className="w-10 absolute top-10 right-10" />
                </button>

                <div className="flex items-center justify-center h-screen">
                    {products.image.map((item, index) => (
                        <div
                            key={index}
                            className={slideIndex === index + 1 ? "relative" : "hidden"}
                        >
                            <img
                                src={item}
                                alt=""
                                className="big-image lg:w-full lg:rounded-2xl"
                            />

                            <ul>
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
            </article>
        </>
    );
}
