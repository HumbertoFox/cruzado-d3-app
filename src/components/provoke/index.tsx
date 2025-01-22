import { useState } from 'react';

export default function RunesProvokeComponent() {
    const [isRunesProvoke, setIsRunesProvoke] = useState<boolean>(false);

    function toggleRunesProvoke() {
        setIsRunesProvoke(!isRunesProvoke);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesProvoke ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesProvoke}
            >
                <span>{isRunesProvoke ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesProvoke ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Purificar</span>
                        <span className='italic'>Requer Level <strong>15</strong></span>
                        <p>
                            Para cada inimigo provocado com sucesso, você recebe um adicional de<span className='text-green-500'> 1073 </span>
                            de Vida por Acerto por<span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fuja Tolo</span>
                        <span className='italic'>Requer Level <strong>23</strong></span>
                        <p>
                            Provocar não atrai mais os inimigos, mas os faz correr com Medo por<span className='text-green-500'> 8 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Assustado Demais para Correr</span>
                        <span className='italic'>Requer Level <strong>32</strong></span>
                        <p>
                            A velocidade de ataque dos inimigos provocados é reduzida em<span className='text-green-500'> 50% </span>
                            e a de movimento é reduzida em<span className='text-green-500'> 80% </span>
                            por<span className='text-green-500'> 4 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Carregado</span>
                        <span className='italic'>Requer Level <strong>40</strong></span>
                        <p>
                            Por<span className='text-green-500'> 4 </span>segundos após lançar Provocar, qualquer dano causado por você também causará dano Elétrico equivalente a
                            <span className='text-green-500'> 50% </span>do dano de arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Acerte-me</span>
                        <span className='italic'>Requer Level <strong>50</strong></span>
                        <p>
                            Recebe<span className='text-green-500'> 50% </span>de aumento de Chance de Bloqueio por
                            <span className='text-green-500'> 4 </span>segundos após lançar Provocar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}