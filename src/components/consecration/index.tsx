'use client';

import { useState } from 'react';

export default function RunesConsecrationComponent() {
    const [isRunesConsecration, setIsRunesConsecration] = useState<boolean>(false);

    function toggleRunesConsecration() {
        setIsRunesConsecration(!isRunesConsecration);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesConsecration ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesConsecration}
            >
                <span>{isRunesConsecration ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesConsecration ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Banhado em Luz</span>
                        <span className='italic'>Requer Level <strong>23</strong></span>
                        <p>
                            Aumenta o raio do solo consagrado para<span className='text-green-500'> 24 </span>
                            metros, e aumenta a cura recebida por você e seus aliados para<span className='text-green-500'> 48.278 </span>de Vida por segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Cama de Pregos</span>
                        <span className='italic'>Requer Level <strong>29</strong></span>
                        <p>
                            O Solo Consagrado fica coberto de pregos. Os inimigos que caminharem pela área receberão<span className='text-green-500'> 100% </span>
                            do dano de Espinhos a cada segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Purgatório da Égide</span>
                        <span className='italic'>Requer Level <strong>39</strong></span>
                        <p>
                            A borda do solo consagrado é envolvida por um escudo sagrado que impede os inimigos de passarem. A duração da consagração é reduzida para
                            <span className='text-green-500'> 5 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Chão Partido</span>
                        <span className='italic'>Requer Level <strong>46</strong></span>
                        <p>
                            Os inimigos que estiverem no Solo Consagrado receberão dano Ígneo equivalente a
                            <span className='text-green-500'> 155% </span>do dano de arma por segundo.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Temível</span>
                        <span className='italic'>Requer Level <strong>53</strong></span>
                        <p>
                            Os inimigos que estiverem sobre o solo consagrado terão<span className='text-green-500'> 100% </span>
                            de chance de ficarem amedrontados por<span className='text-green-500'> 3 </span>segundos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}