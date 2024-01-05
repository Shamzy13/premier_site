import { useForm, SubmitHandler } from "react-hook-form"
import emailjs from "@emailjs/browser"

type FormInputs = {
    subject: string,
    email: string,
    message: string

}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data => {
        emailjs.send(
            'service_ameyscp',
            'template_ivze1ac',
            {
                subject: data.subject,
                email: data.email,
                message: data.message 
            },
            '88wvRZ1KeKGgOdba3'
        )
    }

    return (
        <main>
            <h3 className="font-extrabold text-2xl mb-4">Contact</h3>

            <p>EMAIL : larroque064@gmail.com</p>

            <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block" htmlFor="subject">Sujet du mail</label>
                    <input {...register("subject")} className="border" type="text" name="subject" id="subject" placeholder="Quel est le sujet ?"/>
                </div>
                
                <div className="mb-3">
                    <label className="block" htmlFor="email">Sujet du mail</label>
                    <input {...register("email", { required: true})} className="border" type="email" name="email" id="email" placeholder="Votre email"/>
                    {errors.email && <p className="text-">Email requis</p>}
                </div>
                
                <div className="mb-3">
                    <label className="block" htmlFor="message">Sujet du mail</label>
                    <textarea {...register("message")} rows={5} className="border resize-none" name="message" id="message" placeholder="Votre message ..."/>
                </div>

                

                <input type="submit" className="block bg-[red] text-[white] py-3 px-3 hover:bg-[grey]" />
            </form>
        </main>
    )
}