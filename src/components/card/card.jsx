import { Button } from "../ui/button"

export default function CardPlano() {

    const cards = [
        {
            id: 1,
            titulo: "IoT a base de IA",
            descricao: "Descubra como conectar dispositivos inteligentes usando inteligência artificial.",
            preco: "R$250/mês",
            img: "ia.png",
        },
        {
            id: 2,
            titulo: "Engenharia de Prompt",
            descricao: "Domine a arte de criar prompts que extraem o máximo das IAs generativas.",
            preco: "R$200/mês",
            img: "ia.png",
        },
        {
            id: 3,
            titulo: "Automação com IA",
            descricao: "Aprenda a automatizar processos e tarefas repetitivas com modelos inteligentes.",
            preco: "R$350/mês",
            img: "ia.png",
        },
        {
            id: 4,
            titulo: "Chatbots Inteligentes",
            descricao: "Construa chatbots avançados capazes de entender e conversar naturalmente.",
            preco: "R$280/mês",
            img: "ia.png",
        },
        {
            id: 5,
            titulo: "Análise de Dados com IA",
            descricao: "Transforme grandes volumes de dados em insights valiosos usando aprendizado de máquina.",
            preco: "R$320/mês",
            img: "ia.png",
        },
        {
            id: 6,
            titulo: "Visão Computacional",
            descricao: "Explore como treinar modelos para reconhecer imagens, rostos e objetos.",
            preco: "R$400/mês",
            img: "ia.png",
        },
        {
            id: 7,
            titulo: "Processamento de Linguagem",
            descricao: "Entenda como funcionam os modelos que analisam e geram texto em linguagem natural.",
            preco: "R$270/mês",
            img: "ia.png",
        },
        {
            id: 8,
            titulo: "Machine Learning na Prática",
            descricao: "Aprenda técnicas práticas de ML para resolver problemas do mundo real.",
            preco: "R$330/mês",
            img: "ia.png",
        },
        {
            id: 9,
            titulo: "Deep Learning Avançado",
            descricao: "Domine arquiteturas neurais avançadas e aplique-as em projetos inovadores.",
            preco: "R$450/mês",
            img: "ia.png",
        },
    ];

    return (
        <>
            <main>

                <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mx-auto">
                    {cards.map((card) => (                        
                        <div key={card.id} className="text-center flex p-4 bg-zinc-100 dark:bg-zinc-900 rounded-2xl  flex-row-reverse mx-auto">
                            <div className="flex flex-col lg:flex-row-reverse">
                                <div className="flex flex-col justify-center items-center">
                                    <img src={card.img} alt={card.titulo} className="lg:hidden mx-auto mb-4 rounded-full w-50 lg:w-80" />
                                    <h1 className="text-sm lg:text-2xl font-bold uppercase">{card.titulo}</h1>
                                    <p className="text-sm lg:text-lg font-bold mt-1 underline ">{card.preco}</p>
                                    <p className="text-sm lg:text-lg py-3 lg:py-10">{card.descricao}</p>
                                    <Button className="hidden lg:block w-40 bg-emerald-700 font-bold dark:text-white hover:bg-emerald-700/40">Adquirir</Button>
                                </div>
                                <div className="m-auto flex flex-col items-center ">

                                    <div className="flex flex-col">
                                        <img src={card.img} alt={card.titulo} className="hidden lg:block mx-auto mb-4 rounded-full w-50 lg:w-80" />
                                        <Button className="lg:hidden mt-5 w-50 bg-emerald-700 hover:bg-emerald-700/40   ">Adquirir</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}