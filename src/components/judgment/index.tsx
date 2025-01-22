'use client';

import { useState } from 'react';

export default function RunesJudgmentComponent() {
    const [isRunesJudgment, setIsRunesJudgment] = useState<boolean>(false);

    function toggleRunesJudgment() {
        setIsRunesJudgment(!isRunesJudgment);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesJudgment ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesJudgment}
            >
                <span>{isRunesJudgment ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesJudgment ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Penitência</span>
                        <span className='italic'>Requer Level <strong>27</strong></span>
                        <p>
                            Para cada inimigo julgado, você curará<span className='text-green-500'> 2682 </span>
                            da sua Vida por segundo ao longo de<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Veredito em Massa</span>
                        <span className='italic'>Requer Level <strong>31</strong></span>
                        <p>
                            Todos os inimigos são atraídos para o centro da área de julgamento.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Deliberação</span>
                        <span className='italic'>Requer Level <strong>37</strong></span>
                        <p>
                            Aumenta a duração da Imobilização para<span className='text-green-500'> 10 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Determinado</span>
                        <span className='italic'>Requer Level <strong>43</strong></span>
                        <p>
                            Dano causado aos inimigos julgados tem<span className='text-green-500'> 8% </span>de chance de causar um acerto crítico.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Debilitação</span>
                        <span className='italic'>Requer Level <strong>59</strong></span>
                        <p>
                            Inimigos na área de julgamento causam<span className='text-green-500'> 40% </span>
                            de dano a menos durante<span className='text-green-500'> 6 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}