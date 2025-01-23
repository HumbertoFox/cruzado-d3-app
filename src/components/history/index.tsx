'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef,
    useState
} from 'react';

export default function HistoryComponent() {
    const [isToggleMale, setIsToggleMale] = useState<boolean>(true);
    const historySectionRef = useRef(null);
    const historyTitleRef = useRef(null);
    const historySubTitleRef = useRef(null);
    const historySubText0Ref = useRef(null);
    const historySubText1Ref = useRef(null);
    const historySubText2Ref = useRef(null);
    const historySubText3Ref = useRef(null);
    const historyImgRef = useRef(null);
    const historyTitleMediaRef = useRef(null);
    const historyVideoRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const historySection = historySectionRef.current;
        const historyTitle = historyTitleRef.current;
        const historySubTitle = historySubTitleRef.current;
        const historyText0 = historySubText0Ref.current;
        const historyText1 = historySubText1Ref.current;
        const historyText2 = historySubText2Ref.current;
        const historyText3 = historySubText3Ref.current;
        const historyImg = historyImgRef.current;
        const historySubTitleMedia = historyTitleMediaRef.current;
        const historyVideo = historyVideoRef.current;

        gsap.fromTo(historyTitle, {
            opacity: 0,
            y: 300
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historySubTitle, {
            opacity: 0,
            y: -300
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyText0, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyText1, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyText2, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyText3, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 2,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyImg, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: historySection,
                start: 'top center'
            }
        });
        gsap.fromTo(historySubTitleMedia, {
            opacity: 0,
            y: -300
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: historySection,
                start: 'top 70%'
            }
        });
        gsap.fromTo(historyVideo, {
            opacity: 0,
            scale: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: historySection,
                start: 'top center'
            }
        });
    }, []);
    return (
        <section
            className='w-full min-h-screen flex flex-col items-center pt-24'
            id='history'
            ref={historySectionRef}
        >
            <h2
                className='font-serif font-bold italic text-lg md:text-xl pb-12 lg:pb-0 opacity-0'
                ref={historyTitleRef}
            >
                Histórico
            </h2>
            <div className='w-full flex flex-col-reverse lg:flex-row p-3'>
                <div className='w-full lg:w-2/5 flex flex-col justify-evenly'>
                    <h3
                        className='font-serif italic text-base md:text-lg text-center opacity-0'
                        ref={historyTitleMediaRef}
                    >
                        &quot;Vídeo&quot;
                    </h3>
                    <video
                        className='opacity-0'
                        src='https://assets.diablo3.blizzard.com/d3/media/videos/crusader-overview/D3x1-CrusaderGuide_ptBR.mp4'
                        controls
                        ref={historyVideoRef}
                    />
                </div>
                <div className='flex flex-col items-center text-center '>
                    <div
                        className='relative w-[140px] h-[72px]'
                    >
                        <button
                            className='absolute top-0 left-0 w-[70px] h-[72px] bg-[url("/assets/model-toggler.png")] bg-left-top cursor-pointer'
                            type='button'
                            title='Cruzado'
                            onClick={() => setIsToggleMale(true)}
                        >
                            <span className={`absolute top-0 left-0 w-[70px] h-[72px] bg-[url("/assets/model-toggler.png")] ${isToggleMale ? 'bg-left-bottom' : 'bg-left-top'} ${isToggleMale ? '' : 'hover:bg-left'} cursor-pointer`} />
                        </button>
                        <button
                            className='absolute top-0 right-0 w-[70px] h-[72px] bg-[url("/assets/model-toggler.png")] bg-right-top cursor-pointer'
                            type='button'
                            title='Cruzada'
                            onClick={() => setIsToggleMale(false)}
                        >
                            <span className={`absolute top-0 right-0 w-[70px] h-[72px] bg-[url("/assets/model-toggler.png")] ${isToggleMale ? 'bg-right-top' : 'bg-right-bottom'} ${!isToggleMale ? '' : ' hover:bg-right'} cursor-pointer`} />
                        </button>
                    </div>
                    <div className='w-80 bg-[url(/assets/model-bg.jpg)] bg-contain bg-center'>
                        <Image
                            className='w-full h-auto opacity-0'
                            src={isToggleMale ? '/assets/model-male.jpg' : '/assets/model-female.jpg'}
                            alt='Imagem Cruzado'
                            width={300}
                            height={370}
                            ref={historyImgRef}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-2/5 flex flex-col gap-4'>
                    <h4
                        className='font-serif italic text-base md:text-lg text-center opacity-0'
                        ref={historySubTitleRef}
                    >
                        &quot;A Cruzada me chama, e portanto eu vou&quot;
                    </h4>
                    <p
                        className='font-mono text-sm md:text-base opacity-0'
                        ref={historySubText0Ref}
                    >
                        Os líderes da harmoniosa religião Zakarum outrora lutaram para manter Mefisto,
                        o Senhor do Ódio, aprisionado sob o templo de Travincal,
                        para impedi-lo de perverter os corações da humanidade de novo.
                    </p>
                    <p
                        className='font-mono text-sm md:text-base opacity-0'
                        ref={historySubText1Ref}
                    >
                        Eles fracassaram.
                    </p>
                    <p
                        className='font-mono text-sm md:text-base opacity-0'
                        ref={historySubText2Ref}
                    >
                        Não foi a primeira vez que Zakarum fraquejou:
                        200 anos antes, o clérigo Akkhan percebeu a corrupção no coração da sua fé,
                        e enviou seus acólitos em uma missão aos confins do mundo para purificá-la.
                        Os “cruzados” de Akkhan eram apenas jovem recrutas,
                        escolhidos pela sua honra e bondade.
                        Treinados em armamentos e magias capazes de arrancar a carne dos ossos,
                        sua maior qualidade era sua devoção resoluta ao dever.
                    </p>
                    <p
                        className='font-mono text-sm md:text-base opacity-0'
                        ref={historySubText3Ref}
                    >
                        Hoje, a missão dos cruzados em busca da pureza teve seus horizontes ampliados.
                        Frágeis “prisões” dão ao mal muitas oportunidades de perseverar,
                        e cruzados errantes – muitas vezes pares de aluno e mestre
                        – derrotam demônios em Santuário com frequência.
                        Alguns pela integridade;
                        outros na esperança de que suas vitórias tornem a corrupta Zakarum íntegra outra vez.
                        Quando um dos mestres morre, o aluno toma suas armas e a sua identidade...
                        e a Cruzada continua, mesmo além da morte.
                    </p>
                </div>
            </div>
        </section>
    );
}