import ActiveSkillsComponent from '@/components/active';
import PassiveSkillsComponent from '@/components/passive';

export default function SkillsComponent() {
    return (
        <section
            className='w-full min-h-screen flex pt-24'
            id='skills'
        >
            <ActiveSkillsComponent />
            <PassiveSkillsComponent />
        </section>
    );
}