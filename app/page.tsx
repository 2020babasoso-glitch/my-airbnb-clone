import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-pink-50 font-sans p-8">
      <main className="flex flex-col items-center gap-8 text-center bg-white p-12 rounded-3xl shadow-xl max-w-2xl border-4 border-pink-200">
        <div className="relative w-64 h-64 overflow-hidden rounded-full border-8 border-pink-100 shadow-inner">
          <Image
            src="https://cataas.com/cat"
            alt="A cute cat"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-pink-600 tracking-tight">
            안녕하세요! 귀여운 고양이에요 🐾
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed">
            환영합니다! 오늘 하루도 고양이처럼 포근하고 <br />
            행복한 시간 보내세요. 야옹~
          </p>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-pink-500 text-white rounded-full font-bold hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg"
          >
            다른 고양이 보기
          </button>
        </div>
      </main>
      
      <footer className="mt-8 text-pink-400 font-medium">
        Made with ❤️ and Cats
      </footer>
    </div>
  );
}
