'use client';

import { useState } from 'react';

export default function RunesLawsofValorComponent() {
    const [isRunesLawsofValor, setIsRunesLawsofValor] = useState<boolean>(false);

    function toggleRunesLawsofValor() {
        setIsRunesLawsofValor(!isRunesLawsofValor);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesLawsofValor ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesLawsofValor}
            >
                <span>{isRunesLawsofValor ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesLawsofValor ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Invencível</span>
                        <span className='italic'>Requer Nível <strong>21</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também aumenta sua Vida por Acerto em<span className='text-green-500'> 21.457</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Paralisado de Medo</span>
                        <span className='italic'>Requer Nível <strong>25</strong></span>
                        <p>
                            Ativa: Fortalecer a lei também concede<span className='text-green-500'> 100% </span>de chance de Atordoar os inimigos em um raio de
                            <span className='text-green-500'> 10 </span>metros por<span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Crítico</span>
                        <span className='italic'>Requer Nível <strong>28</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também aumenta seu Dano de Acerto Crítico em<span className='text-green-500'> 50%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Força Implacável</span>
                        <span className='italic'>Requer Nível <strong>41</strong></span>
                        <p>
                            Ativa: Fortalecer a lei também reduz o custo de Ira de todas as habilidades em<span className='text-green-500'> 50% </span>
                            por<span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Prece Atendida</span>
                        <span className='italic'>Requer Nível <strong>51</strong></span>
                        <p>
                            Ativa: Enquanto a Lei está sendo fortalecida, cada inimigo abatido aumenta sua duração em
                            <span className='text-green-500'> 1 </span>segundo, até um máximo de<span className='text-green-500'> 10 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}