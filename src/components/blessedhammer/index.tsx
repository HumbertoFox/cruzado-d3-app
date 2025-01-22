'use client';

import { useState } from 'react';

export default function RunesBlessedHammerComponent() {
    const [isRunesBlessedHammer, setIsRunesBlessedHammer] = useState<boolean>(false);

    function toggleRunesBlessedHammer() {
        setIsRunesBlessedHammer(!isRunesBlessedHammer);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesBlessedHammer ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesBlessedHammer}
            >
                <span>{isRunesBlessedHammer ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesBlessedHammer ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Ira Flamejante</span>
                        <span className='italic'>Requer Nível <strong>18</strong></span>
                        <p>
                            O martelo é envolvido em fogo e tem<span className='text-green-500'> 25% </span>
                            de chance de queimar o chão por onde passa. Inimigos que passarem pelo chão queimado recebem dano Ígneo equivalente a
                            <span className='text-green-500'> 330% </span>do dano de arma por segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Relampejado</span>
                        <span className='italic'>Requer Nível <strong>22</strong></span>
                        <p>
                            O martelo é carregado com Eletricidade, que se propaga ocasionalmente entre você e o martelo enquanto gira no ar.
                            Inimigos atingidos pelo raio formado recebem dano Elétrico equivalente a<span className='text-green-500'> 60% </span>do dano de arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Sem Limite</span>
                        <span className='italic'>Requer Nível <strong>35</strong></span>
                        <p>
                            Aumenta o dano de Martelo Abençoado para dano Sagrado equivalente a<span className='text-green-500'> 640% </span>
                            do dano de arma e aumenta a área de efeito em<span className='text-green-500'> 20 </span>m.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Força Bruta</span>
                        <span className='italic'>Requer Nível <strong>48</strong></span>
                        <p>
                            O martelo Desacelera os inimigos pelos quais ele passa e tem<span className='text-green-500'> 35% </span>
                            de chance de explodir com o impacto, causando<span className='text-green-500'> 460% </span>
                            do dano de arma com dano Físico e atordoando os inimigos em um raio de<span className='text-green-500'> 6 </span>
                            metros por<span className='text-green-500'> 1 </span>segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Resistência</span>
                        <span className='italic'>Requer Nível <strong>57</strong></span>
                        <p>
                            O Martelo agora orbita você enquanto você se move.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}