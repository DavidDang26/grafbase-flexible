import Image from "next/image"
import { footerLinks } from "@/constants"
import Link from "next/link"

type ColumnProps = {
    title: string;
    links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="xl:w-1/4 w-1/3 flex flex-col px-10">
        <div className="font-bold">{title}</div>
        <ul className="flex flex-col my-3">
            {links.map(link => <Link key={link} href={link}>{link}</Link>)}
        </ul>
    </div>
)

const Footer = () => {
    return (
        <footer className='footer flex flex-col'>
            <div className="flex flex-col gap-7">
                <Image src={'logo-purple.svg'} width={114} height={53} alt="Flexible-purple" />
                <p className="w-1/2">Flexible is the world's leading community for creatives to share, grow, and get hired</p>
            </div>

            <div className="flex flex-wrap">
                {footerLinks.map(({ title, links }) => <FooterColumn title={title} links={links} key={title} />)}
            </div>

        </footer>
    )
}

export default Footer