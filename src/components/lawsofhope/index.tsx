'use client';

import { useState } from 'react';

export default function RunesLawsofHopeComponent() {
    const [isRunesLawsofHope, setIsRunesLawsofHope] = useState<boolean>(false);

    function toggleRunesLawsofHope() {
        setIsRunesLawsofHope(!isRunesLawsofHope);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesLawsofHope ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesLawsofHope}
            >
                <span>{isRunesLawsofHope ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesLawsofHope ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Asas dos Anjos</span>
                        <span className='italic'>Requer Nível <strong>31</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também aumenta em<span className='text-green-500'> 50% </span>
                            sua velocidade de movimento e a de seus aliados e permite que os afetados atravessem os inimigos livremente.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Esperança Eterna</span>
                        <span className='italic'>Requer Nível <strong>34</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também aumenta a sua Vida máxima e a de seus aliados em<span className='text-green-500'> 10%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Grito Esperançoso</span>
                        <span className='italic'>Requer Nível <strong>40</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também reduz todo o dano Físico recebido em<span className='text-green-500'> 25%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Recompensa da Fé</span>
                        <span className='italic'>Requer Nível <strong>48</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também faz com que você e seus aliados recebam<span className='text-green-500'> 1073 </span>
                            de Vida para cada ponto de Ira gasto por você.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Promessa de Fé</span>
                        <span className='italic'>Requer Nível <strong>58</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei reduz em<span className='text-green-500'> 25% </span>todo o dano não Físico recebido.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}