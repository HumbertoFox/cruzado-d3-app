'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef,
    useState
} from 'react';
import RunesPunishComponent from '@/components/punish';
import RunesSlashComponent from '@/components/slash';
import RunesJusticeComponent from '@/components/justice';
import RunesSmiteComponent from '@/components/smite';
import RunesShieldBashComponent from '@/components/shieldbash';
import RunesSweepAttackComponent from '@/components/sweepattack';
import RunesBlessedHammerComponent from '@/components/blessedhammer';
import RunesBlessedShieldComponent from '@/components/blessedshield';
import RunesFistoftheHeavensComponent from '@/components/fistoftheheavens';
import RunesShieldGlareComponent from '@/components/shieldglare';
import RunesIronSkinComponent from '@/components/ironskin';
import RunesConsecrationComponent from '@/components/consecration';
import RunesJudgmentComponent from '@/components/judgment';
import RunesProvokeComponent from '@/components/provoke';
import RunesSteedChargeComponent from '@/components/steedcharge';
import RunesCondemnComponent from '@/components/condemn';
import RunesPhalanxComponent from '@/components/phalanx';
import RunesLawsofValorComponent from '@/components/lawsofvalor';
import RunesLawsofJusticeComponent from '@/components/lawsofjustice';
import RunesLawsofHopeComponent from '@/components/lawsofhope';
import RunesFallingSwordComponent from '@/components/fallingsword';
import RunesAkaratsChampionComponent from '@/components/akaratschampion';
import RunesHeavensFuryComponent from '@/components/heavensfury';
import RunesBombardmentComponent from '@/components/bombardment';

export default function ActiveSkillsComponent() {
    const [isPrimary, setIsPrimary] = useState<boolean>(false);
    const [isSecondary, setIsSecondary] = useState<boolean>(false);
    const [isDefensive, setIsDefensve] = useState<boolean>(false);
    const [isUtility, setIsUtility] = useState<boolean>(false);
    const [isLaws, setIsLaws] = useState<boolean>(false);
    const [isConviction, setIsConviction] = useState<boolean>(false);
    const activeSkillsRef = useRef(null);
    const activeTitleRef = useRef(null);
    const activePrimaryRef = useRef(null);
    const activeSecondaryRef = useRef(null);
    const activeDefensiveRef = useRef(null);
    const activeUtilityRef = useRef(null);
    const activeLawsRef = useRef(null);
    const activeConvictionRef = useRef(null);

    function togglePrimary() {
        setIsPrimary(!isPrimary);
        setIsSecondary(false);
        setIsDefensve(false);
        setIsUtility(false);
        setIsLaws(false);
        setIsConviction(false);
    };
    function toggleSecondary() {
        setIsSecondary(!isSecondary);
        setIsPrimary(false);
        setIsDefensve(false);
        setIsUtility(false);
        setIsLaws(false);
        setIsConviction(false);
    };
    function toggleDefensive() {
        setIsDefensve(!isDefensive);
        setIsPrimary(false);
        setIsSecondary(false);
        setIsUtility(false);
        setIsLaws(false);
        setIsConviction(false);
    };
    function toggleUtitlity() {
        setIsUtility(!isUtility);
        setIsPrimary(false);
        setIsSecondary(false);
        setIsDefensve(false);
        setIsLaws(false);
        setIsConviction(false);
    };
    function toggleLaws() {
        setIsLaws(!isLaws);
        setIsPrimary(false);
        setIsSecondary(false);
        setIsDefensve(false);
        setIsUtility(false);
        setIsConviction(false);
    };
    function toggleConviction() {
        setIsConviction(!isConviction);
        setIsPrimary(false);
        setIsSecondary(false);
        setIsDefensve(false);
        setIsUtility(false);
        setIsLaws(false);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const activeSkills = activeSkillsRef.current;
        const activeTitle = activeTitleRef.current;
        const activePrimary = activePrimaryRef.current;
        const activeSecondary = activeSecondaryRef.current;
        const activeDefensive = activeDefensiveRef.current;
        const activeUtility = activeUtilityRef.current;
        const activeLaws = activeLawsRef.current;
        const activeConviction = activeConvictionRef.current;

        gsap.fromTo(activeTitle, {
            opacity: 0,
            y: 300
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 90%'
            }
        });
        gsap.fromTo(activePrimary, {
            opacity: 0,
            x: 300
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(activeSecondary, {
            opacity: 0,
            x: 300,
            y: 300
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(activeDefensive, {
            opacity: 0,
            x: -300,
            y: 300
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            delay: 1,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(activeUtility, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            delay: 1.5,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(activeLaws, {
            opacity: 0,
            x: 300,
            y: -300
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            delay: 2,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(activeConviction, {
            opacity: 0,
            x: -300,
            y: -300
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            delay: 2.5,
            scrollTrigger: {
                trigger: activeSkills,
                start: 'top 80%'
            }
        });
    }, []);
    return (
        <div
            className='w-3/5 min-h-full flex flex-col px-3 cursor-default'
            ref={activeSkillsRef}
        >
            <h4
                className='text-center pb-4 opacity-0'
                ref={activeTitleRef}
            >
                Habilidades Ativas
            </h4>
            <div className='w-full flex flex-wrap justify-center items-start gap-3'>
                <div
                    className={`${(isSecondary || isDefensive || isUtility || isLaws || isConviction) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activePrimaryRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isPrimary ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Primarias'}
                        onClick={togglePrimary}
                    >
                        <span>{isPrimary ? 'Voltar para Habilidades' : 'Habilidades Primárias'}</span>
                    </button>
                    <div className={`${isPrimary ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_punish.png'}
                                    alt='Habilidade Punição'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Punição</p>
                                    <p className='italic'>Requer Nível <strong>1</strong></p>
                                    <p>Gera: <span className='text-green-500'>5</span> de Ira por ataque</p>
                                    <p>
                                        Atinge o inimigo, causa dano equivalente a
                                        <span className='text-green-500'> 335% </span>do dano de arma e concede Sentidos Fortalecidos, aumentando em
                                        <span className='text-green-500'> 15% </span>a Chance de Bloqueio por
                                        <span className='text-green-500'> 5 </span>segundos.
                                    </p>
                                    <p>Requer Escudo</p>
                                </div>
                            </div>
                            <RunesPunishComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_slash.png'}
                                    alt='Habilidade Talho'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Talho</p>
                                    <p className='italic'>Requer Nível <strong>3</strong></p>
                                    <p>Gera: <span className='text-green-500'>5</span> de Ira por ataque</p>
                                    <p>Incendeia o ar à sua frente, causando dano Ígneo equivalente a <span className='text-green-500'>230%</span> do dano de arma.</p>
                                </div>
                            </div>
                            <RunesSlashComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_smite.png'}
                                    alt='Habilidade Castigar'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Castigar</p>
                                    <p>Gera: <span className='text-green-500'>5</span> de Ira por ataque</p>
                                    <p className='italic'>Requer Nível <strong>11</strong></p>
                                    <p>
                                        Castiga os inimigos num raio de<span className='text-green-500'> 30 </span>metros de distância com correntes sagradas,
                                        causando dano Sagrado equivalente a<span className='text-green-500'> 175% </span>do dano de arma. As correntes se partem e acertam
                                        <span className='text-green-500'> 3 </span>inimigos em um raio de<span className='text-green-500'> 20 </span>metros,
                                        causando dano Sagrado equivalente a<span className='text-green-500'> 150% </span>do dano de arma cada.
                                    </p>
                                </div>
                            </div>
                            <RunesSmiteComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_justice.png'}
                                    alt='Habilidade Justiça'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Justiça</p>
                                    <p className='italic'>Requer Nível <strong>15</strong></p>
                                    <p>Gera: <span className='text-green-500'>5</span> de Ira por ataque</p>
                                    <p>Arremessa um martelo da justiça nos inimigos, causando <span className='text-green-500'>245%</span> de dano de arma.</p>
                                </div>
                            </div>
                            <RunesJusticeComponent />
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isPrimary || isDefensive || isUtility || isLaws || isConviction) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activeSecondaryRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isSecondary ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Secundarias'}
                        onClick={toggleSecondary}
                    >
                        <span>{isSecondary ? 'Voltar para Habilidades' : 'Habilidades Secundárias'}</span>
                    </button>
                    <div className={`${isSecondary ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_shieldbash2.png'}
                                    alt='Habilidade Esmagamento com Escudo'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Esmagamento com Escudo</p>
                                    <p className='italic'>Requer Nível <strong>2</strong></p>
                                    <p>Custa: <span className='text-green-500'>30</span> de Ira</p>
                                    <p>
                                        Investe contra o inimigo, atingindo o alvo e todos os inimigos próximos. Causa
                                        <span className='text-green-500'> 700% </span>do dano de arma mais
                                        <span className='text-green-500'> 300% </span>da Chance de Bloqueio do seu escudo como dano Sagrado.
                                    </p>
                                    <p>Requer Escudo</p>
                                </div>
                            </div>
                            <RunesShieldBashComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_sweepattack.png'}
                                    alt='Habilidade Ataque Amplo'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Ataque Amplo</p>
                                    <p className='italic'>Requer Nível <strong>5</strong></p>
                                    <p>Custa: <span className='text-green-500'>20</span> de Ira</p>
                                    <p>
                                        Golpeia em arco com um mangual místico, atingindo todos os inimigos a até <span className='text-green-500'>18</span> metros à sua
                                        frente e causando <span className='text-green-500'>480%</span> do dano de arma.
                                    </p>
                                    <p>Requer Arma</p>
                                </div>
                            </div>
                            <RunesSweepAttackComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_blessedhammer.png'}
                                    alt='Habilidade Martelo Abençoado'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Martelo Abençoado</p>
                                    <p className='italic'>Requer Nível <strong>12</strong></p>
                                    <p>Custa: <span className='text-green-500'>10</span> de Ira</p>
                                    <p>
                                        Evoca um martelo abençoado que gira ao redor de você, causando dano Sagrado equivalente a
                                        <span className='text-green-500'> 320%</span> do dano de arma a todos os inimigos que acerta.
                                    </p>
                                </div>
                            </div>
                            <RunesBlessedHammerComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_blessedshield.png'}
                                    alt='Habilidade Escudo Abençoado'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Escudo Abençoado</p>
                                    <p className='italic'>Requer Nível <strong>20</strong></p>
                                    <p>Custa: <span className='text-green-500'>20</span> de Ira</p>
                                    <p>
                                        Atira seu escudo, causando <span className='text-green-500'>430%</span> do dano de arma como dano Sagrado mais
                                        <span className='text-green-500'> 250% </span>da Chance de Bloqueio total do escudo como dano Sagrado.
                                        O escudo ricocheteará em <span className='text-green-500'>3</span> inimigos próximos.
                                    </p>
                                    <p>Requer Escudo</p>
                                </div>
                            </div>
                            <RunesBlessedShieldComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_fistoftheheavens.png'}
                                    alt='Habilidade Punho do Paraíso'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Punho do Paraíso</p>
                                    <p className='italic'>Requer Nível <strong>26</strong></p>
                                    <p>Custa: <span className='text-green-500'>30</span> de Ira</p>
                                    <p>
                                        Evoca dos céus um pilar elétrico que explode, causando dano Elétrico equivalente a
                                        <span className='text-green-500'> 545% </span>do dano de arma a qualquer inimigo num raio de <span className='text-green-500'>8</span> metros.
                                        A explosão cria <span className='text-green-500'>6</span> projéteis carregados que se espalham,
                                        causando <span className='text-green-500'>255%</span> do dano de arma como Elétrico.
                                    </p>
                                </div>
                            </div>
                            <RunesFistoftheHeavensComponent />
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isPrimary || isSecondary || isUtility || isLaws || isConviction) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activeDefensiveRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isDefensive ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Defensivas'}
                        onClick={toggleDefensive}
                    >
                        <span>{isDefensive ? 'Voltar para Habilidades' : 'Habilidades Defensiva'}</span>
                    </button>
                    <div className={`${isDefensive ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_shieldglare.png'}
                                    alt='Habilidade Escudo Reluzente'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Escudo Reluzente</p>
                                    <p className='italic'>Requer Nível <strong>4</strong></p>
                                    <p>Recarga: <span className='text-green-500'>12</span> segundos</p>
                                    <p>
                                        A luz emana do seu escudo, Cegando todos os inimigos em um raio de <span className='text-green-500'>30 </span>
                                        metros à frente por <span className='text-green-500'>4</span> segundos.
                                    </p>
                                    <p>Requer Escudo</p>
                                </div>
                            </div>
                            <RunesShieldGlareComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_ironskin.png'}
                                    alt='Habilidade Pele de Ferro'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Pele de Ferro</p>
                                    <p className='italic'>Requer Nível <strong>8</strong></p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Sua pele transforma-se em ferro e absorve <span className='text-green-500'>50% </span>
                                        de todo o dano por <span className='text-green-500'>4</span> segundos.
                                    </p>
                                </div>
                            </div>
                            <RunesIronSkinComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_consecration.png'}
                                    alt='Habilidade Consagração'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Consagração</p>
                                    <p className='italic'>Requer Nível <strong>16</strong></p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Consagra uma área de <span className='text-green-500'>20</span> metros ao seu redor por <span className='text-green-500'>10</span> segundos.
                                        Você e todos os aliados receberão <span className='text-green-500'>32.185</span> de cura por segundo
                                        enquanto permanecerem dentro do solo consagrado.
                                    </p>
                                </div>
                            </div>
                            <RunesConsecrationComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_judgment.png'}
                                    alt='Habilidade Jugamento'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Julgamento</p>
                                    <p className='italic'>Requer Nível <strong>22</strong></p>
                                    <p>Recarga: <span className='text-green-500'>20</span> segundos</p>
                                    <p>
                                        Julga os inimigos em um raio de <span className='text-green-500'>20</span> metros do local alvejado,
                                        Imobilizando todos por <span className='text-green-500'>6</span> segundos.
                                    </p>
                                </div>
                            </div>
                            <RunesJudgmentComponent />
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isPrimary || isSecondary || isDefensive || isLaws || isConviction) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activeUtilityRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isUtility ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Utilidades'}
                        onClick={toggleUtitlity}
                    >
                        <span>{isUtility ? 'Voltar para Habilidades' : 'Habilidades Utilidades'}</span>
                    </button>
                    <div className={`${isUtility ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_provoke.png'}
                                    alt='Habilidade Provocar'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Provocar</p>
                                    <p className='italic'>Requer Nível <strong>9</strong></p>
                                    <p>Recarga: <span className='text-green-500'>20</span> segundos</p>
                                    <p>Gera: <span className='text-green-500'>30</span> de Ira</p>
                                    <p>
                                        Provoca todos os inimigos próximos e gera instantaneamente<span className='text-green-500'> 5 </span>
                                        de Ira adicional para cada inimigo provocado. Os inimigos provocados concentrarão a atenção em você por
                                        <span className='text-green-500'> 4 </span>segundos.
                                    </p>
                                </div>
                            </div>
                            <RunesProvokeComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_steedcharge.png'}
                                    alt='Habilidade Investida com Corcel'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Investida com Corcel</p>
                                    <p className='italic'>Requer Nível <strong>13</strong></p>
                                    <p>Recarga: <span className='text-green-500'>16</span> segundos</p>
                                    <p>
                                        Cavalga um Corcel de Guerra celestial que permite que você passe livremente entre os inimigos por
                                        <span className='text-green-500'> 2 </span>segundos.
                                    </p>
                                </div>
                            </div>
                            <RunesSteedChargeComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_condemn.png'}
                                    alt='Habilidade Condenar'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Condenar</p>
                                    <p className='italic'>Requer Nível <strong>21</strong></p>
                                    <p>Recarga: <span className='text-green-500'>15</span> segundos</p>
                                    <p>
                                        Você prepara uma explosão poderosa e a lança após<span className='text-green-500'> 3 </span>
                                        segundos, causando dano Sagrado equivalente a<span className='text-green-500'> 1160% </span>
                                        do dano de arma a todos os inimigos num raio de<span className='text-green-500'> 15 </span>metros.
                                    </p>
                                </div>
                            </div>
                            <RunesCondemnComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_phalanx3.png'}
                                    alt='Habilidade Falange'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Falange</p>
                                    <p className='italic'>Requer Nível <strong>27</strong></p>
                                    <p>Custa: <span className='text-green-500'>30</span> de Ira</p>
                                    <p>
                                        Evoca avatares poderosos que investem na direção-alvo. Inimigos na trajetória da investida recebem
                                        <span className='text-green-500'> 490% </span>do dano de arma.
                                    </p>
                                </div>
                            </div>
                            <RunesPhalanxComponent />
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isPrimary || isSecondary || isDefensive || isUtility || isConviction) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activeLawsRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isLaws ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Leis'}
                        onClick={toggleLaws}
                    >
                        <span>{isLaws ? 'Voltar para Habilidades' : 'Habilidades Leis'}</span>
                    </button>
                    <div className={`${isLaws ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_lawsofvalor2.png'}
                                    alt='Habilidade Leis da Bravura'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Leis da Bravura</p>
                                    <p className='italic'>Requer Nível <strong>14</strong></p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Ativa: Fortalece a Lei, concedendo a você e seus aliados <span className='text-green-500'>15%</span> a mais de velocidade de ataque por <span className='text-green-500'>5</span> segundos.
                                    </p>
                                    <p>
                                        Passiva: Recita a Lei, concedendo a você e seus aliados <span className='text-green-500'>8%</span> a mais de velocidade de ataque.
                                    </p>
                                    <p className='italic text-yellow-500'>Só pode haver uma Lei ativa por vez.</p>
                                </div>
                            </div>
                            <RunesLawsofValorComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_lawsofjustice2.png'}
                                    alt='Habilidade Leis da Justiça'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Leis da Justiça</p>
                                    <p className='italic'>Requer Nível <strong>17</strong></p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Ativa: Fortalece a Lei,
                                        aumentando em <span className='text-green-500'>490</span> sua resistência a todos os elementos e a de seus aliados por <span className='text-green-500'>5</span> segundos.
                                    </p>
                                    <p>
                                        Passiva: Recita a Lei, concedendo a você e seus aliados <span className='text-green-500'>140</span> de aumento na resistência a todos os elementos.
                                    </p>
                                    <p className='italic text-yellow-500'>Só pode haver uma Lei ativa por vez.</p>
                                </div>
                            </div>
                            <RunesLawsofJusticeComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_lawsofhope2.png'}
                                    alt='Habilidade Leis da Esperança'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Leis da Esperança</p>
                                    <p className='italic'>Requer Nível <strong>24</strong></p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Ativa: Fortalece a Lei,
                                        envolvendo você e seus aliados em um escudo por <span className='text-green-500'>5</span> segundos e absorvendo até <span className='text-green-500'>124.128</span> de dano.
                                    </p>
                                    <p>
                                        Passiva: Recita a Lei, curando <span className='text-green-500'>10.728</span> da sua Vida e da de seus aliados por segundo.
                                    </p>
                                    <p className='italic text-yellow-500'>Só pode haver uma Lei ativa por vez.</p>
                                </div>
                            </div>
                            <RunesLawsofHopeComponent />
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isPrimary || isSecondary || isDefensive || isUtility || isLaws) ? 'hidden' : 'flex'} flex-col opacity-0`}
                    ref={activeConvictionRef}
                >
                    <button
                        className='button'
                        type='button'
                        title={isConviction ? 'Volta para Habilidades Ativas' : 'Exibir Detalhes das Habilidades Convicções'}
                        onClick={toggleConviction}
                    >
                        <span>{isConviction ? 'Voltar para Habilidades' : 'Habilidades Convicções'}</span>
                    </button>
                    <div className={`${isConviction ? 'flex' : 'hidden'} flex-col gap-5 cursor-default`}>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_fallingsword.png'}
                                    alt='Habilidade Espada Cadente'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Espada Cadente</p>
                                    <p className='italic'>Requer Nível <strong>19</strong></p>
                                    <p>Custa: <span className='text-green-500'>25</span> de Ira</p>
                                    <p>Recarga: <span className='text-green-500'>30</span> segundos</p>
                                    <p>
                                        Lança a si mesmo aos céus e desce esmagando os inimigos, causando <span className='text-green-500'>1700%</span> de dano de arma a
                                        tudo num raio de <span className='text-green-500'>14</span> metros de onde você aterrissar.
                                    </p>
                                    <p className='italic text-yellow-500'>Esta habilidade só inicia a recarga depois que seu efeito expira.</p>
                                </div>
                            </div>
                            <RunesFallingSwordComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_akaratschampion.png'}
                                    alt='Habilidade Campeão de Akarat'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Campeão de Akarat</p>
                                    <p className='italic'>Requer Nível <strong>25</strong></p>
                                    <p>Recarga: <span className='text-green-500'>90</span> segundos</p>
                                    <p>
                                        Explode com o poder da sua ordem, aumentando seu dano em <span className='text-green-500'>35% </span>
                                        e a regeneração de Ira em <span className='text-green-500'>5</span> por <span className='text-green-500'>20</span> segundos.
                                    </p>
                                </div>
                            </div>
                            <RunesAkaratsChampionComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_heavensfury3.png'}
                                    alt='Habilidade Fúria do Paraíso'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Fúria do Paraíso</p>
                                    <p className='italic'>Requer Nível <strong>30</strong></p>
                                    <p>Recarga: <span className='text-green-500'>20</span> segundos</p>
                                    <p>
                                        Evoca um raio furioso de energia sagrada que causa dano Sagrado equivalente a <span className='text-green-500'>1710%</span> do dano de arma ao
                                        longo de <span className='text-green-500'>6</span> segundos a todos os inimigos atingidos.
                                    </p>
                                </div>
                            </div>
                            <RunesHeavensFuryComponent />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-5 pb-4'>
                                <Image
                                    className='my-auto'
                                    src={'/assets/skills/x1_crusader_bombardment.png'}
                                    alt='Habilidade Bombardeio'
                                    width={64}
                                    height={64}
                                />
                                <div className='flex flex-col gap-1 font-mono'>
                                    <p className='font-bold text-lg italic'>Bombardeio</p>
                                    <p className='italic'>Requer Nível <strong>61</strong></p>
                                    <p>Recarga: <span className='text-green-500'>60</span> segundos</p>
                                    <p>
                                        Evoca um ataque a distância, fazendo com que chovam <span className='text-green-500'>5</span> esferas de piche flamejante e pedras sobre os inimigos ao redor,
                                        causando, ao todo, <span className='text-green-500'>2850%</span> do dano de arma aos inimigos num raio de <span className='text-green-500'>12</span> metros da área de impacto.
                                    </p>
                                </div>
                            </div>
                            <RunesBombardmentComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}