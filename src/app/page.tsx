import H2 from "@/components/H2";
import RedirectButton from "@/components/RedirectButton";
import { Facebook, Instagram, SnapChatIcon, TiktokIcon, Twitter } from "@/components/Svgs";

export async function generateMetadata() {
  const title = 'Viral';
  const image = '';
  const description = '';
  const url = '';
  return {
    title: title,
    description: description,
    category: "Website",
    twitter: {
      card: "summary_large_image",
      title,
      description,
      siteId: "",
      creator: "@timothy_akanbii",
      creatorId: "",
      images: []
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Viral Website",
      images: [
        {
          url: image,
          width: 800,
          height: 800
        },
      ],
    },
    locale: "en_US",
    type: "website"
  }
}

export default function Home() {

  const facebookURL  : string = 'https://www.facebook.com/share/Ts4ACAKDaqJYuSkr/?mibextid=LQQJ4d';
  const instagramURL : string = 'https://www.instagram.com/invites/contact/?i=16m2ifiy3pxee&utm_content=igsk3uz';
  const snapChatURL : string = 'https://www.snapchat.com/add/ayanfevira?share_id=1193ulqzQsuLKuj5nYHFdA&locale=en_US';
  const TiktokURL : string = 'https://www.tiktok.com/@ayanfevira?_t=8mt04KCGBL3&_r=1';

  

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
            href={facebookURL}
            text="Facebook"
            children={<Facebook />}
          />
          <RedirectButton 
            href={instagramURL}
            text="Instagram"
            children={<Instagram />}
          />
          <RedirectButton 
            href={snapChatURL}
            text="Snapchat"
            children={<SnapChatIcon />}
          />
          <RedirectButton 
            href={TiktokURL}
            text="Tiktok"
            children={<TiktokIcon />}
          />

        </div>
     </div>
    </main>
  );
}
