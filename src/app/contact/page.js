import styles from "../../styles/app/contact.module.css";
import instagramLogo from "../../../assets/instagramLogo.svg";
import githubLogo from "../../../assets/githubLogo.svg";
import linkedInLogo from "../../../assets/linkedInLogo.svg";
import Image from "next/image";
import Link from "next/link";


export default function Contact() {

  const socials = [
    {
      img: githubLogo,
      name: "LipeAKugel",
      url: "https://github.com/LipeAKugel"
    },
    {
      img: linkedInLogo,
      name: "Felipe Amorim",
      url: "https://www.linkedin.com/in/felipe-amorim-b92144a6"
    },
    {
      img: instagramLogo,
      name: "lipe.a_araujo",
      url: "https://www.instagram.com/lipe.a_araujo/"
    },
  ]

  return (
    <div className={styles.container}>
      <div className="card" id={styles.content_card}>
        <h1>Contact</h1>
        {socials.map(social => (
          <Link 
            href={social.url} 
            key={social.url}
            className={styles.social}
          >
            <Image src={social.img} alt=""/>
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  )
}