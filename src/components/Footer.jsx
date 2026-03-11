export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-red-900 via-purple-900 to-black border-t-[20px] border-double border-red-600 mt-20 p-10 rounded-t-[100px] bounce-crazy shadow-[0_-20px_50px_#8b0000]">
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-4xl font-black text-white drop-shadow-[5px_5px_0_red] spin-fast inline-block mb-4">
          &copy; {currentYear} ~ 🦋 BEATRICE I SUPPOSE 🦋
        </p>
        <p className="text-3xl font-bold text-red-400 bg-black/80 p-6 rounded-full mt-4 wiggle inline-block border-8 border-dashed border-purple-500 shadow-[0_0_20px_purple]">
          ELSA WAS HERE 🔪🩸 (ALL RIGHTS RESERVED)
        </p>
      </div>
    </footer>
  );
}
