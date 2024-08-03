import React, { FC, PropsWithChildren } from 'react'

interface PageProps {
    singglePage?: true;
    pageName: string
    className?: string;
}

const Page: FC<PropsWithChildren<PageProps>> = ({ children, pageName, singglePage, className }) => {
    return (
        <div className={`App ${singglePage ? "Singgle-Page" : ""} ${className?className:""}`}>
            <div className={`${pageName} PG`}>
                {children}
            </div>
        </div>
    )
}

export default Page;