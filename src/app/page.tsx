import H2 from "@/components/H2";
import RedirectButton from "@/components/RedirectButton";
import { Facebook, Instagram, Twitter } from "@/components/Svgs";
import { Whatsapp } from "../components/Svgs";


export default function Home() {
  return (
    <main className="">
      <H2
        text="Welcome to Ayanfe Viral"
      />
      <H2 
        text="contact me on"
      />
      <div className="flex justify-center">
      <div className="mt-[20px]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <RedirectButton 
            href={"/"}
            text="Facebook"
            children={<Facebook />}
          />
          <RedirectButton 
            href={"/"}
            text="Instagram"
            children={<Instagram />}
          />
          <RedirectButton 
            href={"/"}
            text="Twitter"
            children={<Twitter />}
          />
          <RedirectButton 
            href={"https://wa.me/+2348125775404"}
            text="WhatsApp"
            children={<Whatsapp />}
          />
        </div>
     </div>
    </main>
  );
}
