"use client";

const BigText = (): JSX.Element => {
  return (
    <section
      data-slice-type="big_text"
      data-slice-variation="default"
      className="relative z-10 flex min-h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-400 via-sky-600 to-sky-800 text-white"
    >
      {/* Sky-glass-style card */}
      <div className="backdrop-blur-xl bg-white/10 border border-blue-200/20 rounded-3xl px-6 py-10 md:px-12 md:py-20 shadow-[0_8px_32px_0_rgba(135,206,250,0.37)] max-w-6xl mx-auto text-center">
        <h2 className="grid gap-y-[3vw] font-black uppercase leading-[0.75] tracking-tight text-white text-balance">
          <div className="text-[28vw] md:text-[10vw] drop-shadow-[2px_4px_8px_rgba(0,0,0,0.3)]">
            Fizz
          </div>

          <div className="grid gap-[3vw] text-[30vw] md:flex md:justify-center md:gap-8 md:text-[8vw]">
            <span className="inline-block drop-shadow-md">for</span>
            <span className="inline-block drop-shadow-md">every</span>
            <span className="inline-block drop-shadow-md">mood</span>
          </div>

          <div className="text-[26vw] md:text-[9vw] drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
            Burst
          </div>
        </h2>
      </div>
    </section>
  );
};

export default BigText;
