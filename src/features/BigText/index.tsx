"use client";

const BigText = (): JSX.Element => {
  return (
    <section
      data-slice-type="big_text"
      data-slice-variation="default"
      className="min-h-screen w-screen overflow-hidden bg-[#FE6334] text-[#FEE832]"
    >
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="text-[34vw]">Fizz</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">for</span>
          <span className="inline-block max-md:text-[27vw]">every</span>
          <span className="inline-block max-md:text-[40vw]">mood</span>
        </div>
        <div className="text-[32vw]">Burst</div>
      </h2>
    </section>
  );
};

export default BigText;
