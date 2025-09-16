"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
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
        <section className="w-full h-[70vh] flex flex-col justify-center items-center mb-15">
          <h1 className="text-[#042222] text-4xl font-bold mb-4">
            Welcome to DiHy Care
          </h1>
          <p className="text-gray-800 mb-6">Your health, our priority</p>
          <button className="bg-[#3C7C94] text-white px-8 py-2 rounded-full hover:bg-[#2E5D70]">
            Get Started
          </button>
        </section>

        {/* Creadores */}
        <section className="w-[100vw] h-[50vh] flex items-center justify-center bg-white rounded-md mb-10">
          <ul className="flex flex-row gap-10">
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Ailén de Barbará</p><p className="text-black">UX/UI</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Beltrán Cid</p><p className="text-black">Front PC</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Tomás Schiavone</p><p className="text-black">Full Stack</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Iara Genco</p><p className="text-black">Back End</p></li>
            <li className="flex flex-col"><img src="/account_box.png"/><p className="text-xl text-black font-bold">Thiago Schiera</p><p className="text-black">Front Mobile</p></li>
          </ul>
        </section>

         {/* Grafico */}
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

         {/* Calendario */}
         <section className="h-[90vh] flex flex-row gap-4 p-4">
            {/* Columna izquierda */}
            <div className="flex flex-col h-full w-[50%] justify-center">
              <h1 className="text-[#042222] text-2xl font-semibold mb-2">
                Keep track of every day!
              </h1>
              <p className="text-[#042222] text-start mb-6">
                Because it’s important to take care of your health while keeping track of
                the activities you might have every day.
              </p>

              {/* Tarjetas de actividades */}
              <div className="flex flex-col gap-3 items-center">
                <div className="flex items-center gap-3 bg-[#f4c20b93] p-3 rounded-md w-[250px]">
                  <span className="bg-yellow-400 rounded-full p-2">💉</span>
                  <div>
                    <p className="text-[#042222] font-medium">Monitor</p>
                    <p className="text-sm text-[#042222]">5:00pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#4a9cdf7a] p-3 rounded-md w-[250px]">
                  <span className="bg-blue-500 rounded-full p-2">❤️</span>
                  <div>
                    <p className="text-[#042222] font-medium">Monitor</p>
                    <p className="text-sm text-[#042222]">5:00pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#b081e98a] p-3 rounded-md w-[250px]">
                  <span className="bg-violet-500 rounded-full p-2">👟</span>
                  <div>
                    <p className="text-[#042222] font-medium">Monitor</p>
                    <p className="text-sm text-[#042222]">5:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha (Calendario) */}
            <div className="h-full w-[50%] flex items-center justify-center">
              <img src="/calendario.png" className="rounded-lg shadow-lg w-[40vw]" />
            </div>
          </section>

          <section className="w-[100vw] h-[30vh] bg-gray-100">
              <h1 className="text-black text-2xl font-normal flex justify-center items-center">Download  the DiHy Care app now!</h1>
          </section>

          {/* Comida */}
          <section className="h-[90vh] flex flex-row gap-4 p-4">
            {/* Columna izquierda */}
            <div className="flex flex-col h-full w-[50%] justify-center">
              <h1 className="text-[#042222] text-2xl font-semibold mb-2">
              Your diabetes/hipertension data, simply there.</h1>
              <p className="text-[#042222] text-start mb-6">
              Welcome to DiHy care, the diabetes and hipertension management app made for people who struggle to organize themselves. <br /> <br />
              Together, we made diabetes and hipertension suck less!
              </p>

              {/* Tarjetas de actividades */}
              <div className="flex flex-col gap-3 items-center">
              <button className="bg-[#3C7C94] text-white px-10 py-2 rounded-full hover:bg-[#2E5D70]">
            Learn more
          </button>
              </div>
            </div>

            {/* Columna derecha (Calendario) */}
            <div className="h-full w-[50%] flex items-center justify-center">
              <img src="/comida.png" className="rounded-lg shadow-lg w-[40vw]" />
            </div>
          </section>

          <section className="w-[100vw] h-[30vh] bg-gray-100 flex flex-col justify-center items-center gap-4">
              <ul className="flex flex-row gap-2 items-center">
                <li className=""><img src="/flechaizq.png" className="" alt="Brazo"/></li>           
                <li className=""><img src="/brazo.png" className="h-[20vh] w-auto" alt="Brazo"/></li>
                <li className=""><img src="/glucometro.png" className="h-[20vh] w-auto"/></li>
                <li className=""><img src="/todo.png" className="h-[20vh] w-auto"/></li>
                <li className=""><img src="/flechader.png" className=""/></li>
              </ul>
            
            <ul className="flex flex-row gap-2">
            <li className="w-[20px] h-[20px] rounded-full bg-gray-500"></li>
            <li className="w-[20px] h-[20px] rounded-full bg-blue-400"></li>
            <li className="w-[20px] h-[20px] rounded-full bg-gray-500"></li>
            </ul>
          </section>

          {/* About Section */}
          <section className="w-full h-[90vh] flex flex-row items-center justify-center  px-12 py-8 gap-8">
            {/* Texto */}
            <div className="w-1/2 flex flex-col justify-center text-left">
              <h1 className="text-[#042222] text-3xl font-bold mb-4">
                Who we are and how it all began! <br /> 
                <span className="text-[#3C7C94]">The story of DiHy Care.</span>
              </h1>
              <p className="text-[#042222] text-lg leading-relaxed mb-6">
                Founded in 2025, DiHy Care is a digital health company that aims to 
                simplify life with diabetes/hypertension. We give people the tools and 
                confidence to ease the complexity of their daily routine. DiHy Care helps 
                to monitor and manage your diabetes/hypertension with relevant information 
                stored on your smartphone and ready to use. <br /><br />
                Stay in charge of your health, manage your insulin intake, and take control 
                of your diabetes/hypertension every day. In short, we aim to make your 
                daily routine suck less.
              </p>
              <button className="bg-[#3C7C94] text-white px-8 py-2 rounded-full hover:bg-[#2E5D70] w-fit">
                Learn More
              </button>
            </div>

            {/* Imagen */}
            <div className="w-1/2 flex items-center justify-center">
              <img 
                src="/about.png" 
                className="rounded-lg shadow-lg w-[80%]" 
              />
            </div>
          </section>

         {/* Devices & Services Section */}
          <section className="w-[100vw] h-[70vh] flex flex-row items-center justify-center px-12 gap-8">
           <div className="bg-white w-[100vw] h-[70vh] flex flex-row items-center justify-center px-12 py-8 gap-8">
             {/* Imagen izquierda */}
            <div className="w-[50vw] h-[50vh] flex items-center justify-center">
              <img src="/devices.png"/>
            </div>

            {/* Texto derecha */}
            <div className="w-[50vw] flex flex-col justify-center text-left">
              <h1 className="text-[#042222] text-2xl font-bold">
                Connecting your devices &amp; services
              </h1>
              <p className="text-[#042222] text-lg leading-relaxed mb-6">
                At DiHy Care, we’re of the humble opinion that paper is for origami, not for logbooks. 
                That’s why when you connect your diabetes device with DiHy Care, your connected meter 
                will automatically log your blood sugar readings into the app. No need to bother 
                flicking through pages anymore! Everything’s available in a few taps in the app.
              </p>
              <p className="text-[#042222] font-semibold mb-2">
                Connection Brings Freedom!
              </p>
              <ul className="list-disc list-inside text-[#042222] text-lg space-y-1">
                <li>Automatic data importing saves tons of time.</li>
                <li>Connect your blood glucose meter and avoid manual logging errors.</li>
              </ul>
            </div>
           </div>
          </section>
          
          {/* Contact Section */}
          <section className="w-[100vw] h-[80vh] flex flex-row">
            {/* Izquierda */}
            <div className="w-1/2 bg-[#9ED4D4] flex flex-col justify-center items-center text-center p-10">
              <h1 className="text-3xl font-semibold text-[#042222] mb-6">
                We’d love to hear from you
              </h1>
              <img src="/CorazonOscuro.png" alt="Heart logo" className="w-40 h-40" />
            </div>

            {/* Derecha */}
            <div className="w-1/2 bg-[#D9D9D9] flex flex-col justify-center p-10">
              <h2 className="text-2xl font-bold text-[#042222] mb-6">Contact Us</h2>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Enter your first name" 
                    className="w-1/2 p-2 border-1 border-black rounded-2xl text-black"
                  />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-1/2 p-2  border-1 border-black rounded-2xl text-black"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-1/2 p-2  border-1 border-black rounded-2xl text-black"
                  />
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-1/2 p-2  border-1 border-black rounded-2xl text-black"
                  />
                </div>
                <textarea
                  placeholder="Enter your message"
                  className="w-full p-2 border-1 border-black rounded-2xl h-24 text-black"
                />
                <button
                  type="submit"
                  className="bg-[#3C7C94] text-black py-2 px-6 rounded-full hover:bg-[#2E5D70] self-start"
                >
                  Submit
                </button>
              </form>
              <p className="mt-4 text-sm text-[#042222]">
                Email Us:{" "}
                <a href="mailto:debarbara.ailen@gmail.com" className="underline">
                  debarbara.ailen@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="w-[100vw] h-[35vh] bg-[#3C7C94] py-6">
            <div className="flex flex-row items-center justify-center gap-10">
              <div className="flex flex-col gap-4"> 
                <h2 className="text-black text-xl">Download the DiHy Care app now!</h2>
              {/* Botones de descarga */}
              <div className="flex gap-4">
                <img src="/googleplay.png" alt="Google Play" className="h-12" />
                <img src="/apple.png" alt="App Store" className="h-12" />
              </div>
            </div>
             
              {/* Íconos inferiores */}
              <div className="flex flex-row gap-10 mt-6">
                <div className="flex flex-col items-center text-white">
                  <img src="/contacto.png" className="h-[20vh] mb-2" />
                </div>
                <div className="flex flex-col items-center text-white">
                  <img src="/corazon.png" className="h-[20vh] mb-2" />
                </div>
                <div className="flex flex-col items-center text-white">
                  <img src="/frasco.png" className="h-[20vh] mb-2" />
                </div>
                <div className="flex flex-col items-center text-white">
                  <img src="/gota.png" className="h-[20vh] mb-2" />
                </div>
              </div>
            </div>
          </footer>

      </main>
    </div>
  );
}
