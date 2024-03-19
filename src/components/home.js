import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-5 justify-between px-16 py-4 w-full text-base leading-5 text-black whitespace-nowrap shadow-sm bg-slate-400 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <div className="grow self-stretch my-auto text-3xl font-extrabold tracking-tight leading-8 text-slate-400">
            Begs
          </div>
          <div className="flex gap-5 justify-between items-start self-stretch px-6 pt-4 font-semibold text-center rounded shadow-sm bg-slate-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/478dd149f3c93b3e12037f16b022ec021b0bcf26adcce825f78e799e8883fd28?"
              className="shrink-0 aspect-[2.44] w-[73px]"
            />
            <div className="flex-auto">Pesquise</div>
          </div>
          <div className="flex gap-2.5 self-stretch my-auto text-center">
            <div className="grow">Campinas, BR</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ab497a538a9d8dd790a2c83595e737163ece636d0dc462604845ae0f7fbf95?"
              className="shrink-0 aspect-[0.72] w-[13px]"
            />
          </div>
        </div>
        <div className="justify-center self-start px-11 py-4 text-center rounded shadow-sm bg-slate-400 max-md:px-5">
          Conta
        </div>
      </div>
      <div className="flex gap-5 justify-between mx-6 mt-5 text-base font-semibold leading-5 text-center text-black whitespace-nowrap max-md:flex-wrap max-md:mr-2.5">
        <div className="grow justify-center px-8 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Blues
        </div>
        <div className="grow justify-center px-8 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Rock
        </div>
        <div className="grow justify-center px-9 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Pop
        </div>
        <div className="grow justify-center px-8 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Jazz
        </div>
        <div className="grow justify-center px-9 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Rap
        </div>
        <div className="grow justify-center px-7 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Metal
        </div>
        <div className="grow justify-center px-9 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Folk
        </div>
        <div className="grow justify-center px-8 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Indie
        </div>
        <div className="grow justify-center px-6 py-3.5 bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5">
          Reggae
        </div>
      </div>
      <div className="flex flex-col justify-center py-0.5 mt-5 w-full text-4xl text-white bg-black shadow-sm leading-[52px] max-md:max-w-full">
        <div className="overflow-hidden relative flex-col justify-center items-start px-11 py-8 w-full min-h-[260px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81bf52fe01e39385b784a657f98af53688cdf0444799e54f6ce50ba1213291a6?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="object-cover absolute inset-0 size-full"
          />
          Os melhores <span className="text-5xl">shows</span> você encontra
          aqui!
        </div>
      </div>
      <div className="flex z-10 gap-5 justify-between items-start self-center px-5 w-full font-semibold text-center text-black max-w-[992px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto self-start text-3xl leading-10 max-md:max-w-full">
          Mais procurados em Campinas
        </div>
        <div className="flex-auto self-end mt-6 text-base leading-5">
          Ver mais -&gt;
        </div>
      </div>
      <div className="flex gap-5 justify-between py-3.5 pr-9 pl-4 w-full whitespace-nowrap shadow-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 flex-1 items-center px-2.5 pb-6 font-semibold rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 leading-[130%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="rounded-full shadow-sm aspect-[1.01] w-[134px]"
          />
          <div className="self-stretch text-sm text-black">
            Twenty one pilots
          </div>
          <div className="mt-2 text-xs leading-4 text-center text-neutral-500">
            SESC, Campinas
          </div>
          <div className="mt-1.5 text-xl text-lime-800">R$850,00</div>
        </div>
        <div className="flex flex-col flex-1 flex-1 items-center pr-1 pb-6 pl-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="rounded-full shadow-sm aspect-[0.92] w-[137px]"
          />
          <div className="mt-1.5 text-xs leading-4 text-neutral-500">
            Espaço Taal, Campinas
          </div>
          <div className="mt-1.5 text-xl font-semibold leading-7 text-lime-800">
            R$700,00
          </div>
        </div>
        <div className="flex flex-col flex-1 flex-1 items-center px-2.5 pb-6 font-semibold rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 leading-[130%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="rounded-full shadow-sm aspect-[1.01] w-[134px]"
          />
          <div className="mt-1 text-sm text-black">Tyler, the creator</div>
          <div className="mt-2 text-xs leading-4 text-center text-neutral-500">
            Multi Arena, Campinas
          </div>
          <div className="mt-1.5 text-xl text-lime-800">R$450,00</div>
        </div>
        <div className="flex flex-col flex-1 flex-1 items-center px-2.5 pb-6 font-semibold rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 leading-[130%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="rounded-full shadow-sm aspect-[1.01] w-[134px]"
          />
          <div className="text-sm text-center text-black">Beyoncé</div>
          <div className="mt-2 text-xs leading-4 text-center text-neutral-500">
            Laroc Club, Campinas
          </div>
          <div className="mt-1.5 text-xl text-lime-800">R$900,00</div>
        </div>
        <div className="flex flex-col flex-1 flex-1 items-center px-2.5 pb-6 font-semibold rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200 leading-[130%]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32a409b1c4e9ae3d78777176e0e0ed1b69b8f27242691e937f4f243a023b0b82?apiKey=c3af4c2c7fd34113a10877a0d05a91ba&"
            className="rounded-full shadow-sm aspect-[1.01] w-[134px]"
          />
          <div className="mt-1 text-sm text-center text-black">
            Lana Del Rey
          </div>
          <div className="mt-2 text-xs leading-4 text-center text-neutral-500">
            SESC, Campinas
          </div>
          <div className="mt-1.5 text-xl text-lime-800">R$670,00</div>
        </div>
      </div>
      <div className="flex z-10 gap-5 justify-between items-start self-end px-5 max-w-full font-semibold text-center text-black w-[858px] max-md:flex-wrap">
        <div className="flex-auto text-3xl leading-10 max-md:max-w-full">
          Revenda de ingressos
        </div>
        <div className="flex-auto mt-4 text-base leading-5">Ver mais -&gt;</div>
      </div>
      <div className="flex gap-5 justify-between px-6 pt-2.5 w-full shadow-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-1 flex-1 justify-center items-center px-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="..."
            className="rounded-full shadow-sm aspect-[1.96] w-[132px]"
          />
        </div>
        <div className="flex flex-1 flex-1 justify-center items-center px-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="..."
            className="rounded-full shadow-sm aspect-[1.96] w-[132px]"
          />
        </div>
        <div className="flex flex-1 flex-1 justify-center items-center px-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="..."
            className="rounded-full shadow-sm aspect-[1.96] w-[132px]"
          />
        </div>
        <div className="flex flex-1 flex-1 justify-center items-center px-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="..."
            className="rounded-full shadow-sm aspect-[1.96] w-[132px]"
          />
        </div>
        <div className="flex flex-1 flex-1 justify-center items-center px-2.5 rounded-3xl border-2 border-solid bg-stone-50 border-neutral-200">
          <img
            loading="lazy"
            srcSet="..."
            className="rounded-full shadow-sm aspect-[1.96] w-[132px]"
          />
        </div>
      </div>
    </div>
  );
}


