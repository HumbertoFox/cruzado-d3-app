'use client';

import { useState } from 'react';

export default function RunesSteedChargeComponent() {
    const [isRunesSteedCharge, setIsRunesSteedCharge] = useState<boolean>(false);

    function toggleRunesSteedCharge() {
        setIsRunesSteedCharge(!isRunesSteedCharge);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesSteedCharge ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesSteedCharge}
            >
                <span>{isRunesSteedCharge ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesSteedCharge ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Sela com Espinhos</span>
                        <span className='italic'>Requer Nível <strong>19</strong></span>
                        <p>
                            O corcel de guerra causa<span className='text-green-500'> 500% </span>do dano de Espinhos aos inimigos que você atravessa.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Pesadelo</span>
                        <span className='italic'>Requer Nível <strong>25</strong></span>
                        <p>
                            O Corcel de Guerra é consumido por um fogo íntegro, queimando tudo que estiver no caminho, causando dano Ígneo equivalente a
                            <span className='text-green-500'> 550% </span>do dano da arma por segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Rejuvenescimento</span>
                        <span className='italic'>Requer Nível <strong>36</strong></span>
                        <p>
                            Ao cavalgar no Corcel de Guerra, você recupera<span className='text-green-500'> 15% </span>da Vida máxima.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Tolerância</span>
                        <span className='italic'>Requer Nível <strong>42</strong></span>
                        <p>
                            Aumenta a duração para<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Esquartejar</span>
                        <span className='italic'>Requer Nível <strong>52</strong></span>
                        <p>
                            Prende<span className='text-green-500'> 5 </span>monstros próximos de você com correntes e os arrasta, causando dano Sagrado equivalente a
                            <span className='text-green-500'> 185% </span>do dano da arma por segundo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}