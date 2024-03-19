import React from "react";
import { useNavigate } from "react-router-dom";

// Reusable component for Event Card
const EventCard = ({ src, alt, eventName, location, price, navigate }) => (
    <article onClick={() => navigate('/paymentInstructions')} className="flex flex-col items-center px-2.5 pb-6 font-semibold rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 leading-[130%]">
        <img loading="lazy" src={src} alt={alt} className="rounded-full shadow-sm aspect-[1.01] w-[134px]" />
        <h3 className="mt-1 text-sm text-black">{eventName}</h3>
        <p className="mt-2 text-xs leading-4 text-center text-neutral-500">{location}</p>
        <p className="mt-1.5 text-xl text-lime-800">{price}</p>
    </article>
);

const Events = () => {
    const navigate = useNavigate();
    const eventCardsData = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Twenty one pilots", eventName: "Twenty one pilots", location: "SESC, Campinas", price: "R$850,00" },
        { src: "https://geea-storage.nyc3.cdn.digitaloceanspaces.com/gabriel-freela/Ellipse%2010.png", alt: "Joji", eventName: "Joji", location: "Espaço Taal, Campinas", price: "R$700,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e79b0cda0f6e4527b5ea240e40cfb1ea077db932e005cc6a79426c572c0739c?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Tyler, the creator", eventName: "Tyler, the creator", location: "Multi Arena, Campinas", price: "R$450,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/40a51622c69b699348e79fd7fdbdcd95c7993bf281662d777cef4c8c50165401?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Beyoncé", eventName: "Beyoncé", location: "Laroc Club, Campinas", price: "R$900,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adc1ebb9e0d803f061a8cb0e3555e719cd6d2293c8808e8cc5ac745791b2320?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Lana Del Rey", eventName: "Lana Del Rey", location: "SESC, Campinas", price: "R$670,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adc1ebb9e0d803f061a8cb0e3555e719cd6d2293c8808e8cc5ac745791b2320?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Lana Del Rey", eventName: "Lana Del Rey", location: "SESC, Campinas", price: "R$670,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adc1ebb9e0d803f061a8cb0e3555e719cd6d2293c8808e8cc5ac745791b2320?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Lana Del Rey", eventName: "Lana Del Rey", location: "SESC, Campinas", price: "R$670,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adc1ebb9e0d803f061a8cb0e3555e719cd6d2293c8808e8cc5ac745791b2320?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Lana Del Rey", eventName: "Lana Del Rey", location: "SESC, Campinas", price: "R$670,00" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9adc1ebb9e0d803f061a8cb0e3555e719cd6d2293c8808e8cc5ac745791b2320?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&", alt: "Lana Del Rey", eventName: "Lana Del Rey", location: "SESC, Campinas", price: "R$670,00" }
    ];

    return (
        <main className="flex gap-5 justify-between py-3.5 pr-9 pl-4 w-full whitespace-nowrap shadow-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            {eventCardsData.map((data, index) => (
                <EventCard key={index} src={data.src} alt={data.alt} eventName={data.eventName} location={data.location} price={data.price} navigate={navigate} />
            ))}
        </main>
    );
}

export default Events;