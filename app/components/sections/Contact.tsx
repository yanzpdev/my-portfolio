import { contacts } from "@/app/constants";
import Link from "next/link";
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <section id='contact'>
      <Element name="contact" className="mx-4 max-w-6xl xl:mx-auto h-full py-10 xl:py-20">
        {/* <h1 className="underline underline-offset-[15px] text-3xl xl:text-5xl font-semibold">Contact</h1> */}
        <div className="mt-10 mb-5 xl:my-10 w-full">
          {/* <form 
            action="https://getform.io/f/5000378e-92d0-4d69-b901-7f61c304cb8a" 
            method='POST' 
            className="order-2 xl:order-1 col-span-12 xl:col-span-7 w-full text-slate-800 h-fit flex flex-col xl:grid xl:grid-cols-2 gap-3 mt-3"
          >
            <input type="hidden" name="_gotcha" style={{display: 'none',}} /> 
            <input type="text" name="fname" placeholder="First Name" className="border border-slate-800 h-fit rounded-[5px] px-3 py-1.5"/>
            <input type="text" name="lname" placeholder="Last Name" className="border border-slate-800 h-fit rounded-[5px] px-3 py-1.5"/>
            <input type="text" name="email" placeholder="Email" className="border border-slate-800 h-fit rounded-[5px] px-3 py-1.5"/>
            <input type="text" name="number" placeholder="Contact Number" className="border border-slate-800 h-fit rounded-[5px] px-3 py-1.5"/>
            <textarea name="message" className="border border-slate-800 rounded-[5px] px-3 py-1.5 col-span-2 h-48 xl:h-36 resize-none" placeholder="Message"/>
            <div className="col-span-2 font-bold rounded-[5px] bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500 from-sky-500 to-indigo-500  text-white text-2xl w-fit mx-auto">
              <button type="submit" className="w-full py-4 px-10 h-full xl:hover:scale-125 duration-300">Submit</button>
            </div>
          </form> */}
          <div className="text-center xl:text-start flex flex-col xl:flex-row xl:gap-20 xl:items-end font-semibold">
            <div className="flex flex-col">
              <h1 className="bg-gradient-to-r dark:from-violet-500 dark:to-fuchsia-500 from-sky-500 to-indigo-500 text-transparent text-6xl bg-clip-text leading-tight">
                Let's work together.
              </h1>
              <h2 className="text-3xl my-2 xl:text-5xl leading-tight">Hit me up!</h2>
              <h3 className="xl:text-2xl font-light pt-1.5">For inquiries and collaboration contact me through:</h3>
            </div>
  
            <ul className="py-3 xl:py-0 mx-auto xl:mx-0">
              {contacts.map((contact, index) => (
                <li key={index} className="flex gap-5 xl:text-xl py-1 ml-2 xl:ml-0 items-center font-light">
                  <span>{contact.icon}</span>
                  {contact.name === "email" ? 
                    <Link href={`mailto:${contact.display}`} target="_blank">
                      {contact.display}
                    </Link>
                  :
                  contact.name === 'messenger' ?
                    <Link href="https://m.me/yanzxcasdqwe" target="_blank">
                      {contact.display}
                    </Link>
                  :
                    <span>{contact.display}</span>
                  }
                </li>  
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  )
}

export default Contact;