
export default function BlueButton(){

    const scrollToTop = () => {
        window.scrollTo(
            {
                top:0,
                behavior: 'smooth',
            }
        )
    };
    return(
        <div className="pb-10">
            <button type="button" className="flex inline bg-violet-700 px-7 py-2 rounded-3xl text-white mx-auto transition ease-in-out animate-bounce hover:animate-none hover:-translate-y-4"
            onClick={scrollToTop}>
                back to top&nbsp;&nbsp;
                <img src="/top.svg" alt="top"className="pt-2"/>

            </button>
        </div>
    )
}

