'use client';

import { useState } from 'react';

export default function RunesBlessedShieldComponent() {
    const [isRunesBlessedShield, setIsRunesBlessedShield] = useState<boolean>(false);

    function toggleRunesBlessedShield() {
        setIsRunesBlessedShield(!isRunesBlessedShield);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesBlessedShield ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesBlessedShield}
            >
                <span>{isRunesBlessedShield ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesBlessedShield ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Escudo Vertiginoso</span>
                        <span className='italic'>Requer Level <strong>24</strong></span>
                        <p>
                            O escudo fica carregado de eletricidade e tem<span className='text-green-500'> 25% </span>
                            de chance de atordoar o primeiro inimigo atingido por<span className='text-green-500'> 2 </span>
                            segundos. Cada inimigo atingido após o primeiro tem a chance de ficar Atordoado reduzida em<span className='text-green-500'> 5%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Incendiar</span>
                        <span className='italic'>Requer Level <strong>29</strong></span>
                        <p>
                            O escudo irrompe em chamas e tem<span className='text-green-500'> 33% </span>
                            de chance de explodir com o impacto, causando dano Ígneo equivalente a<span className='text-green-500'> 310% </span>
                            do dano da arma a todos os inimigos em um raio de<span className='text-green-500'> 10 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Égide Divina</span>
                        <span className='italic'>Requer Level <strong>38</strong></span>
                        <p>
                            Quando o escudo atinge um inimigo, sua Armadura aumenta em<span className='text-green-500'> 5% </span>
                            e sua regeneração de Vida em<span className='text-green-500'> 5% </span>por<span className='text-green-500'> 4 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Arremesso Esfacelante</span>
                        <span className='italic'>Requer Level <strong>44</strong></span>
                        <p>
                            Quando o escudo atinge um inimigo, ele se divide em<span className='text-green-500'> 3 </span>
                            fragmentos pequenos que ricocheteiam entre os inimigos próximos, causando<span className='text-green-500'> 170% </span>
                            do dano de arma como dano Sagrado a todos os inimigos atingidos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Escudo Perfurante</span>
                        <span className='italic'>Requer Level <strong>59</strong></span>
                        <p>
                            O escudo não ricocheteia, mas atravessa todos os inimigos, com<span className='text-green-500'>50% </span>de chance de repeli-los para longe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}