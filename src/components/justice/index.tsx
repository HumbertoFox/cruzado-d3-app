'use client';

import { useState } from 'react';

export default function RunesJusticeComponent() {
    const [isRunesJustice, setIsRunesJustice] = useState<boolean>(false);

    function toggleRunesJustice() {
        setIsRunesJustice(!isRunesJustice);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesJustice ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesJustice}
            >
                <span>{isRunesJustice ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesJustice ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Estouro</span>
                        <span className='italic'>Requer Nível <strong>22</strong></span>
                        <p>
                            O martelo é carregado de eletricidade e explode com o impacto, causando dano Elétrico equivalente a
                            <span className='text-green-500'> 60% </span>do dano da arma aos inimigos em um raio de
                            <span className='text-green-500'> 10 </span>metros. Inimigos atingidos pela explosão têm
                            <span className='text-green-500'> 20% </span>de chance de ficarem atordoados por<span className='text-green-500'> 1 </span>segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Fendedor</span>
                        <span className='italic'>Requer Nível <strong>31</strong></span>
                        <p>
                            Quando o martelo atinge um inimigo, tem<span className='text-green-500'> 100% </span>
                            de chance de se dividir em<span className='text-green-500'> 2 </span>martelos menores que são disparados e causam dano Sagrado equivalente a
                            <span className='text-green-500'> 245% </span>do dano de arma aos inimigos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Martelo da Perseguição</span>
                        <span className='italic'>Requer Nível <strong>40</strong></span>
                        <p>
                            O martelo procura alvos próximos e causa<span className='text-green-500'> 335% </span>do dano de arma.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Espada Justiceira</span>
                        <span className='italic'>Requer Nível <strong>48</strong></span>
                        <p>
                            Arremessa uma espada da justiça nos inimigos. Quando a espada atinge um inimigo, você ganha<span className='text-green-500'> 5% </span>
                            de aumento de velocidade por<span className='text-green-500'> 3 </span>segundos. Este efeito acumula até
                            <span className='text-green-500'> 3 </span>vezes.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Raio Sagrado</span>
                        <span className='italic'>Requer Nível <strong>60</strong></span>
                        <p>
                            Lança um raio de poder sagrado, curando você e seus aliados em
                            <span className='text-green-500'> 2146 </span>-<span className='text-green-500'> 3219 </span>de Vida cada vez que atingir um inimigo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}