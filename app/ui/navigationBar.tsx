import Link from "next/link";
import 'flowbite';
import DropdownNavMenu from "./dropdownNavMenu";

export default function NavigationBar({ height = "h-12", spacing = "px-4" }: { height?: string; spacing?: string } = {}) {
  return (
    <nav className={`z-50 ${height} w-full flex bg-rich-black`}>
        <ul className="flex gap-6 justify-center w-full h-full">
            <li className="h-full">
                <Link href="/" className={`
                h-full
                ${spacing}
                text-platinum 
                hover:bg-cadet-gray
                hover:text-platinum
                dark:hover:bg-cadet-gray
                dark:hover:text-platinum
                text-center 
                flex 
                items-center`}>
                    About Me
                </Link>
            </li>
                
            <li className="h-full">
                <DropdownNavMenu 
                    title="Projects" 
                    spacing={spacing}
                    options={[
                        { label: "Master's Thesis", href: "/projects/master" },
                        { label: "This Website", href: "/projects/website" },
                        { label: "Bachelor's Thesis", href: "/projects/bachelor" },
                    ]} 
                />
            </li>

            <li className="h-full">
               <Link href="/hobbies" className={`
                h-full
                ${spacing}
                text-platinum 
                hover:bg-cadet-gray
                hover:text-platinum
                dark:hover:bg-cadet-gray
                dark:hover:text-platinum
                text-center 
                flex 
                items-center`}>
                    Hobbies
                </Link>
            </li>
            
            <li className="h-full">
                <Link
                    href="https://www.linkedin.com/in/mihai-mitrea-6b9335237"
                    target="_blank"
                    className={`h-full ${spacing} text-platinum hover:text-cadet-gray flex items-center`}
                >
                    <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C21.18 7.6 22 10.02 22 13.28V24h-5v-9.52c0-2.27-.82-3.82-2.87-3.82-1.57 0-2.51 1.06-2.93 2.08-.15.37-.19.89-.19 1.41V24h-5V8z" />
                    </svg>
                </Link>
            </li>

            <li className="h-full">
                <Link
                    href="https://github.com/Miha5092"
                    target="_blank"
                    className={`h-full ${spacing} text-platinum hover:text-cadet-gray flex items-center`}
                >
                    <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.52 9.52 0 0112 6.8c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.58 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.72 0 .26.17.57.68.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
