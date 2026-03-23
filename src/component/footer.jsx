import { FaInstagram, FaFacebookSquare, FaYoutube, FaPinterestSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  const socials = [
    { icon: FaFacebookSquare, count: "29", href: "https://facebook.com" },
    { icon: FaTwitter, count: "70K", href: "https://twitter.com" },
    { icon: FaInstagram, count: "40", href: "https://instagram.com" },
    { icon: FaPinterestSquare, count: "13K", href: "https://pinterest.com" },
    { icon: FaYoutube, count: "168K", href: "https://youtube.com" },
  ];

  return (
    <div className="bg-black text-white px-12 py-6 flex justify-between items-center w-full">

      {/* LEFT */}
      <p className="text-sm whitespace-nowrap">
        Designed & Developed by <span className="font-semibold">GYAN ARYAN</span>
      </p>

      {/* RIGHT */}
      <div className="flex gap-10 items-center">
        {socials.map(({ icon: Icon, count, href }) => (
          
          <a
            key={href}
            href={href}
            className="flex flex-col items-center gap-1 text-white transition-colors duration-200 hover:text-blue-200"
          >
            <Icon size={18} />
            <span className="text-xs">{count}</span>
          </a>

        ))}
      </div>
    </div>
  );
}

export default Footer;