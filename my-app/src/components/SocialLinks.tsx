import { FaYoutube , FaTwitter , FaInstagram } from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="font-extrabold text-2xl">Mes résaux sociaux</h3>

            <ul className="mt-5">
                <li className='flex items-center'><FaYoutube className='mr-2' /> <a className="hover:text-[red]" href="https://www.youtube.com/@shamzy4623/videos">Youtube</a></li>
                <li className='flex items-center'><FaInstagram className='mr-2'/><a className="hover:text-[#D300C5]" href="https://www.instagram.com/">Instagram</a></li>
                <li className='flex items-center'><FaTwitter className='mr-2'/><a href="https://twitter.com/home?lang=fr">Twitter</a></li>
            </ul>
        </section>
    )
}