export default function Index() {
  return (
    <div className="bg-white max-w-[1200px] w-full px-8 py-12 lg:p-14 lg:pr-24 flex flex-col rounded-2xl mb-12 shadow">
      <h6 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mr-8 mb-8 mt-0">Meeskond</h6>

      <div className="flex flex-col lg:flex-row">
        <img
          src="https://slava-saun-cms.fly.dev/storage/media/13/Photo.png"
          alt="Meeskond"
          className="max-w-[400px] w-full bg-black bg-opacity-50 rounded-lg lg:mr-12"
        />

        <div className="flex flex-col max-lg:mt-6">
          <span className="font-body text-2xl text-black font-bold">Alampealkiri</span>

          <p className="font-body font-normal text-black text-lg mt-3 mb-6">Ja siin on siis kirjeldus</p>

          <div className="mt-auto">
            <a
              className="bg-transparent border-none text-xl font-normal font-display text-black group no-underline"
              href="/"
            >
              <span className="group-hover:-translate-y-2 butter duration-100 flex items-center">Vaata veel {'>'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
