import { BsLink } from "react-icons/bs";


export const Ressources = () => {
    return (
        <main>
            <h3 className="font-extrabold text-2xl mb-4">Ressources de la chaine</h3>

            <ul>
                <li className="flex items-center"><BsLink className="mr-2"/><a className="hover:underline" href="https://python.org">Télécharger Python</a></li>
                <li className="flex items-center"><BsLink className="mr-2"/><a className="hover:underline" href="https://github.com">Github</a></li>
                <li className="flex items-center"><BsLink className="mr-2"/><a className="hover:underline" href="https://gitlab.com">Gitlab</a></li>
            </ul>
        </main>
    )
}