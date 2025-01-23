import ActiveSkillsComponent from '@/components/active';
import PassiveSkillsComponent from '@/components/passive';

export default function SkillsComponent() {
    return (
        <section
            className='w-full min-h-screen flex flex-col justify-around lg:flex-row lg:justify-normal lg:gap-0 pt-24'
            id='skills'
        >
            <ActiveSkillsComponent />
            <PassiveSkillsComponent />
        </section>
    );
}