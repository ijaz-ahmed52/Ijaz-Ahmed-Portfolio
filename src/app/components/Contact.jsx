
const Contact = () => {
    return(
        <div id="contact" className="bg-[#0F172A] text-white px-6 md:px-16 py-16">
            <h3 className="text-3xl md:text-5xl font-bold text-[#38BDF8] mb-12 text-center">Contact Me</h3>
            <p className=" text-gray-300 text-center max-w-2xl mx-auto mb-12">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities and ideas.</p>
           <div className="flex flex-col md:flex-row gap-10 items-center">
             <div className="flex-1 space-y-6   rounded-2xl p-3">
                <div className="bg-[#1E293B] p-5 rounded-xl shadow-md hover:shadow-xl transition ">
                    <h3 className="text-[#38BDF8] font-semibold text-lg">Email :</h3>
                    <p className="text-gray-300">ijazahmed.builds@gmail.com</p>
                </div>
                <div className="bg-[#1E293B] p-5 rounded-xl shadow-md hover:shadow-xl transition ">
                    <h3 className="text-[#38BDF8] font-semibold text-lg">GitHub :</h3>
                    <p className="text-gray-300">ijaz-ahmed52</p>
                </div>
                <div className="bg-[#1E293B] p-5 rounded-xl shadow-md hover:shadow-xl transition ">
                    <h3 className="text-[#38BDF8] font-semibold text-lg">Linkdin</h3>
                    <p className="text-gray-300">Ijaz Ahmed</p>
                </div>
            </div>
            <div className="flex-1 space-y-4">
                <form className="border border-gray-500 rounded-2xl p-3">
                    <div>
                        <label className="text-sm text-gray-300 mb-1 block" htmlFor="name">Name : </label>
                        <input className="border w-full border-gray-700 p-3 bg-[#1E293B] text-white rounded-lg focus:border-[#38BDF8] outline-none" type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-300 mb-1 block" htmlFor="email">Email : </label>
                        <input  className="border w-full border-gray-700 p-3 bg-[#1E293B] text-white rounded-lg focus:border-[#38BDF8] outline-none" type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-300 mb-1 block" htmlFor="text">Message : </label>
                        <textarea className="h-20 w-full border border-gray-700 bg-[#1E293B] focus:border-[#38BDF8] outline-none rounded-lg p-2 resize-none" id="text"></textarea>
                    </div>
                    <button className="bg-[#38BDF8] w-full text-black px-6 py-3 rounded-lg text-center font-semibold hover:bg-[#0EA5E9] transition hover:scale-102">Send</button>

                </form>
            </div>
           </div>
        </div>
    )
}
export default Contact