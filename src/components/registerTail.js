import * as React from "react";

export default function RegisterTail() {
  return (
    <div className="flex flex-col pb-8 leading-[130%]">
      <div className="flex gap-5 justify-between px-16 py-4 w-full text-base text-black whitespace-nowrap shadow-sm bg-slate-400 bg-opacity-30 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
          <div className="grow self-stretch my-auto text-3xl font-extrabold tracking-tight leading-8 text-slate-400">
            Begs
          </div>
          <div className="flex gap-5 justify-between items-start self-stretch px-6 pt-4 font-semibold text-center rounded shadow-sm bg-slate-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/01ebbf105c082c32d80a0e84760cd1bd0c5b39ebc995a96eaee5ff501548e7cb?apiKey=07955390a63c4980bec8f113a48448b0&"
              className="shrink-0 aspect-[2.44] w-[73px]"
            />
            <div className="flex-auto">Pesquise</div>
          </div>
          <div className="flex gap-2.5 self-stretch my-auto text-center">
            <div className="grow">Campinas, BR</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0ab497a538a9d8dd790a2c83595e737163ece636d0dc462604845ae0f7fbf95?apiKey=07955390a63c4980bec8f113a48448b0&"
              className="shrink-0 aspect-[0.72] w-[13px]"
            />
          </div>
        </div>
        <div className="justify-center self-start px-11 py-4 text-center rounded shadow-sm bg-slate-400 max-md:px-5">
          Conta
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-5 py-7 mt-8 max-w-full text-xl font-semibold text-center text-white shadow-sm bg-black bg-opacity-30 rounded-[35px] w-[642px]">
        <div className="flex flex-col max-w-full text-black w-[436px]">
          <div className="justify-center items-center px-16 py-4 whitespace-nowrap rounded shadow-sm bg-slate-400 max-md:px-5 max-md:max-w-full">
            Entrar com o Google
          </div>
          <div className="mt-11 text-base text-red-600 max-md:mt-10 max-md:max-w-full">
            Digite seu E-mail no campo abaixo:
            <span className="text-red-600">*</span>
          </div>
          <div className="shrink-0 h-12 rounded shadow-sm bg-slate-400 bg-opacity-50 max-md:max-w-full" />
          <div className="self-end mt-2.5 text-xs text-white whitespace-nowrap">
            Esqueci meu E-mail
          </div>
          <div className="mt-3.5 text-base text-red-600 max-md:max-w-full">
            Digite sua senha no campo abaixo:
            <span className="text-red-600">*</span>
          </div>
          <div className="shrink-0 mt-1 h-12 rounded shadow-sm bg-slate-400 bg-opacity-50 max-md:max-w-full" />
          <div className="self-end mt-2 text-xs text-white whitespace-nowrap">
            Esqueci minha senha
          </div>
          <div className="justify-center items-center px-16 py-5 mt-5 whitespace-nowrap rounded shadow-sm bg-slate-400 max-md:px-5 max-md:max-w-full">
            Entrar
          </div>
        </div>
        <div className="self-stretch mt-4 leading-7 max-md:max-w-full">OU</div>
        <div className="self-stretch mt-6 text-3xl max-md:max-w-full">
          Crie sua conta gratuitamente!
        </div>
        <div className="justify-center items-center px-16 py-5 mt-10 max-w-full text-black whitespace-nowrap rounded shadow-sm bg-slate-400 w-[434px] max-md:px-5">
          Cadastre-se
        </div>
        <div className="mt-8 text-xs leading-4">
          Ao se cadastrar, você concorda com nossos Termos , Política de dados e
          Política de cookies.
        </div>
      </div>
    </div>
  );
}


