import Image from 'next/image';
import Icon from '@/components/Icons';
import Link from 'next/link';

const anoatual = new Date().getFullYear();

export default function FooterComponent() {
    return (
        <footer className='flex flex-col md:flex-row justify-around gap-5 md:gap-0 py-4 cursor-default'>
            <div className='flex flex-col items-center'>
                <p>Desenvolvidor por:</p>
                <Image
                    src='/LOGO_BFN_INTER.png'
                    alt='Logo BetoFoxNet_Info'
                    width={90}
                    height={90}
                />
                <p>Desde &copy; 2015 - {anoatual}</p>
            </div>
            <div className='flex flex-col items-center justify-between'>
                <p>Site Oficial:</p>
                <Link
                    href='https://eu.diablo3.blizzard.com/pt-br/class/crusader/'
                    target='_blank'
                >
                    <Image
                        className='w-40 h-auto hover:scale-110 duration-300'
                        src={'/assets/logo.avif'}
                        alt='Logo Diablo 3'
                        width={300}
                        height={150}
                    />
                </Link>
            </div>
            <div className='flex items-center gap-2 justify-center'>
                <Link
                    href='https://www.instagram.com/betofoxnet_info/'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-pink-600 duration-300'
                        icon='fa-brands fa-instagram'
                    />
                </Link>
                <Link
                    href='https://www.facebook.com/BetofoxnetInfo'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-blue-600 duration-300'
                        icon='fa-brands fa-facebook-f'
                    />
                </Link>
                <Link
                    href='https://www.linkedin.com/company/betofoxnetinfo/'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-blue-600 duration-300'
                        icon='fa-brands fa-linkedin-in'
                    />
                </Link>
                <Link
                    href='https://twitter.com/betofoxnet_info'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-blue-800 duration-300'
                        icon='fa-brands fa-twitter'
                    />
                </Link>
                <Link
                    href='https://api.whatsapp.com/send/?phone=5581988075408&text&type=phone_number&app_absent=0'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-green-500 duration-300'
                        icon='fa-brands fa-whatsapp'
                    />
                </Link>
                <Link
                    className='block md:hidden'
                    href='https://www.sejda.com/call/%2B5581988075408'
                    target='_blank'
                >
                    <Icon
                        className='w-7 h-7 text-white hover:text-blue-500 duration-300'
                        icon='fa-solid fa-phone'
                    />
                </Link>
            </div>
        </footer>
    );
}