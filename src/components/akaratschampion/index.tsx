'use client';

import { useState } from 'react';

export default function RunesAkaratsChampionComponent() {
    const [isRunesAkaratsChampion, setIsRunesAkaratsChampion] = useState<boolean>(false);

    function toggleRunesAkaratsChampion() {
        setIsRunesAkaratsChampion(!isRunesAkaratsChampion);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesAkaratsChampion ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesAkaratsChampion}
            >
                <span>{isRunesAkaratsChampion ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesAkaratsChampion ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Incendiário</span>
                        <span className='italic'>Requer Level <strong>29</strong></span>
                        <p>
                            Causar dano queima os inimigos com o poder de Akarat, causando<span className='text-green-500'> 460% </span>
                            de dano de arma como dano Ígneo ao longo de<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Encarnação do Poder</span>
                        <span className='italic'>Requer Level <strong>34</strong></span>
                        <p>
                            Aumenta o bônus de regeneração de Ira de Campeão de Akarat para<span className='text-green-500'> 10</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Reagrupar</span>
                        <span className='italic'>Requer Level <strong>42</strong></span>
                        <p>
                            Usar Campeão de Akarat reduz a recarga restante de suas outras habilidades em<span className='text-green-500'> 12 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Profeta</span>
                        <span className='italic'>Requer Level <strong>49</strong></span>
                        <p>
                            Você ganhará<span className='text-green-500'> 150% </span>de Armadura adicional enquanto Campeão de Akarat estiver ativo.
                            Na primeira vez que você receber dano fatal enquanto Campeão de Akarat estiver ativo, sua vida voltará ao máximo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Acelerado</span>
                        <span className='italic'>Requer Level <strong>58</strong></span>
                        <p>
                            Você ganhará<span className='text-green-500'> 15% </span>de aumento na velocidade de ataque enquanto Campeão de Akarat estiver ativo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}