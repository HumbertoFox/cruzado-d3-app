'use client';

import { useState } from 'react';

export default function RunesLawsofJusticeComponent() {
    const [isRunesLawsofJustice, setIsRunesLawsofJustice] = useState<boolean>(false);

    function toggleRunesLawsofJustice() {
        setIsRunesLawsofJustice(!isRunesLawsofJustice);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesLawsofJustice ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesLawsofJustice}
            >
                <span>{isRunesLawsofJustice ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesLawsofJustice ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Proteger os Inocentes</span>
                        <span className='italic'>Requer Nível <strong>23</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também redireciona<span className='text-green-500'> 20% </span>
                            do dano recebido pelos seus aliados para você pelos<span className='text-green-500'> 5 </span>segundos seguintes.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Objetivo Inamovível</span>
                        <span className='italic'>Requer Nível <strong>30</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também aumenta a Armadura de seus aliados em<span className='text-green-500'> 7000 </span>
                            por<span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Armadura da Fé</span>
                        <span className='italic'>Requer Nível <strong>37</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei envolve você e seus aliados com escudos de fé por<span className='text-green-500'> 5 </span>
                            segundos. Os escudos absorvem até<span className='text-green-500'> 26.821 </span>do dano.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Força Fenecente</span>
                        <span className='italic'>Requer Nível <strong>43</strong></span>
                        <p>
                            Ativa: Enquanto a Lei está sendo fortalecida, o dano causado pelos inimigos a você e a seus aliados é reduzido em
                            <span className='text-green-500'> 15% </span>por<span className='text-green-500'> 5 </span>
                            segundos, acumulando até um máximo de<span className='text-green-500'> 60%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Bravura</span>
                        <span className='italic'>Requer Nível <strong>57</strong></span>
                        <p>
                            Ativa: Fortalecer a Lei também concede a você e seus aliados imunidade a efeitos que prejudicam o controle por
                            <span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}