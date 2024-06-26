import Link from 'next/link'
import React, { ReactElement } from 'react'

interface RedirectButtonType {
    href: string,
    text: string,
    children: ReactElement
}

const RedirectButton = ({ href, text, children }: RedirectButtonType) => {
  return (
    <Link 
        className="bg-[#565555] py-[8px] px-[12px] rounded-[16px] flex justify-center items-center"
        href={href}
        target='_blank'
    >
        {children}
        <div className="ml-[12px] text-fourteen font-fourHundrend text-primary">{text}</div>
    </Link>
  )
}

export default RedirectButton