'use client';

import { useState } from 'react';

export default function RunesIronSkinComponent() {
    const [isRunesIronSkin, setIsRunesIronSkin] = useState<boolean>(false);

    function toggleRunesIronSkin() {
        setIsRunesIronSkin(!isRunesIronSkin);
    };
    return (
        <div className='flex flex-col'>
            <button
                className='button text-sm italic'
                type='button'
                title={isRunesIronSkin ? 'Ocultar Runas' : 'Exibir Runas'}
                onClick={toggleRunesIronSkin}
            >
                <span>{isRunesIronSkin ? 'Ocultar' : 'Runas'}</span>
            </button>
            <div className={`${isRunesIronSkin ? 'flex' : 'hidden'} flex-col gap-3 py-3`}>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-126px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Pele Refletiva</span>
                        <span className='italic'>Requer Level <strong>14</strong></span>
                        <p>
                            Enquanto estiverem ativos, seus Espinhos aumentam em<span className='text-green-500'> 300%</span>.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-42px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Pele de Aço</span>
                        <span className='italic'>Requer Level <strong>21</strong></span>
                        <p>
                            Aumenta a duração para<span className='text-green-500'> 7 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-84px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Pele Explosiva</span>
                        <span className='italic'>Requer Level <strong>32</strong></span>
                        <p>
                            Quando Pele de Ferro expira, o metal explode e causa<span className='text-green-500'> 1400% </span>
                            de dano de arma aos inimigos em um raio de<span className='text-green-500'> 12 </span>metros.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[0px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Carregado</span>
                        <span className='italic'>Requer Level <strong>44</strong></span>
                        <p>
                            Sua pele de metal fica eletrificada, concedendo a você<span className='text-green-500'> 20% </span>
                            de chance de atordoar os inimigos em raio de<span className='text-green-500'> 10 </span>
                            metros por<span className='text-green-500'> 2 </span>segundos.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <span className='min-w-11 h-11 bg-[url("/assets/skills/medium.png")] bg-no-repeat bg-[-168px]'>
                        <span className='min-w-full my-auto' />
                    </span>
                    <div className='flex flex-col gap-1 font-mono text-sm'>
                        <span className='font-bold text-base italic'>Lampejo</span>
                        <span className='italic'>Requer Level <strong>56</strong></span>
                        <p>
                            Se receber dano enquanto o efeito Pele de Ferro estiver ativo, sua velocidade de movimento aumenta em
                            <span className='text-green-500'> 60% </span>por
                            <span className='text-green-500'> 5 </span>segundos e você pode se mover desimpedido por entre os inimigos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}