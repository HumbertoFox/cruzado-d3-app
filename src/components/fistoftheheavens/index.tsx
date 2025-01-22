'use client';

import { useState } from 'react';

export default function RunesFistoftheHeavensComponent() {
    const [isRunesFistoftheHeavens, setIsRunesFistoftheHeavens] = useState<boolean>(false);

    function toggleRunesFistoftheHeavens() {
        setIsRunesFistoftheHeavens(!isRunesFistoftheHeavens);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesFistoftheHeavens ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesFistoftheHeavens}
            >
                <span>{isRunesFistoftheHeavens ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesFistoftheHeavens ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fonte Divina</span>
                        <span className='italic'>Requer Nível <strong>32</strong></span>
                        <p>
                            As setas sagradas crepitam com raios sagrados e acertam inimigos em um raio de<span className='text-green-500'> 18 </span>
                            metros enquanto voam, causando dano Sagrado equivalente a<span className='text-green-500'> 40% </span>do dano de arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Tempestade do Paraíso</span>
                        <span className='italic'>Requer Nível <strong>36</strong></span>
                        <p>
                            Evoca uma tempestade de fogo que cobre um raio de<span className='text-green-500'> 8 </span>metros por<span className='text-green-500'> 5 </span>
                            segundos, causando<span className='text-green-500'> 100% </span>de dano de arma como dano Ígneo a cada segundo aos inimigos que passarem sob ela.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fissura</span>
                        <span className='italic'>Requer Nível <strong>42</strong></span>
                        <p>
                            Cria uma fissura elétrica que causa dano Elétrico equivalente a<span className='text-green-500'> 410% </span>
                            do dano de arma aos inimigos próximos ao longo de<span className='text-green-500'> 5 </span>
                            segundos. Se ocorrer outra fissura próxima, um raio se forma entre elas, causando um adicional de dano Elétrico equivalente a
                            <span className='text-green-500'> 135% </span>do dano de arma por raio.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Reverberação</span>
                        <span className='italic'>Requer Nível <strong>47</strong></span>
                        <p>
                            O raio detona com uma onda de choque na área de impacto, fazendo com que todos os inimigos atingidos sejam repelidos e tenham o movimento reduzido em
                            <span className='text-green-500'> 80% </span>por<span className='text-green-500'> 4 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Retribuição</span>
                        <span className='italic'>Requer Nível <strong>54</strong></span>
                        <p>
                            Lança um punho de poder Sagrado que atravessa os inimigos, causa dano Sagrado equivalente a<span className='text-green-500'> 270% </span>
                            do dano de arma e explode no alvo, causando dano Sagrado equivalente a<span className='text-green-500'> 435% </span>
                            do dano de arma aos inimigos em um raio de<span className='text-green-500'> 8 </span>
                            metros. A explosão cria<span className='text-green-500'> 6 </span>
                            raios perfurantes que se espalham, causando<span className='text-green-500'> 185% </span>
                            do dano de arma como dano Sagrado aos inimigos que atravessam.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}