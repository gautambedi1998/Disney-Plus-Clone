import Header from "./components/header";

export default function Home() {
  return (
    <div
      className="h-screen w-screen overflow-hidden flex align-middle justify-center"
      style={{
        background: "url(./images/login-background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    >
      <section className="flex flex-col items-center justify-center max-w-[800px] sm:px-10 px-5 lg:px-15">
        <img
          className="w-[100%] max-w-[800px] mb-6 block "
          src={"/images/cta-logo-one.svg"}
          alt=""
        />
        <div className="rounded-[6px] max-w-[800px] w-[100%] text-center p-5 text-2xl font-bold bg-[#0063e5] mb-6 hover:bg-[#0483ee] cursor-pointer">
          <h1>GET ALL THERE</h1>
        </div>
        <p className="text-[hsla(0,0%,95.3%,1)]  text-center text-[14px] mb-6 leading-[1.5] tracking-[1.5px]">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
        <img
          className="w-[100%] max-w-[800px] mb-2 block"
          src={"/images/cta-logo-two.png"}
          alt=""
        />
      </section>
    </div>
  );
}
