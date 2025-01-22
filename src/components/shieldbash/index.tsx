'use client';

import { useState } from 'react';

export default function RunesShieldBashComponent() {
    const [isRunesShieldBash, setIsRunesShieldBash] = useState<boolean>(false);

    function toggleRunesShieldBash() {
        setIsRunesShieldBash(!isRunesShieldBash);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesShieldBash ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesShieldBash}
            >
                <span>{isRunesShieldBash ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesShieldBash ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Escudo Estilhaçado</span>
                        <span className='italic'>Requer Level <strong>7</strong></span>
                        <p>
                            O escudo se estilhaça em fragmentos menores, atingindo mais inimigos. Os inimigos atingidos adicionais recebem
                            <span className='text-green-500'> 740% </span>do dano de arma mais dano equivalente a<span className='text-green-500'> 335% </span>
                            da Chance de Bloqueio do seu escudo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Um contra Um</span>
                        <span className='italic'>Requer Level <strong>15</strong></span>
                        <p>
                            Atordoa o monstro alvejado por<span className='text-green-500'> 1,5 </span>segundos. Repele todos os outros monstros atingidos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Cruz do Escudo</span>
                        <span className='italic'>Requer Level <strong>27</strong></span>
                        <p>
                            Escudos adicionais irrompem de você em forma de cruz. Os inimigos atingidos por esses escudos adicionais receberão
                            <span className='text-green-500'> 155% </span>do dano de arma mais dano equivalente a<span className='text-green-500'> 100% </span>
                            da Chance de Bloqueio do seu escudo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Desmoronar</span>
                        <span className='italic'>Requer Level <strong>39</strong></span>
                        <p>
                            Aumenta em<span className='text-green-500'> 875% </span>o dano de arma de Esmagamento com Escudo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Pancada</span>
                        <span className='italic'>Requer Level <strong>53</strong></span>
                        <p>
                            Esmagamento com Escudo agora causa<span className='text-green-500'> 1320% </span>
                            do dano de arma e<span className='text-green-500'> 500% </span>
                            da Chance de bloqueio do escudo como dano. O alcance é reduzido para<span className='text-green-500'> 8 </span>metros.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}