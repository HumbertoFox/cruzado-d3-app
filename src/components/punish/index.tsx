'use client';

import { useState } from 'react';

export default function RunesPunishComponent() {
    const [isRunesPunish, setIsRunesPunish] = useState<boolean>(false);

    function toggleRunesPunish() {
        setIsRunesPunish(!isRunesPunish);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesPunish ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesPunish}
            >
                <span>{isRunesPunish ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesPunish ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Rugidor</span>
                        <span className='italic'>Requer Nível <strong>6</strong></span>
                        <p>
                            Ao bloquear com Sentidos Fortalecidos ativo, você explode em fúria, causando
                            <span className='text-green-500'> 75% </span> do dano da arma aos inimigos em um raio de
                            <span className='text-green-500'> 15 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Celeridade</span>
                        <span className='italic'>Requer Nível <strong>17</strong></span>
                        <p>
                            Quando você bloqueia com Sentidos Fortalecidos ativos, você recebe
                            <span className='text-green-500'> 15% </span>de aumento de Velocidade de Ataque por<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Renascimento</span>
                        <span className='italic'>Requer Nível <strong>26</strong></span>
                        <p>
                            Quando você bloqueia com Sentidos Fortalecidos ativos, aumenta em
                            <span className='text-green-500'> 12.874 </span>sua regeneração de Vida por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Contra-ataque</span>
                        <span className='italic'>Requer Nível <strong>45</strong></span>
                        <p>
                            Ao bloquear com Sentidos Fortalecidos ativo, você causa dano Sagrado equivalente a
                            <span className='text-green-500'> 140% </span>do dano de arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fúria</span>
                        <span className='italic'>Requer Nível <strong>52</strong></span>
                        <p>
                            Quando você bloqueia com Sentidos Fortalecidos ativos, recebe
                            <span className='text-green-500'> 15% </span>de aumento na Chance de Acerto Crítico no seu próximo ataque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}