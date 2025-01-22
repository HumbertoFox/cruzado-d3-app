'use client';

import { useState } from 'react';

export default function RunesSweepAttackComponent() {
    const [isRunesSweepAttack, setIsRunesSweepAttack] = useState<boolean>(false);

    function toggleRunesSweepAttack() {
        setIsRunesSweepAttack(!isRunesSweepAttack);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesSweepAttack ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesSweepAttack}
            >
                <span>{isRunesSweepAttack ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesSweepAttack ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Golpe Flamejante</span>
                        <span className='italic'>Requer Nível <strong>11</strong></span>
                        <p>
                            Inimigos atingidos pelo ataque pegarão fogo, recebendo<span className='text-green-500'> 120% </span>
                            de dano de arma ao longo de<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Rasteira</span>
                        <span className='italic'>Requer Nível <strong>19</strong></span>
                        <p>
                            Inimigos atingidos pelo ataque têm 50% de chance de tropeçar, atordoando-os por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Choque Sagrado</span>
                        <span className='italic'>Requer Nível <strong>33</strong></span>
                        <p>
                            Cura<span className='text-green-500'> 5364 </span>da sua Vida para cada inimigo atingido.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Golpe Coletor</span>
                        <span className='italic'>Requer Nível <strong>45</strong></span>
                        <p>
                            Inimigos pegos pelo golpe são arrastados na sua direção. O dano do Ataque Amplo se torna Sagrado.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Ataque Amplo Inspirador</span>
                        <span className='italic'>Requer Nível <strong>55</strong></span>
                        <p>
                            Ataque Amplo aumenta sua armadura em<span className='text-green-500'> 20% </span>por<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}