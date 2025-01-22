'use client';

import { useState } from 'react';

export default function RunesSmiteComponent() {
    const [isRunesSmite, setIsRunesSmite] = useState<boolean>(false);

    function toggleRunesSmite() {
        setIsRunesSmite(!isRunesSmite);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesSmite ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesSmite}
            >
                <span>{isRunesSmite ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesSmite ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Estilhaçar</span>
                        <span className='italic'>Requer Nível <strong>14</strong></span>
                        <p>
                            As correntes sagradas explodem, causando dano Sagrado equivalente a<span className='text-green-500'> 60% </span>
                            do dano de arma aos inimigos em um raio de<span className='text-green-500'> 3 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Agrilhoar</span>
                        <span className='italic'>Requer Nível <strong>20</strong></span>
                        <p>
                            Inimigos atingidos pelas correntes têm<span className='text-green-500'> 20% </span>
                            de chance de ficarem Imobilizados por<span className='text-green-500'> 1 </span>segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Surto</span>
                        <span className='italic'>Requer Nível <strong>37</strong></span>
                        <p>
                            Aumenta o número de inimigos adicionais atingidos para<span className='text-green-500'> 5</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Ceifador</span>
                        <span className='italic'>Requer Nível <strong>51</strong></span>
                        <p>
                            Recebe<span className='text-green-500'> 6437 </span>de regeneração de Vida por
                            <span className='text-green-500'> 2 </span>segundos para cada inimigo atingido pelas correntes. Este efeito pode acumular até
                            <span className='text-green-500'> 4 </span>vezes.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Destino Compartilhado</span>
                        <span className='italic'>Requer Nível <strong>57</strong></span>
                        <p>
                            As correntes prendem os que forem atingidos, fazendo com que compartilhem o mesmo destino. Inimigos que compartilham o destino ficam atordoados por
                            <span className='text-green-500'> 2 </span>segundos se ficarem a mais de<span className='text-green-500'> 15 </span>metros de distância um do outro.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}