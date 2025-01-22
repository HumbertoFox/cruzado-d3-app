'use client';

import { useState } from 'react';

export default function RunesSlashComponent() {
    const [isRunesSlash, setIsRunesSlash] = useState<boolean>(false);

    function toggleRunesSlash() {
        setIsRunesSlash(!isRunesSlash);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesSlash ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesSlash}
            >
                <span>{isRunesSlash ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesSlash ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Eletrificar</span>
                        <span className='italic'>Requer Level <strong>9</strong></span>
                        <p>
                            O talho se torna elétrico e tem<span className='text-green-500'> 25% </span>
                            de chance de atordoar os inimigos por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Cutilar</span>
                        <span className='italic'>Requer Level <strong>18</strong></span>
                        <p>
                            Cutila uma área maior à sua frente, aumentando o número de inimigos atingidos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Quebrador</span>
                        <span className='italic'>Requer Level <strong>34</strong></span>
                        <p>
                            Talho aumenta em<span className='text-green-500'> 20% </span>a chance de acerto crítico.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Zeloso</span>
                        <span className='italic'>Requer Level <strong>47</strong></span>
                        <p>
                            Recebe<span className='text-green-500'> 1% </span>de aumento de Velocidade de ataque para cada inimigo acertado por
                            <span className='text-green-500'> 3 </span>segundos. Esse efeito acumula até<span className='text-green-500'> 10 </span>vezes.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Guarda</span>
                        <span className='italic'>Requer Level <strong>54</strong></span>
                        <p>
                            Recebe<span className='text-green-500'> 5% </span>de aumento de Armadura para cada inimigo atingido. Este efeito pode acumular até
                            <span className='text-green-500'> 5 </span>vezes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}