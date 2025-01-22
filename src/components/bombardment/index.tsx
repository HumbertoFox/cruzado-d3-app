'use client';

import { useState } from 'react';

export default function RunesBombardmentComponent() {
    const [isRunesBombardment, setIsRunesBombardment] = useState<boolean>(false);

    function toggleRunesBombardment() {
        setIsRunesBombardment(!isRunesBombardment);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesBombardment ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesBombardment}
            >
                <span>{isRunesBombardment ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesBombardment ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Barris de Espetos</span>
                        <span className='italic'>Requer Level <strong>63</strong></span>
                        <p>
                            Em vez de esferas flamejantes, barris de espetos são lançados. O dano de cada barril é aumentado em
                            <span className='text-green-500'> 200% </span>dos seus Espinhos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Aniquilar</span>
                        <span className='italic'>Requer Level <strong>65</strong></span>
                        <p>
                            Cada impacto tem<span className='text-green-500'> 100% </span>de Chance de Acerto Crítico.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Campo Minado</span>
                        <span className='italic'>Requer Level <strong>67</strong></span>
                        <p>
                            Cada impacto espalha pelo campo de batalha<span className='text-green-500'> 2 </span>
                            minas que explodem quando os inimigos se aproximam e causam<span className='text-green-500'> 160% </span>
                            do dano de arma como dano Ígneo a todos os inimigos em um raio de 10 metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Bombardeio Impactante</span>
                        <span className='italic'>Requer Level <strong>69</strong></span>
                        <p>
                            Uma bola única e muito maior de alcatrão explosivo é arremessada em uma área-alvo, causando
                            <span className='text-green-500'> 3320% </span>do dano de arma a todos os inimigos em um raio de
                            <span className='text-green-500'> 18 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Alvo</span>
                        <span className='italic'>Requer Level <strong>70</strong></span>
                        <p>
                            O bombardeio não encontra mais alvos próximos aleatoriamente. Em vez disso, ele continua a cair no seu alvo inicial.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}