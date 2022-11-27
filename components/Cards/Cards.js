import cardList from "./CardData";

export default function Cards(){
    return(
        <div className="container mx-auto py-20 px-10 xl:px-10">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-10">
            {cardList.map(card =>(
                
                <div className="shadow-[0_15px_35px_-5px_rgba(0,0,0,0.2)] p-5 rounded-2xl cursor-pointer" key={card.id}>
                <a className="flex flex-col justify-between h-full" href={card.link}>
                    <div>
                        <div className="h-20 w-20 border-black-700 rounded-2xl border-solid border pt-6 pb-15 px-2">
                        <img src={card.img}/>
                        </div>
                        <h1 className="text-xl py-2">{card.title}</h1>
                        <p>{card.text}</p>
                    </div><br/>
                    <div className="flex inline border-t-2">
                        <img src={card.img1}/>
                        <p>Discount on subscription plans</p>
                    </div>
                    </a>   
                </div>
                
            ))}
        
            </div>
        </div>
    )
}