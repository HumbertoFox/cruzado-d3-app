'use client';

import { useState } from 'react';

export default function RunesPhalanxComponent() {
    const [isRunesPhalanx, setIsRunesPhalanx] = useState<boolean>(false);

    function toggleRunesPhalanx() {
        setIsRunesPhalanx(!isRunesPhalanx);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesPhalanx ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesPhalanx}
            >
                <span>{isRunesPhalanx ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesPhalanx ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Vácuo</span>
                        <span className='italic'>Requer Nível <strong>30</strong></span>
                        <p>
                            Os avatares evocados não marcham mais adiante, mas portam arcos e atacam os inimigos, causando
                            <span className='text-green-500'> 185% </span>do dano de arma. Os arqueiros seguem você por
                            <span className='text-green-500'> 5 </span>segundos. Os arqueiros só podem ser evocados uma vez a cada 15 segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Desenfreado</span>
                        <span className='italic'>Requer Nível <strong>35</strong></span>
                        <p>
                            Os avatares evocados investem em direção ao alvo e realizam um esmagamento com escudo, causando mais
                            <span className='text-green-500'> 180% </span>do dano de arma ao inimigos no local.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Retaliação Eterna</span>
                        <span className='italic'>Requer Nível <strong>43</strong></span>
                        <p>
                            Evoca cavalos de guerra que causam<span className='text-green-500'> 490% </span>
                            do dano de arma, e têm<span className='text-green-500'> 30% </span>
                            de chance de Atordoar os inimigos por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Explosão Estilhaçante</span>
                        <span className='italic'>Requer Nível <strong>49</strong></span>
                        <p>
                            Os avatares não caminham mais para a frente. Ficam plantados no local em que foram evocados, bloqueando os inimigos que tentarem passar.
                            Os avatares só podem ser evocados uma vez a cada<span className='text-green-500'> 15 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Retaliar</span>
                        <span className='italic'>Requer Nível <strong>64</strong></span>
                        <p>
                            Em vez de mandar os Avatares para longe, você evoca<span className='text-green-500'> 2 </span>
                            Avatares da Ordem para proteger você, lutando ao seu lado por<span className='text-green-500'> 10 </span>
                            segundos. Cada Avatar causará dano Físico equivalente a<span className='text-green-500'> 560% </span>
                            do seu dano de arma. Os Avatares só podem ser evocados a cada<span className='text-green-500'> 30 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}