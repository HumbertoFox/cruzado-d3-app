'use client';

import { useState } from 'react';

export default function RunesCondemnComponent() {
    const [isRunesCondemn, setIsRunesCondemn] = useState<boolean>(false);

    function toggleRunesCondemn() {
        setIsRunesCondemn(!isRunesCondemn);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesCondemn ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesCondemn}
            >
                <span>{isRunesCondemn ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesCondemn ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Vácuo</span>
                        <span className='italic'>Requer Level <strong>26</strong></span>
                        <p>
                            Conforme a explosão acumula energia, ela atrai os inimigos. Quanto mais perto de explodir, mais inimigos ela atrai.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Desenfreado</span>
                        <span className='italic'>Requer Level <strong>33</strong></span>
                        <p>
                            A explosão agora detona instantaneamente.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Retaliação Eterna</span>
                        <span className='italic'>Requer Level <strong>38</strong></span>
                        <p>
                            Reduz a recarga em<span className='text-green-500'> 1 </span>segundo para cada inimigo atingido pela explosão.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Explosão Estilhaçante</span>
                        <span className='italic'>Requer Level <strong>47</strong></span>
                        <p>
                            O raio do dano aumenta para<span className='text-green-500'> 20 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Retaliar</span>
                        <span className='italic'>Requer Level <strong>56</strong></span>
                        <p>
                            <span className='text-green-500'>50% do </span>dano recebido enquanto a explosão está acumulando é adicionado ao dano da explosão.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}