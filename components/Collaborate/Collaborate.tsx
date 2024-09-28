
const Collaborate = () => {
  return (
    <div className="max-w-[80rem] w-[80%] relative left-[50%] translate-x-[-50%] flex flex-col gap-32 my-60">
      <h1 className="text-white md:ml-36 text-4xl md:text-5xl geomatrixBold font-bold">
        Want To Ask about Business
        <br />
        Collaborations Or Career <br />
        Opportunities? Drop Us An Email
      </h1>
      <div className="w-full flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-end">
        <div className="flex flex-col items-end w-full md:w-1/2">
          <p className="text-white text-[23px] md:text-[25px] font-extrabold">mail@growdio.net</p>
          <p className="text-white text-[16px]">Projects, collaborations & queries.</p>
        </div>
        <div className="flex flex-col items-end w-full md:w-1/2">
          <p className="text-white text-[23px] md:text-[25px] font-extrabold">growdio@gmail.com</p>
          <p className="text-white text-[16px]">Join our dynamic Team</p>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
