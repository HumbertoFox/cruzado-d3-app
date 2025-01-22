'use client';

import { useState } from 'react';

export default function RunesFallingSwordComponent() {
    const [isRunesFallingSword, setIsRunesFallingSword] = useState<boolean>(false);

    function toggleRunesFallingSword() {
        setIsRunesFallingSword(!isRunesFallingSword);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesFallingSword ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesFallingSword}
            >
                <span>{isRunesFallingSword ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesFallingSword ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Superaquecido</span>
                        <span className='italic'>Requer Nível <strong>24</strong></span>
                        <p>
                            A área onde você cai fica superaquecida por<span className='text-green-500'> 6 </span>
                            segundos, causando dano Ígneo equivalente a<span className='text-green-500'> 310% </span>
                            do dano de arma por segundo a todos os inimigos que passarem por ela.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Divisor de Nuvens</span>
                        <span className='italic'>Requer Nível <strong>28</strong></span>
                        <p>
                            Ao cair, você cria uma tempestade de relâmpagos que cobre a área em que você aterrissa por
                            <span className='text-green-500'> 5 </span>
                            segundos. Os inimigos sob a nuvem são atingidos por raios, o que causa dano Elétrico equivalente a
                            <span className='text-green-500'> 605% </span>
                            do dano de arma e os Atordoa por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Levantem-se Irmãos</span>
                        <span className='italic'>Requer Nível <strong>38</strong></span>
                        <p>
                            Você cai com tanta força que<span className='text-green-500'> 3 </span>
                            Avatares da Ordem são evocados para lutar ao seu lado por<span className='text-green-500'> 5 </span>
                            segundos. Cada Avatar ataca, causando dano Físico equivalente a<span className='text-green-500'> 280% </span>
                            do dano da sua arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Descida Rápida</span>
                        <span className='italic'>Requer Nível <strong>50</strong></span>
                        <p>
                            Reduz a recarga em<span className='text-green-500'> 1 </span>
                            segundo para cada inimigo atingido pela Espada Cadente. A recarga não pode ser reduzida a menos de
                            <span className='text-green-500'> 10 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Frêmito</span>
                        <span className='italic'>Requer Nível <strong>56</strong></span>
                        <p>
                            Um turbilhão de espadas é evocado na área de impacto, causando<span className='text-green-500'> 230% </span>
                            do dano de arma como dano Sagrado aos inimigos atingidos, arremessando-os e incapacitando-os por
                            <span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}