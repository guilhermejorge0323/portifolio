import { CardStack } from './CardStack';
import { backEndSkills, frontEndSkills } from '../Skills';

type GridStacksProps = {
  type: 'front' | 'back';
};

export function GridStacks({ type }: GridStacksProps) {
  const isFront = type === 'front';
  const skills = isFront ? frontEndSkills : backEndSkills;

  return (
    <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
      {skills.map(skill => (
        <CardStack
          icon={skill.icon}
          title={skill.title}
          topics={skill.topics}
          key={skill.title}
        />
      ))}
    </div>
  );
}
