interface H2Type {
    text: string
}

const H2 = ({ text } : H2Type ) => {
    return (
      <h2 className="text-primary font-sixHundrend text-[35px] sm:text-[50px] md:text-seventy text-center">{text}</h2>
    )
  }

  export default H2;