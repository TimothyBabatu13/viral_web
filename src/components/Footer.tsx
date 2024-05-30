'use client';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className="text-primary text-[16px] flex justify-center sm:text-[20px] font-fourHundrend">
        © All Rights Reserved {year}. 
    </footer>
  )
}

export default Footer