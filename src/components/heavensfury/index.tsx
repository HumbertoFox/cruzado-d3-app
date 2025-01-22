'use client';

import { useState } from 'react';

export default function RunesHeavensFuryComponent() {
    const [isRunesHeavensFury, setIsRunesHeavensFury] = useState<boolean>(false);

    function toggleRunesHeavensFury() {
        setIsRunesHeavensFury(!isRunesHeavensFury);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesHeavensFury ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesHeavensFury}
            >
                <span>{isRunesHeavensFury ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesHeavensFury ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Solo Abençoado</span>
                        <span className='italic'>Requer Level <strong>31</strong></span>
                        <p>
                            O chão tocado pelo raio se torna abençoado, queimando e causando<span className='text-green-500'> 1550% </span>
                            do dano de arma ao longo de<span className='text-green-500'> 5 </span>segundos aos inimigos que passarem sobre ele.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Ascendência</span>
                        <span className='italic'>Requer Level <strong>36</strong></span>
                        <p>
                            O raio aumenta para<span className='text-green-500'> 12 </span>metros, causando dano Sagrado equivalente a
                            <span className='text-green-500'> 2766% </span>do dano de arma ao longo de
                            <span className='text-green-500'> 6 </span>segundos a todos os inimigos atingidos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fúria Fendida</span>
                        <span className='italic'>Requer Level <strong>44</strong></span>
                        <p>
                            O raio se divide em<span className='text-green-500'> 3 </span>raios diferentes, cada um causando dano Sagrado equivalente a
                            <span className='text-green-500'> 1980% </span>
                            do dano de arma ao longo de<span className='text-green-500'> 6 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Tu Não Passarás</span>
                        <span className='italic'>Requer Level <strong>52</strong></span>
                        <p>
                            O chão tocado pelo raio emana poder por<span className='text-green-500'> 6 </span>
                            segundos, impedindo inimigos de passarem por ele.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fogo dos Céus</span>
                        <span className='italic'>Requer Level <strong>62</strong></span>
                        <p>
                            Evoca um raio furioso de poder Sagrado que concentrado por você em uma reta, causando<span className='text-green-500'> 960% </span>
                            de dano de arma como dano Sagrado a todos os inimigos. A recarga é removida. Agora custa
                            <span className='text-green-500'> 40 </span>de Ira.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}