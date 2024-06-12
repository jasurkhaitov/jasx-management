import { ContactLink } from "@/utilits/Icon";

export default function Footer() {
  return (
    <footer className="dark:bg-[#1F2937] shadow-md bg-[#F3F4F6] w-full border-black border-t-[0.5px] dark:border-white border-opacity-20 z-50">
        <div className="flex 2xl:w-[1500px] items-center justify-between m-auto px-[15px] md:px-[30px] py-4 md:py-5">
            <p className="dark:text-gray-400 text-black">© 2023 JasX. All right reserved</p>

            <ul className="hidden sm:flex items-center justify-end gap-7">
                {
                    ContactLink.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <a href={item.url}>{item.svg}</a>
                            </li>        
                        )
                    })
                }
            </ul>
        </div>
    </footer>
  )
}