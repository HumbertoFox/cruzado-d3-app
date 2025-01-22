'use client';

import { useState } from 'react';

export default function RunesShieldGlareComponent() {
    const [isRunesShieldGlare, setIsRunesShieldGlare] = useState<boolean>(false);

    function toggleRunesShieldGlare() {
        setIsRunesShieldGlare(!isRunesShieldGlare);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesShieldGlare ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesShieldGlare}
            >
                <span>{isRunesShieldGlare ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesShieldGlare ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Veredito Divino</span>
                        <span className='italic'>Requer Nível <strong>12</strong></span>
                        <p>
                            Inimigos cegados recebem<span className='text-green-500'> 20% </span>a mais de dano por
                            <span className='text-green-500'> 4 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Incerteza</span>
                        <span className='italic'>Requer Nível <strong>18</strong></span>
                        <p>
                            Inimigos pegos pelo brilho tem<span className='text-green-500'> 50% </span>
                            de chance de serem enfeitiçados e lutarem ao seu lado por<span className='text-green-500'> 8 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Olhar Zeloso</span>
                        <span className='italic'>Requer Nível <strong>28</strong></span>
                        <p>
                            Recebe<span className='text-green-500'> 9 </span>de Ira por cada inimigo cegado.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Escudo com Brasão</span>
                        <span className='italic'>Requer Nível <strong>41</strong></span>
                        <p>
                            Inimigos com Vida abaixo de<span className='text-green-500'> 25% </span>têm<span className='text-green-500'> 50% </span>
                            de chance de explodir quando Cegados, causando<span className='text-green-500'> 60% </span>
                            do dano de arma aos inimigos em um raio de<span className='text-green-500'> 8 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Subjugar</span>
                        <span className='italic'>Requer Nível <strong>51</strong></span>
                        <p>
                            Os inimigos atingidos pelo clarão são desacelerados em<span className='text-green-500'> 80% </span>por
                            <span className='text-green-500'> 6 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}