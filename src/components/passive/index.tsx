'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
    useEffect,
    useRef,
    useState
} from 'react';

export default function PassiveSkillsComponent() {
    const [isHeavenlyStrength, setIsHeavenlyStrength] = useState<boolean>(false);
    const [isFervor, setIsFervor] = useState<boolean>(false);
    const [isVigilant, setIsVigilant] = useState<boolean>(false);
    const [isRighteousness, setIsRighteousness] = useState<boolean>(false);
    const [isInsurmountable, setIsInsurmountable] = useState<boolean>(false);
    const [isFanaticism, setIsFanaticism] = useState<boolean>(false);
    const [isIndestructible, setIsIndestructible] = useState<boolean>(false);
    const [isHolyCause, setIsHolyCause] = useState<boolean>(false);
    const [isWrathful, setIsWrathful] = useState<boolean>(false);
    const [isDivineFortress, setIsDivineFortress] = useState<boolean>(false);
    const [isLordCommander, setIsLordCommander] = useState<boolean>(false);
    const [isHoldYourGround, setIsHoldYourGround] = useState<boolean>(false);
    const [isLongArmoftheLaw, setIsLongArmoftheLaw] = useState<boolean>(false);
    const [isIronMaiden, setIsIronMaiden] = useState<boolean>(false);
    const [isRenewal, setIsRenewal] = useState<boolean>(false);
    const [isFinery, setIsFinery] = useState<boolean>(false);
    const [isBlunt, setIsBlunt] = useState<boolean>(false);
    const [isToweringShield, setIsToweringShield] = useState<boolean>(false);
    const passiveSkillsRef = useRef(null);
    const passiveTitleRef = useRef(null);
    const passiveBtn0Ref = useRef(null);
    const passiveBtn1Ref = useRef(null);
    const passiveBtn2Ref = useRef(null);
    const passiveBtn3Ref = useRef(null);
    const passiveBtn4Ref = useRef(null);
    const passiveBtn5Ref = useRef(null);
    const passiveBtn6Ref = useRef(null);
    const passiveBtn7Ref = useRef(null);
    const passiveBtn8Ref = useRef(null);
    const passiveBtn9Ref = useRef(null);
    const passiveBtn10Ref = useRef(null);
    const passiveBtn11Ref = useRef(null);
    const passiveBtn12Ref = useRef(null);
    const passiveBtn13Ref = useRef(null);
    const passiveBtn14Ref = useRef(null);
    const passiveBtn15Ref = useRef(null);
    const passiveBtn16Ref = useRef(null);
    const passiveBtn17Ref = useRef(null);

    function toggleHeavenlyStrength() {
        setIsHeavenlyStrength(!isHeavenlyStrength);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleFervor() {
        setIsFervor(!isFervor);
        setIsHeavenlyStrength(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleVigilant() {
        setIsVigilant(!isVigilant);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleRighteousness() {
        setIsRighteousness(!isRighteousness);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleInsurmountable() {
        setIsInsurmountable(!isInsurmountable);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleFanaticism() {
        setIsFanaticism(!isFanaticism);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleIndestructible() {
        setIsIndestructible(!isIndestructible);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleHolyCause() {
        setIsHolyCause(!isHolyCause);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleWrathful() {
        setIsWrathful(!isWrathful);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleDivineFortress() {
        setIsDivineFortress(!isDivineFortress);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleLordCommander() {
        setIsLordCommander(!isLordCommander);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleHoldYourGround() {
        setIsHoldYourGround(!isHoldYourGround);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleLongArmoftheLaw() {
        setIsLongArmoftheLaw(!isLongArmoftheLaw);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleIronMaiden() {
        setIsIronMaiden(!isIronMaiden);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleRenewal() {
        setIsRenewal(!isRenewal);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsFinery(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleFinery() {
        setIsFinery(!isFinery);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsBlunt(false);
        setIsToweringShield(false);
    };
    function toggleBlunt() {
        setIsBlunt(!isBlunt);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsToweringShield(false);
    };
    function toggleToweringShield() {
        setIsToweringShield(!isToweringShield);
        setIsHeavenlyStrength(false);
        setIsFervor(false);
        setIsVigilant(false);
        setIsRighteousness(false);
        setIsInsurmountable(false);
        setIsFanaticism(false);
        setIsIndestructible(false);
        setIsHolyCause(false);
        setIsWrathful(false);
        setIsDivineFortress(false);
        setIsLordCommander(false);
        setIsHoldYourGround(false);
        setIsLongArmoftheLaw(false);
        setIsIronMaiden(false);
        setIsRenewal(false);
        setIsFinery(false);
        setIsBlunt(false);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const passiveSkills = passiveSkillsRef.current;
        const passiveTitle = passiveTitleRef.current;
        const passiveBtn0 = passiveBtn0Ref.current;
        const passiveBtn1 = passiveBtn1Ref.current;
        const passiveBtn2 = passiveBtn2Ref.current;
        const passiveBtn3 = passiveBtn3Ref.current;
        const passiveBtn4 = passiveBtn4Ref.current;
        const passiveBtn5 = passiveBtn5Ref.current;
        const passiveBtn6 = passiveBtn6Ref.current;
        const passiveBtn7 = passiveBtn7Ref.current;
        const passiveBtn8 = passiveBtn8Ref.current;
        const passiveBtn9 = passiveBtn9Ref.current;
        const passiveBtn10 = passiveBtn10Ref.current;
        const passiveBtn11 = passiveBtn11Ref.current;
        const passiveBtn12 = passiveBtn12Ref.current;
        const passiveBtn13 = passiveBtn13Ref.current;
        const passiveBtn14 = passiveBtn14Ref.current;
        const passiveBtn15 = passiveBtn15Ref.current;
        const passiveBtn16 = passiveBtn16Ref.current;
        const passiveBtn17 = passiveBtn17Ref.current;

        gsap.fromTo(passiveTitle, {
            opacity: 0,
            y: 300
        }, {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 90%'
            }
        });
        gsap.fromTo(passiveBtn0, {
            opacity: 0,
            y: 300,
            x: 300
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn1, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            delay: 0.25,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn2, {
            opacity: 0,
            y: 300,
        }, {
            opacity: 1,
            y: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn3, {
            opacity: 0,
            y: 300,
            x: -300
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 0.75,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn4, {
            opacity: 0,
            x: -300
        }, {
            opacity: 1,
            x: 0,
            delay: 1,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn5, {
            opacity: 0,
            y: 300,
            x: 300
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1.25,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn6, {
            opacity: 0,
            scale: 0.5,
        }, {
            opacity: 1,
            scale: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn7, {
            opacity: 0,
            scale: 1.1
        }, {
            opacity: 1,
            scale: 1,
            delay: 1.75,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn8, {
            opacity: 0,
            y: -300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 2,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn9, {
            opacity: 0,
            y: 300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 0.25,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn10, {
            opacity: 0,
            x: -300,
        }, {
            opacity: 1,
            x: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn11, {
            opacity: 0,
            y: -300,
        }, {
            opacity: 1,
            y: 0,
            delay: 0.75,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn12, {
            opacity: 0,
            y: 300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn13, {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            delay: 1.25,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn14, {
            opacity: 0,
            y: -300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1.5,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn15, {
            opacity: 0,
            y: -300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1.75,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn16, {
            opacity: 0,
            y: -300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 2,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
        gsap.fromTo(passiveBtn17, {
            opacity: 0,
            y: 300,
            x: -300,
        }, {
            opacity: 1,
            y: 0,
            x: 0,
            delay: 1,
            scrollTrigger: {
                trigger: passiveSkills,
                start: 'top 80%'
            }
        });
    }, []);
    return (
        <div
            className='w-full lg:w-2/5 min-h-full px-3 cursor-default'
            ref={passiveSkillsRef}
        >
            <h5
                className='text-center pb-4 opacity-0'
                ref={passiveTitleRef}
            >
                Habilidades Passivas
            </h5>
            <div className='w-full flex flex-wrap justify-center items-start gap-3'>
                <div
                    className={`${(isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn0Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isHeavenlyStrength ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Força do Paraíso'}
                        onClick={toggleHeavenlyStrength}
                    >
                        <span>{isHeavenlyStrength ? 'Voltar para Passivas' : 'Força do Paraíso'}</span>
                    </button>
                    <div className={`${isHeavenlyStrength ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_heavenlystrength.png'}
                                alt='Habilidade Passiva Força do Paraíso'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>10</strong></p>
                            <p>Você pode empunhar uma <span className='text-green-500'>arma de duas mãos</span> com a mão principal enquanto empunha um escudo na mão secundária.</p>
                            <p>O dano causado por você é reduzido em <span className='text-green-500'>20%</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn1Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isFervor ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Fervor'}
                        onClick={toggleFervor}
                    >
                        <span>{isFervor ? 'Voltar para Passivas' : 'Fervor'}</span>
                    </button>
                    <div className={`${isFervor ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_fervor.png'}
                                alt='Habilidade Passiva Fervor'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>10</strong></p>
                            <p>
                                Ao empunhar uma <span className='text-green-500'>arma de uma mão</span>, sua velocidade de ataque aumenta em
                                <span className='text-green-500'> 15%</span> e todas as recargas são reduzidas em <span className='text-green-500'>15%</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn2Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isVigilant ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Vigilante'}
                        onClick={toggleVigilant}
                    >
                        <span>{isVigilant ? 'Voltar para Passivas' : 'Vigilante'}</span>
                    </button>
                    <div className={`${isVigilant ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_vigilant.png'}
                                alt='Habilidade Passiva Vigilante'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>13</strong></p>
                            <p>Aumenta a regeneração total de Vida em <span className='text-green-500'>2682</span>.</p>
                            <p>Reduz todo o dano não Físico recebido em <span className='text-green-500'>20%</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn3Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isRighteousness ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Retidão'}
                        onClick={toggleRighteousness}
                    >
                        <span>{isRighteousness ? 'Voltar para Passivas' : 'Retidão'}</span>
                    </button>
                    <div className={`${isRighteousness ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_righteousness.png'}
                                alt='Habilidade Passiva Retidão'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>16</strong></p>
                            <p>Suas habilidades primárias geram <span className='text-green-500'>3</span> de Ira adicional.</p>
                            <p>Aumenta sua Ira máxima em <span className='text-green-500'>30</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn4Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isInsurmountable ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Intransponível'}
                        onClick={toggleInsurmountable}
                    >
                        <span>{isInsurmountable ? 'Voltar para Passivas' : 'Intransponível'}</span>
                    </button>
                    <div className={`${isInsurmountable ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_insurmountable.png'}
                                alt='Habilidade Passiva Intransponível'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>20</strong></p>
                            <p>Bloquear um ataque gera <span className='text-green-500'>6</span> de Ira.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn5Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isFanaticism ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Fanatismp'}
                        onClick={toggleFanaticism}
                    >
                        <span>{isFanaticism ? 'Voltar para Passivas' : 'Fanatismo'}</span>
                    </button>
                    <div className={`${isFanaticism ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_nephalemmajesty.png'}
                                alt='Habilidade Passiva Fanatismo'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>20</strong></p>
                            <p>
                                Aumenta a velocidade de ataque de Punição, Talho, Castigar e Justiça em <span className='text-green-500'>15%</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn6Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isIndestructible ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Indestrutível'}
                        onClick={toggleIndestructible}
                    >
                        <span>{isIndestructible ? 'Voltar para Passivas' : 'Indestrutível'}</span>
                    </button>
                    <div className={`${isIndestructible ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_indestructible.png'}
                                alt='Habilidade Passiva Insdestrutível'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>25</strong></p>
                            <p>
                                Ao receber dano fatal, em vez disso você torna-se imune ao dano,
                                ganha <span className='text-green-500'>35%</span> de dano aumentado e <span className='text-green-500'>107.284 </span>
                                de Vida por abate por <span className='text-green-500'>5</span> segundos.
                            </p>
                            <p>Este efeito pode ocorrer uma vez a cada <span className='text-green-500'>60</span> segundos.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn7Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isHolyCause ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Causa Sagrada'}
                        onClick={toggleHolyCause}
                    >
                        <span>{isHolyCause ? 'Voltar para Passivas' : 'Causa Sagrada'}</span>
                    </button>
                    <div className={`${isHolyCause ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_holycause.png'}
                                alt='Habilidade Passiva Causa Sagrada'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>27</strong></p>
                            <p>Aumenta em <span className='text-green-500'>10%</span> o dano que sua arma causa.</p>
                            <p>
                                Sempre que causar dano Sagrado, você receberá uma cura de até <span className='text-green-500'>1%</span> do seu total de Vida.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn8Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isWrathful ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Irado'}
                        onClick={toggleWrathful}
                    >
                        <span>{isWrathful ? 'Voltar para Passivas' : 'Irado'}</span>
                    </button>
                    <div className={`${isWrathful ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_wrathful.png'}
                                alt='Habilidade Passiva Irado'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>30</strong></p>
                            <p>Cada ponto de Ira gasto cura <span className='text-green-500'>1341</span> da sua Vida.</p>
                            <p>
                                A quantidade de cura aumenta em <span className='text-green-500'>1%</span> do seu Bônus de cura do globo de Vida.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn9Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isDivineFortress ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Fortaleza Divina'}
                        onClick={toggleDivineFortress}
                    >
                        <span>{isDivineFortress ? 'Voltar para Passivas' : 'Fortaleza Divina'}</span>
                    </button>
                    <div className={`${isDivineFortress ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_divinefortress.png'}
                                alt='Habilidade Passiva Fortaleza Divina'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>30</strong></p>
                            <p>
                                Sua armadura é aumentada por uma porcentagem igual à Chance de bloqueio do seu escudo.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn10Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isLordCommander ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Lorde Comandante'}
                        onClick={toggleLordCommander}
                    >
                        <span>{isLordCommander ? 'Voltar para Passivas' : 'Lorde Comandante'}</span>
                    </button>
                    <div className={`${isLordCommander ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_lordcommander.png'}
                                alt='Habilidade Passiva Lorde Comandante'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>35</strong></p>
                            <p>
                                A recarga da Investida com Corcel é reduzida em <span className='text-green-500'>25%</span> e a do Bombardeio, em <span className='text-green-500'>35%</span>.
                            </p>
                            <p>O dano causado por Falange aumenta em <span className='text-green-500'>20%</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn11Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isHoldYourGround ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Manter Posição'}
                        onClick={toggleHoldYourGround}
                    >
                        <span>{isHoldYourGround ? 'Voltar para Passivas' : 'Manter Posição'}</span>
                    </button>
                    <div className={`${isHoldYourGround ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_holdyourground.png'}
                                alt='Habilidade Passiva Manter Posição'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>40</strong></p>
                            <p>
                                Você não pode mais se Esquivar, mas sua Chance de Bloqueio aumenta em <span className='text-green-500'>30%</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isIronMaiden || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn12Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isLongArmoftheLaw ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva O Longo Braço da Lei'}
                        onClick={toggleLongArmoftheLaw}
                    >
                        <span>{isLongArmoftheLaw ? 'Voltar para Passivas' : 'O Longo Braço da Lei'}</span>
                    </button>
                    <div className={`${isLongArmoftheLaw ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_longarmofthelaw.png'}
                                alt='Habilidade Passiva O Longo Braço da Lei'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>45</strong></p>
                            <p>
                                Aumenta a duração do efeito ativo de todas as Leis em <span className='text-green-500'>5</span> segundos.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isRenewal || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn13Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isIronMaiden ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Dama de Ferro'}
                        onClick={toggleIronMaiden}
                    >
                        <span>{isIronMaiden ? 'Voltar para Passivas' : 'Dama de Ferro'}</span>
                    </button>
                    <div className={`${isIronMaiden ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_ironmaiden.png'}
                                alt='Habilidade Passiva Dama de Ferro'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>50</strong></p>
                            <p>Seus Espinhos aumentam em <span className='text-green-500'>50%</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isFinery || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn14Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isRenewal ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Renovação'}
                        onClick={toggleRenewal}
                    >
                        <span>{isRenewal ? 'Voltar para Passivas' : 'Renovação'}</span>
                    </button>
                    <div className={`${isRenewal ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_renewal.png'}
                                alt='Habilidade Passiva Renovação'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>55</strong></p>
                            <p>Sempre que bloqueia, você recebe <span className='text-green-500'>16.093</span> de Vida.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isBlunt || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn15Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isFinery ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Veste de Gala'}
                        onClick={toggleFinery}
                    >
                        <span>{isFinery ? 'Voltar para Passivas' : 'Veste de Gala'}</span>
                    </button>
                    <div className={`${isFinery ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_finery.png'}
                                alt='Habilidade Passiva Veste de Gala'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>60</strong></p>
                            <p>
                                Você recebe <span className='text-green-500'>1,5%</span> de Força para cada gema engastada no seu equipamento.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isToweringShield) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn16Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isBlunt ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Bruto'}
                        onClick={toggleBlunt}
                    >
                        <span>{isBlunt ? 'Voltar para Passivas' : 'Bruto'}</span>
                    </button>
                    <div className={`${isBlunt ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_blunt.png'}
                                alt='Habilidade Passiva Bruto'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>65</strong></p>
                            <p>Aumenta o dano de Justiça e Martelo Abençoado em <span className='text-green-500'>20%</span>.</p>
                        </div>
                    </div>
                </div>
                <div
                    className={`${(isHeavenlyStrength || isFervor || isVigilant || isRighteousness || isInsurmountable || isFanaticism || isIndestructible || isHolyCause || isWrathful || isDivineFortress || isLordCommander || isHoldYourGround || isLongArmoftheLaw || isIronMaiden || isRenewal || isFinery || isBlunt) ? 'hidden' : 'block'} opacity-0`}
                    ref={passiveBtn17Ref}
                >
                    <button
                        className='button'
                        type='button'
                        title={isToweringShield ? 'Voltar para Passivas' : 'Exibir detalhes da Passiva Escudo Altaneiro'}
                        onClick={toggleToweringShield}
                    >
                        <span>{isToweringShield ? 'Voltar para Passivas' : 'Escudo Altaneiro'}</span>
                    </button>
                    <div className={`${isToweringShield ? 'flex' : 'hidden'} flex-col items-center gap-5 mt-8`}>
                        <div className='w-[81px] h-[81px] flex justify-center items-center bg-[url("/assets/trait-64.png")] bg-right-top hover:bg-right-bottom'>
                            <Image
                                src={'/assets/skillsp/x1_crusader_passive_toweringshield.png'}
                                alt='Habilidade Passiva Escudo Altaneiro'
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className='flex flex-col font-mono text-center'>
                            <p className='italic'>Requer Nível <strong>70</strong></p>
                            <p>
                                Aumenta o dano de Punição, Esmagamento com Escudo e Escudo Abençoado em <span className='text-green-500'>20%</span>.
                            </p>
                            <p>Reduz a recarga de Escudo Reluzente em <span className='text-green-500'>30%</span>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}