import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Ícone do Menu */}
      <div className="flex items-center">
        <button className="p-2 focus:outline-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            className="NMm5M"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        {/* Logo do Google Sala de Aula */}
        <Image src="/classroom-logo.svg" alt="Google Sala de Aula" width={32} height={32} className="ml-4" />
        <span className="ml-2 text-gray-700 font-medium">Google Sala de Aula</span>
      </div>
      
      {/* Ícones do lado direito */}
      <div className="flex items-center space-x-4">
        {/* Botão de Adicionar */}
        <button className="p-2 focus:outline-none">
          <svg
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="NMm5M"
          >
            <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
          </svg>
        </button>
        {/* Ícone de Apps */}
        <button className="p-2 focus:outline-none">
          <Image src="/al-icon.png" alt="Apps" width={24} height={24} />
        </button>
        {/* Perfil do Usuário */}
        <Image src="/vasco.png" alt="User Profile" width={32} height={32} className="rounded-full" />
      </div>
    </header>
  );
};

export default Header;
