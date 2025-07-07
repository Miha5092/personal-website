export default function Footer() {
    return (
        <footer className="bg-moonstone text-rich-black text-sm py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        {/* <p>&copy; {new Date().getFullYear()} Mihai Mitrea. All rights reserved.</p> */}
        <div className="flex gap-4 mt-4 md:mt-0">
            <a href="mailto:mihai@example.com" className="hover:underline">Email</a>
            <a href="https://github.com/Miha5092" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/mihai-mitrea-6b9335237" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        </footer>
    );
}
