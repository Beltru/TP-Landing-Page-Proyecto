"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-200 flex justify-between items-center px-6 py-3 shadow z-50">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/CorazonOscuro.png" alt="Logo" width={60} height={60} />
        </div>

        {/* Links */}
        <ul className="flex flex-row space-x-6">
          <li className="text-xl text-black font-bold hover:text-gray-600 cursor-pointer">About Us</li>
          <li className="text-xl text-black font-bold hover:text-gray-600 cursor-pointer">Who we are</li>
          <li className="text-xl text-black font-bold hover:text-gray-600 cursor-pointer">Glucometer</li>
          <li className="text-xl text-black font-bold hover:text-gray-600 cursor-pointer">Feedback</li>
        </ul>

        {/* Auth buttons */}
        <div className="space-x-4">
          <button className="text-m font-semibold text-black hover:text-gray-600 cursor-pointer">Log In</button>
          <button className="text-m font-semibold border-l pl-4 text-black hover:text-gray-600 cursor-pointer">Sign Up</button>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-start bg-[#9ED4D4] text-center px-6 pt-32">
        
        {/* Hero Section */}
        <section className="w-full h-[70vh] flex flex-col justify-center items-center">
          <h1 className="text-[#042222] text-4xl font-bold mb-4">
            Welcome to DiHy Care
          </h1>
          <p className="text-gray-800 mb-6">Your health, our priority</p>
          <button className="bg-[#3C7C94] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#2E5D70]">
            Get Started
          </button>
        </section>

        {/* Second Section */}
        <section className="w-full h-[60vh] flex items-center justify-center bg-white rounded-md shadow-inner mb-2">
          <ul className="flex flex-row space-x-8">
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Ailén de Barbará</p><p className="text-black">UX/UI</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Beltrán Cid</p><p className="text-black">Front PC</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Tomás Schiavone</p><p className="text-black">Full Stack</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Iara Genco</p><p className="text-black">Back End</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Thiago Schiera</p><p className="text-black">Front Mobile</p></li>
          </ul>
        </section>
        <section className="w-full h-[62vh] flex items-center justify-center rounded-md shadow-inner mb-2 gap-2">
  <div className="w-1/2 h-full flex items-center justify-center">
    <img src="/image34.png" alt="Glucose chart" className="object-contain h-full" />
  </div>

  <div className="w-1/2 h-full bg-[#D9D9D9] flex flex-col justify-center items-center text-center p-6">
    <h1 className="text-4xl font-bold text-[#042222] leading-snug mb-6">
      The best way <br /> to track your health.
    </h1>
    <img src="/CorazonOscuro.png" alt="Logo" className="w-40 h-40" />
  </div>
</section>

      </main>
    </div>
  );
}
