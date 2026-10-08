import type { ReactNode } from "react"

type SectionBodyProps = {
    children: ReactNode
}

export function SectionBody({children}: SectionBodyProps) {
    return (
        <div className='px-6 py-24 border-t border-zinc-900' id='about'>
            {children}
        </div>
    )
}
